# Petri Panic — candy welcome polish (GitHub-only staging)

This branch holds **non-destructive**, independently reviewable welcome-screen changes for the existing single-file game. It does not deploy to AppDeploy and does not replace the game engine.

## Changes
- Fredoka/Nunito rounded welcome typography, high-contrast coral-to-peach Start CTA, tactile 3D candy mode cards.
- Cohesive vector badges for all **five** current modes (including Hard Mode), accessible pressed state and arrow-key selection.
- Mascot interactive bounce, improved mobile spacing, keyboard focus states and reduced-motion support.
- Preserves the existing Shop, Guardian Corner, Inspect controls and responsive gameplay layout already in `main/index.html`.
- Preserves the existing save/restore and progression routines; no localStorage keys are changed.

## Integration into existing index.html
Add before the closing `</style>` tag:

```css
/* Candy menu polish, scoped to the welcome modal; gameplay remains untouched. */
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@600;700;800;900&display=swap');
#overlay:not(.preparing) .modal{background:linear-gradient(155deg,#fff9fd 0%,#ffeaf4 57%,#f7c4dd 100%);border:6px solid #fffafc;border-radius:38px;box-shadow:inset 0 0 0 3px #efb6d3,inset 0 5px #fff,0 10px 0 #bd78a0,0 25px 46px #85446c55;padding-bottom:clamp(17px,3vh,28px)}
#overlay:not(.preparing) #modalTitle{font:700 clamp(32px,5.9vw,51px)/1.04 'Fredoka','Nunito',sans-serif;color:#ba3c7d;letter-spacing:-.025em;text-shadow:0 2px 0 #fff9fc,0 4px 7px #bd7e9d48;margin:6px 0 9px}
#overlay:not(.preparing) #modalBody{font:700 clamp(12px,1.9vw,15px)/1.45 'Nunito',sans-serif;color:#784262;max-width:470px;margin:4px auto 17px}
#overlay:not(.preparing) .mascot{height:103px;filter:drop-shadow(0 5px 5px #b65b9259)}
#overlay:not(.preparing) .kawaii-mascot{scale:1.12}
#overlay:not(.preparing) .modes{gap:13px;margin:18px 0 21px;overflow:visible;padding:8px 5px}
#overlay:not(.preparing) .mode{position:relative;isolation:isolate;overflow:visible;min-height:102px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:3px;font:700 clamp(18px,3vw,24px)/1.08 'Fredoka',sans-serif;color:#91426e;background:linear-gradient(145deg,#fffefc,#ffe5f1);border:3px solid #fff;border-bottom:7px solid #d999b9;border-radius:23px;box-shadow:inset 0 3px 0 #fffffffa,0 6px 12px #b5578530;transition:transform .2s cubic-bezier(.175,.885,.32,1.275),box-shadow .2s,background .2s;transform-origin:center;cursor:pointer;touch-action:manipulation}
#overlay:not(.preparing) .mode:before{content:'';position:absolute;inset:4px 6px auto;height:35%;border-radius:18px;background:linear-gradient(#fff9,transparent);pointer-events:none}
#overlay:not(.preparing) .mode:after{content:' ';display:none}
#overlay:not(.preparing) .mode .mode-icon{display:grid;place-items:center;width:37px;height:37px;margin-bottom:4px;color:white;border:2px solid #fffc;border-radius:14px;background:linear-gradient(145deg,#f3a9d7,#c66cae);box-shadow:inset 0 2px #fff7,0 4px #ad739e5c}
#overlay:not(.preparing) .mode[data-mode="trial"] .mode-icon{background:linear-gradient(145deg,#79d7ef,#668ddc)}
#overlay:not(.preparing) .mode[data-mode="challenge"] .mode-icon{background:linear-gradient(145deg,#7bdbb4,#35ac8c)}
#overlay:not(.preparing) .mode[data-mode="hard"] .mode-icon{background:linear-gradient(145deg,#ffc07d,#e87485)}
#overlay:not(.preparing) .mode[data-mode="lab"] .mode-icon{background:linear-gradient(145deg,#ffd47e,#e59b63)}
#overlay:not(.preparing) .mode .mode-icon svg{width:23px;height:23px;stroke:currentColor;fill:none;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}
#overlay:not(.preparing) .mode span{position:relative;font:800 11px/1.3 'Nunito',sans-serif;color:#95637f;margin-top:2px}
#overlay:not(.preparing) .mode.active{z-index:1;transform:scale(1.035) translateY(-2px);background:linear-gradient(145deg,#fffefa,#fff0f6);border-color:#ffc73d;border-bottom-color:#d29a1e;box-shadow:0 0 0 2px #ffe17a,0 7px 0 #cb9b35,0 13px 18px #c28e3b4b}
#overlay:not(.preparing) .mode.active:after{content:'★';display:grid;place-items:center;position:absolute;top:-13px;right:-10px;width:30px;height:30px;border-radius:50%;border:3px solid white;background:#ffca3e;color:#fff;text-shadow:0 1px #ba8616;font:900 18px 'Nunito',sans-serif;box-shadow:0 3px 0 #d39723,0 5px 12px #c3843459}
@media(hover:hover){#overlay:not(.preparing) .mode:hover:not(.active){transform:translateY(-3px);box-shadow:inset 0 3px white,0 8px 0 #d999b9,0 14px 16px #b5578538}}
#overlay:not(.preparing) .mode:active{transform:translateY(4px) scale(.99)!important;box-shadow:0 2px 0 #d999b9!important}
#overlay:not(.preparing) #play{width:min(440px,100%);min-height:68px;font:700 clamp(24px,5.7vw,37px)/1.08 'Fredoka',sans-serif;letter-spacing:.01em;background:linear-gradient(120deg,#ff7d8c,#ff7aa5 52%,#ffae78);border:3px solid #fff8f0;border-bottom:8px solid #ce5267;border-radius:24px;box-shadow:inset 0 4px #ffffff77,0 7px 0 #bd5c79,0 13px 19px #a7527755;transition:transform .18s cubic-bezier(.175,.885,.32,1.275),box-shadow .18s}
#overlay:not(.preparing) #play:active{transform:translateY(6px);box-shadow:inset 0 2px #fff7,0 2px 0 #bd5c79}
#overlay:not(.preparing) #mute,#overlay:not(.preparing) #reset,#overlay:not(.preparing) #helpButton{font:800 12px/1.2 'Nunito',sans-serif;border:2px solid #ebafcf;border-bottom:4px solid #d690b7;border-radius:99px;min-height:42px;padding:9px 13px;transition:transform .18s}
#overlay:not(.preparing) #mute:active,#overlay:not(.preparing) #reset:active,#overlay:not(.preparing) #helpButton:active{transform:translateY(2px)}
#overlay:not(.preparing) .retro-controller{display:none}
#overlay:not(.preparing) .modal:before{font-family:'Nunito',sans-serif;letter-spacing:4px;font-size:17px}
#overlay:not(.preparing) #mascot:focus-visible{outline:3px solid #a648a1;outline-offset:5px;border-radius:28px}
#overlay:not(.preparing) .mode:focus-visible,#overlay:not(.preparing) button:focus-visible{outline:4px solid #8047c0;outline-offset:3px}
@media(max-width:600px){#overlay:not(.preparing) .modal{padding:12px 12px 17px}#overlay:not(.preparing) #modalTitle{font-size:clamp(29px,7.8vw,39px)}#overlay:not(.preparing) #modalBody{font-size:12px;margin-bottom:8px}#overlay:not(.preparing) .mascot{height:84px}#overlay:not(.preparing) .modes{gap:10px;padding:6px;margin:8px 0 14px}#overlay:not(.preparing) .mode{min-height:92px;padding:10px 5px;font-size:18px}#overlay:not(.preparing) .mode span{font-size:10px}#overlay:not(.preparing) .mode .mode-icon{width:33px;height:33px}#overlay:not(.preparing) #play{min-height:61px}}
@media(orientation:landscape) and (max-height:600px){#overlay:not(.preparing) .mascot{height:49px}#overlay:not(.preparing) .kawaii-mascot{scale:.65}#overlay:not(.preparing) .mode{min-height:75px}#overlay:not(.preparing) .mode .mode-icon{width:27px;height:27px}#overlay:not(.preparing) .modes{margin:6px 0}}
@media(prefers-reduced-motion:reduce){#overlay:not(.preparing) .mascot,#overlay:not(.preparing) .mode,#overlay:not(.preparing) #play,#overlay:not(.preparing) .modal:before{animation:none!important;transition:none!important}}

```

