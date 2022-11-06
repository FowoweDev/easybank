// Mobile menu functionality

const mobileMenu = document.getElementById('menu-cta');
const nav = document.querySelector('nav');
const mobileExit = document.getElementById('exit-cta');

// create a function
function toggleNav() {
    mobileMenu.classList.toggle('btn');

    nav.classList.toggle('none');
    if (nav.classList.contains('none')){
        nav.classList.remove('overlay');
    } else {
        nav.classList.add('overlay');
    }
}
// call the function
mobileMenu.addEventListener('click', toggleNav);
mobileExit.addEventListener('click', toggleNav);


