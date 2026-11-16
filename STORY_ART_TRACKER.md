# Petri Panic — Toronto story artwork master tracker
Updated: 2026-11-16. Based on the playable main-branch `STORY_SCENES` (33 scripted events) plus previously discussed storyboards.
DO NOT treat a generated image as approved. Labels: LIVE = scene art connected in game; DRAWN = visual candidate exists but not connected/approved; PLANNED = not yet illustrated. All art should match approved Professor Trung anime character design and be individually reviewed.

## Main adventure — one visual per experiment

| Event | Location / principal joke | Art status | Hidden Easter egg / continuity |
|---|---|---|---|
| Intro (1) | Pink Laboratories: Trung realizes his anniversary plans and calls the new intern | PLANNED (existing `professor-trung.svg` fallback; separate intro candidate in assets, not active) | Scott's NO EXPERIMENTS AFTER 6 PM note; rogue pink Glob |
| 2 | St. Lawrence Market: anniversary cake bought | LIVE | Maple butter emergency supply; preserve cake box |
| 3 | St. Lawrence Market: raccoon bursts from groceries | LIVE | Market sign, TTC model, raccoon |
| 4 | Front Street: unwanted tourist group photo | DRAWN candidate; not in game | **Catherine O'Hara- and Dan Levy-inspired helpful tourists** from ORIGINAL storyboard; Degrassi shirt. Rework the existing tourist photo to include them, while keeping Trung recognizable |
| 5 | King Street: construction barriers send him in circles | DRAWN candidate; not in game | Recurring Canada goose begins; temporary since 1998; TTC streetcar |
| 6 | Distillery District: Trung changes into a burgundy anniversary outfit, has roses and concert tickets | LIVE (roses); additional makeover image DRAWN, not in game | Rose Apothecary storefront nod; protect bouquet/tickets continuity |
| 7 | Distillery District: performer interrupts video-call serenade | PLANNED | Apologetic busker tip jar; use completely different composition from 6 |
| 8 | Church-Wellesley: strangers help juggle bags and romantic gifts | PLANNED | **Shane Hollander and Ilya Rozanov (Heated Rivalry) cameo**; subtle Moira Rose acting poster if space |
| 9 | Church-Wellesley: surprise dance number with Brooke Lynn Hytes | LIVE | Brooke's gold look; avoid crowd identity confusion |
| 10 | Church Street: horse Gordon munches anniversary roses; traditional red-serge RCMP rider | LIVE | Gordon Lightfoot name nod; recurring goose in background |
| 11 | Eaton Centre: Trung runs up descending escalator | PLANNED | Future Shoppe nod |
| 12 | Eaton Centre: emergency cobalt-suit makeover | PLANNED | MuchMusic Awards rack |
| 13 | Dundas Street: inverted umbrella in a sudden rainstorm | PLANNED | Degrassi: Next Experiment billboard |
| 14 | Downtown café: towering dessert collapses | PLANNED | Double Double Disaster menu |
| 15 | Nathan Phillips Square: accidental basketball celebration MVP | PLANNED | We the North jersey, tiny Glob patch |
| 16 | Kensington Market: bizarre shortcut and familiar invention | PLANNED | Red Green / duct tape |
| 17 | Kensington Market: skateboarder catches gift | PLANNED | Avril sticker |
| 18 | King Street West: busker / accidental audition | PLANNED | Rush/2112 callback |
| 19 | Union Station: wrong exit / commuter directs him | LIVE (earlier cheerful station portrait may need redrawing to match the gag) | Schitt's Creek luggage tag; Tim Hortons-like snack cup |
| 20 | Near Union Station / Bremner: last roadblock | PLANNED | SORRY AGAIN sign; goose returns |
| 21 | Rogers Centre: concert crowd; Trung has one surviving rose | PLANNED | Northern Lights fictional Canadian-music supergroup |

## Distinct scripted events beyond the 21-level journey

Boss reaction inserts (all PLANNED): `boss4` (Prism Queen, tourist photo); `boss9` (Spore Serpent, festival); `boss15` (Abyss Moth, celebration); `boss21` (Omega Bloom, concert).

Upgrade-call illustrations (all PLANNED): `nutrition` (drink shopping), `regen` (helpful stranger), `zap` (roadwork machinery), `star` (street performer), `mitosis` (matching pedestrians), `revive` (falling box), `antidote` (bottle-shop window).

`victory`: **LIVE for penultimate text page only** — William Shatner / "Great Scott!" cameo. **Final reunion image NOT DONE**: Scott reunites with battered Trung; Scott's ukulele/instrument case and CN Tower view; one crushed rose; pink Glob charm; Scott turns off lab phone. Do not substitute the cameo for the actual reunion.

## Additional asset/character consistency backlog

- Scott's blue music-professor office illustration is saved as a candidate, not connected to an active scene; complete Scott video-call expressions.
- Early intro video-call picture saved as a candidate but not connected; revise if needed to fit character continuity.
- One major joke, one recognizable place, two or three *subtle* Canadian Easter eggs per image; do not fill scenes with flags or make image sheets.
- Story art must keep consistent hair (Trung silver-lilac), glasses, goatee, animated expressions, outfit stages, hands, props, and geographical landmarks. An approved asset is not a promise that its depicted story gag is fully accurate.
- Catherine O'Hara/Dan Levy Easter eggs are **not yet illustrated or added** as specific recognizable character cameos; earlier conversations associated them with the helpful tourists on Front Street. Their Schitt's Creek characters may also receive subtle signage references elsewhere but those do NOT replace their planned scene cameo.
- Preserve other earlier discussed background nods where fitting: Canadian goose, raccoon, Breaker High, CBC, MuchMusic, Rush, Alanis Morissette, faux TTC/Tim Hortons, Drake/Degrassi, Canadian Tire float, poutine, ketchup chips, "SORRY", Bay bag, beaver/loon icons.

## Release workflow

1. Generate one unique vertical scene illustration.
2. Inspect spelling, anatomical details, character resemblance, visual gag and Canadian landmarks.
3. Obtain approval; distinguish candidate from approved image.
4. Connect the scene art in `storyRender()` mapping in `index.html`.
5. Add an asset check to `tests/source-smoke.cjs`, run browser tests, then deploy through GitHub Pages and verify.
