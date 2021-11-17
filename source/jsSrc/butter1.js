fetch('/source/contentSrc/english.json')
    .then(response => response.json())
    .then(data => {
                console.log(data.about_page.paragraph)
                document.querySelector("#data").innerHTML = data.butter1_album.paragraph;
    }
)
function play(){
    document.getElementById('play').style.display = "none";
    document.getElementById('vid1').style.display = "block";
    document.getElementById('vid1').src = "https://www.youtube.com/embed/OOMxU9f1FBU?autoplay=1"
}
function vidplay1(){
  document.getElementById('play2').style.display = "none";
  document.getElementById('vid2').style.display = "block";
  document.getElementById('vid2').src = "https://www.youtube.com/embed/iLycuRm1V0Q?autoplay=1"
}
function vidplay2(){
  document.getElementById('play2').style.display = "none";
  document.getElementById('vid2').style.display = "block";
  document.getElementById('vid2').src = "https://www.youtube.com/embed/CuklIb9d3fI?autoplay=1"
}
function play2(){
  document.getElementById('play2').style.display = "none";
  document.getElementById('vid2').style.display = "block";
  document.getElementById('vid2').src = "https://www.youtube.com/embed/CuklIb9d3fI?autoplay=1"
}
function mouseOver(x) {
    x.style.color = "#66424d";
  }
function mouseOut(x) {
    x.style.color = "black";
}
var aa = 1
var bb = 0
var cc = 0
var dd = 0

