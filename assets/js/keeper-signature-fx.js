/* Petri Panic — 24 hand-authored Keeper signature motifs.
   A lightweight drawing layer, shared by live play and the review studio.
   No DOM, timers, random numbers or saved-state mutations. */
(function(){
'use strict';
const themes={
 scuttle:['#d98dab','#fff4df'],bouncer:['#638dcb','#eaf5ff'],
 nurse:['#dc83ae','#ffeaf4'],feeder:['#54b7d4','#e8fbff'],
 spark:['#d6a552','#fff9d8'],nursery:['#d78fba','#fff0f8'],
 comfort:['#dc88a8','#fff3e3'],moldguard:['#9b80bd','#f4edff'],
 magnet:['#917acc','#f3edff'],growth:['#70ac82','#effbe4'],
 purify:['#61a58b','#edffe9'],ward:['#85afdb','#f0faff'],
 shield:['#8997ce','#f4edff'],savings:['#b58f90','#fff8ec'],
 beacon:['#a18bc9','#f8f2ff'],forecast:['#9786c6','#faf4ff'],
 ray:['#d2a153','#fffad9'],float:['#d884b5','#fff2fa'],
 nectar:['#d58ca0','#fff2e4'],twirl:['#a58cda','#f8f3ff'],
 cookie:['#ca96ad','#fff7e9'],breeze:['#6aa99b','#eafaf3'],
 wish:['#d7a4c1','#fffae4'],mimic:['#90a2b9','#f2ffe9']
};
function ring(c,x,y,r,fill,stroke,width=2){c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.fillStyle=fill;c.fill();if(stroke){c.strokeStyle=stroke;c.lineWidth=width;c.stroke();}}
function oval(c,x,y,rx,ry,fill){c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);c.fillStyle=fill;c.fill();}
function path(c,points,fill=true){
 c.beginPath();for(let i=0;i<points.length;i++){const [x,y]=points[i];i?c.lineTo(x,y):c.moveTo(x,y);}
 if(fill){c.closePath();c.fill();}c.stroke();
}
function heart(c){c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-14,1,-11,-9,-4,-7);c.quadraticCurveTo(0,-6,0,-2);c.quadraticCurveTo(4,-11,9,-7);c.bezierCurveTo(16,1,7,6,0,8);c.closePath();c.fill();c.stroke();}
function star(c,n=5){c.beginPath();for(let i=0;i<n*2;i++){const a=-Math.PI/2+i*Math.PI/n,r=i%2?4.5:10;i?c.lineTo(Math.cos(a)*r,Math.sin(a)*r):c.moveTo(Math.cos(a)*r,Math.sin(a)*r);}c.closePath();c.fill();c.stroke();}
function leaf(c){c.beginPath();c.moveTo(0,9);c.bezierCurveTo(-12,0,-10,-10,5,-9);c.bezierCurveTo(12,3,8,8,0,9);c.closePath();c.fill();c.stroke();c.beginPath();c.moveTo(-2,6);c.quadraticCurveTo(2,0,6,-6);c.stroke();}
function drop(c){c.beginPath();c.moveTo(0,-12);c.bezierCurveTo(-5,-4,-10,2,-7,7);c.bezierCurveTo(-4,13,4,13,7,7);c.bezierCurveTo(10,2,5,-4,0,-12);c.closePath();c.fill();c.stroke();}
function shield(c){path(c,[[-9,-9],[0,-12],[9,-9],[8,3],[0,11],[-8,3]]);}
function swirl(c){c.beginPath();c.arc(0,0,9,Math.PI*.3,Math.PI*2.0);c.arc(1,-1,4.5,-.1,Math.PI*1.55,true);c.stroke();}
function icon(c,id,x,y,size=22){
 if(!themes[id])return false;
 c.save();c.translate(x,y);c.scale(size/26,size/26);
 c.lineCap='round';c.lineJoin='round';c.lineWidth=2.6;
 c.strokeStyle='#5b435d';c.fillStyle=themes[id][1];
 switch(id){
  case 'scuttle':
   swirl(c);ring(c,4,-3,2,'#edb3cd');break;
  case 'bouncer':shield(c);path(c,[[-3,-1],[0,3],[5,-4]],false);break;
  case 'nurse':heart(c);path(c,[[0,-4],[0,3]],false);path(c,[[-4,-.5],[4,-.5]],false);break;
  case 'feeder':drop(c);ring(c,-2,3,1.8,'#fff');break;
  case 'spark':star(c,6);ring(c,0,0,1.9,'#fff');break;
  case 'nursery':heart(c);ring(c,0,1,3,'#f7a9c9');break;
  case 'comfort':
   for(let i=0;i<6;i++){const a=i*Math.PI/3;ring(c,Math.cos(a)*6,Math.sin(a)*6,4.3,i%2?'#efb1cc':'#ffd3df');}
   ring(c,0,0,4,'#ffeeb0','#5b435d',1.2);break;
  case 'moldguard':
   path(c,[[-7,-8],[7,-8],[6,-2],[-6,-2]]);
   for(let i=-1;i<=1;i++){c.beginPath();c.moveTo(i*5,-2);c.lineTo(i*4,10);c.stroke();}
   break;
  case 'magnet':
   c.beginPath();c.arc(0,-1,8,Math.PI,0);c.lineTo(8,9);c.lineTo(3,9);c.lineTo(3,0);c.arc(0,0,3,0,Math.PI,true);c.lineTo(-3,9);c.lineTo(-8,9);c.closePath();c.fill();c.stroke();break;
  case 'growth':
   c.beginPath();c.moveTo(0,11);c.lineTo(0,-4);c.stroke();
   c.save();c.translate(-5,-3);c.rotate(-.7);leaf(c);c.restore();
   c.save();c.translate(5,-5);c.rotate(1.2);leaf(c);c.restore();break;
  case 'purify':
   c.beginPath();c.moveTo(-3,11);c.quadraticCurveTo(2,-1,6,-9);c.stroke();
   for(let i=0;i<3;i++){c.save();c.translate(-3+i*3,8-i*7);c.scale(.52,.52);c.rotate(i%2?1:-1);leaf(c);c.restore();}break;
  case 'ward':
   for(const [x,y,r] of [[-5,0,5],[1,-5,7],[7,1,5]])ring(c,x,y,r,'#f5fbff');
   c.beginPath();c.moveTo(-9,5);c.lineTo(10,5);c.stroke();break;
  case 'shield':
   shield(c);star(c,4);break;
  case 'savings':
   c.beginPath();c.moveTo(-9,3);c.quadraticCurveTo(0,-8,9,3);c.quadraticCurveTo(0,15,-9,3);c.fill();c.stroke();
   ring(c,0,3,4,'#fffaf9','#a87996',1.1);break;
  case 'beacon':
   ring(c,0,0,9,'#dabbe9');
   ring(c,5,-4,8,'#f8f2ff');
   ring(c,8,6,1.6,'#f5d785');break;
  case 'forecast':
   c.beginPath();c.moveTo(-11,0);c.quadraticCurveTo(0,-12,11,0);c.quadraticCurveTo(0,12,-11,0);c.fill();c.stroke();
   ring(c,0,0,4,'#a89dce');ring(c,1,-1,1.3,'#fff');break;
  case 'ray':path(c,[[1,-12],[-7,1],[-1,1],[-4,11],[9,-4],[2,-4]]);break;
  case 'float':
   c.beginPath();c.ellipse(0,-3,7.5,9,0,0,Math.PI*2);c.fill();c.stroke();
   path(c,[[-2,7],[2,7],[0,10]]);c.beginPath();c.moveTo(0,10);c.quadraticCurveTo(4,13,0,14);c.stroke();break;
  case 'nectar':
   c.save();c.rotate(-.35);path(c,[[-7,-7],[7,-7],[7,7],[-7,7]]);
   path(c,[[-7,-5],[-12,-9],[-12,9],[-7,5]]);
   path(c,[[7,-5],[12,-9],[12,9],[7,5]]);c.restore();break;
  case 'twirl':swirl(c);c.beginPath();c.moveTo(0,-11);c.lineTo(4,-14);c.stroke();break;
  case 'cookie':
   path(c,[[-9,-4],[-4,-9],[4,-9],[9,-4],[9,4],[4,9],[-4,9],[-9,4]]);
   path(c,[[-4,0],[4,0]],false);path(c,[[0,-4],[0,4]],false);break;
  case 'breeze':
   for(let i=-1;i<=1;i++){c.beginPath();c.moveTo(-10,i*6);c.bezierCurveTo(-3,i*6-5,4,i*6+5,9,i*6);c.stroke();}
   break;
  case 'wish':
   star(c,5);c.beginPath();c.moveTo(-10,9);c.lineTo(-13,12);c.stroke();break;
  case 'mimic':
   c.beginPath();c.arc(0,0,8,-.9,Math.PI*1.15);c.stroke();
   path(c,[[7,-9],[10,-3],[4,-4]]);
   c.beginPath();c.moveTo(-7,9);c.lineTo(-10,4);c.lineTo(-3,5);c.stroke();break;
 }
 c.restore();return true;
}
function before(c,g,t=0,reduced=false){
 if(!themes[g?.id])return false;
 const [tone]=themes[g.id],active=Math.max(0,Math.min(1,g.keeperFlash||0));
 const step=reduced?0:Math.sin(t*2+g.x*.012);
 c.save();
 // Grounding watercolor shadow, separated from the eyes and silhouette.
 c.globalAlpha=.13+.065*active;
 oval(c,g.x,g.y+34,26+step*.7,6.5,tone);
 if(active>0){
  c.globalAlpha=.18*active;
  ring(c,g.x,g.y-2,34+3*(1-active),tone);
 }
 c.restore();return true;
}
function after(c,g,t=0,reduced=false){
 if(!themes[g?.id])return false;
 const [tone,light]=themes[g.id],flash=Math.max(0,Math.min(1,(g.keeperFlash||0)/.6));
 const drift=reduced?0:Math.sin(t*2.35+g.x*.027)*1.8;
 const px=g.x+29,py=g.y-31+drift;
 c.save();
 if(flash>.02){
  const rise=reduced?0:(1-flash)*6;
  const scale=.7+.3*Math.min(1,flash*3);
  c.globalAlpha=Math.min(1,.5+flash*.5);
  c.translate(px,py-rise);c.scale(scale,scale);
  ring(c,0,0,14,light,tone,2.2);
  icon(c,g.id,0,0,19);
  // A restrained two-point sparkle, not a second particle storm.
  c.strokeStyle=light;c.lineWidth=1.6;
  for(const side of [-1,1]){
   c.beginPath();c.moveTo(side*18,-1);c.lineTo(side*21,-3);c.stroke();
  }
 }else{
  // Quiet identity charm, deliberately outside the face.
  c.globalAlpha=.69;
  ring(c,px,py,8,light,tone,1.4);
  icon(c,g.id,px,py,12);
 }
 c.restore();return true;
}
window.PetriPanicKeeperSignature=Object.freeze({
 themes:Object.freeze(themes),icon,before,after
});
})();
