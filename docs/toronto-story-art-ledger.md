# Petri Panic — Toronto story artwork ledger
Updated: 2026-11-16. This ledger distinguishes **live in-game**, **generated but not installed**, and **planned only**. All scene keys are from the current `STORY_SCENES` object in `index.html`. Do not call an illustration installed unless its file exists AND the live `storyArt` mapping / victory logic refers to it.

## Live story illustrations
| Story key | Scene | Asset / state |
|---|---|---|
| level2 | St. Lawrence Market cake | `assets/story/level2-st-lawrence-cake.jpg` — live |
| level3 | St. Lawrence Market raccoon | `assets/story/level3-market-raccoon.jpg` — live, visual-quality benchmark |
| level6 | Distillery roses and tickets | `assets/story/level6-distillery-roses.jpg` — live |
| level9 | Church-Wellesley dance with Brooke Lynn Hytes | `assets/story/level9-church-brooke.jpg` — live |
| level10 | Red-serge Mountie, Gordon horse eating flowers | `assets/story/level10-mountie-gordon.jpg` — live |
| level19 | Union Station | `assets/story/level19-union-station.jpg` — live |
| victory | Shatner 'Great Scott!' cameo | `assets/story/victory-great-scott.jpg` — displayed on penultimate victory dialogue slide; final reunion still needs illustration |

## In the repository, NOT active in story rendering
- `assets/story/intro-trung-scott-call.jpg` — original phone call image; not approved for active use after quality review.
- `assets/story/scott-music-office.jpg` — Scott's office portrait; not currently used in active story rendering.

## Generated in conversation, NOT yet uploaded or attached to live scenes
- level4: accidental Front Street group selfie with a Degrassi shirt — individual illustration shown; awaiting asset integration / final visual QA.
- level5: King Street construction detour, TTC, goose and 'Temporary Since 1998' sign — individual illustration shown; awaiting integration / final visual QA.
- level6: romantic outfit transformation mirror/checklist artwork — alternative/new beat to existing level6 image, NOT part of live scene. Decide whether to use a second panel; do not overwrite approved roses scene without checking sequence.

## Still needs dedicated scene artwork (by current story key)
**Main campaign:** intro (lab / Scott call), level7 (Distillery busker), level8 (helpful strangers), level11 (wrong escalator), level12 (party clothes), level13 (umbrella), level14 (huge dessert), level15 (basketball crowd), level16 (Kensington shortcut), level17 (skateboard saves gift), level18 (street musician), level20 (roadblock), level21 (Rogers Centre crowd). Levels 4 and 5 also lack live images as noted above.

**Boss call illustrations:** boss4 Prism Queen, boss9 Spore Serpent, boss15 Abyss Moth, boss21 Omega Bloom.

**Shop upgrade calls:** nutrition (drink), regen (dropped bag), zap (heavy machinery), star (performer), mitosis (identical people), revive (rescued box), antidote (bottle shop).

**Ending:** a real illustrated reunion of Scott and Trung; currently the last victory slide uses HTML/emoji placeholder after the Shatner image.

## Canadian references and cameo continuity
- **Approved/in-game:** St. Lawrence Market raccoon; Brooke Lynn Hytes festival dance; red-serge RCMP Mountie and horse Gordon; Shatner's 'Great Scott!' near final reunion.
- **Previously proposed, not yet illustrated:** Shane Hollander and Ilya Rozanov from `Heated Rivalry` as background figures helping with bags (level8); Catherine O'Hara / Dan Levy `Schitt's Creek`-evocative helpful strangers near Front Street (proposed in earlier discussion, not locked to an exact level). If illustrated as a tribute, prioritize Moira- and David-Rose-inspired wardrobe / Rose Apothecary detail over claiming a real-life chance encounter. Other planned `Schitt's Creek` nods: Rose Apothecary sign near Distillery District; themed luggage tag at Union Station. Avoid stacking all three references in one panel.
- **Other still-unplaced references:** subtle goose recurrence, TTC, Bay-style shopping bag, ketchup chips/poutine, Timbits/double-double, hidden SORRY, CBC/MuchMusic, Degrassi/Breaker High, Rush/Alanis, Toronto basketball, fictional Canadian Tire-coded float.
- **Scott/lab relationship details:** 'NO EXPERIMENTS AFTER 6 PM. LOVE, SCOTT' note, dinner reminder, Scott's exasperation at lab calls, final shared romantic moment.

## Production rules
One standalone vertical illustration per generation. Preserve Trung's silver-lilac hair, square black glasses, goatee, anime linework and restrained cel shading; preserve Scott's established pink shirt/charcoal vest identity. Exactly one focal joke and usually one subtle, legible Canadian Easter egg. Review hands, props, location, background, faces and typography before integration. A generated image is not automatically approved. Integrate approved scenes into a **playable build**, run browser tests and confirm successful GitHub Pages publication. Record both current art status and code integration status here.
