# Petri Panic — locked Toronto art sequence and continuity (2026-11-16)

This is the production order for **one portrait-quality illustration at a time**, not a license to replace already approved artwork or manufacture new events. Runtime text lives in `index.html`, with canonical scripts in `STORY_SCENES`. 2026-11-16 code commit `df64e36` added staged cameo dialogue and outfit resolution; GitHub Actions completed successfully for that commit.

## Locked cameo placements
| Scene and exact beat | Cast | Placement and art |
|---|---|---|
| `level8`, kindness scene | Shane Hollander and Ilya Rozanov | Church–Wellesley; help collect dropped anniversary purchases; no panic |
| `level9` | Brooke Lynn Hytes | Already approved, in game; leave as-is |
| `level10` | Mountie and Gordon the horse | Already approved, in game; leave as-is |
| `level15`, dialogue page 4 (0-index: 3) | Drake and Trung | Maple Leaf Square / Jurassic Park, **Scotiabank Arena**; `Breaker High` shirt, foam finger, poutine; adds beat after Nathan Phillips Square basketball celebration; user-approved clean artwork not transferred |
| `level16`, dialogue page 4 (0-index: 3) | Moira and David Rose with Trung | **Kensington Market**, distinctive cheese stall, grilled-cheese sandwich and Quebec Brie; follows the existing eccentric shortcut, preserving that plot; user-approved clean artwork not transferred |
| `victory`, penultimate page | William Shatner Great Scott! | Existing approved image in game, **not** the final Trung/Scott romantic reunion |

`level15` and `level16` require **per-dialogue-page** art lookup: the current renderer still uses `storyArt` by story event, and will need an override when the new binary files are imported. Until then retain existing image/fallback. The user's markup circle on the Drake screenshot is never part of final game art.

## Wardrobe bible (resolve existing art, not redraw blindly)
- `intro`: pink button-up under white laboratory coat, glasses, silver-lilac styled hair, short goatee, pink Glob detail. The newly generated intro candidate uses this outfit.
- `level2`–`level5`: early errand outfit. In level4/5 candidate art, blue shirt + burgundy **outer coat** + red plaid scarf + brown satchel. The coat is not the formal fitted suit that arrives at level6.
- `level6`–`level11`: polished burgundy/magenta anniversary jacket over pink shirt, matching scarf, brown satchel. Flowers and concert tickets established at level6; Gordon eats part of the flowers at level10.
- `level12`: **temporary cobalt fitting-room look only**. Trung returns to burgundy on leaving the store; the added script line states this explicitly. No long-lived outfit change.
- `level13`–`level20`: returns to magenta/burgundy outfit as in the **approved Drake and Kensington art**. Rain wrinkles it, bags become worn, roses dwindle, but Trung remains cheerful about the city.
- `level21`–`victory`: same burgundy ensemble, disheveled; glittery pink scarf / one rose at final concert; Scott in pink shirt and dark vest at reunion.

## Production queue, actual runtime event order
Status labels: **LIVE** = image exists in repository and is mapped in runtime; **REVIEW** = candidate exists but not mapped; **DRAW NEXT** = not drawn, needs standalone image. Page-specific cameo images are counted as extra beats inside their event.

