$(document).ready(function() {
    $('#family').mouseover( function () {
        document.getElementById('family').classList.add('active');
        document.getElementById('family_site').classList.replace('d-none', 'd-flex');
        document.getElementById('family_site').classList.remove('opacity-0');
    });

    $('#family').mouseout( function () {
        document.getElementById('family').classList.remove('active');
        document.getElementById('family_site').classList.replace('d-flex', 'd-none');
        document.getElementById('family_site').classList.add('opacity-0');
    });

    $('#language').mouseover( function () {
        $('#language').addClass('active');
        $('#language ul').css('opacity', '1');
        $('#language_option li').css('opacity', '1');
        $('#language ul').click( function () {
            content();
            $('#language_option').css('opacity', '0');
            $('#language').removeClass('active');
            $('#language ul').css('opacity', '0');
            $('#language_option li').css('opacity', '0');
        });
    });

    $('#language').mouseout( function () {
        $('#language').removeClass('active');
        $('#language ul').css('opacity', '0');
        $('#language_option li').css('opacity', '0');
    });
});

function move(lang) {
    var cache = document.getElementById('language_option').children[0].innerText;
    document.getElementById('language_option').children[0].innerText = document.getElementById('language_option').children[lang].innerText;
    document.getElementById('language_option').children[lang].innerText = cache;
    $('#language button').text(document.getElementById('language_option').children[0].innerText);
}

function showMenu() {
    document.getElementById('menu').classList.toggle('close');
    document.getElementById('menu-list').classList.toggle('opacity-100');
    if(document.getElementById('menu-list').style.visibility == 'visible') {
        document.getElementById('menu-list').style.visibility = 'hidden';
    } else {
        document.getElementById('menu-list').style.visibility = 'visible';
    }
    document.getElementById('list').classList.replace('justify-content-end', 'justify-content-center');
    document.getElementById('more').style.width = '0%';
    document.getElementById('more').style.visibility = 'hidden';
    document.getElementById('more0').style.visibility = 'hidden';
    document.getElementById('more1').style.visibility = 'hidden';
    document.getElementById('more2').style.visibility = 'hidden';
    document.getElementById('more').style.opacity = '0';
    document.getElementById('more0').style.opacity = '0';
    document.getElementById('more1').style.opacity = '0';
    document.getElementById('more2').style.opacity = '0';
    $('#0').css('background-color', 'rgba(0, 0, 0, 0)');
    $('#1').css('background-color', 'rgba(0, 0, 0, 0)');
    $('#2').css('background-color', 'rgba(0, 0, 0, 0)');
    moreOn = false;
    lastItem = null;
}

let moreOn = false;
let lastItem = null;

function moreList(item) {
    $('#0').css('background-color', 'rgba(0, 0, 0, 0)');
    $('#1').css('background-color', 'rgba(0, 0, 0, 0)');
    $('#2').css('background-color', 'rgba(0, 0, 0, 0)');
    $('#'+item).css('background-color', 'rgba(0, 0, 0, 0.2)');
    document.getElementById('more0').style.visibility = 'hidden';
    document.getElementById('more1').style.visibility = 'hidden';
    document.getElementById('more2').style.visibility = 'hidden';
    document.getElementById('more0').style.opacity = '0';
    document.getElementById('more1').style.opacity = '0';
    document.getElementById('more2').style.opacity = '0';
    if (moreOn) {
        document.getElementById('more'+item).style.visibility = 'visible';
        document.getElementById('more'+item).style.opacity = '1';
        if (lastItem == item) {
            $('#'+item).css('background-color', 'rgba(0, 0, 0, 0)');
            document.getElementById('more'+item).style.visibility = 'hidden';
            document.getElementById('more'+item).style.opacity = '0';
            document.getElementById('more').style.opacity = '0';
            document.getElementById('more').style.visibility = 'hidden';
            document.getElementById('more').style.width = '0%';
            document.getElementById('list').classList.toggle('justify-content-end');
            document.getElementById('list').classList.toggle('justify-content-center');
            moreOn = false;
        }
    } else {
        document.getElementById('more'+item).style.visibility = 'visible';
        document.getElementById('more'+item).style.opacity = '1';
        document.getElementById('more').style.opacity = '1';
        document.getElementById('more').style.visibility = 'visible';
        document.getElementById('more').style.width = '50%';
        document.getElementById('list').classList.toggle('justify-content-end');
        document.getElementById('list').classList.toggle('justify-content-center');
        moreOn = true;
    }
    lastItem = item;
}

function content() {
    let requestURL = '../source/contentSrc/';
    switch (document.getElementById('selected').innerText) {
        case "ENG":
            requestURL += 'english.json';
            break;
        case "KOR":
            requestURL += 'korean.json';
            break;
        case "JPN":
            requestURL += 'japanese.json';
            break;
        case "CHN":
            requestURL += 'chinese.json';
            break;
        default:
            break;
    }
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () { 
        if (request.readyState == 4 && request.status == 200) {
            const content = JSON.parse(request.responseText);
            document.getElementById('family_site_content').innerHTML = content["family_site_menu"]["menu"];
            load_content(content);
        }
    }
    request.open("GET", requestURL, false);
    request.send();
}
