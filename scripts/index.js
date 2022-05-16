const openButton = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.button-close');
const formElement = popup.querySelector(".popup__form");
let nameInput = popup.querySelector('.popup__input_value_name');
let jobInput = popup.querySelector('.popup__input_value_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

// Открытие popup
function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}
openButton.addEventListener('click', openPopup);

// Закрытие popup
function closePopup() {
    popup.classList.remove('popup_opened');
}
closeButton.addEventListener('click', closePopup);

// Обработчик отправки формы
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}
formElement.addEventListener('submit', formSubmitHandler); 