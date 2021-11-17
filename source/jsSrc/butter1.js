fetch('/source/contentSrc/english.json')
    .then(response => response.json())
    .then(data => {
                console.log(data.about_page.paragraph)
                document.querySelector("#data").innerHTML = data.butter1_album.paragraph
    }
)
function play(){
    document.getElementById('play').style.display = "none";
    document.getElementById('vid1').style.display = "block";
    document.getElementById('vid1').src = "https://www.youtube.com/embed/fJ9rUzIMcZQ?autoplay=1"
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