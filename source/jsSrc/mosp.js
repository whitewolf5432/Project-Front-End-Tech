function load_content(data) {
    let data_content = data["mos_album"];
    document.getElementById("data").innerHTML = data_content["paragraph"];
}
fetch('/source/contentSrc/english.json')
    .then(response => response.json())
    .then(data => {
                console.log(data.about_page.paragraph)
                document.querySelector("#data").innerHTML = data.mos_album.paragraph
    }
)
function play(){
    document.getElementById('vidbut6').style.opacity = "1";
    document.getElementById('play').style.display = "none";
    document.getElementById('photovidco').style.display = "none";
    document.getElementById('vid').style.display = "block";
    document.getElementById('vid').src = "https://www.youtube.com/watch?v=eXBu09fwe3I"
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
    document.getElementById('vid').src = "https://www.youtube.com/watch?v=eXBu09fwe3I"
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
    document.getElementById('vid').src = "https://www.youtube.com/watch?v=jrSsNzsi4eQ"
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
    document.getElementById('vid').src = "https://www.youtube.com/watch?v=1zDd-3J1nTg"    
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
    document.getElementById('vid').src = "https://www.youtube.com/watch?v=XsX3ATc3FbA" 
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
    document.getElementById('vid').src = "https://www.youtube.com/watch?v=62E_xyj_oDA"     
    }
function vid6() {
    document.getElementById('play').style.display = "none";
    document.getElementById('photovidco').style.display = "none";
    document.getElementById('vid').style.display = "block";
    document.getElementById('vidbut1').style.opacity = "50%";
    document.getElementById('vidbut2').style.opacity = "50%";
    document.getElementById('vidbut3').style.opacity = "50%";
    document.getElementById('vidbut4').style.opacity = "50%";
    document.getElementById('vidbut5').style.opacity = "50%";
    document.getElementById('vidbut6').style.opacity = "1";
    document.getElementById('vid').src = "https://www.youtube.com/watch?v=62E_xyj_oDA&t=1s"     
    }

function phoset1() {
    document.getElementById('phobut1').style.opacity = "1";
    document.getElementById('phobut2').style.opacity = "50%";
    document.getElementById('phobut3').style.opacity = "50%";
    document.getElementById('phobut4').style.opacity = "50%";
    document.getElementById('photo1').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version01-01.jpg"
    document.getElementById('photo2').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version01-02.jpg"
    document.getElementById('photo3').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version01-03.jpg"
    document.getElementById('photo4').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version01-04.jpg"
    document.getElementById('photo5').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version01-05.jpg"
    document.getElementById('photo6').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version01-06.jpg"
    document.getElementById('photo7').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version01-07.jpg"
    document.getElementById('photo8').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version01-07.jpg"
    }
function phoset2() {
    document.getElementById('phobut1').style.opacity = "50%";
    document.getElementById('phobut2').style.opacity = "1";
    document.getElementById('phobut3').style.opacity = "50%";
    document.getElementById('phobut4').style.opacity = "50%";
    document.getElementById('photo1').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version02-01.jpg"
    document.getElementById('photo2').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version02-02.jpg"
    document.getElementById('photo3').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version02-03.jpg"
    document.getElementById('photo4').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version02-04.jpg"
    document.getElementById('photo5').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version02-05.jpg"
    document.getElementById('photo6').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version02-06.jpg"
    document.getElementById('photo7').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version02-07.jpg"
    document.getElementById('photo8').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version02-08.jpg"
    }
function phoset3() {
    document.getElementById('phobut1').style.opacity = "50%";
    document.getElementById('phobut2').style.opacity = "50%";
    document.getElementById('phobut3').style.opacity = "1";
    document.getElementById('phobut4').style.opacity = "50%";
    document.getElementById('photo1').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version03-01.jpg"
    document.getElementById('photo2').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version03-02.jpg"
    document.getElementById('photo3').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version03-03.jpg"
    document.getElementById('photo4').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version03-04.jpg"
    document.getElementById('photo5').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version03-05.jpg"
    document.getElementById('photo6').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version03-06.jpg"
    document.getElementById('photo7').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version03-07.jpg"
    document.getElementById('photo8').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version03-08.jpg"
    }
function phoset4() {
    document.getElementById('phobut1').style.opacity = "50%";
    document.getElementById('phobut2').style.opacity = "50%";
    document.getElementById('phobut3').style.opacity = "50%";
    document.getElementById('phobut4').style.opacity = "1";
    document.getElementById('photo1').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version04-01.jpg"
    document.getElementById('photo2').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version04-02.jpg"
    document.getElementById('photo3').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version04-03.jpg"
    document.getElementById('photo4').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version04-04.jpg"
    document.getElementById('photo5').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version04-05.jpg"
    document.getElementById('photo6').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version04-06.jpg"
    document.getElementById('photo7').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version04-07.jpg"
    document.getElementById('photo8').src = "../../imgSrc/BTS/DISCOGRAPHY/MOSP/version04-08.jpg"
    }
    function mouseOver(x) {
        x.style.color = "#fff";
        x.style.opacity = "1";
      }
      
    function mouseOut(x) {
        x.style.color = "#fff";
    }
    function mouseOver2(y) {
        y.style.color = "#fff";
        y.style.opacity = "1";
      }
    function mouseOut2(y) {
        y.style.color = "#fff";
    }
    function mouseOver4() {
        document.getElementById('left').style.color = "#A8587C";
      }
    function mouseOut4() {
        document.getElementById('left').style.color = "#fff";
    }
    function mouseOver5() {
        document.getElementById('right').style.color = "#A8587C";
      }
    function mouseOut5() {
        document.getElementById('right').style.color = "#fff";
    }