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
for(const file of ['glob-motion.js','experiment-reveal.js']){
 const source=fs.readFileSync(path.join(root,'assets/js',file),'utf8');
 new vm.Script(source,{filename:file});
 assert(html.includes('<script src="assets/js/'+file+'"></script>'),file+' must load in the live game');
}
assert(html.includes('motion?.pose(g,elapsed,still)'),'Glob personality rig must be connected to game render');
assert(html.includes('motion?.details(ctx,g,r,elapsed,pose,still)'),'Glob status artwork must render in game');
assert(html.includes('window.PetriPanicExperimentReveal?.show(activeLevel,mode)'),'Chapter animation must run on entering an experiment');
assert(html.includes('window.PetriPanicExperimentReveal?.clear()'),'Chapter animation must clear on menu changes');

const juiceSource=fs.readFileSync(path.join(root,'assets/js/petri-juice.js'),'utf8');
new vm.Script(juiceSource,{filename:'assets/js/petri-juice.js'});
assert(html.includes('<script src="assets/js/petri-juice.js"></script>'),'Live dish polish module missing');
assert(html.includes('window.PetriPanicJuice?.feed(g.x,g.y)'),'Feeding response must be tied to a real Glob reaching water');
assert(html.includes('window.PetriPanicJuice?.collect(b.x,b.y'),'BioBit collection must trigger the visual reward');
assert(html.includes('window.PetriPanicJuice?.grow(g.x,g.y)'),'Glob growth must animate');
assert(html.includes('window.PetriPanicJuice?.drawWater(ctx,w,elapsed)'),'Water illustration must be used in live gameplay');
assert(html.includes('window.PetriPanicJuice?.drawBioBit(ctx,b,elapsed)'),'BioBit illustration must be used in live gameplay');
assert(html.includes('window.PetriPanicJuice?.ambient(ctx,era,elapsed)'),'Era-specific dish ambience missing');
assert(html.includes('shelf-purchase'),'Supply shelf tactile purchase animation missing');

const scenes=['level2-st-lawrence-cake','level3-market-raccoon','level6-distillery-roses','level10-mountie-gordon','level19-union-station'];
for(const name of scenes){
 const file=path.join(root,'assets/story',name+'.jpg');
 assert(fs.existsSync(file),'Missing Toronto illustration: '+name);
 const header=fs.readFileSync(file).subarray(0,3);
 assert.deepEqual([...header],[255,216,255],'Invalid JPEG file for '+name);
 assert(html.includes("assets/story/"+name+".jpg"),'Story art not mapped to scene: '+name);
}
assert(html.includes('has-scene-art'),'Portrait layout missing');
assert(html.includes('Cake secured!'),'Cake dialogue must remain coherent');
const storyJSON=html.match(/const STORY_SCENES=([\s\S]*?);\nconst STORY_KEY=/);
assert(storyJSON,'Story scenes JSON must be present');
const storyScript=JSON.parse(storyJSON[1]);
assert.equal(storyScript.level8.place,'Church-Wellesley Village','Helpful-stranger cameo belongs in Church-Wellesley');
assert(storyScript.level12.lines.some(line=>line.includes('cobalt suit')&&line.includes('burgundy')),'Cobalt fitting must explicitly return Trung to burgundy');
assert(storyScript.level15.lines[3].includes('Breaker High'),'Drake/Jurassic Park page must retain Canadian TV homage');
assert(storyScript.level16.lines[3].includes('Quebec Brie'),'Kensington cheese scene must retain Quebec Brie');
assert(html.includes("level15:{3:'Maple Leaf Square"),'Arena cameo must use correct Scotiabank-area location');
assert(html.includes("level16:{3:'Kensington Market"),'Kensington cameo must remain in Kensington');

assert(html.includes("level19:'assets/story/level19-union-station.jpg'"),'Approved Toronto scenes must be mapped');
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
