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
    document.getElementById('vid').src = "https://www.youtube.com/embed/fJ9rUzIMcZQ?autoplay=1"
}
function vid1() {
    document.getElementById('play').style.display = "none";
    document.getElementById('vid').style.display = "block";
    document.getElementById('vid').src = "https://www.youtube.com/watch?v=oxoWhyS9buA"
    }
function vid2() {
    document.getElementById('play').style.display = "none";
    document.getElementById('vid').style.display = "block";

    document.getElementById('vid').src = "https://www.youtube.com/watch?v=gdZLi9oWNZg"
    }
function vid3() {
    document.getElementById('play').style.display = "none";
    document.getElementById('vid').style.display = "block";
    document.getElementById('vid').src = "https://www.youtube.com/watch?v=BV2FdDmGiW0"    
    }
function vid4() {
    document.getElementById('play').style.display = "none";
    document.getElementById('vid').style.display = "block";
    document.getElementById('vid').src = "https://www.youtube.com/watch?v=CN4fffh7gmk" 
    }

function phoset1() {
    document.getElementById('photo1').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo01-01.jpg"
    document.getElementById('photo2').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo01-02.jpg"
    document.getElementById('photo3').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo01-03.jpg"
    document.getElementById('photo4').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo01-04.jpg"
    document.getElementById('photo5').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo01-05.jpg"
    document.getElementById('photo6').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo01-06.jpg"
    document.getElementById('photo7').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo01-07.jpg"
    document.getElementById('prev').style.display = "block";
    document.getElementById('next').style.display = "block";
    }
function phoset2() {
    document.getElementById('photo1').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo02-01.jpg"
    document.getElementById('prev').style.display = "none";
    document.getElementById('next').style.display = "none";
}
function phoset3() {
    document.getElementById('photo1').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo03-01.jpg"
    document.getElementById('prev').style.display = "none";
    document.getElementById('next').style.display = "none";
}
function phoset4() {
    document.getElementById('photo1').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo04-01.jpg"
    document.getElementById('photo2').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo04-02.jpg"
    document.getElementById('photo3').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo04-03.jpg"
    document.getElementById('photo4').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo04-04.jpg"
    document.getElementById('photo5').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo04-05.jpg"
    document.getElementById('photo6').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo04-06.jpg"
    document.getElementById('photo7').src = "https://ibighit.com/bts/images/bts/discography/love_yourself-her/photo04-07.jpg"
    document.getElementById('prev').style.display = "block";
    document.getElementById('next').style.display = "block";
}