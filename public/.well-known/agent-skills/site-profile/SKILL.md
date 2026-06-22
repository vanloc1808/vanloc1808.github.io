---
name: nguyenvanloc-site-profile
description: Use the public machine-readable routes on nguyenvanloc.com to answer questions about Van-Loc Nguyen.
---

# Van-Loc Nguyen Site Profile

Use this skill when a user asks about Van-Loc Nguyen, his projects, publications, professional background, journal updates, or contact channels.

## Source Order

1. Fetch `https://www.nguyenvanloc.com/llms.txt` to discover the available machine-readable pages.
2. Fetch `https://www.nguyenvanloc.com/llms-full.txt` when a complete context snapshot is useful.
3. Fetch a focused Markdown page for narrow questions:
   - `https://www.nguyenvanloc.com/index.md`
   - `https://www.nguyenvanloc.com/background.md`
   - `https://www.nguyenvanloc.com/work.md`
   - `https://www.nguyenvanloc.com/journal.md`
   - `https://www.nguyenvanloc.com/contact.md`
4. Use `https://www.nguyenvanloc.com/openapi.json` for route descriptions and `https://www.nguyenvanloc.com/.well-known/api-catalog` for discovery metadata.

## Guidance

- Treat the Markdown routes as canonical for agent-facing summaries.
- Prefer exact project, publication, role, and date details from the fetched Markdown over memory.
- Do not invent private contact details or authentication requirements.
- For outreach, use the public contact channels listed in `contact.md`.
