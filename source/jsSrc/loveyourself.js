fetch('/source/contentSrc/english.json')
    .then(response => response.json())
    .then(data => {
                console.log(data.about_page.paragraph)
                document.querySelector("#data").innerHTML = data.lysh_album.paragraph
    }
)
function play(){
    document.getElementById('play').style.display = "none";
    document.getElementById('vid').style.display = "block";
    document.getElementById('vid').src = "https://www.youtube.com/embed/fJ9rUzIMcZQ?autoplay=1"
}
function vid1() {
    document.getElementById('play').style.display = "none";
    document.getElementById('vid').style.display = "block";

    document.getElementById('vid').src = "https://www.youtube.com/embed/AJEoJYgktb4?autoplay=1"
    }
function vid2() {
    document.getElementById('play').style.display = "none";
    document.getElementById('vid').style.display = "block";

    document.getElementById('vid').src = "https://www.youtube.com/embed/9hhMUT2U2L4?autoplay=1"
    }
function vid3() {
    document.getElementById('play').style.display = "none";
    document.getElementById('vid').style.display = "block";
    document.getElementById('vid').src = "https://www.youtube.com/embed/aTJncWndUB8?autoplay=1"    
    }
function vid4() {
    document.getElementById('play').style.display = "none";
    document.getElementById('vid').style.display = "block";
    document.getElementById('vid').src = "https://www.youtube.com/embed/qjmv57QMQzg?autoplay=1" 
    }
function vid5() {
    document.getElementById('play').style.display = "none";
    document.getElementById('vid').style.display = "block";
    document.getElementById('vid').src = "https://www.youtube.com/embed/G-uqRYqzmXw?autoplay=1"     
    }
function vid6() {
    document.getElementById('play').style.display = "none";
    document.getElementById('vid').style.display = "block";
    document.getElementById('vid').src = "https://www.youtube.com/embed/fJ9rUzIMcZQ?autoplay=1"     
    }

function phoset1() {
    document.getElementById('photo1').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo01-01.jpg"
    document.getElementById('photo2').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo01-02.jpg"
    document.getElementById('photo3').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo01-03.jpg"
    document.getElementById('photo4').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo01-04.jpg"
    document.getElementById('photo5').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo01-05.jpg"
    document.getElementById('photo6').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo01-06.jpg"
    document.getElementById('photo7').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo01-07.jpg"
    document.getElementById('photo8').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo01-08.jpg"
    }
function phoset2() {
    document.getElementById('photo1').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo02-01.jpg"
    document.getElementById('photo2').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo02-02.jpg"
    document.getElementById('photo3').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo02-03.jpg"
    document.getElementById('photo4').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo02-04.jpg"
    document.getElementById('photo5').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo02-05.jpg"
    document.getElementById('photo6').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo02-06.jpg"
    document.getElementById('photo7').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo02-07.jpg"
    document.getElementById('photo8').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo02-08.jpg"
    }
function phoset3() {
    document.getElementById('photo1').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo03-01.jpg"
    document.getElementById('photo2').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo03-02.jpg"
    document.getElementById('photo3').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo03-03.jpg"
    document.getElementById('photo4').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo03-04.jpg"
    document.getElementById('photo5').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo03-05.jpg"
    document.getElementById('photo6').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo03-06.jpg"
    document.getElementById('photo7').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo03-07.jpg"
    document.getElementById('photo8').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo03-08.jpg"   
    }
function phoset4() {
    document.getElementById('photo1').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo04-01.jpg"
    document.getElementById('photo2').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo04-02.jpg"
    document.getElementById('photo3').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo04-03.jpg"
    document.getElementById('photo4').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo04-04.jpg"
    document.getElementById('photo5').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo04-05.jpg"
    document.getElementById('photo6').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo04-06.jpg"
    document.getElementById('photo7').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo04-07.jpg"
    document.getElementById('photo8').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo04-08.jpg"
    }