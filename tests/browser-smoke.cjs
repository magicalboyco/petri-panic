'use strict';
const { chromium } = require('playwright');
const { createServer } = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const types = { '.html':'text/html', '.svg':'image/svg+xml', '.webp':'image/webp', '.png':'image/png', '.css':'text/css', '.js':'text/javascript' };
const server=createServer(async(req,res)=>{
 try {
  const pathname=decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  const name=pathname==='/'?'index.html':pathname.replace(/^\//,'');
  const file=path.resolve(root,name);
  if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}
  const body=await fs.readFile(file);
  res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});res.end(body);
 }catch(e){res.writeHead(404).end();}
});
(async()=>{
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const browser=await chromium.launch({headless:true});
 try {
  for(const viewport of [{width:390,height:844},{width:844,height:390},{width:1280,height:800}]){
   const page=await browser.newPage({viewport, reducedMotion:'reduce'});
   const errors=[];
   page.on('pageerror',e=>errors.push(e.message));
   await page.goto('http://127.0.0.1:'+server.address().port+'/',{waitUntil:'load'});
   await page.waitForTimeout(450);
   assert.equal(await page.locator('#runCheck').evaluate(el=>getComputedStyle(el).display),'none','Game initialization failed');
   assert.equal(await page.evaluate(()=>window.PetriPanicArtPreview.roster().length),24);
   await page.locator('#play').click();
   assert(await page.locator('#difficultyPicker').isVisible(),'Difficulty selection missing');
   await page.locator('#chooseRegular').click();
   assert(await page.locator('#guardianPicker').isVisible(),'Keeper preparation missing');
   await page.locator('#play').click();
   await page.waitForTimeout(350);
   const story=page.locator('#storyScreen');
   if(await story.isVisible())await page.locator('#storySkip').click();
   await page.waitForTimeout(250);
   assert(await page.locator('#overlay').isHidden(),'Experiment did not start');
   // The real gameplay page must load the three bespoke Glob rigs and legible status marks.
   const personality=await page.evaluate(()=>{
    const rig=window.PetriPanicGlobMotion;
    if(!rig)return null;
    const samples=[0,1,2].map(personality=>rig.pose({
      personality,face:1,vx:34,vy:17,hunger:8,hurtTimer:0,hp:1,maxHp:1,poison:0
    },1.65,true));
    const canvas=document.createElement('canvas');canvas.width=200;canvas.height=160;
    const context=canvas.getContext('2d');
    for(let i=0;i<3;i++){
      const g={personality:i,x:42+i*52,y:80,face:1,vx:20,vy:0,
       hunger:i===0?42:8,hurtTimer:i===1?1:0,poison:i===2?1:0};
      rig.details(context,g,18,0,rig.pose(g,0,true),true);
    }
    const data=context.getImageData(0,0,200,160).data;
    let ink=0;for(let i=3;i<data.length;i+=4)if(data[i]>0)ink++;
    return {names:rig.names,poses:samples.map(x=>x.kind),distinct:new Set(samples.map(x=>x.kind)).size,ink};
   });
   assert.deepEqual(personality?.poses,['shy','sweet','busy'],'All three animation personalities should differ');
   assert.equal(personality.distinct,3);
   assert(personality.ink>150,'Hunger, injury and poisoning decorations should draw visible pixels');
   const transition=await page.evaluate(()=>{
     const reveal=window.PetriPanicExperimentReveal;
     if(!reveal)return null;
     reveal.show(9,'adventure');
     const card=document.querySelector('#experiment-reveal');
     const active=card.classList.contains('is-visible');
     const nonblocking=getComputedStyle(card).pointerEvents==='none';
     const chapter=card.querySelector('.experiment-reveal__era').textContent;
     reveal.clear();
     return {active,nonblocking,chapter,cleared:!card.classList.contains('is-visible')};
   });
   assert(transition?.active&&transition.nonblocking&&transition.cleared,'Chapter overlay must show/clear without blocking taps');
   assert.equal(transition.chapter,'Atomic Age','Experiment nine must belong to the Atomic Age');

   await page.locator('#game').click({position:{x:170,y:160},force:true});

   // Confirm that the *live* game has the new watercolor feedback runtime, not a separate mockup.
   const feedback=await page.evaluate(()=>{
    const fx=window.PetriPanicJuice;
    if(!fx)return null;
    fx.water(390,280);fx.feed(310,290);fx.collect(475,310,true);fx.grow(550,350);
    const c=document.getElementById('game').getContext('2d');
    fx.draw(c);
    const data=c.getImageData(0,0,900,620).data;
    let pixels=0;for(let i=3;i<data.length;i+=4)if(data[i]>0)pixels++;
    return {functions:['draw','drawWater','drawBioBit','ambient','changeEra','underGlob','overGlob'].every(x=>typeof fx[x]==='function'),pixels};
   });
   assert(feedback?.functions,'Live dish/Glob effects must be available');
   assert(feedback.pixels>100000,'Game canvas is unexpectedly blank');
   await fs.mkdir(path.join(root,'art-test-shots'),{recursive:true});
   if(viewport.width!==844)await page.screenshot({path:path.join(root,'art-test-shots','gameplay-'+viewport.width+'.png'),fullPage:true});
   await page.locator('#shopToggle').click();
   assert(await page.locator('#supplyPanel').evaluate(el=>el.classList.contains('shopping')),'Shop did not open');
   assert(await page.locator('#supplyPanel .buy').count()>=8,'Polished shop items missing');
   const shopColors=await page.locator('#supplyPanel .buy').first().evaluate(el=>({
    radius:getComputedStyle(el).borderRadius,
    background:getComputedStyle(el).backgroundImage
   }));
   assert(shopColors.radius!=='0px' && shopColors.background.includes('gradient'),'Shop must have rounded, illustrated supply cards');
   if(viewport.width!==844)await page.screenshot({path:path.join(root,'art-test-shots','shop-'+viewport.width+'.png'),fullPage:true});

   if(await page.locator('#shopClose').isVisible()) await page.locator('#shopClose').click();
   else await page.locator('#shopClose').evaluate(el=>el.click()); // Desktop renders the Shop beside the dish; its close control is mobile-only.
   await page.locator('#guardianToggle').click();
   assert(await page.locator('#guardianCollection').isVisible(),'Guardian collection did not open');
   await page.locator('#closeCollection').click();
   await page.locator('#pause').click();
   assert(await page.locator('#overlay').isVisible(),'Pause UI did not open');
   assert.equal(errors.length,0,'Browser exceptions: '+errors.join(' | '));
   console.log('PASS: '+viewport.width+'x'+viewport.height+' menu, Keeper selection, level, tap, shop, collection, pause');
   await page.close();
  }
 
  // Shared Keeper vector art and phone-size signature samples.
  for(const viewport of [{width:390,height:844},{width:1280,height:800}]){
   const page=await browser.newPage({viewport,reducedMotion:'reduce'});
   const errors=[];
   page.on('pageerror',e=>errors.push(e.message));
   await page.goto('http://127.0.0.1:'+server.address().port+'/keeper-review.html',{waitUntil:'load'});
   await page.waitForFunction(()=>document.querySelector('#count')?.textContent?.includes('24 of 24'),{timeout:20000});
   assert.equal(await page.locator('.card').count(),24,'Missing Keeper character cards');
   assert.equal(await page.locator('.gameplay-size').count(),24,'Missing phone-size samples');
   assert(await page.locator('.gameplay-size canvas').count()>=23,'Playable small-scale Keeper canvases missing');
   const alpha=await page.locator('.gameplay-size canvas').evaluateAll(canvases=>canvases.map(c=>{
     const d=c.getContext('2d').getImageData(0,0,c.width,c.height).data;
     let count=0;for(let i=3;i<d.length;i+=4)if(d[i]>0)count++;
     return count;
   }));
   assert(alpha.every(count=>count>4000),'Some small-sized Keeper renders are blank');
   await page.locator('#action').click();
   assert.equal(await page.locator('#action').getAttribute('aria-pressed'),'true');
   await page.locator('#motion').click();
   assert.equal(await page.locator('#motion').getAttribute('aria-pressed'),'true');
   await page.screenshot({path:path.join(root,'art-test-shots','keepers-'+viewport.width+'.png'),fullPage:true});
   assert.equal(errors.length,0,'Keeper gallery browser error: '+errors.join(' | '));
   console.log('PASS: '+viewport.width+'x'+viewport.height+' 24 Keeper gallery cards, phone-scale art, ability reaction and motion toggle');
   await page.close();
  }
  // Validate the actual shared six-creature art renderer at phone and desktop widths.
  for(const viewport of [{width:390,height:844},{width:1280,height:800}]){
   const page=await browser.newPage({viewport,reducedMotion:'reduce'});
   const errors=[];
   page.on('pageerror',e=>errors.push(e.message));
   await page.goto('http://127.0.0.1:'+server.address().port+'/creature-review.html',{waitUntil:'load'});
   await page.waitForTimeout(500);
   assert.equal(await page.locator('.card').count(),6,'All six character cards must render');
   assert(await page.evaluate(()=>!!window.PetriPanicCreatureArt?.preview),'Shared renderer is unavailable');
   const hashes=await page.locator('canvas').evaluateAll(canvases=>canvases.map(c=>{
    const data=c.getContext('2d').getImageData(0,0,c.width,c.height).data;
    let visible=0;for(let i=3;i<data.length;i+=4)if(data[i]>0)visible++;
    return visible;
   }));
   assert(hashes.every(v=>v>500),'One or more creature drawings are blank: '+JSON.stringify(hashes));
   await page.locator('[data-stage="ability"]').click();
   assert.equal(await page.locator('[data-stage="ability"]').getAttribute('aria-pressed'),'true');
   await page.locator('[data-stage="hurt"]').click();
   await page.locator('#motion').click();
   assert.equal(await page.locator('#motion').getAttribute('aria-pressed'),'true');
   await fs.mkdir(path.join(root,'art-test-shots'),{recursive:true});
   await page.screenshot({path:path.join(root,'art-test-shots','creatures-'+viewport.width+'.png'),fullPage:true});
   assert.equal(errors.length,0,'Creature gallery exceptions: '+errors.join(' | '));
   console.log('PASS: '+viewport.width+'x'+viewport.height+' all six creature artworks, ability/hurt modes, pause motion');
   await page.close();
  }
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;}).finally(()=>server.close());
