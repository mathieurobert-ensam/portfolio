(function(){
  // theme
  var body=document.body, btn=document.getElementById('theme-toggle');
  try{ if(localStorage.getItem('theme')==='dark') body.classList.add('dark'); }catch(e){}
  if(btn){ btn.addEventListener('click',function(){ body.classList.toggle('dark');
    try{ localStorage.setItem('theme', body.classList.contains('dark')?'dark':'light'); }catch(e){} }); }
  // carousels
  document.querySelectorAll('.carousel').forEach(function(c){
    var slides=c.querySelectorAll('.slide'); if(slides.length<2){ c.querySelectorAll('.nav-btn,.dots').forEach(function(x){x.remove();}); return; }
    var dots=c.querySelector('.dots'), i=0;
    slides.forEach(function(_,k){ var d=document.createElement('span'); d.addEventListener('click',function(){go(k);}); dots.appendChild(d); });
    function go(k){ slides[i].classList.remove('show'); dots.children[i].classList.remove('active'); i=(k+slides.length)%slides.length; slides[i].classList.add('show'); dots.children[i].classList.add('active'); }
    c.querySelector('.prev').addEventListener('click',function(){go(i-1);});
    c.querySelector('.next').addEventListener('click',function(){go(i+1);});
    go(0);
  });
})();
