const menu=document.querySelector('.menu-btn'),nav=document.querySelector('nav');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
const items=[...document.querySelectorAll('.gallery-item')], box=document.querySelector('.lightbox'), img=document.querySelector('.lightbox-img');
let index=0;
function show(i){index=(i+items.length)%items.length;img.src=items[index].dataset.src;img.alt=`Statural Orchestra Numinous — group photo ${index+1}`;box.classList.add('open');box.setAttribute('aria-hidden','false')}
items.forEach((item,i)=>item.addEventListener('click',()=>show(i)));
document.querySelector('.lightbox-close').onclick=()=>{box.classList.remove('open');box.setAttribute('aria-hidden','true')};
document.querySelector('.lightbox-prev').onclick=()=>show(index-1);
document.querySelector('.lightbox-next').onclick=()=>show(index+1);
box.addEventListener('click',e=>{if(e.target===box)document.querySelector('.lightbox-close').click()});
document.addEventListener('keydown',e=>{if(!box.classList.contains('open'))return;if(e.key==='Escape')document.querySelector('.lightbox-close').click();if(e.key==='ArrowLeft')show(index-1);if(e.key==='ArrowRight')show(index+1)});
