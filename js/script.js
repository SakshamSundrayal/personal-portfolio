// Hamburger button logic
const burger = document.querySelector('.burger');
const lines = document.querySelectorAll('.lines');
const nav = document.querySelector('nav');

burger.addEventListener('click', ()=> {
    for (let item of lines) {
            let id = parseInt(item.id.charAt(1));
    
            item.classList.toggle('l' + id);
    }
    nav.classList.toggle('show');
});

// Hamburger button logic ends


// Image pop logic starts
/*
const img = document.querySelector('#s5 > .banner > img');
const imgBtn = document.querySelector('button.imgBtn');
imgBtn.addEventListener('click', ()=> {
    img.classList.toggle('visible');
});
*/

// Image pop logic ends

// Smooth transition logic starts

document.querySelectorAll('a[href^="#"').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Smooth transition logic ends

