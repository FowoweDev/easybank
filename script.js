// Ibeg yopu in the the na,me of god doent delay me this night

const mobileMenu = document.getElementById('menu-cta');
const nav = document.querySelector('nav');
const mobileExit = document.getElementById('exit-cta');

function toggleNav() {
    mobileMenu.classList.toggle('btn');

    nav.classList.toggle('none');
    if (nav.classList.contains('none')){
        nav.classList.remove('overlay');
    } else {
        nav.classList.add('overlay');
    }
}

mobileMenu.addEventListener('click', toggleNav);
mobileExit.addEventListener('click', toggleNav);


