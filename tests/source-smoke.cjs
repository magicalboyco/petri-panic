'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
assert(scripts.length > 0, 'Game must include its playable script');
for (const js of scripts) new vm.Script(js, { filename: 'index.html' });
for (const id of ['game','overlay','play','chooseRegular','guardianPicker','guardianOptions','shopToggle','helpOverlay','storyScreen','runCheck']) {
 assert(new RegExp('id=["\\\']' + id + '["\\\']').test(html), 'Missing UI element: ' + id);
}
for (const pathName of ['victorian','atomic','space','biotech','tomorrow']) {
 assert(fs.existsSync(path.join(root,'assets/environments/masters',pathName+'.svg')), 'Missing era art '+pathName);
}
const roster = html.match(/guardianCatalog\.push\(([\s\S]*?)\);/);
assert(roster, '24-Keeper roster block missing');
assert.equal((html.match(/\{id:'(?:scuttle|bouncer|nurse|feeder|spark|nursery|comfort|moldguard|magnet|growth|purify|ward|shield|savings|beacon|forecast|ray|float|nectar|twirl|cookie|breeze|wish|mimic)'/g)||[]).length,24,'Unexpected Keeper roster count');
assert(html.includes('drawKeeperAbilityFeedback(guard)'), 'Keeper effects must be connected to gameplay');
assert(html.includes('prefers-reduced-motion: reduce'), 'Respect reduced-motion preference');
assert(html.includes('saveCheckpoint()'), 'Autosave checkpoint required');
assert(html.includes('defeatBoss('), 'Boss completion required');
const keeperFx=fs.readFileSync(path.join(root,'assets/js/keeper-signature-fx.js'),'utf8');
new vm.Script(keeperFx,{filename:'assets/js/keeper-signature-fx.js'});
assert(html.includes('<script src="assets/js/keeper-signature-fx.js"></script>'),'Keeper accents must load in gameplay');
assert(html.includes('signature?.after(ctx,guard,elapsed,reduced)'),'Keeper reaction accents must render in the dish');
const keeperReview=fs.readFileSync(path.join(root,'keeper-review.html'),'utf8');
assert(keeperReview.includes('drawKeeperSignature'),'Keeper review must use the shared gameplay art');
assert(keeperReview.includes('gameplay-size'),'Keeper review must show phone-size examples');

const creatureSource=fs.readFileSync(path.join(root,'assets/js/creature-art.js'),'utf8');
new vm.Script(creatureSource,{filename:'assets/js/creature-art.js'});
assert(html.includes('<script src="assets/js/creature-art.js"></script>'),'Live creature artwork loader missing');
assert(html.includes('PetriPanicCreatureArt?.draw('),'Live invader renderer is not wired to gameplay');
const review=fs.readFileSync(path.join(root,'creature-review.html'),'utf8');
assert(review.includes('assets/js/creature-art.js'),'Creature review must use the live renderer');
assert(review.includes('prefers-reduced-motion: reduce'),'Creature preview must support reduced motion');

console.log('PASS: JavaScript parses, required UI elements and era art exist, all 24 Keepers present, checkpoint/boss/feedback contracts intact.');
