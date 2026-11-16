/* Petri Panic · celebratory chapter card between experiments.
   Purely presentational: pointer-events none, no gameplay pause or unlock changes. */
(function(){
'use strict';
const eras=['Victorian Origins','Atomic Age','Space Age','Biotech Renaissance','Tomorrow Lab'];
const accents=['#bd8b9d','#d6af64','#91a9dc','#8abf9c','#ae9cd7'];
let card=null,hideTimer=null,stamp=0;
function ensure(){
 if(card)return card;
 card=document.createElement('div');
 card.id='experiment-reveal';
 card.className='experiment-reveal';
 card.setAttribute('aria-hidden','true');
 card.innerHTML='<span class="experiment-reveal__stars" aria-hidden="true">✧  ✦  ✧</span>'+
  '<span class="experiment-reveal__kicker"></span>'+
  '<strong class="experiment-reveal__title"></strong>'+
  '<span class="experiment-reveal__era"></span>'+
  '<span class="experiment-reveal__underline"></span>';
 document.body.appendChild(card);
 return card;
}
function clear(){
 stamp++;
 if(hideTimer!==null){clearTimeout(hideTimer);hideTimer=null;}
 if(card){card.classList.remove('is-visible');card.setAttribute('aria-hidden','true');}
}
function show(level,mode='adventure'){
 const n=Math.max(1,Math.min(21,Number(level)||1)),era=Math.min(4,Math.floor((n-1)/5));
 clear();
 const node=ensure();
 node.style.setProperty('--chapter-accent',accents[era]);
 node.querySelector('.experiment-reveal__kicker').textContent=mode==='lab'?'LIVING LAB':mode==='hard'?'HARD EXPERIMENT':'PINK LABORATORIES';
 node.querySelector('.experiment-reveal__title').textContent=mode==='lab'?'Culture Chamber':'Experiment '+String(n).padStart(2,'0');
 node.querySelector('.experiment-reveal__era').textContent=eras[era];
 node.setAttribute('aria-hidden','false');node.classList.add('is-visible');
 const serial=stamp;
 hideTimer=setTimeout(()=>{if(serial===stamp)clear()},matchMedia('(prefers-reduced-motion: reduce)').matches?650:1700);
}
window.PetriPanicExperimentReveal=Object.freeze({show,clear,eras});
})();