Then add immediately before the closing `</body>` tag (after the existing game script):

```html
<script>
/* Non-destructive welcome polish. The existing game state, shop and save routines remain authoritative. */
(()=>{
 const icons={
 adventure:'<path d="M5 4c12 0 2 16 14 16M19 4C7 4 17 20 5 20"/><path d="M7 8h10M7 16h10"/>',
 trial:'<circle cx="12" cy="13" r="8"/><path d="M12 8v5l3 2M9 2h6"/>',
 challenge:'<path d="M12 21V4M12 11H7a3 3 0 0 1-3-3V6m8 9h5a3 3 0 0 0 3-3v-2"/>',
 hard:'<path d="M12 22c5 0 8-4 8-9 0-3-2-6-5-9 0 4-3 5-3 8-2-1-3-3-3-5-3 3-5 7-5 10 0 3 3 5 8 5Z"/>',
 lab:'<path d="m12 3 2.5 5.5L20 11l-5.5 3L12 21l-2.5-7L4 11l5.5-2.5L12 3Z"/>'
 };
 const modes=document.getElementById('modes');
 if(!modes)return;
 const cards=Array.from(modes.querySelectorAll('button[data-mode]'));
 cards.forEach(card=>{
  const k=card.dataset.mode;
  if(!card.querySelector('.mode-icon')){
   const badge=document.createElement('span');badge.className='mode-icon';badge.setAttribute('aria-hidden','true');
   badge.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true">'+(icons[k]||icons.lab)+'</svg>';
   card.insertBefore(badge,card.firstChild);
  }
  card.setAttribute('aria-pressed',String(card.classList.contains('active')));
 });
 const sync=()=>cards.forEach(card=>card.setAttribute('aria-pressed',String(card.classList.contains('active'))));
 modes.addEventListener('click',()=>queueMicrotask(sync));
 modes.addEventListener('keydown',event=>{
  if(!['ArrowRight','ArrowDown','ArrowLeft','ArrowUp'].includes(event.key))return;
  event.preventDefault();
  const i=cards.indexOf(document.activeElement);
  const d=event.key==='ArrowRight'||event.key==='ArrowDown'?1:-1;
  const next=cards[(Math.max(i,0)+d+cards.length)%cards.length];
  next.focus();next.click();sync();
 });
 const mascot=document.getElementById('mascot');
 if(mascot){
  mascot.setAttribute('role','button');mascot.setAttribute('tabindex','0');mascot.setAttribute('aria-label','Give the Pink Lab mascot a little bounce');
  const bounce=()=>{
   if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
   mascot.animate([{transform:'scale(1)'},{transform:'scale(1.16) rotate(5deg)'},{transform:'scale(1)'}],{duration:400,easing:'cubic-bezier(.175,.885,.32,1.275)'});
  };
  mascot.addEventListener('click',bounce);
  mascot.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();bounce()}});
 }
})();

</script>
```

This document is an integration patch, **not** a replacement HTML game or a published build. Apply it to the latest GitHub main source, verify syntax, then test menu selection, five modes, pause/resume, saved progress, portrait/landscape layout, Guardians and Shop on actual devices before merging and publishing.

## Key safeguards
- The special Adventure/Hard preparation flow remains untouched.
- The original click, sound, saving and gameplay functions remain untouched.
- No script runs before the original game initialization.
