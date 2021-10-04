const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu__burger-container');
const title = document.querySelector('.title-container');
const burgerMenuButton = document.querySelector('.menu-button');

function toggleMenu() {
    menu.classList.toggle('menu__burger-container_active');
    title.classList.toggle('title-container__hidden');
    menuButton.classList.toggle('menu-button__close');
    menuButton.classList.toggle('menu-button__open');
}

function openMenu() {
    menu.classList.add('menu__burger-container_active');
    title.classList.add('title-container__hidden');
    burgerMenuButton.classList.add('menu-button__close');
    burgerMenuButton.classList.remove('menu-button__open');
}