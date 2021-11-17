fetch('/source/contentSrc/english.json')
    .then(response => response.json())
    .then(data => {
                console.log(data.about_page.paragraph)
                document.querySelector("#data").innerHTML = data.lysh_album.paragraph
    }
)
function play(){
    document.getElementById('vidbut5').style.opacity = "1";
    document.getElementById('play').style.display = "none";
    document.getElementById('photovidco').style.display = "none";
    document.getElementById('vid').style.display = "block";
    document.getElementById('vid').src = "https://www.youtube.com/embed/D_6QmL6rExk?autoplay=1"
}
function vid1() {
    document.getElementById('play').style.display = "none";
    document.getElementById('vid').style.display = "block";
    document.getElementById('photovidco').style.display = "none";
    document.getElementById('vidbut1').style.opacity = "1";
    document.getElementById('vidbut2').style.opacity = "50%";
    document.getElementById('vidbut3').style.opacity = "50%";
    document.getElementById('vidbut4').style.opacity = "50%";
    document.getElementById('vidbut5').style.opacity = "50%";
    document.getElementById('vidbut6').style.opacity = "50%";
    document.getElementById('vid').src = "https://www.youtube.com/embed/p8npDG2ulKQ?autoplay=1"
    }
function vid2() {
    document.getElementById('play').style.display = "none";
    document.getElementById('vid').style.display = "block";
    document.getElementById('photovidco').style.display = "none";
    document.getElementById('vidbut1').style.opacity = "50%";
    document.getElementById('vidbut2').style.opacity = "1";
    document.getElementById('vidbut3').style.opacity = "50%";
    document.getElementById('vidbut4').style.opacity = "50%";
    document.getElementById('vidbut5').style.opacity = "50%";
    document.getElementById('vidbut6').style.opacity = "50%";
    document.getElementById('vid').src = "https://www.youtube.com/embed/BP71K87Hp5Y?autoplay=1"
    }
function vid3() {
    document.getElementById('play').style.display = "none";
    document.getElementById('photovidco').style.display = "none";
    document.getElementById('vid').style.display = "block";
    document.getElementById('vidbut1').style.opacity = "50%";
    document.getElementById('vidbut2').style.opacity = "50%";
    document.getElementById('vidbut3').style.opacity = "1";
    document.getElementById('vidbut4').style.opacity = "50%";
    document.getElementById('vidbut5').style.opacity = "50%";
    document.getElementById('vidbut6').style.opacity = "50%";
    document.getElementById('vid').src = "https://www.youtube.com/embed/2tDKp41nrw8?autoplay=1"    
    }
function vid4() {
    document.getElementById('play').style.display = "none";
    document.getElementById('photovidco').style.display = "none";
    document.getElementById('vid').style.display = "block";
    document.getElementById('vidbut1').style.opacity = "50%";
    document.getElementById('vidbut2').style.opacity = "50%";
    document.getElementById('vidbut3').style.opacity = "50%";
    document.getElementById('vidbut4').style.opacity = "1";
    document.getElementById('vidbut5').style.opacity = "50%";
    document.getElementById('vidbut6').style.opacity = "50%";
    document.getElementById('vid').src = "https://www.youtube.com/embed/7C2z4GqqS5E?autoplay=1" 
    }
function vid5() {
    document.getElementById('play').style.display = "none";
    document.getElementById('photovidco').style.display = "none";
    document.getElementById('vid').style.display = "block";
    document.getElementById('vidbut1').style.opacity = "50%";
    document.getElementById('vidbut2').style.opacity = "50%";
    document.getElementById('vidbut3').style.opacity = "50%";
    document.getElementById('vidbut4').style.opacity = "50%";
    document.getElementById('vidbut5').style.opacity = "1";
    document.getElementById('vidbut6').style.opacity = "50%";
    document.getElementById('vid').src = "https://www.youtube.com/embed/D_6QmL6rExk?autoplay=1"     
    }

