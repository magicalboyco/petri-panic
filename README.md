# Petri Panic — Pink Lab

An original, candy-pink, single-file browser game about nurturing Globs, collecting BioBits, defending a living petri dish, and experimenting with unique Guardian companions.

## Play the current GitHub build

**[Play Petri Panic on GitHub Pages](https://magicalboyco.github.io/petri-panic/)**

GitHub Pages publishes the latest `main` branch through `.github/workflows/pages.yml`. The first workflow completed on November 8, 2026. The live build includes Professor Trung's video-call story beta, 21 experiments, 24 code-drawn Keeper companions, five scalable era environment masters, 21 per-experiment room detail sets, and the free-DNA testing counter.

**[Review all five environment art masters](https://magicalboyco.github.io/petri-panic/art-review.html)** — a responsive gallery intended for art-direction feedback without needing to unlock later levels. The artwork gallery shows master backgrounds, not gameplay screenshots or animated experiment props.

Previous AppDeploy build: https://petri-panic-pink-lab-o02kge.v2.appdeploy.ai/ — it is a separate, older version and **has not** been updated with this GitHub build. If the GitHub Pages URL does not open immediately, check the [Pages deployment workflow](https://github.com/magicalboyco/petri-panic/actions/workflows/pages.yml) and Settings → Pages.

## Current GitHub Pages beta (continuing alpha development)

- **Adaptive play layout:** Petri dish stays clear of UI buttons; separate Shop / Guardian / Inspect controls and responsive portrait, landscape, tablet and desktop layouts.
- **Adventure progression:** 21 selectable experiments, locked until unlocked, with replayable earlier experiments and progression preserved after replays. The Next Experiment action displays its actual destination level number. The Adventure mode tile does not show a level number.
- **24 original Guardian companions:** All rendered in a dedicated collection with descriptive ability labels, grayed-out locked characters, level-based unlocking, and up to three selectable team slots. Current mechanics include roaming collectors and defenders, feeding, healing, calming, fertility support, shields, poison cures, coin powers, enemy control, warning, and rescue. They have original names and appearances; gameplay roles are broadly inspired by classic virtual-aquarium games. These are not copied character assets.
- **Keeper artwork and collection update:** All 24 companions are drawn as vectors at runtime, including in gameplay and roster thumbnails; the old pixel atlas renderer is retired. Scuttle has its own animated snail rig. Lookout, Bouncer, Poppy, Mallow, Moonbeam, Dewdrop, Mochi Mop, Orbit, and Sprout have had individual character-remaster passes with animated paws or appendages; the other Keepers retain their earlier vector versions. These character concepts still require aesthetic approval, phone-scale review, and unlocked-gameplay animation testing. The Guardian Corner displays all 24 cards and grays out locked characters.
- **Scalable environments:** Five 900×620 SVG master scenes represent Victorian Origins, Atomic Age, Space Age, Biotech Renaissance and Tomorrow Lab, including redesigned 1950s mint/pink science kitchen, 1960s pink/aqua Tomorrowland, green botanical conservatory, and lavender holographic finale. All 21 experiment levels have layered scene-detail variants; environment architecture shows through softly at dish edges to protect central Glob visibility. All five era masters are in the [art-review gallery](https://magicalboyco.github.io/petri-panic/art-review.html).
- **Boss milestones:** Distinct bosses at experiments 4, 9, 15, and 21; each emerges when the player buys the second DNA fragment. Feed Globs for a brief weakness window, defeat the boss before buying the third fragment, and receive BioBits for winning.
- **Better Blob motion:** Three pink personality types, individual movement speeds, gentle separation from crowds, glowing expressions and facial moods.
- **BioBits:** Scatter outward and then swirl in circular paths within the petri dish; disappear after a short lifetime and blink before fading.
- **Other core systems:** Maximum 10 active droplets; shorter-lived droplets; purple viruses, spreading green mold, poisoning, healing, feeding stages, babies, Star Cell power-up, defender behavior.
- **Save and continue:** In-progress cultures checkpoint locally about every four seconds, including Globs, coins, bosses, time, and active Guardians. Resume from the menu after accidentally closing the browser. Finished/failed runs clear their checkpoint; permanent progression saves separately.
- **UI and tutorial:** Live culture-condition indicators, a separate How to Play guide, and opt-in Glob inspection showing personality, thirst, health and growth. Pause offers Resume and Return to Main Menu.
- **Audio:** Multi-section, original synthesized chiptune with a mute toggle.
- **Modes:** Adventure, Time Trial, Challenge and Living Lab. The latter three remain prototypes.

## Current status

The AppDeploy build remains older; the GitHub Pages URL above is authoritative. Five era master illustrations and the major early-Keeper vector remasters now exist in the playable source, but **none of the 21 experiments is considered final-art approved**. The Victorian room and early-game flow have been visually exercised in a browser. Later-level artwork SVGs load, but each environment and Keeper still requires unlocked-gameplay checks at phone size, animation review, performance testing and art-direction sign-off.

All staged gameplay changes have been checked for JavaScript syntax errors. A mocked DOM gameplay smoke test exercised all 24 Guardian loadouts, all 24 on-screen creature drawings, the four boss milestones (including DNA gates and victories), and autosave/resume. The latest gallery also renders 24 cards and correctly displays locked versus unlocked companions in the simulated interface. Those tests passed, but are **not a substitute for real browser playtests**.

## Play controls

- Tap the open Petri dish to drop water, collect floating BioBits, or attack contaminants.
- The Shop, Guardians and Inspect buttons sit outside the dish. Press Inspect and then tap an individual Glob to see its profile.
- The active pause menu lets you Resume or return to the main menu.
- From the main menu, choose Adventure to select an unlocked experiment and equip your Guardian team.
- Permanent upgrades and progress are saved in local browser storage, not in an online account. Clearing Safari site data removes the save. Browser privacy modes may not persist progress.

## Hosting and test plan

The working game is `index.html`. It can run on any static website, using HTTPS for normal Safari and mobile testing.

For GitHub Pages beta testing:
1. Open https://magicalboyco.github.io/petri-panic/ and verify the latest `main` build. If AppDeploy publishing is later available, separately redeploy to that app.
2. Confirm AppDeploy says **ready** with no frontend or network errors.
3. Verify mobile portrait and landscape, iPad rotation, desktop, tap targets and modal scrolling.
4. In Adventure, verify Guardian selection and locked slots, later unlocks, replaying earlier stages, and next-level labels.
5. Play through each boss milestone. Ensure defeating each boss grants BioBits and the third DNA fragment is gated until victory.
6. Test every Guardian's on-screen appearance, movement constraints, and actual mechanical effects, including special-case interactions.
7. Test save/resume in Safari after closing and reopening the tab, and clear checkpoints after loss or victory.
8. Rebalance game economy, enemy pacing and ability timing from actual playtesting.

## Road to release

The game has a playable 21-level core, full Keeper roster and five era artwork masters, but still needs visual sign-off on each experiment, individualized character animation refinements, improved enemies/bosses, complete Professor Trung/Scott story art, audio balancing, full Time Trial/Challenge/Living Lab modes, and real-device iOS/Android testing. All assets in `art-review.html` are works in progress, not approved final art. This remains an **alpha**, not a finished game.
