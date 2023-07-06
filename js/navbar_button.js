let menuButton = document.querySelector('.s2-mobile_menu .s2-mobile_menu_button');
let closeMenu = document.querySelector('.s2-mobile_menu .s2-mobile_menu_wrap .s2-mobile_menu_content .s2-mobile_menu_close');
let navLink = document.querySelectorAll('.main_navigation #main-nav li a.nav-link');
let menuSide = document.querySelector('.s2-mobile_menu .s2-mobile_menu_wrap .s2-open_mobile_menu');


function navbarOpenMenu() {
    menuSide.classList.toggle('mobile_menu_overlay');
    document.querySelector('.s2-mobile_menu_content').classList.toggle("openMenu");
}


menuButton.addEventListener('click', function () {
    navbarOpenMenu();
});
closeMenu.addEventListener('click', function () {
    navbarOpenMenu();
});
document.onclick = function (e) {
    if (e.target === document.querySelector('.s2-mobile_menu .s2-mobile_menu_wrap .s2-open_mobile_menu.mobile_menu_overlay')){
        navbarOpenMenu();
    }
}


for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', function () {
        document.querySelector('#main-nav a.nav-link.active').classList.remove('active');
        this.classList.add('active');
    })
};