function phoset1() {
    document.getElementById('phobut1').style.opacity = "1";
    document.getElementById('phobut2').style.opacity = "50%";
    document.getElementById('phobut3').style.opacity = "50%";
    document.getElementById('phobut4').style.opacity = "50%";
    document.getElementById('photo1').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset1/photo01-01.jpg"
    document.getElementById('photo2').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset1/photo01-02.jpg"
    document.getElementById('photo3').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset1/photo01-03.jpg"
    document.getElementById('photo4').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset1/photo01-04.jpg"
    document.getElementById('photo5').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset1/photo01-05.jpg"
    document.getElementById('photo6').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset1/photo01-06.jpg"
    document.getElementById('photo7').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset1/photo01-07.jpg"
    document.getElementById('photo8').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset1/photo01-08.jpg"
    }
function phoset2() {
    document.getElementById('phobut1').style.opacity = "50%";
    document.getElementById('phobut2').style.opacity = "1";
    document.getElementById('phobut3').style.opacity = "50%";
    document.getElementById('phobut4').style.opacity = "50%";
    document.getElementById('photo1').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset2/photo02-01.jpg"
    document.getElementById('photo2').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset2/photo02-02.jpg"
    document.getElementById('photo3').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset2/photo02-03.jpg"
    document.getElementById('photo4').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset2/photo02-04.jpg"
    document.getElementById('photo5').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset2/photo02-05.jpg"
    document.getElementById('photo6').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset2/photo02-06.jpg"
    document.getElementById('photo7').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset2/photo02-07.jpg"
    document.getElementById('photo8').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset2/photo02-08.jpg"
    }
function phoset3() {
    document.getElementById('phobut1').style.opacity = "50%";
    document.getElementById('phobut2').style.opacity = "50%";
    document.getElementById('phobut3').style.opacity = "1";
    document.getElementById('phobut4').style.opacity = "50%";
    document.getElementById('photo1').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset3/photo03-01.jpg"
    document.getElementById('photo2').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset3/photo03-02.jpg"
    document.getElementById('photo3').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset3/photo03-03.jpg"
    document.getElementById('photo4').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset3/photo03-04.jpg"
    document.getElementById('photo5').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset3/photo03-05.jpg"
    document.getElementById('photo6').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset3/photo03-06.jpg"
    document.getElementById('photo7').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset3/photo03-07.jpg"
    document.getElementById('photo8').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset3/photo03-08.jpg"  
    }
function phoset4() {
    document.getElementById('phobut1').style.opacity = "50%";
    document.getElementById('phobut2').style.opacity = "50%";
    document.getElementById('phobut3').style.opacity = "50%";
    document.getElementById('phobut4').style.opacity = "1";
    document.getElementById('photo1').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset4/photo04-01.jpg"
    document.getElementById('photo2').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset4/photo04-02.jpg"
    document.getElementById('photo3').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset4/photo04-03.jpg"
    document.getElementById('photo4').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset4/photo04-04.jpg"
    document.getElementById('photo5').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset4/photo04-05.jpg"
    document.getElementById('photo6').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset4/photo04-06.jpg"
    document.getElementById('photo7').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset4/photo04-07.jpg"
    document.getElementById('photo8').src = "../../imgSrc/BTS/DISCOGRAPHY/LOVEYOURSELFTEAR/photoset4/photo04-08.jpg"
    }
    function mouseOver(x) {
        x.style.color = "white";
      }
      
    function mouseOut(x) {
        x.style.color = "#5B647F";
    }
    function mouseOver2(y) {
        y.style.color = "white";
      }
    function mouseOut2(y) {
        y.style.color = "#5B647F";
    }
    function mouseOver4() {
        document.getElementById('left').style.color = "#24408d";
      }
    function mouseOut4() {
        document.getElementById('left').style.color = "gray";
    }
    function mouseOver5() {
        document.getElementById('right').style.color = "#24408d";
      }
    function mouseOut5() {
        document.getElementById('right').style.color = "gray";
    }