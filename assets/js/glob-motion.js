/* Petri Panic • Glob personality animation rig, v1.
   Hand-authored, deterministic Canvas 2D decoration. NO gameplay mutations.
   The three personalities are visually identifiable even with animation disabled.
   Personality 0: Shy Petal • 1: Sweetheart • 2: Busy Bubble. */
(function(){
'use strict';
const clamp=(x,a=0,b=1)=>Math.max(a,Math.min(b,x));
const TAU=Math.PI*2;
const names=Object.freeze(['Shy Petal','Sweetheart','Busy Bubble']);
const moods=Object.freeze(['healthy','thirsty','injured','poisoned']);
const reduced=()=>typeof matchMedia==='function'&&matchMedia('(prefers-reduced-motion: reduce)').matches;
function pose(g,t=0,still=reduced()){
 const type=Number.isInteger(g.personality)?g.personality:1;
 const hungry=g.hunger>=24;
 const injured=g.hurtTimer>0||(g.hp!=null&&g.maxHp!=null&&g.hp<g.maxHp*.65);
 const sick=g.poison>0;
 const velocity=clamp(Math.hypot(g.vx||0,g.vy||0)/65);
 const phase=(g.face||0)*.67;
 const pulse=still?0:Math.sin(t*(type===2?6.0:type===1?2.5:1.6)+phase);
 const step=still?0:Math.sin(t*4.2+phase);
 const energy=(sick||injured)?.25:hungry?.55:1;
 if(type===0){
  // Shy petal: looks away, tucks in, and makes very small measured movements.
  return {x:still?0:step*.55,y:still?0:1.5+Math.max(0,pulse)*.65,tilt:still?-.035:-.035+pulse*.012,
   sx:.965+(still?0:pulse*.009),sy:1.035+(still?0:-pulse*.009),
   gaze:still?-.4:-.4+step*.18,kind:'shy'};
 }
 if(type===2){
  // Busy bubble: spring-loaded upward hops on movement, and eager side-to-side attention.
  const hop=still?0:Math.pow(Math.max(0,pulse),2)*(1.6+2.7*velocity)*energy;
  return {x:still?0:step*.95*energy,y:-hop,tilt:still?.06:pulse*.056*energy,
   sx:1.015+(still?0:-pulse*.028*energy),sy:.985+(still?0:pulse*.035*energy),
   gaze:still?.32:step*.39,kind:'busy'};
 }
 // Sweetheart: rhythmic breathing, a slow welcoming sway, and symmetrical posture.
 return {x:still?0:step*.5,y:still?0:Math.sin(t*2.2+phase)*1.2*energy,tilt:still?0:pulse*.028*energy,
  sx:1+(still?0:pulse*.014*energy),sy:1-(still?0:pulse*.012*energy),
  gaze:still?0:step*.13,kind:'sweet'};
}
function oval(c,x,y,rx,ry,fill,stroke='',line=1.6){
 c.beginPath();c.ellipse(x,y,rx,ry,0,0,TAU);
 c.fillStyle=fill;c.fill();if(stroke){c.lineWidth=line;c.strokeStyle=stroke;c.stroke();}
}
function line(c,pts,color='#8a5b84',width=2){
 c.beginPath();pts.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));
 c.strokeStyle=color;c.lineWidth=width;c.lineCap='round';c.lineJoin='round';c.stroke();
}
function petal(c,x,y,rot,fill,edge){
 c.save();c.translate(x,y);c.rotate(rot);
 c.beginPath();c.moveTo(0,0);
 c.bezierCurveTo(-6,-5,-5,-12,0,-16);
 c.bezierCurveTo(7,-9,6,-3,0,0);
 c.fillStyle=fill;c.fill();c.strokeStyle=edge;c.lineWidth=1.3;c.stroke();
 c.restore();
}
function heart(c,x,y,r,fill){
 c.save();c.translate(x,y);c.scale(r/9,r/9);
 c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-14,-1,-9,-11,0,-5);
 c.bezierCurveTo(9,-11,14,-1,0,8);c.closePath();
 c.fillStyle=fill;c.fill();c.restore();
}
function drop(c,x,y,r,fill){
 c.save();c.translate(x,y);c.scale(r/10,r/10);
 c.beginPath();c.moveTo(0,-11);
 c.bezierCurveTo(-5,-4,-10,2,-6,7);c.quadraticCurveTo(0,13,6,7);
 c.bezierCurveTo(10,2,5,-4,0,-11);c.closePath();
 c.fillStyle=fill;c.fill();c.restore();
}
function spark(c,x,y,r,fill){
 c.save();c.translate(x,y);
 c.beginPath();c.moveTo(0,-r);c.quadraticCurveTo(r*.19,-r*.18,r,0);
 c.quadraticCurveTo(r*.19,r*.18,0,r);c.quadraticCurveTo(-r*.19,r*.18,-r,0);
 c.quadraticCurveTo(-r*.19,-r*.18,0,-r);
 c.fillStyle=fill;c.fill();c.restore();
}
function details(c,g,r,t=0,p=pose(g,t),still=reduced()){
 // Called AFTER the original Glob drawing. Coordinates are global dish pixels.
 const x=g.x+(p.x||0),y=g.y+(p.y||0);
 const type=g.personality||0;
 const injured=g.hurtTimer>0||(g.hp!=null&&g.maxHp!=null&&g.hp<g.maxHp*.65);
 const thirsty=g.hunger>=24,veryThirsty=g.hunger>=38,poisoned=g.poison>0;
 const sway=still?0:Math.sin(t*(type===2?5:2)+g.face*.43);
 c.save();c.translate(x,y);c.lineCap='round';c.lineJoin='round';
 // PERSONALITY MARKS: silhouette accessories, not merely different colors.
 if(type===0){
  // Folded blush-colored petals shield the cheeks on this bashful Glob.
  petal(c,-r*.93,r*.09,-.85+sway*.035,'#f8c7e3','#c878ab');
  petal(c,r*.91,r*.1,.8-sway*.035,'#f8c7e3','#c878ab');
  line(c,[[-r*.20,-r*.92],[-r*.06,-r*.98],[r*.04,-r*.94]],'#bb77a6',1.5);
 }else if(type===1){
  // Friendly Glob wears a little heart-shaped sweetheart crest.
  heart(c,0,-r*.89,Math.max(5,r*.28),'#fff4bc');
  spark(c,-r*.88,-r*.50,Math.max(2.4,r*.12),'#ffe7ef');
  spark(c,r*.9,-r*.43,Math.max(2.4,r*.12),'#ffe7ef');
 }else{
  // Busy Glob has pointed upward antenna/petals and a small trailing speed ribbon.
  petal(c,-r*.43,-r*.77,-.33+sway*.05,'#e5b1e5','#a06eab');
  petal(c,r*.36,-r*.77,.31-sway*.05,'#e5b1e5','#a06eab');
  if(!still&&!injured&&!thirsty&&!poisoned&&Math.hypot(g.vx||0,g.vy||0)>22){
   c.globalAlpha=.6;
   line(c,[[-r-7,-5],[-r-2,-6]],'#ae7fbc',2);
   line(c,[[-r-8,3],[-r-1,2]],'#ae7fbc',1.8);
   c.globalAlpha=1;
  }
 }
 // MOOD MARKERS: small but readable on a 390px phone. No rapid flashes.
 if(thirsty&&!poisoned){
  // Curling/wilting leaf and an outlined water-drop badge, above the left cheek.
  c.save();c.translate(-r*.9,-r*.86);
  oval(c,0,0,Math.max(6,r*.28),Math.max(6,r*.28),'#fff9fd','#ba89aa',1.6);
  drop(c,0,0,Math.max(4,r*.19),'#68b8d8');
  c.restore();
  if(veryThirsty){
   c.globalAlpha=.75;
   line(c,[[-r*.85,r*.70],[-r*.73,r*.93]],'#b18ea6',1.7);
   line(c,[[r*.80,r*.68],[r*.69,r*.94]],'#b18ea6',1.7);
   c.globalAlpha=1;
  }
 }
 if(injured){
  // Real bandage instead of a flashing damage ring. Visible across every personality.
  c.save();c.translate(r*.48,-r*.74);c.rotate(-.33);
  c.fillStyle='#fff6e4';c.strokeStyle='#bb879b';c.lineWidth=1.2;
  c.beginPath();c.roundRect(-Math.max(5.5,r*.31),-4,Math.max(11,r*.63),8,3);c.fill();c.stroke();
  oval(c,0,0,2,2,'#e7adba');oval(c,-4,0,.7,.7,'#bf9ba5');oval(c,4,0,.7,.7,'#bf9ba5');
  c.restore();
  c.globalAlpha=.52;
  line(c,[[r*.8,r*.32],[r*.98,r*.54]],'#a979a5',1.8);
  c.globalAlpha=1;
 }
 if(poisoned){
  // Distinct mint-green bubble cluster so poisoning is not confused with thirst.
  oval(c,r*.83,-r*.76,4.4,4.4,'#d8f5ae','#7bba8b',1.5);
  oval(c,r*1.05,-r*.96,2.5,2.5,'#d8f5ae','#7bba8b',1);
 }
 c.restore();
}
window.PetriPanicGlobMotion=Object.freeze({pose,details,names,moods,reduced});
})();
