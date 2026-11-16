# Petri Panic — Toronto story art and Canadian Easter-egg production ledger
Last audited: 2026-11-16. Source of truth for runtime scene IDs: `STORY_SCENES` and `storyArt` in `index.html`.
**Completion rule:** `illustrated` != `approved` != `mapped` != `deployed`. Only claim the last status after confirming the Pages workflow.

## Style and continuity
- Portrait single illustrations, one at a time, modeled on the approved Trung silver-haired, glasses, short-goatee anime art (especially the St. Lawrence Market raccoon).
- Consistent Toronto journey props: cake purchased at #2, raccoon at #3, roses/tickets at #6; the horse eats roses at #10; damaged gifts escalate until reunion.
- A Canadian reference should serve the gag or be a discreet background reward. Avoid repeated flag/maple-leaf decorations, fake text, impossible geographic signage, or celebrity crowding.
- Video-call image changes should not alter game logic. For unillustrated events, retain the existing portrait.
- The real RCMP red serge is ceremonial dress, not regular Toronto street-policing attire; the Mountie is a playful special-event cameo.

## Main story — exact game scene IDs
| ID | Setting and scene | Image / approval status | Planned Easter egg / prop |
| --- | --- | --- | --- |
| intro | Pink Laboratories; Trung realizes it's anniversary night and calls the intern | TODO — `professor-trung.svg` fallback | Scott's note: NO EXPERIMENTS AFTER 6 PM |
| level2 | St. Lawrence Market; anniversary cake secured | APPROVED + MAPPED `level2-st-lawrence-cake.jpg` | Market bakery and discreet maple butter |
| level3 | St. Lawrence Market; raccoon leaps into groceries | APPROVED + MAPPED `level3-market-raccoon.jpg` | Toronto's trash panda; market landmark |
| level4 | Front Street; Trung involuntarily photobombs tourists | GENERATED, NOT YET MAPPED `file_00000000672481f5a33973658c6f7bf5` | Degrassi T-shirt |
| level5 | King Street; impossible construction detour | GENERATED, NOT YET MAPPED `file_00000000fa3481f59b359b36ebf74843` | TEMPORARY SINCE 1998; TTC; recurring goose |
| level6 | Distillery District; roses + tickets | APPROVED + MAPPED `level6-distillery-roses.jpg`; alternate wardrobe illustration generated but not mapped | Rose Apothecary storefront / stylish romantic makeover |
| level7 | Distillery District; theatrical busker keeps interrupting | TODO | SORRY, CASH ONLY tip jar |
| level8 | Church-Wellesley; kind strangers pick up gifts | TODO | Heated Rivalry: Shane/Ilya helping and trading affectionate glance; Moira workshop poster possible (avoid too many cameos) |
| level9 | Church-Wellesley; dragged into a dance line | APPROVED + MAPPED `level9-church-brooke.jpg` | Brooke Lynn Hytes performance |
| level10 | Church Street; Gordon horse eats pink roses | APPROVED + MAPPED `level10-mountie-gordon.jpg` | RCMP red-serge special event; Gordon nameplate; goose |
| level11 | Eaton Centre; wrong-way escalator | TODO | Future Shoppe parody |
| level12 | Eaton Centre; disastrous formal-outfit change | TODO | **Dan Levy cameo as discerning fashion customer/stylist; Catherine O'Hara tribute as Moira Rose fashion portrait / boutique window**, not a current-day meeting with O'Hara |
| level13 | Dundas Street; umbrella fiasco | TODO | Degrassi: The Next Experiment billboard |
| level14 | Downtown; impossibly tall dessert | TODO | Double Double Disaster menu |
| level15 | Nathan Phillips Square; basketball fans carry Trung | TODO | WE THE NORTH jersey with Glob emblem |
| level16 | Kensington Market; perilous shortcut | TODO | Red Green Show/duct tape |
| level17 | Kensington Market; skateboarder saves gift | TODO | AVRIL sticker |
| level18 | King Street West; street musician | TODO | Rush, 2112 |
| level19 | Union Station; lost traveler asks for directions | APPROVED + MAPPED `level19-union-station.jpg` | Schitt's Creek luggage tag (not confirmed in current art) |
| level20 | Near Union Station; another roadblock | TODO | SORRY FOR THE INCONVENIENCE. AGAIN |
| level21 | Rogers Centre; glitter scarf, concert crowd | TODO | Northern Lights fictional Canadian band |
| victory | Scott and Trung reunite at restaurant | PARTIAL — approved Shatner/Great Scott cameo `victory-great-scott.jpg` shown before final slide; **final romantic reunion art missing** | William Shatner quote; small pink Glob charm; phone rings from lab |

## Additional scripted events (not to forget)
- Boss video calls: `boss4` (Prism Queen/Front Street), `boss9` (Spore Serpent/Church Street), `boss15` (Abyss Moth/Nathan Phillips), `boss21` (Omega Bloom/Rogers Centre). All lack event-specific approved art.
- Purchase/update calls: `nutrition` (drink shopping), `regen` (strangers help), `zap` (construction machinery), `star` (busker), `mitosis` (matching strangers), `revive` (falling box), `antidote` (bottle shop). All lack event-specific approved art.

## Canadian celebrity and comedy-reference checklist
- [x] Brooke Lynn Hytes — approved Experiment 9 illustration.
- [x] William Shatner “Great Scott!” — approved pre-reunion image (final embrace still missing).
- [ ] Catherine O'Hara / Moira Rose — tribute illustration not created; **do not depict a new present-day meeting with Catherine O'Hara** (died Jan 30, 2026).
- [ ] Dan Levy / David Rose — identifiable Easter egg not illustrated; plan Experiment 12 with the Moira tribute.
- [ ] Heated Rivalry Shane Hollander and Ilya Rozanov — not illustrated; plan Experiment 8.
- [ ] Degrassi, Schitt's Creek Rose Apothecary, Future Shop, MuchMusic, Rush/2112, Red Green Show, Avril, We the North and goose recurrence — check each illustration individually; a storyboard note is not proof the detail actually appeared.

## Audit counts
There are **33 distinct scripted scene IDs**: one intro, twenty numbered experiment scenes (2–21), four boss calls, seven upgrade calls, and one victory. **Six numbered scenes** have approved, mapped unique portraits (2, 3, 6, 9, 10, 19), plus a **partial** victory cameo. There are **27 remaining illustration deliverables** if the final reunion is counted separately (14 remaining numbered scenes + intro + 4 bosses + 7 upgrades + actual reunion). Generated but not yet integrated: #4 and #5, plus optional #6 wardrobe alternative. Do not equate generated, approved, integrated or deployed.

## Release QA
For each new image: face consistency, proper hands/props, legible details, accurate geography, scene/event match, portrait layout, check iPhone story window, approve, map into `storyArt`, test in browser, publish successful GitHub Pages build.
