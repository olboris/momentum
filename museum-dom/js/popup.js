const popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('.tickets__buy-button');
const closePopupButton = document.querySelector('.popup__close-button');

function closePopup() {
    popup.classList.remove('popup_active');
}

function openPopup() {
    popup.classList.add('popup_active');
}