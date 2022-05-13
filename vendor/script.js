const openButton = document.querySelector('.button-edit');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.button-close');

// Открытие popup
function openPopup() {
    popup.classList.add('popup_opened');
}
openButton.addEventListener('click', openPopup);

// Закрытие popup
function closePopup() {
    popup.classList.remove('popup_opened');
}
closeButton.addEventListener('click', closePopup);


// Открытие и закрытие попапа
// Отслеживайте клик по кнопке методом addEventListener.

// Находим форму в DOM
// let formElement = document.querySelector(".popup__form");
// let nameInput = document.querySelector(".popup__input_value_name");
// let jobInput = document.querySelector(".popup__input_value_job");
