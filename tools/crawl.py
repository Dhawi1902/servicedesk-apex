#!/usr/bin/env python3
"""Crawl the Oracle APEX 26.1 PL/SQL API Reference by following the
rel=next chain from the book's first page. Saves every page's raw HTML
into raw_html/ and writes manifest.json recording page order + chapter info.

Resumable: already-downloaded files are reused from disk.
"""
import json
import os
import re
import sys
import time
import urllib.request
import urllib.error

BASE = "https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/"
START = "index.html"
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, "raw_html")
MANIFEST = os.path.join(ROOT, "manifest.json")
LOG = os.path.join(ROOT, "crawl.log")
MAX_PAGES = 8000
DELAY = 0.15  # politeness between network fetches

os.makedirs(RAW, exist_ok=True)

def log(msg):
    line = f"[{time.strftime('%H:%M:%S')}] {msg}"
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
            log(f"  retry {i+1}/{tries} for {url}: {e}")
            time.sleep(1.5 * (i + 1))
    raise RuntimeError(f"failed to fetch {url}")

def get_page(name):
    """Return HTML for a page, from disk if present else download."""
    path = os.path.join(RAW, name)
    if os.path.exists(path) and os.path.getsize(path) > 0:
        return open(path, encoding="utf-8").read()
    html = fetch(BASE + name)
    with open(path, "w", encoding="utf-8") as f:
        f.write(html)
    time.sleep(DELAY)
    return html

NEXT_RE = re.compile(r'<link\s+rel="next"\s+href="([^"]+)"', re.I)
TITLE_RE = re.compile(r"<title>(.*?)</title>", re.S | re.I)
# chapter heading: <h2 ...><span class="enumeration_chapter">2 </span>APEX_ACL
CHAP_RE = re.compile(r'<span class="enumeration_(chapter|appendix)">\s*([A-Za-z0-9]+)\s*</span>\s*(.*?)</h\d', re.S)

def parse(name, html):
    nxt = NEXT_RE.search(html)
    nxt = nxt.group(1).split("#")[0] if nxt else None
    title = TITLE_RE.search(html)
    title = re.sub(r"\s+", " ", title.group(1)).strip() if title else name
    chap = CHAP_RE.search(html)
    is_chapter = bool(chap)
    chapter_num = chap.group(2) if chap else None
    return {"file": name, "title": title, "next": nxt,
            "is_chapter": is_chapter, "chapter_num": chapter_num}

def main():
    manifest = []
    seen = set()
    cur = START
    count = 0
    while cur and cur not in seen and count < MAX_PAGES:
        seen.add(cur)
        try:
            html = get_page(cur)
        except RuntimeError as e:
            log(f"ERROR: {e}; stopping")
            break
        info = parse(cur, html)
        manifest.append(info)
        count += 1
        if count % 50 == 0:
            log(f"  ...{count} pages (current: {cur})")
            with open(MANIFEST, "w", encoding="utf-8") as f:
                json.dump(manifest, f, indent=2)
        cur = info["next"]
    with open(MANIFEST, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2)
    chapters = sum(1 for m in manifest if m["is_chapter"])
    log(f"DONE: {count} pages total, {chapters} chapters. Manifest written.")

if __name__ == "__main__":
    main()
