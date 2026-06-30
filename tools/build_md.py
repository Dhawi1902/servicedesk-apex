#!/usr/bin/env python3
"""Convert crawled Oracle APEX API Reference HTML into grouped markdown.

Groups pages by chapter (one .md per APEX package / appendix), extracts the
<article> body of each page, concatenates child pages under their package,
and converts to GitHub-flavored markdown via pandoc. Relative .html links are
rewritten to absolute Oracle doc URLs so they stay valid.
"""
import json
import os
import re
import subprocess
import sys

BASE_URL = "https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/"
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, "_backup", "raw_html")
OUT = os.path.join(ROOT, "reference", "plsql")
MANIFEST = os.path.join(ROOT, "_backup", "manifest.json")

os.makedirs(OUT, exist_ok=True)

ARTICLE_RE = re.compile(r"<article\b[^>]*>(.*?)</article>", re.S | re.I)

def article_html(name):
    path = os.path.join(RAW, name)
    if not os.path.exists(path):
        return None
    html = open(path, encoding="utf-8").read()
    m = ARTICLE_RE.search(html)
    return m.group(1) if m else html

def sanitize(title):
    title = title.strip()
    # strip trailing " - something" noise but keep package names intact
    title = re.sub(r'[\\/:*?"<>|]+', "_", title)
    title = re.sub(r"\s+", "-", title)
    return title[:80]

def pandoc(html):
    p = subprocess.run(
        ["pandoc", "-f", "html", "-t", "gfm", "--wrap=none"],
        input=html.encode("utf-8"), capture_output=True,
    )
    if p.returncode != 0:
        sys.stderr.write(p.stderr.decode("utf-8", "replace") + "\n")
    return p.stdout.decode("utf-8", "replace")

# lines that are only a raw div wrapper (pandoc passes these through)
JUNK_LINE = re.compile(r'^\s*</?div\b[^>]*>\s*$', re.I)
SPAN_TAG = re.compile(r'</?span\b[^>]*>')  # drop span tags, keep inner text
PRE_FENCE = re.compile(r'^(```)\s*pre\s*$', re.M)  # ``` pre -> ```
# relative links: ](FOO.html  or ](FOO.html#GUID-..
REL_LINK = re.compile(r'\]\((?!https?://|#)([^)]+\.html)')

def clean(md):
    out = []
    blanks = 0
    for line in md.splitlines():
        if JUNK_LINE.match(line):
            continue
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
    md = REL_LINK.sub(lambda m: "](" + BASE_URL + m.group(1), md)
    return md.strip() + "\n"

def main():
    manifest = json.load(open(MANIFEST, encoding="utf-8"))
    # group pages: new group at each is_chapter page; pre-chapter pages -> front matter
    groups = []
    cur = {"key": "00", "title": "Front Matter", "pages": []}
    for m in manifest:
        if m["is_chapter"]:
            if cur["pages"]:
                groups.append(cur)
            num = m["chapter_num"] or "00"
            # zero-pad numeric chapter numbers for ordering
            key = num.zfill(3) if num.isdigit() else "Z-" + num
            cur = {"key": key, "title": m["title"], "pages": []}
        cur["pages"].append(m)
    if cur["pages"]:
        groups.append(cur)

    index = ["# Oracle APEX 26.1 — PL/SQL API Reference (offline markdown)",
             "",
             f"Source: <{BASE_URL}index.html>",
             "",
             "Generated locally from the official HTML for offline reference.",
             "",
             "| # | Package / Section | File |",
             "|---|---|---|"]

    for g in groups:
        parts = []
        for m in g["pages"]:
            a = article_html(m["file"])
            if a:
                parts.append(a)
        if not parts:
            continue
        md = clean(pandoc("\n<hr/>\n".join(parts)))
        title = g["title"].replace(" - Oracle", "").strip()
        fname = f"{g['key']}-{sanitize(g['title'])}.md"
        header = (f"<!-- Source: {BASE_URL}{g['pages'][0]['file']} -->\n"
                  f"<!-- Oracle APEX 26.1 API Reference -->\n\n")
        with open(os.path.join(OUT, fname), "w", encoding="utf-8") as f:
            f.write(header + md)
        index.append(f"| {g['key']} | {title} | [{fname}]({fname}) |")
        print(f"wrote {fname} ({len(g['pages'])} pages, {len(md)} chars)")

    with open(os.path.join(OUT, "README.md"), "w", encoding="utf-8") as f:
        f.write("\n".join(index) + "\n")
    print(f"\nTotal groups: {len(groups)}. Index: reference/plsql/README.md")

if __name__ == "__main__":
    main()
