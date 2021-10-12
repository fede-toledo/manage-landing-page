const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if(header.classList.contains('open')){//Close hamburger menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
    }
    else{ //Open hamburger menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        })
    }
});



//Flickity Slider
var elem = document.querySelector('.slider');
var flkty = new Flickity( elem, {
  // options
    accessibility: true,
    adaptiveHeight: true,
    freeScroll: false,
    wrapAround: true,
    initialIndex:1,
    lazyLoad: false,
    draggable: true,
    prevNextButtons: false,
    pageDots: true,
    resize: true
});


