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
   await page.locator('#game').click({position:{x:170,y:160},force:true});
   await page.locator('#shopToggle').click();
   assert(await page.locator('#supplyPanel').evaluate(el=>el.classList.contains('shopping')),'Shop did not open');
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
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;}).finally(()=>server.close());
