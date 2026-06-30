#!/usr/bin/env python3
"""Concurrent crawler for the Oracle APEX 26.1 PL/SQL API Reference.

Discovers every page by BFS over same-directory .html links (child links +
rel=next/prev), downloading with a thread pool. Reuses any HTML already on
disk. Afterwards reconstructs the linear reading order by following the
stored rel=next pointers from index.html, and writes manifest.json.
"""
import concurrent.futures as cf
import json
import os
import re
import threading
import time
import urllib.request
import urllib.error

BASE = "https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/"
START = "index.html"
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, "_backup", "raw_html")
MANIFEST = os.path.join(ROOT, "_backup", "manifest.json")
LOG = os.path.join(ROOT, "_backup", "crawl.log")
WORKERS = 12

os.makedirs(RAW, exist_ok=True)
_loglock = threading.Lock()

def log(msg):
    line = f"[{time.strftime('%H:%M:%S')}] {msg}"
    with _loglock:
        print(line, flush=True)
        with open(LOG, "a", encoding="utf-8") as f:
            f.write(line + "\n")

def fetch(url, tries=4):
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (docs-archiver)"})
            with urllib.request.urlopen(req, timeout=30) as r:
                return r.read().decode("utf-8", "replace")
        except (urllib.error.URLError, urllib.error.HTTPError, TimeoutError) as e:
            time.sleep(1.0 * (i + 1))
            last = e
    raise RuntimeError(f"failed {url}: {last}")

def load_or_fetch(name):
    path = os.path.join(RAW, name)
    if os.path.exists(path) and os.path.getsize(path) > 0:
        return open(path, encoding="utf-8").read(), False
    html = fetch(BASE + name)
    with open(path, "w", encoding="utf-8") as f:
        f.write(html)
    return html, True

# same-directory .html links only (no slash, no scheme)
HREF_RE = re.compile(r'(?:href|content)="([^":/#?]+\.html)(?:#[^"]*)?"', re.I)
NEXT_RE = re.compile(r'<link\s+rel="next"\s+href="([^"#]+)', re.I)
TITLE_RE = re.compile(r"<title>(.*?)</title>", re.S | re.I)
CHAP_RE = re.compile(r'<span class="enumeration_(chapter|appendix)">\s*([A-Za-z0-9]+)\s*</span>\s*(.*?)</h\d', re.S)

def parse(name, html):
    nxt = NEXT_RE.search(html)
    nxt = nxt.group(1) if nxt else None
    title = TITLE_RE.search(html)
    title = re.sub(r"\s+", " ", title.group(1)).strip() if title else name
    chap = CHAP_RE.search(html)
    links = set(HREF_RE.findall(html))
    return {"file": name, "title": title, "next": nxt,
            "is_chapter": bool(chap),
            "chapter_num": chap.group(2) if chap else None,
            "links": links}

def main():
    open(LOG, "w").close()
    info = {}            # name -> parsed (without links)
    links_of = {}        # name -> set of discovered links
    seen = set([START])
    frontier = [START]
    downloaded = 0
    t0 = time.time()

    with cf.ThreadPoolExecutor(max_workers=WORKERS) as ex:
        while frontier:
            futs = {ex.submit(load_or_fetch, n): n for n in frontier}
            frontier = []
            for fut in cf.as_completed(futs):
                name = futs[fut]
                try:
                    html, fetched = fut.result()
                except RuntimeError as e:
                    log(f"ERROR {name}: {e}")
                    continue
                downloaded += 1
                p = parse(name, html)
                links_of[name] = p.pop("links")
                info[name] = p
                for ln in links_of[name]:
                    if ln not in seen:
                        seen.add(ln)
                        frontier.append(ln)
            log(f"  pages parsed: {len(info)}; queued next wave: {len(frontier)}")

    log(f"Crawl complete: {len(info)} pages in {time.time()-t0:.0f}s. Reconstructing order...")

    # reconstruct linear order via rel=next from START
    ordered = []
    cur = START
    walked = set()
    while cur and cur in info and cur not in walked:
        walked.add(cur)
        m = info[cur]
        ordered.append({k: m[k] for k in ("file", "title", "next", "is_chapter", "chapter_num")})
        cur = m["next"]

    # append any pages not reached by the chain (safety), in title order
    missed = [n for n in info if n not in walked]
    for n in sorted(missed):
        m = info[n]
        ordered.append({k: m[k] for k in ("file", "title", "next", "is_chapter", "chapter_num")})
    if missed:
        log(f"NOTE: {len(missed)} pages not on rel=next chain, appended at end.")

    with open(MANIFEST, "w", encoding="utf-8") as f:
        json.dump(ordered, f, indent=2)
    chapters = sum(1 for m in ordered if m["is_chapter"])
    log(f"DONE: {len(ordered)} pages ordered, {chapters} chapters. Manifest written.")

if __name__ == "__main__":
    main()
