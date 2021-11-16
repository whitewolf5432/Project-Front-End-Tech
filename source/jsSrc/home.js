function showPopup(target) {
    document.getElementsByClassName('popup')[target].classList.toggle('d-none');
    document.getElementsByClassName('popup')[target].classList.toggle('d-flex');
    document.getElementsByClassName('popup')[target].classList.toggle('opacity-0');
    document.getElementsByClassName('popup')[target].classList.toggle('opacity-100');
}