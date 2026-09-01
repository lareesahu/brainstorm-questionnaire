---
name: brainstorm-questionnaire
description: Use when the user says "brainstorm" or "let's brainstorm" about a product, website, or brand — build a project-specific interactive HTML decision page with multi-select pills, notes fields, auto-save, and export. NOT a chat Q&A. NOT a static survey.
---

# Brainstorm — Interactive HTML Decision Page Builder

## Overview

When a user wants to brainstorm a product, website, or brand, do NOT run a chat Q&A. Build a
self-contained, project-specific HTML decision page they can fill out at their own pace:
multi-select pill options, a notes field under every question, numbered sections, localStorage
auto-save, and an export/copy button.

The page is the deliverable. The user interacts with it offline (their browser, their time),
then exports their answers.

## Process (4 phases — do NOT jump ahead)

For product/website/demo work, follow this 4-phase workflow. Each phase produces its own
decision page. Wait for the user's selection before advancing.

### Phase 1 — Strategy Brainstorming
What are we building? For whom? What does success look like? Scope, audience, goals, constraints.

### Phase 2 — Brand Identity Brainstorming
Visual identity direction, name, tagline, personality, presence stance, design DNA. NOT layout
mockups — this is about WHO the thing is.

**Phase 2 Design Lab template:** Use `templates/phase2-design-lab.html` as the canonical format
for Phase 2 brand identity boards. It is a live interactive design laboratory — NOT static
selection cards.

