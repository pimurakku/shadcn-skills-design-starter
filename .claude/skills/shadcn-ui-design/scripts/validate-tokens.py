#!/usr/bin/env python3
"""
Validate that references/DESIGN.md contains all variables from a
variables-export.json file (lazyyysync format).

Usage:
  python3 scripts/validate-tokens.py <path-to-variables-export.json>

Exit 0 = all variables present. Exit 1 = missing variables found.
"""

import json
import sys
import re
from pathlib import Path

DESIGN_MD = Path(__file__).parent.parent / "references" / "DESIGN.md"


def load_json(path: str) -> dict:
    with open(path) as f:
        return json.load(f)


def load_markdown(path: Path) -> str:
    with open(path) as f:
        return f.read()


def main():
    if len(sys.argv) < 2:
        print("Usage: python3 validate-tokens.py <variables-export.json>")
        sys.exit(1)

    json_path = sys.argv[1]
    data = load_json(json_path)
    md = load_markdown(DESIGN_MD)

    variables = data.get("variables", [])
    expected_total = sum(c["variableCount"] for c in data.get("collections", []))

    print(f"Source  : {json_path}")
    print(f"Expected: {expected_total} variables ({len(variables)} in 'variables' array)")
    print(f"DESIGN  : {DESIGN_MD}")
    print()

    missing = []
    for v in variables:
        name = v["name"]
        if f"`{name}`" not in md:
            missing.append((v["collectionName"], name))

    if missing:
        print(f"FAIL — {len(missing)} variable(s) missing from DESIGN.md:")
        for col, name in missing:
            print(f"  [{col}] {name}")
        sys.exit(1)
    else:
        print(f"OK — all {len(variables)} variable names present in DESIGN.md")
        # Verify count line
        match = re.search(r"\*\*Total\*\* \| \*\*(\d+)\*\*", md)
        if match:
            doc_total = int(match.group(1))
            if doc_total == expected_total:
                print(f"OK — verification table total = {doc_total} ✓")
            else:
                print(f"WARN — verification table shows {doc_total}, expected {expected_total}")
        sys.exit(0)


if __name__ == "__main__":
    main()
