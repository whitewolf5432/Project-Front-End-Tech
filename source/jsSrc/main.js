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
});

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
