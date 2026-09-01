# brainstorm-questionnaire

An agent skill for building **interactive HTML decision pages** when a user wants to
brainstorm a product, website, or brand — instead of running a chat Q&A.

Works with any agent that supports skills (Claude Code, Codex, Gemini CLI, Hermes, and
other skill-aware runtimes).

## What it does

When the user says "brainstorm" or "let's brainstorm", the agent builds a self-contained
HTML decision page with:

- **Multi-select pill options** — every question allows multiple picks
- **Notes textarea** under every question
- **Numbered section cards**
- **localStorage auto-save** — the user can leave and come back
- **Export/copy button** — dumps a readable summary of their answers
- **Live design lab** (Phase 2) — click color swatches, fonts, weights, spacing, and card
  styles to transform a real preview page instantly, with per-mode palettes

The page is the deliverable. The user fills it out at their own pace, offline, in their
own browser.

## Structure

```
brainstorm-questionnaire/
├── SKILL.md                        # The skill itself (agent instructions)
└── templates/
    └── phase2-design-lab.html      # Live interactive design lab template
```

## Install

Copy the `SKILL.md` (and `templates/`) into your agent's skills directory:

- Claude Code: `~/.claude/skills/brainstorm-questionnaire/`
- Codex / Gemini CLI / Hermes: `~/.agents/skills/` or your runtime's skills directory

The skill is self-contained — no dependencies, no CDN, no network calls.

## License

MIT — see [LICENSE](LICENSE).
