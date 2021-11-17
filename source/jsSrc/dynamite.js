function load_content(data) {
    let data_content = data["dynamite_album"];
    document.getElementById("data").innerHTML = data_content["paragraph"];
}
fetch('/source/contentSrc/english.json')
    .then(response => response.json())
    .then(data => {
                console.log(data.about_page.paragraph)
                document.querySelector("#data").innerHTML = data.dynamite_album.paragraph
    }
)
function play(){
    document.getElementById('play').style.display = "none";
    document.getElementById('vid').style.display = "block";
    document.getElementById('vid').src = "https://www.youtube.com/watch?v=BflFNMl_UWY&t=1s"
}
function vid1() {
    document.getElementById('play').style.display = "none";
    document.getElementById('vid').style.display = "block";
    document.getElementById('vid').src = "https://www.youtube.com/watch?v=BflFNMl_UWY&t=1s"
    }
function vid2() {
    document.getElementById('play').style.display = "none";
    document.getElementById('vid').style.display = "block";

    document.getElementById('vid').src = "https://www.youtube.com/watch?v=gdZLi9oWNZg&t=3s"
    }
function vid3() {
    document.getElementById('play').style.display = "none";
    document.getElementById('vid').style.display = "block";
    document.getElementById('vid').src = "https://www.youtube.com/watch?v=BV2FdDmGiW0&t=2s"    
    }
function vid4() {
    document.getElementById('play').style.display = "none";
    document.getElementById('vid').style.display = "block";
    document.getElementById('vid').src = "https://www.youtube.com/watch?v=BflFNMl_UWY&t=1s" 
    }

function phoset1() {
    document.getElementById('photo1').src = "../../imgSrc/BTS/DISCOGRAPHY/Dynamite/tp1.jpg"
    document.getElementById('photo2').src = "../../imgSrc/BTS/DISCOGRAPHY/Dynamite/tp2.jpg"
    document.getElementById('photo3').src = "../../imgSrc/BTS/DISCOGRAPHY/Dynamite/tp3.jpg"
    document.getElementById('photo4').src = "../../imgSrc/BTS/DISCOGRAPHY/Dynamite/tp4.jpg"
    document.getElementById('photo5').src = "../../imgSrc/BTS/DISCOGRAPHY/Dynamite/tp5.jpg"
    document.getElementById('photo6').src = "../../imgSrc/BTS/DISCOGRAPHY/Dynamite/tp6.jpg"
    document.getElementById('photo7').src = "../../imgSrc/BTS/DISCOGRAPHY/Dynamite/tp7.jpg"
    document.getElementById('prev').style.display = "block";
    document.getElementById('next').style.display = "block";
    }
function phoset2() {
    document.getElementById('photo1').src = "../../imgSrc/BTS/DISCOGRAPHY/Dynamite/gtp1.jpg"
    document.getElementById('photo2').src = "../../imgSrc/BTS/DISCOGRAPHY/Dynamite/gtp1.jpg"
    document.getElementById('photo3').src = "../../imgSrc/BTS/DISCOGRAPHY/Dynamite/gtp1.jpg"
    document.getElementById('photo4').src = "../../imgSrc/BTS/DISCOGRAPHY/Dynamite/gtp1.jpg"
    document.getElementById('photo5').src = "../../imgSrc/BTS/DISCOGRAPHY/Dynamite/gtp1.jpg"
    document.getElementById('photo6').src = "../../imgSrc/BTS/DISCOGRAPHY/Dynamite/gtp1.jpg"
    document.getElementById('photo7').src = "../../imgSrc/BTS/DISCOGRAPHY/Dynamite/gtp1.jpg"
    document.getElementById('prev').style.display = "none";
    document.getElementById('next').style.display = "none";
}
function phoset3() {
    document.getElementById('photo1').src = "../../imgSrc/BTS/DISCOGRAPHY/Dynamite/gtp2.jpg"
    document.getElementById('photo2').src = "../../imgSrc/BTS/DISCOGRAPHY/Dynamite/gtp2.jpg"
    document.getElementById('photo3').src = "../../imgSrc/BTS/DISCOGRAPHY/Dynamite/gtp2.jpg"
    document.getElementById('photo4').src = "../../imgSrc/BTS/DISCOGRAPHY/Dynamite/gtp2.jpg"
    document.getElementById('photo5').src = "../../imgSrc/BTS/DISCOGRAPHY/Dynamite/gtp2.jpg"
    document.getElementById('photo6').src = "../../imgSrc/BTS/DISCOGRAPHY/Dynamite/gtp2.jpg"
    document.getElementById('photo7').src = "../../imgSrc/BTS/DISCOGRAPHY/Dynamite/gtp2.jpg"
    document.getElementById('prev').style.display = "none";
    document.getElementById('next').style.display = "none";
}
function phoset4() {
    document.getElementById('photo1').src = "../../imgSrc/BTS/DISCOGRAPHY/Dynamite/rtp1.jpg"
    document.getElementById('photo2').src = "../../imgSrc/BTS/DISCOGRAPHY/Dynamite/rt92.jpg"
    document.getElementById('photo3').src = "../../imgSrc/BTS/DISCOGRAPHY/Dynamite/rtp3.jpg"
    document.getElementById('photo4').src = "../../imgSrc/BTS/DISCOGRAPHY/Dynamite/rtp4.jpg"
    document.getElementById('photo5').src = "../../imgSrc/BTS/DISCOGRAPHY/Dynamite/rtp5.jpg"
    document.getElementById('photo6').src = "../../imgSrc/BTS/DISCOGRAPHY/Dynamite/rtp6.jpg"
    document.getElementById('photo7').src = "../../imgSrc/BTS/DISCOGRAPHY/Dynamite/rtp7.jpg"
    document.getElementById('prev').style.display = "block";
    document.getElementById('next').style.display = "block";
}