Template structure (apply fresh colors/fonts/content each time, never reuse the template's
actual placeholder values). **Locked default design language: Apple-style** — system fonts
(SF Pro / system-ui first), near-white light mode and near-black dark mode, hairline borders
(#D2D2D7 / #424245), 12px card radii, pill CTA buttons, generous whitespace, Apple blue accent
(#0071E3 light / #2997FF dark). Keep this minimal, airy DNA for every board; swap colors/copy
for the project but never fall back to busy, dense, or decorative styling.
- **Sticky top control bar** with all adjustments
- **Live preview area** below showing hero + cards + about section with real project copy
- **Mode toggle** if dual-mode (Light/Dark, Mind/Soul, A/B) — two full palettes with separate copy
- **Color swatches:** 7 role chips per mode (BG, Surface, Text, Secondary, Accent, Border, Muted).
  Each role has a default chip + 3-5 alternative chips. Clicking any chip instantly transforms
  the entire preview page colors. Picked chip gets a ring highlight.
- **Heading font selector:** 6-7 options as clickable buttons, rendered in their actual font.
  System fonts only (no CDN, no webfonts).
- **Body font selector:** 4-5 options as clickable buttons.
- **Font weight sliders:** Range 300-700 for heading and body, with live value display.
- **Letter spacing slider:** Range -0.03em to 0.10em.
- **Card style selector:** 5-6 options (flat, shadow, leftline, glass, minimal, outline) —
  clicking changes all preview cards live.
- **All changes persist** in localStorage under a project-specific key.
- **Design palettes and fonts for the SPECIFIC project** — never reuse the template's default
  fuchsia/silver colors or demo copy. Derive fresh options from the project context.
- **Theme switcher (MANDATORY on every board):** include the top-5 theme switcher from
  `templates/themes.js` — Apple, Noir, Neon, Brutalist, Editorial. It lives in a fixed
  **corner dropdown** (🎨 button, bottom-right), not a banner row. Boards must be CSS-var
  driven (`--bg, --surf, --text, --text2, --accent, --accent-ink, --rule, --muted, --h-font,
  --b-font, --radius, --borderw, --h-ls`) so any theme re-skins the whole page instantly.
  Theme choice persists in localStorage. Apple is the default.

### Phase 3 — Interactive VI / Frontend Mockup
The brand identity applied to a real interactive mockup. Shows how the identity translates to
screen. One deliverable that proves the identity works.

### Phase 4 — Section-by-Section Mockup Options
Minimum 3 optimized, genuinely distinct design options per key section. ALL sections in a SINGLE
file — never split across multiple files. Each option is interactive/rendered at high fidelity.

## Strategic Thinking Gate (MANDATORY)

Before generating the questionnaire, build an internal decision graph.

For every potential question determine:
- Why does this decision matter?
- What future work depends on it?
- Can it eliminate downstream ambiguity?
- Is this an upstream principle or a downstream implementation detail?
- Has this already been decided elsewhere?

Only include questions that materially improve strategic clarity.

The goal of a brainstorming board is not only to collect opinions. The goal is also to discover
the smallest set of high-leverage decisions that will determine the success of all later phases.

## Pre-Build Research Gate (MANDATORY)

Before building ANY brainstorm page:
1. Read all relevant existing docs, assets, prior decisions, and brand elements
2. Process any real assets (images, data, copy) that will be embedded
3. Understand what is already LOCKED vs what is OPEN — never silently lock open decisions
4. Derive the decision categories FROM the task itself, not from a generic template
5. Form opinions — pre-mark recommendations (★) on every question

This is independent preparation. Do not ask the user to do this work for you.

## Non-Negotiable Structure Rules

**Every single question MUST have:**
1. **Multi-select options** — clickable pill/tag options (`.option` spans, toggle `.selected`
   on click). ALL options are multi-select. There is no such thing as a "single choice"
   question. No `data-type="single"` anywhere.
2. **A textbox** — a `.textarea-note` beneath every question for the user's notes. NEVER skip
   the notes field.
3. **Numbered sections** — each question gets a `.brainstorm-section` card with a numbered
   accent badge (`.num`).

## Visual Mockup Fidelity Rules

When building Phase 3 or Phase 4 mockups:
1. Every alternative must be a **real rendered effect** — actual CSS, SVG, generated images, or
   framework components. Never substitute opacity hacks, static labels, invisible effects, or
   "CSS approximations" and present them as finished work.
2. Minimum **3 genuinely distinct options** per decision. Not one option with minor color
   variations.
3. Phase 4: ALL section mockups in a **single file**. Never split across multiple files.
4. No AI-default tropes as shortcuts. Do not generate another black+gold+serif+glass-card
   template and call it designed.
5. Real assets only — no fabricated copy, no placeholder text, no invented philosophy or claims.
6. Every mockup must include a visual review surface: clickable selection + notes textbox per
   section.
7. Before delivery: visually inspect. Effects must be perceptible. Interactions must work.
   Responsive at 375/768/1024. No malformed HTML.

## Delivery

1. Save HTML to a reports/deliverables directory with `<topic>-brainstorm.html` naming.
2. Open the file locally in the user's browser so they can see it immediately.
3. Provide the local file path as the primary delivery, plus a same-network (LAN) URL as
   secondary if a local HTTP server is available.
4. Every board must have a **"Copy result" button** in the top bar that copies a readable
   summary straight to the clipboard — no modal. Use the `legacyCopy` fallback pattern.
   **Copied results are English-only** — labels like "Selected:" / "Notes:", never bilingual
   or Chinese labels.
5. If delivering over chat platforms that block raw HTML, zip it or host it.

## Anti-Patterns (NEVER DO)
- Do NOT ask clarifying questions in chat — build the page
- Do NOT treat this as a conversation — the user fills out the page offline
- Do NOT skip the research gate — read existing docs and process assets before building
- Do NOT lock open decisions or present one option as "selected" without user confirmation
- Do NOT split section mockups across multiple files — Phase 4 is ONE file
- Do NOT deliver a board that requires an internet connection — self-contained, no CDN

## Pitfall 1 — Content hidden behind JS-only state ("empty page")

Never hide page content behind JS-only state. A common failure: every section starts at
`opacity:0` until an IntersectionObserver adds `.revealed`; if the observer never fires
(certain browsers, headless, heavy extensions), the whole body renders invisible = "empty page".

**Required pattern for any scroll-reveal / visibility animation:**
1. Content is FULLY visible by default in CSS — no opacity:0 without JS opting in.
2. The script's FIRST line adds `document.documentElement.classList.add('js-anim')`.
3. Hidden state only applies under `html.js-anim .reveal{opacity:0...}`.
4. Observer reveals on scroll, AND a hard `setTimeout(..., 1500)` force-reveals every
   `.reveal` as a safety net. The page can never appear blank, even with JS broken.
5. Respect `prefers-reduced-motion`.

## Pitfall 2 — Blank page in the real browser (conservative CSS)

A page can render perfectly in headless Chromium yet render a COMPLETELY BLANK body in the
user's real browser (tab keeps its title, body height = one viewport, zero accessibility
children). Common culprits: modern CSS features the target browser chokes on.

**Required pattern for board CSS:**
1. Build on a PROVEN base — plain properties, px widths + media queries, basic grid/flex,
   standard borders/shadows/radii. Avoid clamp()/min()/aspect-ratio, 3D transforms
   (perspective/rotateY/backface), scroll-snap, filter, backdrop-filter, and keyframes where
   possible.
2. BEFORE delivery, open the board in the USER'S actual browser (not just headless) and confirm
   the body has real height / accessibility children.
3. If blank: bisect by removing the whole `<style>` block first (if that renders, the CSS is
   guilty), then halve the CSS until found.

## Pitfall 3 — Verification pollution (test state written into the real board)

Automated browser verification can attach to the user's REAL browser profile — not an isolated
headless browser. Test interactions (clicking pills, typing notes) can land in the user's
localStorage: their board opens pre-filled with test data and fake selections, and they report
it as broken. Double fault: (1) verification wrote test state into the real board, (2) the
board pre-selected your ★ recommendations, which the export renders as "selected" = presented
as the user's decisions (violates the no-locked-decisions rule).

**Required rules:**
1. NEVER click pills or type notes during automated verification of a board. Verify read-only:
   structure counts, document height, export-builder output via a fresh localStorage-free check.
2. ★ recommendations must be a visual marker on the pill ONLY — never pre-add `.selected`.
   Board always opens with zero selections.
3. If any test state was written, purge the exact localStorage key via the same browser session
   and re-check notes are empty.
4. If the user has already typed answers (unique note text you did not write), restore them —
   do not wipe user input while cleaning test data.
5. After delivery, capture the board in the user's real browser to confirm what THEY see before
   calling it done.

## Pitfall 4 — Copy button hangs on non-secure origins

`navigator.clipboard.writeText` is NOT available on plain HTTP/LAN origins because they are not
secure contexts, and on loopback it can HANG forever waiting on permission/focus. Never ship a
copy button that relies solely on the Clipboard API.

**Required pattern (use verbatim):**
1. `legacyCopy(text)` — hidden textarea + `document.execCommand('copy')` fallback.
2. Race any `navigator.clipboard` call against a 500ms `withTimeout` so the button NEVER hangs.
3. Final fallback: `window.getSelection()` select the export body + feedback "Select + Ctrl+C".
4. Use `window.isSecureContext && navigator.clipboard` as the gate before using the API.
