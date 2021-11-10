$(document).ready(function(){
    $("#family").mouseover( function () {
        document.getElementById('family').classList.add('active');
        document.getElementById('family_site').classList.replace('d-none', 'd-flex');
        document.getElementById('family_site').classList.remove('opacity-0');
    });

    $("#family").mouseout( function () {
        document.getElementById('family').classList.remove('active');
        document.getElementById('family_site').classList.replace('d-flex', 'd-none');
        document.getElementById('family_site').classList.add('opacity-0');
    });
});

function showMenu() {
    document.getElementById("menu").classList.toggle("close");
    document.getElementById("menu-list").classList.toggle("d-none");
    document.getElementById("menu-list").classList.toggle("d-flex");
}

let moreOn = false;
let lastItem = null;

function moreList(item) {
    document.getElementById('more0').classList.replace('d-flex', 'd-none');
    document.getElementById('more1').classList.replace('d-flex', 'd-none');
    document.getElementById('more2').classList.replace('d-flex', 'd-none');
    document.getElementById('more'+item).classList.replace('d-none', 'd-flex');
    if (moreOn) {
        document.getElementById('more').classList.replace('d-none', 'd-flex');
        if (lastItem == item) {
            document.getElementById('more').classList.replace('d-flex', 'd-none');
            document.getElementById('list').classList.toggle('justify-content-end');
            document.getElementById('list').classList.toggle('justify-content-center');
            moreOn = false;
        }
    } else {
        document.getElementById('more').classList.replace('d-none', 'd-flex');
        document.getElementById('list').classList.toggle('justify-content-end');
        document.getElementById('list').classList.toggle('justify-content-center');
        moreOn = true;
    }
    lastItem = item;
}
