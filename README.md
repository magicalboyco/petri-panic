# Petri Panic — Pink Lab

An original, candy-pink, single-file browser game about nurturing Globs, collecting BioBits, defending a living petri dish, and experimenting with unique Guardian companions.

## Play the last published build

**https://petri-panic-pink-lab-o02kge.v2.appdeploy.ai/**

**IMPORTANT:** The GitHub `main` branch contains significant *staged / unpublished* updates beyond the currently hosted AppDeploy version. Do not describe the features below as live until the new deployment has been completed and confirmed ready.

## Development branch: Alpha 12, awaiting AppDeploy publishing

- **Adaptive play layout:** Petri dish stays clear of UI buttons; separate Shop / Guardian / Inspect controls and responsive portrait, landscape, tablet and desktop layouts.
- **Adventure progression:** 21 selectable experiments, locked until unlocked, with replayable earlier experiments and progression preserved after replays. The Next Experiment action displays its actual destination level number. The Adventure mode tile does not show a level number.
- **24 original Guardian companions:** All rendered in a dedicated collection with descriptive ability labels, grayed-out locked characters, level-based unlocking, and up to three selectable team slots. Current mechanics include roaming collectors and defenders, feeding, healing, calming, fertility support, shields, poison cures, coin powers, enemy control, warning, and rescue. They have original names and appearances; gameplay roles are broadly inspired by classic virtual-aquarium games. These are not copied character assets.
- **Boss milestones:** Distinct bosses at experiments 4, 9, 15, and 21; each emerges when the player buys the second DNA fragment. Feed Globs for a brief weakness window, defeat the boss before buying the third fragment, and receive BioBits for winning.
- **Better Blob motion:** Three pink personality types, individual movement speeds, gentle separation from crowds, glowing expressions and facial moods.
- **BioBits:** Scatter outward and then swirl in circular paths within the petri dish; disappear after a short lifetime and blink before fading.
- **Other core systems:** Maximum 10 active droplets; shorter-lived droplets; purple viruses, spreading green mold, poisoning, healing, feeding stages, babies, Star Cell power-up, defender behavior.
- **Save and continue:** In-progress cultures checkpoint locally about every four seconds, including Globs, coins, bosses, time, and active Guardians. Resume from the menu after accidentally closing the browser. Finished/failed runs clear their checkpoint; permanent progression saves separately.
- **UI and tutorial:** Live culture-condition indicators, a separate How to Play guide, and opt-in Glob inspection showing personality, thirst, health and growth. Pause offers Resume and Return to Main Menu.
- **Audio:** Multi-section, original synthesized chiptune with a mute toggle.
- **Modes:** Adventure, Time Trial, Challenge and Living Lab. The latter three remain prototypes.

## Current status

The last published AppDeploy build is older than the GitHub source. AppDeploy rejected a new deployment after hitting its daily publishing-credit budget, so the extended features above **must still be deployed and verified on actual devices**. Staging a source commit does not publish the game.

All staged gameplay changes have been checked for JavaScript syntax errors. A mocked DOM gameplay smoke test of the latest script exercised all 24 Guardian loadouts, the four boss milestones (including their DNA gates and victories), and autosave/resume. Those tests passed, but are **not a substitute for real browser playtests**.

## Play controls

- Tap the open Petri dish to drop water, collect floating BioBits, or attack contaminants.
- The Shop, Guardians and Inspect buttons sit outside the dish. Press Inspect and then tap an individual Glob to see its profile.
- The active pause menu lets you Resume or return to the main menu.
- From the main menu, choose Adventure to select an unlocked experiment and equip your Guardian team.
- Permanent upgrades and progress are saved in local browser storage, not in an online account. Clearing Safari site data removes the save. Browser privacy modes may not persist progress.

## Hosting and test plan

The working game is `index.html`. It can run on any static website, using HTTPS for normal Safari and mobile testing.

When AppDeploy publishing is available:
1. Deploy the latest `main/index.html` source into the existing Petri Panic app, preserving the app ID.
2. Confirm AppDeploy says **ready** with no frontend or network errors.
3. Verify mobile portrait and landscape, iPad rotation, desktop, tap targets and modal scrolling.
4. In Adventure, verify Guardian selection and locked slots, later unlocks, replaying earlier stages, and next-level labels.
5. Play through each boss milestone. Ensure defeating each boss grants BioBits and the third DNA fragment is gated until victory.
6. Test every Guardian's on-screen appearance, movement constraints, and actual mechanical effects, including special-case interactions.
7. Test save/resume in Safari after closing and reopening the tab, and clear checkpoints after loss or victory.
8. Rebalance game economy, enemy pacing and ability timing from actual playtesting.

## Road to release

The current 21-level content still needs distinctive challenges and stage art, full Living Lab persistence, a stronger onboarding flow, deeper character art and animations, audio balancing, and extensive real-device QA. Despite the implemented 24-Guardian roster, this remains an **alpha**, not a finished game.