| Runtime event | Place and decisive comic action | Visual production status |
|---|---|---|
| intro | Pink Laboratories: calendar reminder, Scott's NO EXPERIMENTS AFTER 6 PM note, pink Glob | NEW REVIEW candidate (Nov 16; user has not yet approved) |
| level2 | St. Lawrence Market: anniversary cake for Scott | LIVE — preserve |
| level3 | St. Lawrence Market: raccoon in shopping bag | LIVE — preserve |
| level4 | Front Street: unexpected tourist selfie with Degrassi-shirt visitor | REVIEW candidate recovered from earlier conversation, not in repository |
| boss4 | Front Street: Prism Queen video reaction, tourist photo interruption | DRAW NEXT, after main numbered shots |
| level5 | King Street: detour sign, TTC streetcar, Canada goose | REVIEW candidate recovered from earlier conversation, not in repository |
| level6 | Distillery District: magenta makeover, roses, tickets | LIVE — preserve; alternate transformation candidate exists |
| level7 | Distillery District: friendly but relentless busker interrupts Trung's phone call to Scott; funny tip jar | DRAW NEXT |
| level8 | Church–Wellesley: Shane/Ilya help with gifts | DRAW NEXT |
| level9 | Church–Wellesley: Brooke Lynn Hytes dance | LIVE — preserve |
| boss9 | Church Street: Spore Serpent call during dance | DRAW NEXT, boss batch |
| level10 | Church Street: ceremonial Mountie and Gordon horse eat roses | LIVE — preserve |
| level11 | Eaton Centre: going up wrong-way escalator | DRAW NEXT |
| level12 | Eaton Centre: cobalt trial, back to burgundy | DRAW NEXT |
| level13 | Dundas: sudden rain flips borrowed umbrella | DRAW NEXT |
| level14 | Downtown dessert shop: giant dessert precariously collapses | DRAW NEXT |
| level15 | Nathan Phillips Square basketball crowd: lifts Trung | DRAW NEXT |
| level15 page4 EXTRA | Maple Leaf Square / Scotiabank Arena: Drake wears Breaker High | USER-APPROVED PNG available in chat; **not** in repo |
| boss15 | Nathan Phillips Square: Abyss Moth call | DRAW NEXT, boss batch |
| level16 | Kensington: an eccentric shortcut into shop alley | DRAW NEXT |
| level16 page4 EXTRA | Kensington cheese vendor: Moira and David react to Trung's Quebec Brie/grilled cheese | USER-APPROVED PNG available in chat; **not** in repo |
| level17 | Kensington: friendly skateboarder catches gift | DRAW NEXT |
| level18 | King Street West: busker accidentally auditions Trung | DRAW NEXT |
| level19 | Union Station: helpful commuter directs him | LIVE — preserve |
| level20 | Near Union Station: one last road closure | DRAW NEXT |
| level21 | Rogers Centre: concert crowd / final sprint with last rose | DRAW NEXT |
| boss21 | Rogers Centre: Omega Bloom reaction | DRAW NEXT, boss batch |
| nutrition / regen / zap / star / mitosis / revive / antidote | Seven upgrade calls, each based on established Toronto street motifs | DRAW NEXT, after main sequence |
| victory | Anniversary dinner: Trung finally reaches Scott; intimate joyful resolution | DRAW NEXT, final priority |

## Asset recovery and ingestion
An artifact pack of **three clean portrait images** was assembled in the conversation container: `petri-panic-toronto-art-pack.zip` (source PNGs, optimized WebP variants and a JSON manifest). It includes the new intro review candidate and user-approved Drake/Kensington scenes. **This ZIP is not committed to GitHub.** Previously generated level4 and level5 art is viewable through the prior project image references but is not currently available to transfer as authorized raw bytes through the file service.

Direct binary uploads are currently the bottleneck: the GitHub connector accepts text or explicitly supplied base64, not a sandbox file path. Do not claim import before verified asset bytes are written to `assets/story`, image lookup changes are tested, and GitHub Pages deploy passes.

## Art approval gates
1. Generate a **single standalone vertical story illustration** — never a storyboard grid, contact sheet or overall infographic.
2. Compare Trung's face, pink/lilac hair, glasses, goatee, formal jacket, satchel and enduring props with approved Kensington image; correct every scene-specific outfit stage.
3. Inspect hands, lettering, Toronto building and neighborhood details, body language, faces, and joyful-but-chaotic tone.
4. Review (approval distinct from drawing); transfer clean PNG/WebP; wire exact dialogue page; test desktop/mobile.
5. Only then call the art **LIVE**.
