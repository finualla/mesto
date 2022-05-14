const openButton = document.querySelector('.button-edit');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.button-close');
const submitButton = document.querySelector('.button-submit');
const formElement = document.querySelector(".popup__form");

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

// Обработчик отправки формы
function formSubmitHandler (evt) {
    evt.preventDefault();
    // Получите значение полей jobInput и nameInput из свойства value
    let nameInput = document.querySelector('.popup__input_value_name');
    let jobInput = document.querySelector('.popup__input_value_job');
    // Выберите элементы, куда должны быть вставлены значения полей
    let profileName = document.querySelector('.profile__name');
    let profileJob = document.querySelector('.profile__job');
    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}
// Прикрепляем обработчик к форме
formElement.addEventListener('submit', formSubmitHandler); 