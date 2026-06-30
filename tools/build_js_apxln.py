#!/usr/bin/env python3
"""Download + convert the Oracle APEX 26.1 JavaScript API Reference (JSDoc,
multi-page) and the APEXlang API Reference (single page) into markdown.

JS:      one .md per namespace/interface/widget, listed from index.html nav.
APEXlang: one .md (the whole single-page component-model reference).
"""
import concurrent.futures as cf
import os
import re
import subprocess
import sys
import urllib.request
import urllib.error

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JS_BASE = "https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/"
APXLN_BASE = "https://docs.oracle.com/en/database/oracle/apex/26.1/apxln/"

def fetch(url, tries=4):
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (docs-archiver)"})
            with urllib.request.urlopen(req, timeout=40) as r:
                return r.read().decode("utf-8", "replace")
        except (urllib.error.URLError, urllib.error.HTTPError, TimeoutError) as e:
            import time; time.sleep(1.0 * (i + 1)); last = e
    raise RuntimeError(f"failed {url}: {last}")

def load_or_fetch(path, url):
    if os.path.exists(path) and os.path.getsize(path) > 0:
        return open(path, encoding="utf-8").read()
    html = fetch(url)
    with open(path, "w", encoding="utf-8") as f:
        f.write(html)
    return html

def pandoc(html):
    p = subprocess.run(["pandoc", "-f", "html", "-t", "gfm", "--wrap=none"],
                       input=html.encode("utf-8"), capture_output=True)
    if p.returncode != 0:
        sys.stderr.write(p.stderr.decode("utf-8", "replace") + "\n")
    return p.stdout.decode("utf-8", "replace")

JUNK_LINE = re.compile(r'^\s*</?div\b[^>]*>\s*$', re.I)
SPAN_TAG = re.compile(r'</?span\b[^>]*>')
EMPTY_A = re.compile(r'<a\b[^>]*>\s*</a>')  # empty bookmark-icon anchors
PRE_FENCE = re.compile(r'^(```)\s*(?:pre|prettyprint(?:\s+\w+)?)\s*$', re.M)

def clean(md, base_url):
    out, blanks = [], 0
    for line in md.splitlines():
        if JUNK_LINE.match(line):
            continue
        line = EMPTY_A.sub("", line)
        line = SPAN_TAG.sub("", line)
        if not line.strip():
            blanks += 1
            if blanks > 1:
                continue
        else:
            blanks = 0
        out.append(line.rstrip())
    md = "\n".join(out)
    md = PRE_FENCE.sub(r"\1", md)
    # rewrite relative .html links (markdown form) to absolute, keep #anchors
    md = re.sub(r'\]\((?!https?://|#)([^)]+\.html)', lambda m: "](" + base_url + m.group(1), md)
    return md.strip() + "\n"

def extract(html, start_re, end_re):
    s = re.search(start_re, html, re.I)
    if not s:
        return None
    rest = html[s.end():]
    e = re.search(end_re, rest, re.I)
    return rest[:e.start()] if e else rest

# ---------------- JavaScript API ----------------
def build_js():
    raw = os.path.join(ROOT, "_backup", "raw_js")
    out = os.path.join(ROOT, "reference", "javascript")
    os.makedirs(raw, exist_ok=True); os.makedirs(out, exist_ok=True)
    idx = load_or_fetch(os.path.join(raw, "index.html"), JS_BASE + "index.html")

    nav = re.search(r"<nav\b.*?</nav>", idx, re.S | re.I).group(0)
    # categories: <h3>Name</h3><ul>..</ul>  (plus the Non-namespace link)
    pages = []  # (category, label, file)
    for cat, block in re.findall(r"<h3[^>]*>(.*?)</h3>\s*<ul>(.*?)</ul>", nav, re.S | re.I):
        cat = re.sub(r"<[^>]+>", "", cat).strip()
        for href, label in re.findall(r'<a href="([^"]+\.html)">(.*?)</a>', block):
            pages.append((cat, label.strip(), href))
    # global.html (Non-namespace APIs) sits outside a <ul>
    if 'href="global.html"' in nav:
        pages.append(("Non-namespace APIs", "global", "global.html"))

    # download all concurrently
    def dl(p):
        _, _, href = p
        return load_or_fetch(os.path.join(raw, href), JS_BASE + href)
    with cf.ThreadPoolExecutor(max_workers=12) as ex:
        list(ex.map(dl, pages))

    index = ["# Oracle APEX 26.1 — JavaScript API Reference (offline markdown)", "",
             f"Source: <{JS_BASE}index.html>", "",
             "| Category | API | File |", "|---|---|---|"]
    # intro page first
    intro_html = extract(idx, r'<div id="main">', r"<footer")
    if intro_html:
        md = clean(pandoc(intro_html), JS_BASE)
        with open(os.path.join(out, "00-Introduction.md"), "w", encoding="utf-8") as f:
            f.write(f"<!-- Source: {JS_BASE}index.html -->\n\n" + md)
        index.append(f"| (intro) | Introduction | [00-Introduction.md](00-Introduction.md) |")

    n = 0
    for cat, label, href in pages:
        html = open(os.path.join(raw, href), encoding="utf-8").read()
        body = extract(html, r'<div id="main">', r"<footer")
        if not body:
            continue
        md = clean(pandoc(body), JS_BASE)
        fname = f"{href[:-5]}.md"  # apex.util.html -> apex.util.md
        with open(os.path.join(out, fname), "w", encoding="utf-8") as f:
            f.write(f"<!-- Source: {JS_BASE}{href} -->\n<!-- {cat}: {label} -->\n\n" + md)
        index.append(f"| {cat} | `{label}` | [{fname}]({fname}) |")
        n += 1
    with open(os.path.join(out, "README.md"), "w", encoding="utf-8") as f:
        f.write("\n".join(index) + "\n")
    print(f"JS: wrote {n} API files + intro -> reference/javascript/")

# ---------------- APEXlang ----------------
def build_apxln():
    raw = os.path.join(ROOT, "_backup", "raw_apxln")
    out = os.path.join(ROOT, "reference", "apexlang")
    os.makedirs(raw, exist_ok=True); os.makedirs(out, exist_ok=True)
    html = load_or_fetch(os.path.join(raw, "index.html"), APXLN_BASE + "index.html")
    body = extract(html, r"<main\b[^>]*>", r"</main>")
    if not body:
        print("APEXlang: could not locate <main>"); return
    md = clean(pandoc(body), APXLN_BASE)
    header = (f"<!-- Source: {APXLN_BASE}index.html -->\n"
              "<!-- Oracle APEX 26.1 APEXlang API Reference (single-page doc) -->\n\n")
    with open(os.path.join(out, "APEXlang-API-Reference.md"), "w", encoding="utf-8") as f:
        f.write(header + md)
    with open(os.path.join(out, "README.md"), "w", encoding="utf-8") as f:
        f.write(f"# Oracle APEX 26.1 — APEXlang API Reference\n\n"
                f"Source: <{APXLN_BASE}index.html>\n\n"
                f"Single-page component-model reference: "
                f"[APEXlang-API-Reference.md](APEXlang-API-Reference.md)\n")
    print(f"APEXlang: wrote APEXlang-API-Reference.md ({len(md)} chars) -> reference/apexlang/")

if __name__ == "__main__":
    build_js()
    build_apxln()
