/* Petri Panic · creature character masters, November 2026.
   Original Canvas 2D artwork, shared between actual gameplay and the creature art review.
   Render-only: no combat, collision, saves, or economy rules are altered. */
(function(){
'use strict';
const TAU=Math.PI*2, INK='#624366';
const motion=(t,reduce)=>reduce?0:t;
function oval(c,x,y,rx,ry,fill,stroke='',lw=2){
 c.beginPath();c.ellipse(x,y,Math.max(.1,rx),Math.max(.1,ry),0,0,TAU);
 if(fill){c.fillStyle=fill;c.fill()}
 if(stroke){c.strokeStyle=stroke;c.lineWidth=lw;c.stroke()}
}
function line(c,points,color=INK,width=2.5){
 c.beginPath();points.forEach((p,i)=>i?c.lineTo(p[0],p[1]):c.moveTo(p[0],p[1]));
 c.strokeStyle=color;c.lineWidth=width;c.lineCap='round';c.lineJoin='round';c.stroke();
}
function shape(c,build,fill,stroke=INK,lw=2.5){
 c.beginPath();build(c);
 if(fill){c.fillStyle=fill;c.fill()}
 if(stroke){c.strokeStyle=stroke;c.lineWidth=lw;c.lineJoin='round';c.stroke()}
}
function twinkle(c,x,y,r,fill='#fff1a8'){
 shape(c,q=>{q.moveTo(x,y-r);q.quadraticCurveTo(x+r*.16,y-r*.16,x+r,y);
 q.quadraticCurveTo(x+r*.16,y+r*.16,x,y+r);
 q.quadraticCurveTo(x-r*.16,y+r*.16,x-r,y);
 q.quadraticCurveTo(x-r*.16,y-r*.16,x,y-r)},fill,'#b07d9a',1);
}
function leaf(c,x,y,rx,ry,turn,fill,stroke='#769f86'){
 c.save();c.translate(x,y);c.rotate(turn);
 shape(c,q=>{q.moveTo(0,-ry);q.quadraticCurveTo(rx*1.2,-ry*.3,0,ry);
 q.quadraticCurveTo(-rx*1.2,-ry*.3,0,-ry)},fill,stroke,2);
 line(c,[[0,-ry*.65],[0,ry*.7]],stroke,1.2);c.restore();
}
function crown(c,x,y,scale=1){
 c.save();c.translate(x,y);c.scale(scale,scale);
 shape(c,q=>{q.moveTo(-25,6);q.lineTo(-29,-15);q.lineTo(-13,-5);q.lineTo(0,-27);
 q.lineTo(13,-5);q.lineTo(29,-15);q.lineTo(25,6);q.closePath()},'#ffe9a8','#b18cbb',3);
 oval(c,0,-19,4.8,6.2,'#fb94bf','#a66b99',1.3);oval(c,-16,-4,3,3,'#fff');oval(c,16,-4,3,3,'#fff');
 c.restore();
}
function face(c,{y=0,span=20,wide=1,smile='mischief',blink=false,blush='#f4a8c6',wink=false}={}){
 for(const side of [-1,1]){
  const x=side*span;
  if(blink||(wink&&side===1)){
   shape(c,q=>{q.moveTo(x-5,y);q.quadraticCurveTo(x,y+5,x+5,y)},null,'#56405c',3.2);
  }else{
   oval(c,x,y,7.1*wide,9.3,'#fffcff','#6e5471',1.6);
   oval(c,x+side*.6,y+1,4.1*wide,6,'#494064');
   oval(c,x-1.4,y-2.7,2.1,2.7,'#fff');
  }
 }
 oval(c,-span-11,y+10,8,4.8,blush);
 oval(c,span+11,y+10,8,4.8,blush);
 if(smile==='o'){oval(c,0,y+14,5.2,6.3,'#9c5d81','#624366',1.7);oval(c,-1,y+16,2,1.4,'#ffd2e3');}
 else if(smile==='fang'){
  shape(c,q=>{q.moveTo(-9,y+12);q.quadraticCurveTo(0,y+25,9,y+12);q.quadraticCurveTo(0,y+17,-9,y+12)},'#a45a87','#624366',1.7);
  shape(c,q=>{q.moveTo(-6,y+14);q.lineTo(-2,y+20);q.lineTo(1,y+15)},'#fff',null);
 }else{
  shape(c,q=>{q.moveTo(-9,y+12);q.quadraticCurveTo(0,y+21,9,y+12)},null,'#75516e',3.2);
 }
}
function highlight(c,x=-17,y=-26){oval(c,x,y,11,6,'#ffffffaa');oval(c,x+12,y-8,3,3,'#fff')}
function drawPrism(c,e,t,weak,reduce){
 const time=motion(t,reduce),pulse=Math.sin(time*2.2),phase=(e.hp||1)/(e.maxHp||1);
 // A broad crystal-fan silhouette and a tiny royal sceptre.
 for(let i=0;i<9;i++){
  const angle=i*TAU/9 + (reduce?0:Math.sin(time*.8)*.035);
  c.save();c.rotate(angle);
  shape(c,q=>{q.moveTo(-16,-35);q.lineTo(-13,-64-(i%2)*7);q.lineTo(0,-85-(i%3)*5);
   q.lineTo(14,-62-(i%2)*6);q.lineTo(17,-35);q.closePath()},
   i%3===0?'#ffe4a4':i%2?'#bcb3f4':'#e9bce9','#9272ba',2.7);
  line(c,[[-9,-63],[0,-81],[9,-62]],'#ffffff91',2);
  c.restore();
 }
 c.save();c.rotate(-.08+pulse*.018);
 oval(c,0,7,48,49,'#9f8edb','#725b9e',4);
 oval(c,-8,-4,47,45,phase<.5?'#edb4df':'#d4c7f7','#745d9c',3.3);
 oval(c,-17,-20,19,9,'#fff9ff8c');
 // Crystal cheeks and a sweetly imperious face.
 face(c,{y:0,span:20,smile:phase<.5?'fang':'mischief',blush:'#faadd0',blink:!reduce&&(time%5.6<.14)});
 crown(c,0,-53,.85);
 for(const side of [-1,1]){oval(c,side*41,22,11,8,'#bcb1f0','#745d9c',2.5);}
 c.restore();
 const sx=56,sy=-34+(reduce?0:Math.sin(time*2)*3);
 line(c,[[44,14],[sx,sy+9]],'#9973bd',5);
 twinkle(c,sx,sy,15,'#ffe1a8');
 if(!reduce){twinkle(c,-72,-55,4+Math.sin(time*3)*1.4,'#fff7dd');twinkle(c,76,18,5,'#fff1c8');}
}
function drawSerpent(c,e,t,weak,reduce){
 const time=motion(t,reduce),sway=Math.sin(time*1.8),phase=e.hp/e.maxHp;
 // Segmented, curled botanical tail establishes an entirely different silhouette.
 for(let i=0;i<13;i++){
  const a=.1+i*.43;
  const rad=13+i*3.3;
  const x=-8+Math.cos(a)*rad,y=10+Math.sin(a)*rad*.84;
  const width=19-i*.65;
  oval(c,x,y,width,width*.87,i%2?'#b4d99e':'#8cc5a5','#628e77',2.3);
  if(i%3===1)oval(c,x-4,y-7,5,3,'#e9f1b6');
 }
 // Leaf fins and mushroom cap crest, moving independently of the body.
 c.save();c.translate(6,-10);c.rotate(reduce?0:sway*.055);
 leaf(c,-25,-28,14,27,-.45,'#a7d7ab');
 leaf(c,24,-32,14,29,.48,'#8cceae');
 shape(c,q=>{q.moveTo(-31,-39);q.quadraticCurveTo(-21,-67,0,-65);
 q.quadraticCurveTo(24,-68,34,-40);q.quadraticCurveTo(0,-30,-31,-39)},'#f8c0c6','#9b7e8b',3);
 for(const x of [-18,-4,15])oval(c,x,-48-(x===-4?9:0),4.7,4,'#fff6e6');
 oval(c,0,0,42,38,phase<.5?'#b2d39e':'#c7e4b3','#6a9d84',4);
 oval(c,-14,-17,16,7,'#f4ffe0a9');
 face(c,{y:-4,span:18,smile:phase<.5?'fang':'o',blush:'#f6a9bb',blink:!reduce&&(time%6.3<.15)});
 // Tiny inoculating tongue with a heart-shaped tip.
 line(c,[[0,19],[2,28],[7,32]],'#d77d9d',2.8);
 oval(c,8,32,3.5,3.2,'#f4a4bb');
 c.restore();
 if(!reduce){for(let j=0;j<3;j++){const yy=-45-j*12+(time*11%16);oval(c,50+j*12,yy,3+j,2.4,'#d5deb1');}}
}
function drawMoth(c,e,t,weak,reduce){
 const time=motion(t,reduce),flap=reduce?0:Math.sin(time*7.0)*.13;
 const wing=(side,upper)=>{
  c.save();c.scale(side,1);c.translate(13,4);c.rotate((upper?-1:1)*flap);
  shape(c,q=>{if(upper){q.moveTo(0,-8);q.bezierCurveTo(18,-81,83,-79,77,-40);
   q.bezierCurveTo(100,-19,73,1,42,2);q.quadraticCurveTo(12,11,0,-8)}
   else{q.moveTo(0,9);q.bezierCurveTo(62,-15,87,25,57,49);
   q.bezierCurveTo(31,73,13,45,0,9)}},
   upper?'#bbb0f2':'#d1b8ed','#746ba8',3.4);
  oval(c,upper?54:41,upper?-34:31,upper?19:12,upper?22:14,'#e9d5f7','#8582bd',2);
  oval(c,upper?54:41,upper?-34:31,upper?11:6,upper?13:7,'#8c88c5');
  oval(c,upper?54:41,upper?-34:31,upper?5:2,upper?6:3,'#fff6b6');
  c.restore();
 };
 wing(-1,true);wing(1,true);wing(-1,false);wing(1,false);
 // Lunar feelers and a velvet body, eyes always visible above the wings.
 for(const side of [-1,1]){
  shape(c,q=>{q.moveTo(side*9,-29);q.quadraticCurveTo(side*16,-54,side*33,-55)},null,'#756193',3.2);
  oval(c,side*33,-56,6,5,'#f5d8e9','#756193',1.6);
 }
 oval(c,0,3,31,43,'#aa9bd7','#756193',3);
 oval(c,-8,-8,28,34,'#e7d7f8','#756193',2.5);
 for(let j=0;j<3;j++)oval(c,0,20+j*8,9-j*1.2,4,'#b5a7db');
 face(c,{y:-13,span:13,wide:.75,smile:'mischief',blush:'#f6accc',blink:!reduce&&(time%5<.13)});
 oval(c,-20,-24,7,4,'#fff9ffe0');
 if(!reduce){twinkle(c,-72,50,4,'#eae3ff');twinkle(c,67,-58,5,'#fff3cd');}
}
function drawOmega(c,e,t,weak,reduce){
 const time=motion(t,reduce),pulse=Math.sin(time*2.7),phase=e.hp/e.maxHp;
 // Two offset rings form a big flower rather than an armored final boss.
 for(let layer=0;layer<2;layer++)for(let i=0;i<10;i++){
  const a=i*TAU/10+(layer?Math.PI/10:0)+(reduce?0:pulse*.018);
  const dist=layer?39:48,rx=layer?14:20,ry=layer?30:37;
  c.save();c.rotate(a);
  oval(c,0,-dist,rx,ry,layer?(i%2?'#ffe1c7':'#dfc1f2'):(i%2?'#f4afca':'#c5b3ea'),
  layer?'#b390bf':'#a979ac',2.6);
  oval(c,-5,-dist-12,5,9,'#ffffff65');
  c.restore();
 }
 for(let i=0;i<5;i++){
  const a=i*TAU/5+(reduce?0:time*.18);
  twinkle(c,Math.cos(a)*86,Math.sin(a)*72,4+i%2*2,'#fff4c9');
 }
 oval(c,0,0,49,48,'#ad85cb','#80619a',4);
 oval(c,-7,-7,45,42,phase<.5?'#ffd0ba':'#f8dce8','#b784b1',3.3);
 oval(c,-18,-22,18,9,'#fffbffb0');
 for(let k=0;k<6;k++)oval(c,Math.cos(k*TAU/6)*37,Math.sin(k*TAU/6)*34,5,6,'#ffe2a4');
 face(c,{y:-4,span:19,smile:phase<.5?'fang':'mischief',blush:'#f7a2bd',blink:!reduce&&(time%4.9<.14)});
 // A little seedling gives the final bloom a distinct topknot.
 leaf(c,-12,-53,12,21,-.55,'#a7d5af');
 leaf(c,12,-55,13,23,.55,'#c4deb2');
 twinkle(c,0,-58,9,'#ffeba1');
}
function drawVirus(c,e,t,reduce){
 const time=motion(t,reduce),r=e.r||21,scale=r/22; c.scale(scale,scale);
 const colour=e.hp<=1?'#ec7eaa':e.hp<4?'#bb92d6':'#977ac8';
 for(let j=0;j<10;j++){
  const a=j*TAU/10,wiggle=reduce?0:Math.sin(time*4+j)*2;
  c.save();c.rotate(a);
  shape(c,q=>{q.moveTo(-5,-17);q.quadraticCurveTo(-8,-28-wiggle,-3,-31-wiggle);
   q.quadraticCurveTo(4,-34-wiggle,6,-25-wiggle);q.lineTo(5,-16);q.closePath()},
   '#bba1dc','#765a9b',1.8);
  oval(c,0,-28-wiggle,3,3,'#e3b2e1');c.restore();
 }
 oval(c,0,0,24,23,colour,'#6b4b8b',3.5);
 oval(c,-10,-12,9,5,'#ffffffa3');
 oval(c,-9,-1,5.2,7,'#fff','#664881',1.5);
 oval(c,9,-1,5.2,7,'#fff','#664881',1.5);
 oval(c,-7,-1,2.5,4,'#5a4177');oval(c,7,-1,2.5,4,'#5a4177');
 line(c,[[-16,-13],[-4,-9]],'#664881',2.7);line(c,[[4,-9],[16,-13]],'#664881',2.7);
 shape(c,q=>{q.moveTo(-6,12);q.quadraticCurveTo(0,6,6,12)},null,'#6a477f',2.8);
 oval(c,-16,11,4,2.5,'#f5b2d3');oval(c,16,11,4,2.5,'#f5b2d3');
}
function drawMold(c,e,t,reduce){
 const time=motion(t,reduce),r=e.r||21; c.scale(r/21,r/21);
 for(let i=0;i<9;i++){
  const a=i*TAU/9,fluff=reduce?0:Math.sin(time*2.8+i)*1.6;
  oval(c,Math.cos(a)*19,Math.sin(a)*18,11+fluff,12+fluff,
   i%2?'#a8d7a5':'#83be93','#699776',2.1);
 }
 // Mossy sprouts, each with its own friendly little sway.
 c.save();c.rotate(reduce?0:Math.sin(time*2)*.06);
 line(c,[[0,-18],[0,-35]],'#719e7e',3);
 leaf(c,-8,-33,6,12,-.6,'#d1e7a6');
 leaf(c,9,-36,7,12,.7,'#b9dfab');c.restore();
 oval(c,0,0,22,22,e.hp<=1?'#dce0a1':'#a4d3aa','#61977b',3);
 oval(c,-10,-9,8,5,'#ffffff8c');
 oval(c,-7,-2,4,5.5,'#f9ffed','#5e826b',1.6);
 oval(c,7,-2,4,5.5,'#f9ffed','#5e826b',1.6);
 oval(c,-6,-1,2.3,3.3,'#4a6659');oval(c,8,-1,2.3,3.3,'#4a6659');
 oval(c,-15,9,4.4,2.8,'#f8afbc');oval(c,15,9,4.4,2.8,'#f8afbc');
 shape(c,q=>{q.moveTo(-6,9);q.quadraticCurveTo(0,15,6,9)},null,'#568372',2.6);
 oval(c,-14,-14,3.1,3.1,'#e1f0ad');oval(c,13,12,3.5,3.5,'#e1f0ad');
}
function weakSpot(c,r,t,reduce){
 const bob=reduce?0:Math.sin(t*10)*2;
 c.save();c.translate(0,-r-13+bob);
 const s=reduce?1:1+Math.sin(t*8)*.08;
 c.scale(s,s);
 oval(c,0,0,17,17,'#fff5c5','#d9a55d',3.3);
 shape(c,q=>{q.moveTo(0,9);q.bezierCurveTo(-21,-2,-9,-13,0,-5);
 q.bezierCurveTo(9,-13,21,-2,0,9)},'#f1a3ba','#bf698b',1.8);
 twinkle(c,0,-1,4,'#fff');
 c.restore();
}
function draw(c,e,elapsed=0,bossWeakTime=0,reduce=false){
 if(!c||!e||e.dead)return false;
 const isBoss=e.kind==='boss';
 const reduced=!!reduce;
 const time=motion(elapsed,reduced), wobble=reduced?0:Math.sin(time*3+(e.phase||0))*1.7;
 c.save();c.translate(e.x,e.y+wobble);
 if(!reduced)c.rotate(Math.sin((e.phase||0)*.6+time*.8)*(isBoss?.022:.052));
 if(isBoss){
  const scale=(e.r||65)/65;c.scale(scale,scale);
  const weak=bossWeakTime>0;
  switch(e.variant){
   case 'prism':drawPrism(c,e,time,weak,reduced);break;
   case 'serpent':drawSerpent(c,e,time,weak,reduced);break;
   case 'moth':drawMoth(c,e,time,weak,reduced);break;
   case 'omega':drawOmega(c,e,time,weak,reduced);break;
   default:drawOmega(c,e,time,weak,reduced);
  }
  if(weak)weakSpot(c,66,time,reduced);
 }else if(e.kind==='virus')drawVirus(c,e,time,reduced);
 else if(e.kind==='mold')drawMold(c,e,time,reduced);
 else {c.restore();return false}
 c.restore();return true;
}
// Safe art preview: same renderer, fake enemies, no change to actual game state.
function preview(c,type,elapsed=0,reduce=false,stage='idle'){
 const boss=['prism','serpent','moth','omega'].includes(type);
 const e={kind:boss?'boss':type,variant:boss?type:null,x:150,y:150,
  r:boss?65:21,maxHp:20,hp:stage==='hurt'?6:20,phase:elapsed,dead:false};
 if(!boss){c.save();c.translate(150,150);c.scale(2.2,2.2);c.translate(-150,-150);}
 const result=draw(c,e,elapsed,boss&&stage==='ability'?1:0,reduce);
 if(!boss)c.restore();
 return result;
}
window.PetriPanicCreatureArt=Object.freeze({draw,preview,version:'2026.11'});
})();
