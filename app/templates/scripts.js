$('.carousel-items').owlCarousel({
    items:1,
    nav: true,    
    navContainer: '.carousel-arrows',
    dotsContainer: '.carousel-dots',
})

let burger = document.querySelector('.header-burger');
let menu = document.querySelector('.header-nav');
let wrapper = document.querySelector('.header-nav-wrapper'); 
if (burger){
    burger.addEventListener('click', ()=>{
        togglemenu();
    });
    wrapper.addEventListener('click', ()=>{
        togglemenu();
    });
}

let togglemenu = ()=>{
    burger.classList.toggle('header-burger__active');
    menu.classList.toggle('header-nav__active');
    document.body.classList.toggle('body__overflow');
}