function con1(){
  if(aa != 1){
    document.getElementById('photoset').style.display = "none";
    document.getElementById('photo0').style.display = "block";
    document.getElementById('butset1').style.display = "none";
    document.getElementById('butset2').style.display = "none";
    document.getElementById('photo0').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept1/bts.jpg";
    document.getElementById('conbut1').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/concept_btn_active-1.png";
    document.getElementById('conbut2').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/concept_btn-2.png";
    document.getElementById('conbut3').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/concept_btn-3.png";
    document.getElementById('conbut4').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/concept_btn-4.png";
    document.getElementById('btsbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_bts_active.png";
    document.getElementById('vbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_v.png";
    document.getElementById('jkbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jk.png";
    document.getElementById('jhbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jhope.png";
    document.getElementById('jinbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jin.png";
    document.getElementById('jibut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jimin.png";
    document.getElementById('rmbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_rm.png";
    document.getElementById('subut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_suga.png";
    aa = 1;
    bb = 0;
    cc = 0;
    dd = 0;
    ee = 1
    ff = 0
    gg = 0
    hh = 0
    ii = 0
    jj = 0
    kk = 0
    ll = 0
  }
}
function con2(){
  if(bb != 1){
    document.getElementById('photoset').style.display = "none";
    document.getElementById('photo0').style.display = "block";
    document.getElementById('butset1').style.display = "none";
    document.getElementById('butset2').style.display = "none";
    document.getElementById('photo0').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept2/bts.jpg";
    document.getElementById('conbut1').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/concept_btn-1.png";
    document.getElementById('conbut2').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/concept_btn_active-2.png";
    document.getElementById('conbut3').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/concept_btn-3.png";
    document.getElementById('conbut4').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/concept_btn-4.png";
    document.getElementById('btsbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_bts_active.png";
    document.getElementById('vbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_v.png";
    document.getElementById('jkbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jk.png";
    document.getElementById('jhbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jhope.png";
    document.getElementById('jinbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jin.png";
    document.getElementById('jibut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jimin.png";
    document.getElementById('rmbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_rm.png";
    document.getElementById('subut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_suga.png";
    aa = 0;
    bb = 1;
    cc = 0;
    dd = 0;
    ee = 1
    ff = 0
    gg = 0
    hh = 0
    ii = 0
    jj = 0
    kk = 0
    ll = 0
  }
}
function con3(){
  if(cc != 1){
    document.getElementById('photoset').style.display = "none";
    document.getElementById('photo0').style.display = "block";
    document.getElementById('butset1').style.display = "none";
    document.getElementById('butset2').style.display = "none";
    document.getElementById('photo0').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept3/bts.jpg";
    document.getElementById('conbut1').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/concept_btn-1.png";
    document.getElementById('conbut2').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/concept_btn-2.png";
    document.getElementById('conbut3').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/concept_btn_active-3.png";
    document.getElementById('conbut4').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/concept_btn-4.png";
    document.getElementById('btsbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_bts_active.png";
    document.getElementById('vbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_v.png";
    document.getElementById('jkbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jk.png";
    document.getElementById('jhbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jhope.png";
    document.getElementById('jinbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jin.png";
    document.getElementById('jibut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jimin.png";
    document.getElementById('rmbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_rm.png";
    document.getElementById('subut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_suga.png";
    aa = 0;
    bb = 0;
    cc = 1;
    dd = 0;
    ee = 1
    ff = 0
    gg = 0
    hh = 0
    ii = 0
    jj = 0
    kk = 0
    ll = 0
  }
}
function con4(){
  if(dd != 1){
    document.getElementById('photoset').style.display = "none";
    document.getElementById('photo0').style.display = "block";
    document.getElementById('butset1').style.display = "none";
    document.getElementById('butset2').style.display = "none";
    document.getElementById('photo0').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept4/bts.jpg";
    document.getElementById('conbut1').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/concept_btn-1.png";
    document.getElementById('conbut2').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/concept_btn-2.png";
    document.getElementById('conbut3').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/concept_btn-3.png";
    document.getElementById('conbut4').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/concept_btn_active-4.png";
    document.getElementById('btsbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_bts_active.png";
    document.getElementById('vbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_v.png";
    document.getElementById('jkbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jk.png";
    document.getElementById('jhbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jhope.png";
    document.getElementById('jinbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jin.png";
    document.getElementById('jibut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jimin.png";
    document.getElementById('rmbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_rm.png";
    document.getElementById('subut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_suga.png";
    aa = 0;
    bb = 0;
    cc = 0;
    dd = 1;
    ee = 1
    ff = 0
    gg = 0
    hh = 0
    ii = 0
    jj = 0
    kk = 0
    ll = 0
  }
}
function mouseOgum(a) {
  if(aa != 1){
    a.src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/concept_btn_active-1.png";
  } 
  }
function mousegumO(a) {
  if(aa != 1){
    a.src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/concept_btn-1.png";
  } 
}
function mouseOgum2(b) {
  if(bb != 1){
    b.src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/concept_btn_active-2.png";
  }
  }
function mousegumO2(b) {
  if(bb != 1){
    b.src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/concept_btn-2.png";
  }
}
function mouseOgum3(c) {
  if(cc != 1){
    c.src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/concept_btn_active-3.png";
  }
  }
function mousegumO3(c) {
  if(cc != 1){
    c.src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/concept_btn-3.png";
  }   
}
function mouseOgum4(d) {
  if(dd != 1){
    d.src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/concept_btn_active-4.png";
  } 
  }
function mousegumO4(d) {
  if(dd != 1){
    d.src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/concept_btn-4.png";
  }  
}
var ee = 1
var ff = 0
var gg = 0
var hh = 0
var ii = 0
var jj = 0
var kk = 0
var ll = 0
function mousebts(e) {
  if(ee != 1){
    e.src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_bts_active.png";
  } 
  }
function mousebtsO(e) {
  if(ee != 1){
    e.src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_bts.png";
  } 
}
function mouseV(f) {
  if(ff != 1){
    f.src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_v_active.png";
  }
  }
function mouseVO(f) {
  if(ff != 1){
    f.src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_v.png";
  }
}
function mousejk(g) {
  if(gg != 1){
    g.src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jk_active.png";
  }
  }
function mousejkO(g) {
  if(gg != 1){
    g.src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jk.png";
  }   
}
function mousejh(h) {
  if(hh != 1){
    h.src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jhope_active.png";
  } 
  }
function mousejhO(h) {
  if(hh != 1){
    h.src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jhope.png";
  }  
}
function mouseji(i) {
  if(ii != 1){
    i.src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jin_active.png";
  } 
  }
function mousejiO(i) {
  if(ii != 1){
    i.src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jin.png";
  } 
}
function mousejimin(j) {
  if(jj != 1){
    j.src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jimin_active.png";
  }
  }
function mousejiminO(j) {
  if(jj != 1){
    j.src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jimin.png";
  }
}
function mouserm(k) {
  if(kk != 1){
    k.src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_rm_active.png";
  }
  }
function mousermO(k) {
  if(kk != 1){
    k.src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_rm.png";
  }   
}
function mousesu(l) {
  if(ll != 1){
    l.src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_suga_active.png";
  } 
  }
function mousesuO(l) {
  if(ll != 1){
    l.src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_suga.png";
  }  
}
function BTS(){
  if(ee != 1){
    document.getElementById('btsbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_bts_active.png";
    document.getElementById('vbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_v.png";
    document.getElementById('jkbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jk.png";
    document.getElementById('jhbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jhope.png";
    document.getElementById('jinbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jin.png";
    document.getElementById('jibut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jimin.png";
    document.getElementById('rmbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_rm.png";
    document.getElementById('subut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_suga.png";
    if(aa == 1){
      document.getElementById('photo0').style.display = "block";
      document.getElementById('photo0').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept1/bts.jpg";
      document.getElementById('photoset').style.display = "none";
      document.getElementById('butset1').style.display = "none";
      document.getElementById('butset2').style.display = "none";
    }
    else if(bb == 1){
      document.getElementById('photo0').style.display = "block";
      document.getElementById('photo0').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept2/bts.jpg";
      document.getElementById('photoset').style.display = "none";
      document.getElementById('butset1').style.display = "none";
      document.getElementById('butset2').style.display = "none";
    }
    else if(cc == 1){
      document.getElementById('photo0').style.display = "block";
      document.getElementById('photo0').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept3/bts.jpg";
      document.getElementById('photoset').style.display = "none";
      document.getElementById('butset1').style.display = "none";
      document.getElementById('butset2').style.display = "none";
    }
    else if(dd == 1){
      document.getElementById('photo0').style.display = "block";
      document.getElementById('photo0').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept4/bts.jpg";
      document.getElementById('photoset').style.display = "none";
      document.getElementById('butset1').style.display = "none";
      document.getElementById('butset2').style.display = "none";
    }
    ee = 1
    ff = 0
    gg = 0
    hh = 0
    ii = 0
    jj = 0
    kk = 0
    ll = 0
  }
}
function V(){
  if(ff != 1){
    document.getElementById('btsbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_bts.png";
    document.getElementById('vbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_v_active.png";
    document.getElementById('jkbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jk.png";
    document.getElementById('jhbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jhope.png";
    document.getElementById('jinbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jin.png";
    document.getElementById('jibut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jimin.png";
    document.getElementById('rmbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_rm.png";
    document.getElementById('subut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_suga.png";
    if(aa == 1){
      document.getElementById('photo0').style.display = "none";
      document.getElementById('photo1').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept1/v.jpg";
      document.getElementById('photo2').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept1/v2.jpg";
      document.getElementById('butset1').style.display = "block";
      document.getElementById('butset2').style.display = "block";
      document.getElementById('photoset').style.display = "block";
    }
    else if(bb == 1){
      document.getElementById('photo0').style.display = "block";
      document.getElementById('photo0').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept2/v.jpg";
      document.getElementById('butset1').style.display = "none";
      document.getElementById('butset2').style.display = "none";
      document.getElementById('photoset').style.display = "none";
    }
    else if(cc == 1){
      document.getElementById('photo0').style.display = "none";
      document.getElementById('photo1').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept3/v.jpg";
      document.getElementById('photo2').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept3/v2.jpg";
      document.getElementById('butset1').style.display = "block";
      document.getElementById('butset2').style.display = "block";
      document.getElementById('photoset').style.display = "block";
    }
    else if(dd == 1){
      document.getElementById('photo0').style.display = "block";
      document.getElementById('photo0').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept4/v.jpg";
      document.getElementById('butset1').style.display = "none";
      document.getElementById('butset2').style.display = "none";
      document.getElementById('photoset').style.display = "none";
    }
    ee = 0
    ff = 1
    gg = 0
    hh = 0
    ii = 0
    jj = 0
    kk = 0
    ll = 0
  }
}
function JK(){
  if(gg != 1){
    document.getElementById('btsbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_bts.png";
    document.getElementById('vbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_v.png";
    document.getElementById('jkbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jk_active.png";
    document.getElementById('jhbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jhope.png";
    document.getElementById('jinbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jin.png";
    document.getElementById('jibut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jimin.png";
    document.getElementById('rmbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_rm.png";
    document.getElementById('subut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_suga.png";
    if(aa == 1){
      document.getElementById('photo0').style.display = "none";
      document.getElementById('photo1').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept1/jungkook.jpg";
      document.getElementById('photo2').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept1/jungkook2.jpg";
      document.getElementById('butset1').style.display = "block";
      document.getElementById('butset2').style.display = "block";
      document.getElementById('photoset').style.display = "block";
    }
    else if(bb == 1){
      document.getElementById('photo0').style.display = "block";
      document.getElementById('photo0').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept2/jungkook.jpg";
      document.getElementById('butset1').style.display = "none";
      document.getElementById('butset2').style.display = "none";
      document.getElementById('photoset').style.display = "none";
    }
    else if(cc == 1){
      document.getElementById('photo0').style.display = "none";
      document.getElementById('photo1').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept3/jungkook.jpg";
      document.getElementById('photo2').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept3/jungkook2.jpg";
      document.getElementById('butset1').style.display = "block";
      document.getElementById('butset2').style.display = "block";
      document.getElementById('photoset').style.display = "block";
    }
    else if(dd == 1){
      document.getElementById('photo0').style.display = "block";
      document.getElementById('photo0').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept4/jungkook.jpg";
      document.getElementById('butset1').style.display = "none";
      document.getElementById('butset2').style.display = "none";
      document.getElementById('photoset').style.display = "none";
    }
    ee = 0
    ff = 0
    gg = 1
    hh = 0
    ii = 0
    jj = 0
    kk = 0
    ll = 0
  }
}
function JH(){
  if(hh != 1){
    document.getElementById('btsbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_bts.png";
    document.getElementById('vbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_v.png";
    document.getElementById('jkbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jk.png";
    document.getElementById('jhbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jhope_active.png";
    document.getElementById('jinbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jin.png";
    document.getElementById('jibut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jimin.png";
    document.getElementById('rmbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_rm.png";
    document.getElementById('subut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_suga.png";
    if(aa == 1){
      document.getElementById('photo0').style.display = "none";
      document.getElementById('photo1').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept1/jhope.jpg";
      document.getElementById('photo2').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept1/jhope2.jpg";
      document.getElementById('butset1').style.display = "block";
      document.getElementById('butset2').style.display = "block";
      document.getElementById('photoset').style.display = "block";
    }
    else if(bb == 1){
      document.getElementById('photo0').style.display = "block";
      document.getElementById('photo0').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept2/jhope.jpg";
      document.getElementById('butset1').style.display = "none";
      document.getElementById('butset2').style.display = "none";
      document.getElementById('photoset').style.display = "none";
    }
    else if(cc == 1){
      document.getElementById('photo0').style.display = "none";
      document.getElementById('photo1').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept3/jhope.jpg";
      document.getElementById('photo2').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept3/jhope2.jpg";
      document.getElementById('butset1').style.display = "block";
      document.getElementById('butset2').style.display = "block";
      document.getElementById('photoset').style.display = "block";
    }
    else if(dd == 1){
      document.getElementById('photo0').style.display = "block";
      document.getElementById('photo0').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept4/jhope.jpg";
      document.getElementById('butset1').style.display = "none";
      document.getElementById('butset2').style.display = "none";
      document.getElementById('photoset').style.display = "none";
    }
    ee = 0
    ff = 0
    gg = 0
    hh = 1
    ii = 0
    jj = 0
    kk = 0
    ll = 0
  }
}
function JIN(){
  if(ii != 1){
    document.getElementById('btsbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_bts.png";
    document.getElementById('vbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_v.png";
    document.getElementById('jkbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jk.png";
    document.getElementById('jhbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jhope.png";
    document.getElementById('jinbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jin_active.png";
    document.getElementById('jibut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jimin.png";
    document.getElementById('rmbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_rm.png";
    document.getElementById('subut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_suga.png";
    if(aa == 1){
      document.getElementById('photo0').style.display = "none";
      document.getElementById('photo1').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept1/jin.jpg";
      document.getElementById('photo2').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept1/jin2.jpg";
      document.getElementById('butset1').style.display = "block";
      document.getElementById('butset2').style.display = "block";
      document.getElementById('photoset').style.display = "block";
    }
    else if(bb == 1){
      document.getElementById('photo0').style.display = "block";
      document.getElementById('photo0').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept2/jin.jpg";
      document.getElementById('butset1').style.display = "none";
      document.getElementById('butset2').style.display = "none";
      document.getElementById('photoset').style.display = "none";
    }
    else if(cc == 1){
      document.getElementById('photo0').style.display = "none";
      document.getElementById('photo1').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept3/jin.jpg";
      document.getElementById('photo2').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept3/jin2.jpg";
      document.getElementById('butset1').style.display = "block";
      document.getElementById('butset2').style.display = "block";
      document.getElementById('photoset').style.display = "block";
    }
    else if(dd == 1){
      document.getElementById('photo0').style.display = "block";
      document.getElementById('photo0').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept4/jin.jpg";
      document.getElementById('butset1').style.display = "none";
      document.getElementById('butset2').style.display = "none";
      document.getElementById('photoset').style.display = "none";
    }
    ee = 0
    ff = 0
    gg = 0
    hh = 0
    ii = 1
    jj = 0
    kk = 0
    ll = 0
  }
}
function JI(){
  if(jj != 1){
    document.getElementById('btsbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_bts.png";
    document.getElementById('vbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_v.png";
    document.getElementById('jkbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jk.png";
    document.getElementById('jhbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jhope.png";
    document.getElementById('jinbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jin.png";
    document.getElementById('jibut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jimin_active.png";
    document.getElementById('rmbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_rm.png";
    document.getElementById('subut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_suga.png";
    if(aa == 1){
      document.getElementById('photo0').style.display = "none";
      document.getElementById('photo1').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept1/jimin.jpg";
      document.getElementById('photo2').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept1/jimin2.jpg";
      document.getElementById('butset1').style.display = "block";
      document.getElementById('butset2').style.display = "block";
      document.getElementById('photoset').style.display = "block";
    }
    else if(bb == 1){
      document.getElementById('photo0').style.display = "block";
      document.getElementById('photo0').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept2/jimin.jpg";
      document.getElementById('butset1').style.display = "none";
      document.getElementById('butset2').style.display = "none";
      document.getElementById('photoset').style.display = "none";
    }
    else if(cc == 1){
      document.getElementById('photo0').style.display = "none";
      document.getElementById('photo1').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept3/jimin.jpg";
      document.getElementById('photo2').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept3/jimin2.jpg";
      document.getElementById('butset1').style.display = "block";
      document.getElementById('butset2').style.display = "block";
      document.getElementById('photoset').style.display = "block";
    }
    else if(dd == 1){
      document.getElementById('photo0').style.display = "block";
      document.getElementById('photo0').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept4/jimin.jpg";
      document.getElementById('butset1').style.display = "none";
      document.getElementById('butset2').style.display = "none";
      document.getElementById('photoset').style.display = "none";
    }
    ee = 0
    ff = 0
    gg = 0
    hh = 0
    ii = 0
    jj = 1
    kk = 0
    ll = 0
  }
}
function RM(){
  if(kk != 1){
    document.getElementById('btsbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_bts.png";
    document.getElementById('vbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_v.png";
    document.getElementById('jkbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jk.png";
    document.getElementById('jhbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jhope.png";
    document.getElementById('jinbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jin.png";
    document.getElementById('jibut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jimin.png";
    document.getElementById('rmbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_rm_active.png";
    document.getElementById('subut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_suga.png";
    if(aa == 1){
      document.getElementById('photo0').style.display = "none";
      document.getElementById('photo1').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept1/rm.jpg";
      document.getElementById('photo2').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept1/rm2.jpg";
      document.getElementById('butset1').style.display = "block";
      document.getElementById('butset2').style.display = "block";
      document.getElementById('photoset').style.display = "block";
    }
    else if(bb == 1){
      document.getElementById('photo0').style.display = "block";
      document.getElementById('photo0').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept2/rm.jpg";
      document.getElementById('butset1').style.display = "none";
      document.getElementById('butset2').style.display = "none";
      document.getElementById('photoset').style.display = "none";
    }
    else if(cc == 1){
      document.getElementById('photo0').style.display = "none";
      document.getElementById('photo1').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept3/rm.jpg";
      document.getElementById('photo2').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept3/rm2.jpg";
      document.getElementById('butset1').style.display = "block";
      document.getElementById('butset2').style.display = "block";
      document.getElementById('photoset').style.display = "block";
    }
    else if(dd == 1){
      document.getElementById('photo0').style.display = "block";
      document.getElementById('photo0').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept4/rm.jpg";
      document.getElementById('butset1').style.display = "none";
      document.getElementById('butset2').style.display = "none";
      document.getElementById('photoset').style.display = "none";
    }
    ee = 0
    ff = 0
    gg = 0
    hh = 0
    ii = 0
    jj = 0
    kk = 1
    ll = 0
  }
}
function SU(){
  if(ll != 1){
    document.getElementById('btsbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_bts.png";
    document.getElementById('vbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_v.png";
    document.getElementById('jkbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jk.png";
    document.getElementById('jhbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jhope.png";
    document.getElementById('jinbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jin.png";
    document.getElementById('jibut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_jimin.png";
    document.getElementById('rmbut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_rm.png";
    document.getElementById('subut').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/photo_suga_active.png";
    if(aa == 1){
      document.getElementById('photo0').style.display = "none";
      document.getElementById('photo1').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept1/suga.jpg";
      document.getElementById('photo2').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept1/suga2.jpg";
      document.getElementById('butset1').style.display = "block";
      document.getElementById('butset2').style.display = "block";
      document.getElementById('photoset').style.display = "block";
    }
    else if(bb == 1){
      document.getElementById('photo0').style.display = "block";
      document.getElementById('photo0').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept2/suga.jpg";
      document.getElementById('butset1').style.display = "none";
      document.getElementById('butset2').style.display = "none";
      document.getElementById('photoset').style.display = "none";
    }
    else if(cc == 1){
      document.getElementById('photo0').style.display = "none";
      document.getElementById('photo1').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept3/suga.jpg";
      document.getElementById('photo2').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept3/suga2.jpg";
      document.getElementById('butset1').style.display = "block";
      document.getElementById('butset2').style.display = "block";
      document.getElementById('photoset').style.display = "block";
    }
    else if(dd == 1){
      document.getElementById('photo0').style.display = "block";
      document.getElementById('photo0').src = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER/Concept4/suga.jpg";
      document.getElementById('butset1').style.display = "none";
      document.getElementById('butset2').style.display = "none";
      document.getElementById('photoset').style.display = "none";
    }
    ee = 0
    ff = 0
    gg = 0
    hh = 0
    ii = 0
    jj = 0
    kk = 0
    ll = 1
  }
}
function ccvplay(num){
  if (num==1){
      document.getElementById("ccvpic").style.backgroundImage = "url(../../imgSrc/BTS/DISCOGRAPHY/BUTTER2/jkpic.png)";
      document.getElementById("ccvvid").src = "../../vdoSrc/butter2/jkvid.mp4";
  }
  else if (num==2){
      document.getElementById("ccvpic").style.backgroundImage = "url(../../imgSrc/BTS/DISCOGRAPHY/BUTTER2/rmpic.png)";
      document.getElementById("ccvvid").src = "../../vdoSrc/butter2/rmvid.mp4";
  }
  else if (num==3){
      document.getElementById("ccvpic").style.backgroundImage = "url(../../imgSrc/BTS/DISCOGRAPHY/BUTTER2/jinpic.png)";
      document.getElementById("ccvvid").src = "../../vdoSrc/butter2/jinvid.mp4";
  }
  else if (num==4){
      document.getElementById("ccvpic").style.backgroundImage = "url(../../imgSrc/BTS/DISCOGRAPHY/BUTTER2/sgpic.png)";
      document.getElementById("ccvvid").src = "../../vdoSrc/butter2/sgvid.mp4";
  }
  else if (num==5){
      document.getElementById("ccvpic").style.backgroundImage = "url(../../imgSrc/BTS/DISCOGRAPHY/BUTTER2/jhpic.png)";
      document.getElementById("ccvvid").src = "../../vdoSrc/butter2/jhvid.mp4";
  }
  else if (num==6){
      document.getElementById("ccvpic").style.backgroundImage = "url(../../imgSrc/BTS/DISCOGRAPHY/BUTTER2/jmpic.png)";
      document.getElementById("ccvvid").src = "../../vdoSrc/butter2/jmvid.mp4";
  }
  else if (num==7){
      document.getElementById("ccvpic").style.backgroundImage = "../../imgSrc/BTS/DISCOGRAPHY/BUTTER2/vpic.png";
      document.getElementById("ccvvid").src = "../../vdoSrc/butter2/vvid.mp4";
  }
  document.getElementById('tab').style.display ="block";
  document.getElementById('ccvvid').style.display = "none";
  document.getElementById('ccvpic').style.display = "block";
  document.getElementById('cvvvidbtn').style.display = "block";
}
function ccvstop(){document.getElementById('tab').style.display ="none";
document.getElementById('ccvvid').pause();
document.getElementById('ccvvid').currentTime = 0;
}

function letplay2(){
  document.getElementById('ccvvid').style.display = "block";
  document.getElementById('ccvpic').style.display = "none";
  document.getElementById('cvvvidbtn').style.display = "none";
}