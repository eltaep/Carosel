let allImages = document.querySelectorAll('img');
let next = document.querySelector('.next')
let past = document.querySelector('.past')
let allcircles = document.querySelectorAll('.bo');
let indexofactiveimg;
function caroselFu() {

    allImages.forEach((img, indexofimg) => {

        if (img.classList.contains('active')) {
            indexofactiveimg = indexofimg;
        }
    })
    if (indexofactiveimg < allImages.length - 1) {
        allImages[indexofactiveimg].classList.remove('active');
        allImages[indexofactiveimg + 1].classList.add('active');
        allcircles[indexofactiveimg].classList.remove('activee')
        allcircles[indexofactiveimg + 1].classList.add('activee')
    }
    else {
        allImages[indexofactiveimg].classList.remove('active');
        allcircles[indexofactiveimg].classList.remove('activee');

        indexofactiveimg = -1;
        allImages[indexofactiveimg + 1].classList.add('active')
        allcircles[indexofactiveimg + 1].classList.add('activee');

    }

}
next.onclick = caroselFu

function ajaj() {
    allImages.forEach((imege, indexofimege) => {
        if (imege.classList.contains('active'))
            indexofactiveimg = indexofimege;
    })
    if (indexofactiveimg == 0) {
        allImages[indexofactiveimg].classList.remove('active')
        allcircles[indexofactiveimg].classList.remove('activee')
        indexofactiveimg = allImages.length;
        allImages[indexofactiveimg - 1].classList.add('active')
        allcircles[indexofactiveimg - 1].classList.add('activee')
    }
    else if (indexofactiveimg <= allImages.length - 1) {
        allImages[indexofactiveimg].classList.remove('active')
        allcircles[indexofactiveimg].classList.remove('activee')
        allImages[indexofactiveimg - 1].classList.add('active')
        allcircles[indexofactiveimg - 1].classList.add('activee')
    }
}
past.onclick = ajaj

