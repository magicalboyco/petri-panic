# Toronto story-art production board

## Approved visual direction (2026-11-16)
Full-resolution, saturated, highly detailed cel-shaded anime illustration. Strong expressive faces and recurring Trung model: silver-lavender hair, rectangular glasses, neat goatee, magenta tailored jacket/scarf and leather shoulder satchel. Local Toronto neighborhoods must look recognizable and welcoming. Trung enjoys discovering the city, not reacting in fear. Avoid generic postcard backgrounds. Keep title/subtitle overlays separate from art.

## Existing user-approved scene concepts — integration pending asset ingest
1. **Kensington Market — Grilled cheese / Quebec Brie**. Trung enjoys a gooey grilled-cheese sandwich and holds a wheel of Quebec Brie. Moira and David are in their iconic cheese-scene looks, against real Kensington Market streetscape, murals, independent stalls. Dialogue should derive from the cheese joke without reproducing extensive scripted lines.
2. **Jurassic Park — Drake / Breaker High / Raptors**. Trung and Drake laugh over Drake's vintage *Breaker High* shirt at Raptors game-day celebrations outside Scotiabank Arena / Maple Leaf Square. Trung carries poutine and a Raptors foam finger. The most recent uploaded visual was a **marked-up preview**, with a purple circle around the poutine/hand/bag zone: use clean artwork, NOT the annotations. Preserve the poutine composition but review finger/hand anatomy, overlap with bag, and legibility at story-panel dimensions.

**IMPORTANT:** Neither of the above original generated PNGs is confirmed ingested into this repository. Do not claim the live game has these artworks until image files are available in GitHub, referenced from gameplay, and tested on mobile and desktop. Annotations are not final art assets.

## Suggested art integration contract
- Save web-optimized approved clean image variants in `assets/story/toronto/`, portrait and wide crop when justified.
- Central scene manifest fields: experiment ID, locale, title, asset path, accessibility alt text, character cast, encounter trigger, caption/dialogue ID, and approval status.
- Story artwork triggers at specific gameplay moments; don't replace petri dish sprites or overwhelm controls.
- Preload next story illustration; use static fallback for offline/cache issues.
- On touchscreen, images fit inside the viewport and reveal full composition with optional inspect/zoom.
- Verify image availability with HTTP 200, visual test on mobile/desktop, and check no reviewer markup remains.

## Previous St. Lawrence Market scenes requiring inventory verification
- Experiment 2: Scott's anniversary cake from St. Lawrence Market (previously reported published).
- Experiment 3: St. Lawrence Market raccoon encounter (previously reported published).

## Next shots — proposed, NOT yet approved
A. **St. Lawrence Market — already used; do not duplicate**. Prior project history records Experiment 2 (Trung purchasing Scott's anniversary cake, restored/published) and Experiment 3 (Toronto raccoon encounter, completed/published). Inspect current game assets and mappings to verify rather than commissioning a redundant peameal-bacon scene.
B. **Toronto Islands ferry** — cheerful windswept Trung with skyline behind him; ferry snacks; city-island view rather than random CN Tower collage.
C. **Queen Street West** — indie record and vintage-shopping encounter; expressive reaction to a deeply Toronto music or fashion discovery; storefront specificity.
D. **Distillery Historic District** — late-afternoon cobblestones, heritage brick, café stop; one cinematic warm scene with actual Distillery character.
E. **TTC streetcar** — light comedy with transit etiquette, red streetcar, recognizable streetscape and joyous journey energy.

## Art QA gate
Consistency of face and clothes, geographic accuracy, proper branding and typography, hands/anatomy, accessible focal point, reasonable file size, responsive crop, asset provenance/permission for celebrity likenesses and official marks before public release, and story placement actually wired to an experiment.
