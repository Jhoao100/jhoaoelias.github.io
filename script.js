if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
    });
});

window.addEventListener("pageshow", () => {
    window.scrollTo(0, 0);
});
const chars=['</>','{ }','JS','PHP','SQL','✦','01','<>'];
const box=document.querySelector('#floaters');
for(let i=0;i<12;i++){
const x=document.createElement('span');
x.className='floater';
x.textContent=chars[i%chars.length];
x.style.left=Math.random()*100+'%';
x.style.animationDuration=18+Math.random()*20+'s';
x.style.animationDelay=-Math.random()*30+'s';
box.appendChild(x);
}

const evidenceModal=document.querySelector('#evidenceModal');
const evidenceImage=document.querySelector('#evidenceImage');
const evidenceTitle=document.querySelector('#evidenceTitle');
document.querySelectorAll('.evidence-card').forEach(card=>card.addEventListener('click',()=>{
evidenceImage.src=card.dataset.doc;
evidenceTitle.textContent=card.dataset.title;
evidenceModal.classList.add('open');
evidenceModal.setAttribute('aria-hidden','false');
document.body.classList.add('modal-open');
}));
const closeEvidence=()=>{
evidenceModal.classList.remove('open');
evidenceModal.setAttribute('aria-hidden','true');
evidenceImage.src='';
document.body.classList.remove('modal-open');
};
document.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeEvidence));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&evidenceModal.classList.contains('open'))closeEvidence();});

const entryScreen=document.querySelector('#entryScreen');
const enterSite=document.querySelector('#enterSite');
const siteAudio=document.querySelector('#siteAudio');
const soundToggle=document.querySelector('#soundToggle');
const volumeSlider=document.querySelector('#volumeSlider');
const volumeValue=document.querySelector('#volumeValue');
let wantedVolume=.28;
let soundWanted=true;
const updateSoundUI=()=>{
const audible=siteAudio&&!siteAudio.paused&&!siteAudio.muted&&siteAudio.volume>0;
soundToggle.innerHTML=audible?'<i class="fa-solid fa-volume-high"></i>':'<i class="fa-solid fa-volume-xmark"></i>';
volumeValue.textContent=Math.round((siteAudio?.muted?0:wantedVolume)*100)+'%';
};
const tryStartAudio=async()=>{
if(!siteAudio||!soundWanted)return;
siteAudio.volume=wantedVolume;
siteAudio.muted=false;
try{await siteAudio.play();updateSoundUI();return true;}catch(e){
siteAudio.muted=true;
try{await siteAudio.play();}catch(_){}
updateSoundUI();return false;
}
};
const unlockAudio=async()=>{
if(!siteAudio||!soundWanted)return;
siteAudio.muted=false;
siteAudio.volume=wantedVolume;
try{await siteAudio.play();}catch(e){}
updateSoundUI();
};
document.addEventListener('DOMContentLoaded',tryStartAudio,{once:true});
window.addEventListener('load',tryStartAudio,{once:true});
document.addEventListener('pointerdown',unlockAudio,{once:true,capture:true});
document.addEventListener('keydown',unlockAudio,{once:true,capture:true});
enterSite?.addEventListener('click',async()=>{entryScreen.classList.add('hidden');await unlockAudio();});
soundToggle?.addEventListener('click',async e=>{
e.stopPropagation();
if(!siteAudio)return;
if(!soundWanted||siteAudio.paused||siteAudio.muted){soundWanted=true;siteAudio.muted=false;siteAudio.volume=wantedVolume;try{await siteAudio.play();}catch(e){}}
else{soundWanted=false;siteAudio.pause();}
updateSoundUI();
});
volumeSlider?.addEventListener('input',async e=>{
wantedVolume=Number(e.target.value)/100;
soundWanted=wantedVolume>0;
if(siteAudio){siteAudio.volume=wantedVolume;siteAudio.muted=wantedVolume===0;if(soundWanted&&siteAudio.paused){try{await siteAudio.play();}catch(e){}}}
updateSoundUI();
});
window.addEventListener('pageshow',()=>{entryScreen?.classList.remove('hidden');tryStartAudio();});
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&soundWanted)tryStartAudio();});
updateSoundUI();

const dot=document.querySelector('#cursorDot');
const ring=document.querySelector('#cursorRing');
if(matchMedia('(hover:hover) and (pointer:fine)').matches){
let rx=0,ry=0,mx=0,my=0;
addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.transform=`translate(${mx-2.5}px,${my-2.5}px)`;});
const animate=()=>{rx+=(mx-rx)*.18;ry+=(my-ry)*.18;ring.style.transform=`translate(${rx-13}px,${ry-13}px)`;requestAnimationFrame(animate)};animate();
document.querySelectorAll('a,button').forEach(el=>{el.addEventListener('mouseenter',()=>ring.classList.add('hover'));el.addEventListener('mouseleave',()=>ring.classList.remove('hover'));});
}
