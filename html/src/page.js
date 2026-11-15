(function(){
var secs=[].slice.call(document.querySelectorAll('main .sec')),parts=[].slice.call(document.querySelectorAll('h2.part,.lead'));
var chips=[].slice.call(document.querySelectorAll('.chip')),q=document.getElementById('q'),cur='mind';
var tocA={};[].slice.call(document.querySelectorAll('.toc a')).forEach(function(a){tocA[a.getAttribute('href').slice(1)]=a;});
var txt=secs.map(function(s){return norm(s.textContent);});
function norm(s){return (s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');}
var empty=document.createElement('div');empty.className='empty hidden';empty.textContent='Nincs találat.';document.querySelector('main footer').before(empty);
function apply(){var v=norm(q.value.trim()),act=v||cur!=='mind',n=0;
  secs.forEach(function(s,i){var ok=true;
    if(cur!=='mind'){ok=s.classList.contains('ex')&&(' '+(s.getAttribute('data-cat')||'')+' ').indexOf(' '+cur+' ')>=0;}
    if(ok&&v){ok=v.split(/\s+/).every(function(w){return txt[i].indexOf(w)>=0||(s.id&&s.id.indexOf(w.replace('.','-'))>=0);});}
    s.classList.toggle('hidden',!ok);if(ok)n++;
    var a=tocA[s.id];if(a)a.classList.toggle('hidden',!ok);});
  parts.forEach(function(p){p.classList.toggle('hidden',act);});
  Object.keys(tocA).forEach(function(k){if(tocA[k].classList.contains('part'))tocA[k].classList.toggle('hidden',act);});
  empty.classList.toggle('hidden',n>0);}
chips.forEach(function(b){b.addEventListener('click',function(){cur=b.getAttribute('data-f');chips.forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false');});apply();});});
q.addEventListener('input',apply);
if('IntersectionObserver' in window){var last=null;var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var a=tocA[e.target.id];if(a){if(last)last.classList.remove('on');a.classList.add('on');last=a;
  var t=a.parentNode;if(a.offsetTop<t.scrollTop+40||a.offsetTop>t.scrollTop+t.clientHeight-60)t.scrollTop=a.offsetTop-t.clientHeight/3;}}});},{rootMargin:'-10% 0px -80% 0px'});secs.forEach(function(s){io.observe(s);});}
function openHash(){var h=location.hash.slice(1);if(!h)return;var el=document.getElementById(h);if(el&&el.classList.contains('hidden')){q.value='';cur='mind';chips.forEach(function(x){x.setAttribute('aria-pressed',x.getAttribute('data-f')==='mind'?'true':'false');});apply();el.scrollIntoView();}}
window.addEventListener('hashchange',openHash);
})();
(function(){
var ds=[].slice.call(document.querySelectorAll('.dm'));
function fit(){ds.forEach(function(d){var k=[].filter.call(d.querySelectorAll('.katex'),function(x){return x.offsetParent;})[0]||d.querySelector('.katex');if(!k)return;d.querySelectorAll('.katex').forEach(function(x){x.style.fontSize='';});k.style.fontSize='';if(!d.offsetParent)return;
  var cw=d.clientWidth,f=1;for(var i=0;i<4&&d.scrollWidth>cw+1&&f>.68;i++){f=Math.max(.68,f*(cw-2)/d.scrollWidth);k.style.fontSize=(1.06*f).toFixed(3)+'em';}d.classList.toggle('scrollx',d.scrollWidth>cw+1);});}
var t;window.addEventListener('resize',function(){clearTimeout(t);t=setTimeout(fit,150);});
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit);fit();
document.addEventListener('click',function(e){if(e.target.closest('.chip'))setTimeout(fit,0);});
document.getElementById('q').addEventListener('input',function(){clearTimeout(t);t=setTimeout(fit,200);});
})();
