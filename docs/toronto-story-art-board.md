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


## Detailed canon scene list — decisions and scripted actions
**Key:** SCRIPT = current `STORY_SCENES` visual/action; STORYBOARD = agreed expanded gag from prior planning that is not necessarily in script; CAMEO = separately approved artwork with placement not yet implemented. Exact Game dialogue remains authoritative in `index.html`.

| Scene | Toronto location | SCRIPT: what happens | STORYBOARD / references | Art in game? |
|---|---|---|---|---|
| intro / Experiment 1 | Pink Laboratories | Trung greets intern, realizes Scott's anniversary, leaves and continues calls remotely | Scott's “NO EXPERIMENTS AFTER 6 PM” note, pink Glob on coat | No, default portrait |
| 2 | St. Lawrence Market | Trung gets anniversary cake for Scott | Romantic cake box; market architecture; maple-butter touch | Yes |
| 3 | St. Lawrence Market | Raccoon gets into the shopping bags | Recurring Toronto raccoon; ongoing goose motif begins later | Yes |
| 4 | Front Street | Tourist group-photo mishap | `Degrassi` shirt, protect cake, avoid rude departure; Prism Queen call here | Candidate generated, no |
| 5 | King Street | Construction barriers redirect Trung | TTC red streetcar, `TEMPORARY SINCE 1998`, first recurring goose | Candidate generated, no |
| 6 | Distillery District | Burgandy anniversary outfit, roses, concert tickets | Romantic wardrobe transformation, Rose Apothecary nod floated; continuity of gifts | Yes (roses); alternate candidate exists |
| 7 | Distillery District | Street performer repeatedly waves at Trung | Repeated interruption to call with Scott, `SORRY, CASH ONLY` tip jar | No |
| 8 | Toronto streets (Church-Wellesley in storyboard) | Two strangers help gather or carry shopping bags | Shane Hollander / Ilya Rozanov from *Heated Rivalry*, subtle kind couple encounter; fictional cameo | No |
| 9 | Church-Wellesley Village | Festival crowd sweeps Trung into dance | Brooke Lynn Hytes cameo, Pride streetscape; Spore Serpent call | Yes |
| 10 | Church Street | Traditional red-serge Mountie, horse Gordon eats pink roses | Goose background and Gordon Lightfoot name joke, **RCMP** not U.S. uniform | Yes |
| 11 | Toronto Eaton Centre | Escalator wrong direction as Trung searches for exit | Former electronics retailer `Future Shoppe` parody | No |
| 12 | Toronto Eaton Centre | Trung is dressed up for a party as crowd applauds | Planned cobalt emergency makeover, MuchMusic Awards rack; older plans placed Moira/David here but later art moved to Kensington | No |
| 13 | Dundas Street | A stranger shares a pink umbrella | Planned sudden rain / umbrella turns inside out, fictional `Degrassi: The Next Experiment` billboard | No |
| 14 | Downtown Toronto dessert shop | Trung holds an absurdly enormous dessert for Scott | Planned sundae collapse, `Double Double Disaster` menu | No |
| 15 | Nathan Phillips Square | Fictional basketball crowd blocks route | Fans lift Trung in celebration; We the North-coded jersey with tiny Glob patch; Abyss Moth boss call | No |
| 16 | Kensington Market | Confident stranger leads Trung down colorful alley, “shortcut” | Vintage science stall, duct-tape / Red Green reference; **new approved Moira/David grilled-cheese and Quebec Brie illustration** is a separate cameo beat still needing event integration | No |
| 17 | Kensington Market | Skateboarder catches Trung's falling gift | Small AVRIL sticker | No |
| 18 | King Street West | Trung listens to street musician | Planned accidental singing/audition, subtle Rush `2112` reference | No |
| 19 | Union Station | Helpful commuter points toward correct exit | Wrong-exit confusion; Schitt's Creek luggage tag was only brainstormed, not proven in live artwork | Yes |
| 20 | Near Union Station | CN Tower near, but road closed | `SORRY FOR THE INCONVENIENCE. AGAIN`; recurring goose, action-hero-style detour | No |
| 21 | Outside Rogers Centre | Trung in glittery scarf meets fictional concert crowd | Last surviving rose, fictional Northern Lights band, Omega Bloom final boss call | No |
| victory | Anniversary dinner with Scott | Final reunion/romance after 21 experiments | Scott in pink shirt, dark vest, ukulele, pink Glob charm, quiet kiss; Great Scott/Shatner before reunion | **Partial only** |

### Additional approved illustration — location to reconcile
- **Scotiabank Arena / Maple Leaf Square (Jurassic Park):** user-approved Toronto Raptors/Drake/*Breaker High* illustration; delighted Trung with poutine and foam finger, Drake in vintage *Breaker High* shirt. This is **not at Nathan Phillips Square** and is not yet a defined scene ID. Add a separate city encounter or adjust narration explicitly, without corrupting level15 geography.
- **Kensington Market Moira/David scene:** user-approved cheerful grilled cheese + Quebec Brie artwork; not yet an event ID or mapped. Do not replace level16's shortcut without planning a two-beat presentation or revising script.

### Separate scripted calls, also missing unique artwork
- Boss calls: `boss4` Front Street/Prism Queen; `boss9` Church Street/Spore Serpent; `boss15` Nathan Phillips Square/Abyss Moth; `boss21` Rogers Centre/Omega Bloom.
- Shop upgrades: `nutrition` quick drink buy; `regen` strangers helping with dropped bag; `zap` construction machine; `star` street performer glitter; `mitosis` matching strangers; `revive` rescued falling box; `antidote` shop window of bottles. Each uses existing Toronto background ideas, not a newly invented neighborhood.

### Current inconsistencies to resolve before producing art
- Original boards placed Moira/David at Front Street #4, Eaton Centre #12, or Kensington #16. **Most recent user-approved art is Kensington**.
- Nathan Phillips Square #15 and Jurassic Park/Maple Leaf Square are two distinct real locations.
- #8 script only says “Toronto streets”; Church-Wellesley is the storyboard's intended specificity, not yet in code.
- #13 script mentions a blue-sky umbrella offer; sudden rain / inversion is storyboard, not yet script.
- #14 script says Trung carries huge dessert; collapse remains storyboard.
- #18 script says he stops to listen; an accidental audition is storyboard, not yet script.
- Both approved new images need original clean files, proper asset transfer, trigger/dialogue wiring, mobile visual QA, and deployment verification.
