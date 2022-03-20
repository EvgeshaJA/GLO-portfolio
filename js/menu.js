const burger = document.querySelector('.humburger-menu');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-list__item');

burger.addEventListener('click', () => {
    menu.classList.toggle('menu-active');
});

menuLinks.forEach((i) => {
    i.addEventListener('click', () => {
        menu.classList.remove('menu-active');
    });
});

document.addEventListener('click', (event) => {
    if(!(event.target.closest('.menu') || event.target.closest('.humburger-menu'))) { // дословно: если пользователь кликнул вне меню, то блок закоыть, кроме эл-тов меню и гамбургер меню
       menu.classList.remove('menu-active');
    }
});