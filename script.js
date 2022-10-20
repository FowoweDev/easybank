// 
const mobileMenu = document.getElementById('menu-cta');
    mobileExit = document.getElementById('menu-exit-cta');
    overlay = document.getElementById('overlay');

    mobileMenu.addEventListener('click', () => {
        overlay.classList.add('menu-btn');
    })

    mobileExit.addEventListener('click', () => {
        overlay.classList.remove('menu-btn');
    })

  