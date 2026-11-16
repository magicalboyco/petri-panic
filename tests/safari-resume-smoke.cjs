'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs/promises'),path=require('node:path');
const {createServer}=require('node:http');
const {webkit}=require('playwright');
const root=path.resolve(__dirname,'..');
const server=createServer(async(req,res)=>{
 try{
  const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  const file=path.resolve(root,pathname==='/'?'index.html':pathname.replace(/^\//,''));
  if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return}
  const bytes=await fs.readFile(file);
  const ext=path.extname(file);res.writeHead(200,{'Content-Type':ext==='.js'?'text/javascript':ext==='.html'?'text/html':ext==='.svg'?'image/svg+xml':'application/octet-stream'}).end(bytes);
 }catch(e){res.writeHead(404).end()}
});
(async()=>{
 await new Promise(done=>server.listen(0,'127.0.0.1',done));
 const browser=await webkit.launch({headless:true});
 try{
  const page=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true,reducedMotion:'reduce'});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:'+server.address().port+'/',{waitUntil:'load'});
  assert.equal(await page.locator('#runCheck').evaluate(el=>getComputedStyle(el).display),'none','WebKit initialization failed');
  await page.locator('#play').click();
  await page.locator('#chooseRegular').click();
  await page.locator('#play').click();
  if(await page.locator('#storyScreen').isVisible())await page.locator('#storySkip').click();
  assert(await page.locator('#overlay').isHidden(),'WebKit game did not start');
  await page.locator('#shopToggle').click();
  const shop=await page.locator('#supplyPanel').evaluate(el=>({rect:el.getBoundingClientRect().toJSON(),pos:getComputedStyle(el).position}));
  assert.equal(shop.pos,'fixed','WebKit shop must use fixed positioning');
  assert(shop.rect.top>=0&&shop.rect.top<250&&shop.rect.bottom<=848,'WebKit shop does not fit screen');
  assert(await page.locator('#shopClose').isVisible());
  await page.locator('#shopClose').click();
  assert(!await page.locator('#supplyPanel').evaluate(el=>el.classList.contains('shopping')));
  await page.locator('#pause').click();
  assert(await page.locator('#overlay').isVisible(),'WebKit pause missing');
  assert(!await page.locator('#continueRun').isVisible(),'Do not show redundant Continue on pause');
  await page.locator('#play').click();
  assert(await page.locator('#overlay').isHidden(),'WebKit Resume did not return to game');
  await page.locator('#pause').click();
  await page.reload({waitUntil:'load'});
  assert(await page.locator('#continueRun').isVisible(),'WebKit checkpoint missing on reload');
  await page.locator('#continueRun').click();
  assert(await page.locator('#overlay').isHidden(),'WebKit Continue did not restore game');
  assert.equal(errors.length,0,'WebKit errors: '+errors.join(' | '));
  console.log('PASS: WebKit phone 390x844 startup, fixed shop, close, pause/resume, saved checkpoint reload and continue');
  await page.close();
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1}).finally(()=>server.close());
