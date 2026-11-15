/* Petri Panic — canvas visual polish for living Globs and the culture dish.
   Purely visual: no scoring, health, save or win-condition state is changed.
   Every effect is drawn directly in the existing game canvas, never a mockup. */
(function(){
'use strict';
const colors={
 water:['#7ac9ee','#c8f5ff','#ffffff'],
 feed:['#ed89bd','#fff6da','#9ce6d8'],
 collect:['#f6c257','#fff0b4','#ffffff'],
 grow:['#cf86bf','#fff3d2','#9fe4d6'],
 shop:['#e8a2ca','#fff3bd','#ffffff']
};
const eraTones=[
 ['#e1a87c','#f8e6c6'],['#e8bc65','#e9fff1'],
 ['#91bbe6','#f0edff'],['#8fceb8','#e8ffd9'],
 ['#bda9ef','#f7e9ff']
];
const cap=120;
let sparks=[],rings=[],currentEra=null,previousEra=null,eraFade=0;
const reduce=()=>!!(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches);
const clamp=(x,lo=0,hi=1)=>Math.max(lo,Math.min(hi,x));
function ellipse(c,x,y,rx,ry,fill){c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);c.fillStyle=fill;c.fill();}
function sparkle(c,r){
 c.beginPath();c.moveTo(0,-r);c.quadraticCurveTo(r*.22,-r*.22,r,0);
 c.quadraticCurveTo(r*.22,r*.22,0,r);c.quadraticCurveTo(-r*.22,r*.22,-r,0);
 c.quadraticCurveTo(-r*.22,-r*.22,0,-r);c.fill();
}
function heart(c,r){
 c.beginPath();c.moveTo(0,r*.8);
 c.bezierCurveTo(-r*1.5,-r*.12,-r*.83,-r*1.15,0,-r*.58);
 c.bezierCurveTo(r*.83,-r*1.15,r*1.5,-r*.12,0,r*.8);c.fill();
}
function droplet(c,r){
 c.beginPath();c.moveTo(0,-r);
 c.bezierCurveTo(-r*.55,-r*.2,-r*.92,r*.34,-r*.55,r*.8);
 c.quadraticCurveTo(0,r*1.3,r*.55,r*.8);
 c.bezierCurveTo(r*.92,r*.34,r*.55,-r*.2,0,-r);c.fill();
}
function flower(c,r){
 for(let k=0;k<5;k++){
  const a=k*Math.PI*2/5;c.save();c.rotate(a);
  ellipse(c,0,-r*.68,r*.38,r*.62,'#f6b5d7');c.restore();
 }
 ellipse(c,0,0,r*.4,r*.4,'#fff4c6');
}
function create(type,x,y,scale=1){
 if(!colors[type])return;
 const still=reduce();
 const count=still?2:type==='grow'?15:type==='feed'?9:12;
 const palette=colors[type];
 for(let i=0;i<count;i++){
  const a=i/count*Math.PI*2+(i%3)*.23;
  const speed=(type==='water'?56:type==='collect'?92:65)*(0.7+(i%4)*.16)*scale;
  sparks.push({kind:type,x,y,dx:still?0:Math.cos(a)*speed,dy:still?0:Math.sin(a)*speed-(type==='collect'?28:16),
   life:still?.28:.64+(i%4)*.075,max:still?.28:.64+(i%4)*.075,
   size:(type==='feed'?3.7:4.2)+(i%3)*1.15,color:palette[i%3],angle:a,spin:(i%2?1:-1)*2.8});
 }
 if(sparks.length>cap)sparks.splice(0,sparks.length-cap);
 rings.push({kind:type,x,y,r:type==='water'?10:16,life:still?.28:.56,max:still?.28:.56});
 if(rings.length>18)rings.shift();
}
function water(x,y){create('water',x,y);}
function feed(x,y){create('feed',x,y,.78);}
function collect(x,y,large=false){create('collect',x,y,large?1.25:.8);}
function grow(x,y){create('grow',x,y,1.2);}
function shop(x,y){create('shop',x,y,.9);}
function changeEra(n){
 if(!Number.isInteger(n)||n<0||n>4)return;
 if(currentEra===null){currentEra=n;return;}
 if(currentEra!==n){previousEra=currentEra;currentEra=n;eraFade=1.1;}
}
function update(dt){
 const delta=Math.max(0,Math.min(.05,dt||0));
 for(const p of sparks){
  p.life-=delta;
  if(!reduce()){p.x+=p.dx*delta;p.y+=p.dy*delta;p.dy+=48*delta;p.dx*=1-delta*.8;p.angle+=p.spin*delta;}
 }
 sparks=sparks.filter(p=>p.life>0);
 for(const p of rings)p.life-=delta;
 rings=rings.filter(p=>p.life>0);
 eraFade=Math.max(0,eraFade-delta);
}
function reset(){sparks=[];rings=[];eraFade=0;}
function ambient(c,era,t){
 const tone=eraTones[era]||eraTones[0],still=reduce();
 c.save();
 for(let i=0;i<12;i++){
  const a=i*Math.PI*2/12+.2;
  const x=450+Math.cos(a)*(305+(i%3)*11);
  const y=310+Math.sin(a)*(196+(i%3)*7);
  const yOffset=still?0:Math.sin(t*.68+i*.91)*5.5;
  const size=1.8+(i%3)*.8;
  c.save();c.translate(x,y+yOffset);
  c.globalAlpha=.24+(still?0:.08*Math.sin(t*.91+i));
  c.fillStyle=tone[i%2];
  if(era===0){ // Victorian: soft suspended botanical petals.
   c.rotate(a);ellipse(c,0,0,size*1.1,size*2.5,tone[i%2]);
  }else if(era===1){ // Atomic: micro bubbles in a sealed chamber.
   c.beginPath();c.arc(0,0,size*1.45,0,Math.PI*2);c.strokeStyle=tone[0];c.lineWidth=1.6;c.stroke();
   ellipse(c,-.7,-.8,1,1,tone[1]);
  }else if(era===2){sparkle(c,size*2.2);}
  else if(era===3){c.rotate(a);ellipse(c,0,-2,size*1.4,size*2.5,tone[i%2]);}
  else{c.rotate(a);c.strokeStyle=tone[0];c.lineWidth=1.8;c.strokeRect(-size*1.7,-size*1.7,size*3.4,size*3.4);}
  c.restore();
 }
 c.restore();
}
function eraOverlay(c){
 if(eraFade<=0||currentEra===null)return;
 c.save();
 const amount=clamp(eraFade/1.1),tone=eraTones[currentEra];
 const glow=c.createRadialGradient(450,310,130,450,310,470);
 glow.addColorStop(0,'rgba(255,255,255,0)');
 glow.addColorStop(.78,'rgba(255,255,255,0)');
 glow.addColorStop(1,tone[0]);
 c.globalAlpha=amount*.19;
 c.fillStyle=glow;c.fillRect(0,0,900,620);
 c.restore();
}
function underGlob(c,g,r,t){
 if(!g||!Number.isFinite(g.x))return;
 const still=reduce();
 c.save();
 // Soft contact shadow makes walking/bobbing characters feel attached to the dish.
 const hop=still?0:Math.max(0,Math.sin(g.phase*2.4))*(g.feedSmileTime>0?3:1.8);
 c.globalAlpha=.17;c.fillStyle='#ad6794';c.beginPath();
 c.ellipse(g.x,g.y+r*.82+hop,r*.78,r*.18,0,0,Math.PI*2);c.fill();
 if(g.feedSmileTime>0){
  const w=clamp(g.feedSmileTime/.85);
  c.globalAlpha=.33*w;
  c.strokeStyle='#f1a2c4';c.lineWidth=2;
  c.beginPath();c.arc(g.x,g.y,r+5+(still?0:(1-w)*4),0,Math.PI*2);c.stroke();
 }
 c.restore();
}
function overGlob(c,g,r,t){
 if(!g||!g.feedSmileTime||g.feedSmileTime<=0)return;
 const w=clamp(g.feedSmileTime/.85),still=reduce();
 c.save();c.translate(g.x,g.y-r-8);
 c.globalAlpha=.8*w;c.fillStyle='#df6da9';
 for(let i=0;i<2;i++){
  c.save();c.translate((i?1:-1)*(r*.68+1),-(i?1:5)-(still?0:(1-w)*9));
  c.rotate((i?.2:-.15));heart(c,4.2);c.restore();
 }
 c.restore();
}
function drawWater(c,w,t){
 if(!w)return false;
 const life=clamp(w.life/8),still=reduce(),breathe=still?0:Math.sin(t*4+w.phase)*.075;
 const r=w.r*(1+breathe);
 c.save();c.translate(w.x,w.y);
 c.globalAlpha=Math.min(.88,life*.85);
 const grad=c.createRadialGradient(-r*.32,-r*.35,0,0,0,r*1.28);
 grad.addColorStop(0,'#ffffff');grad.addColorStop(.40,'#d1f7ff');grad.addColorStop(1,'#75bee9');
 c.fillStyle=grad;c.strokeStyle='#68aacf';c.lineWidth=1.7;
 c.beginPath();c.ellipse(0,0,r,r*.86,0,0,Math.PI*2);c.fill();c.stroke();
 c.globalAlpha=.85*life;
 ellipse(c,-r*.30,-r*.27,r*.25,r*.15,'#fff');
 ellipse(c,r*.30,r*.29,r*.11,r*.08,'#d9f7ff');
 c.restore();
 return true;
}
function drawBioBit(c,b,t){
 if(!b)return false;
 const r=b.r||12,still=reduce(),bounce=still?0:Math.sin(b.phase)*.8;
 c.save();c.translate(b.x,b.y+bounce);
 c.globalAlpha=clamp(b.life/1.1,0,1);
 if(b.star){
  c.fillStyle='#fff7c4';c.strokeStyle='#daa65d';c.lineWidth=2;
  c.save();c.scale(1.5,1.5);sparkle(c,r*.84);c.restore();
  c.fillStyle='#f5c953';sparkle(c,r*.62);
 }else{
  const grad=c.createRadialGradient(-r*.25,-r*.35,1,0,0,r*1.2);
  grad.addColorStop(0,'#fffefa');grad.addColorStop(.3,'#ffefad');grad.addColorStop(1,'#e7aa55');
  c.fillStyle=grad;c.strokeStyle='#d5a05e';c.lineWidth=1.6;
  c.beginPath();c.arc(0,0,r,0,Math.PI*2);c.fill();c.stroke();
  c.fillStyle='#fff9d5';sparkle(c,r*.48);
  c.globalAlpha=.87;ellipse(c,-r*.35,-r*.42,r*.28,r*.16,'#fff');
 }
 c.restore();return true;
}
function draw(c){
 const still=reduce();
 c.save();
 for(const p of rings){
  const q=clamp(p.life/p.max),k=still?0:1-q;
  c.globalAlpha=q*.53;c.strokeStyle=(colors[p.kind]||colors.feed)[0];
  c.lineWidth=p.kind==='water'?2.7:2.2;
  c.beginPath();c.arc(p.x,p.y,p.r+k*23,0,Math.PI*2);c.stroke();
 }
 for(const p of sparks){
  c.save();c.translate(p.x,p.y);c.rotate(still?0:p.angle);
  c.globalAlpha=clamp(p.life/p.max)*.94;c.fillStyle=p.color;
  if(p.kind==='feed'||p.kind==='shop')heart(c,p.size);
  else if(p.kind==='water')droplet(c,p.size);
  else sparkle(c,p.size);
  c.restore();
 }
 c.restore();
}
window.PetriPanicJuice=Object.freeze({water,feed,collect,grow,shop,changeEra,update,reset,ambient,eraOverlay,underGlob,overGlob,draw,drawWater,drawBioBit});
})();
