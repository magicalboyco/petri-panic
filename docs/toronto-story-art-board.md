# Petri Panic — audited Toronto story-art board
Audit date: 2026-11-16. Checked GitHub `main` tree, `index.html` scene mappings, and existing story-art ledgers. **Mapped in source** is verifiable; successful current GitHub Pages deployment was not independently tested in this audit.

## Art direction locked by user
Highly detailed saturated cel-shaded anime, lively expressive and welcoming character interactions, accurately depicted Toronto neighborhoods, rich setting-specific storytelling, stable Trung model (silver-lilac hair, glasses, goatee, magenta blazer/scarf and leather satchel), accurate hands and legible props. Trung is exploring and celebrating Toronto rather than being persistently scared. Preserve a clean original without editorial markup.

## Verified repository files and runtime mapping
| Event | Scene | Exact asset | Main branch mapping |
|---|---|---|---|
| level2 | St. Lawrence Market / Scott anniversary cake | `assets/story/level2-st-lawrence-cake.jpg` | YES |
| level3 | St. Lawrence Market / raccoon | `assets/story/level3-market-raccoon.jpg` | YES |
| level6 | Distillery District / roses and tickets | `assets/story/level6-distillery-roses.jpg` | YES |
| level9 | Church-Wellesley / Brooke Lynn Hytes | `assets/story/level9-church-brooke.jpg` | YES |
| level10 | Mountie + Gordon horse | `assets/story/level10-mountie-gordon.jpg` | YES |
| level19 | Union Station | `assets/story/level19-union-station.jpg` | YES |
| victory penultimate page | William Shatner “Great Scott!” | `assets/story/victory-great-scott.jpg` | YES, partial ending |

**Two saved but NOT mapped:** `assets/story/intro-trung-scott-call.jpg` and `assets/story/scott-music-office.jpg`. The normal fallback portrait is `professor-trung.svg`.

**33 total scripted event IDs** (intro, 20 numbered level events, 4 boss calls, 7 upgrade calls, victory). **27 do not yet have a complete unique illustration**: 14 numbered events + intro + 4 bosses + 7 upgrades + final reunion. The winning Shatner penultimate slide does not complete the final reunion.

## Generated conversation candidates NOT in repo / not mapped
- Level4 Front Street photo mishap; level5 King Street construction and TTC; alternate level6 makeover. Prior ledgers document these as generated, awaiting transfer and review.
- **Kensington Market cheese scene**, user-approved: cheerful Trung enjoying grilled cheese and Quebec Brie with Moira and David in their iconic `Schitt's Creek` wardrobe. This is a cameo in a fictional game, not a claim of a contemporary real-world meeting. Likely a supplemental beat for level16, but requires dialogue/event alignment because current level16 is an impossible shortcut.
- **Jurassic Park / Raptors / Drake / Breaker High**, user-approved: cheerful Trung with poutine and a foam finger, Drake wearing vintage `Breaker High` graphic, outside Scotiabank Arena. The latest user attachment includes a **purple markup circle** around Trung's poutine/bag region; upload only the unmarked original after hand/bag QA. Candidate scene placement is level15 (Nathan Phillips Square basketball celebration), but geography differs: **do not silently rename level15 or transplant Maple Leaf Square into Nathan Phillips Square**. Confirm whether to add a new beat or adjust script/progression.

These generated images are conversation assets, not verified GitHub game assets. Their original bytes still need transfer and runtime wiring.

## Missing numbered event shots (do not duplicate mapped scenes)
- 4 Front Street tourist photograph — candidate drawn
- 5 King Street roadworks / TTC — candidate drawn
- 7 Distillery busker interruption — new
- 8 Church-Wellesley helping strangers / Shane and Ilya cameo — new
- 11 Eaton Centre wrong-way escalator — new
- 12 Eaton Centre wardrobe makeover — new (earlier ledgers **conflict** on where to assign Moira/David; use latest user-approved Kensington cheese artwork as its own new story beat, and retain makeover event)
- 13 Dundas umbrella — new
- 14 giant dessert — new
- 15 Nathan Phillips Square basketball celebration — new; distinguish from proposed Scotiabank Arena Drake image
- 16 Kensington vintage-science shortcut — new; optional extra cheese cameo
- 17 Kensington skateboard gift rescue — new
- 18 King Street West musician — new
- 20 another roadblock — new
- 21 Rogers Centre concert crowd — new
- Intro, 4 boss reaction scenes, 7 upgrade video calls, and full Scott/Trung final reunion remain.

## Next production order
1. **Ingest and QA existing approved Kensington and Raptors PNG originals first.** Keep marked-up reviewer copy out of assets. Align each to exact story trigger and geography.
2. Recover and inspect the already-generated #4/#5/#6 variants; do not redraw absent specific QA failure.
3. Create artwork for the **existing script's missing scenes** starting with #7 and #8, then #11/#12; no new St. Lawrence Market or Distillery generic postcard just to fill a quota.
4. Only after the scripted backlog is mapped, consider new locations such as Toronto Islands ferry or Queen Street West with explicit additional narrative beats.
5. For each image: record **generated → reviewed → approved → transferred to repo → mapped in story → tests run → deployment verified**. Never collapse these into one status.

## QA checklist
- Character continuity and correct wardrobe, props and expressions
- Local setting authentic (Kensington ≠ Church-Wellesley; Maple Leaf Square ≠ Nathan Phillips Square)
- Anatomy, accurate readable signage, proper Canadian references, only clean source
- Mobile portrait-fit and desktop layout; no UI obstruction
- Public-figure / TV character artwork and brand/official marks reviewed for publication considerations
- Asset exists in repository, runtime mapping verified, tests and deployed Pages confirmation documented

## Other canonical ledgers
`ART-STORY-LEDGER.md`, `STORY_ART_LEDGER.md`, `STORY_ART_TRACKER.md`, `docs/toronto-story-art-inventory.md`, `docs/toronto-story-art-ledger.md`. Some disagree on cameo placement; **runtime code is authoritative for what currently plays**, latest user-approved artwork is authoritative for visual content.
