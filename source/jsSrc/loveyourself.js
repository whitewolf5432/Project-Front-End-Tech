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