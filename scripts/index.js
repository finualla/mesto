const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

const editButton = document.querySelector('.profile__button-edit');
const addButton = document.querySelector('.button-add');
const closeButton = document.querySelector('.button-close');

const cardList = document.querySelector('.posts__list'); // куда вставляем контент




// Попапы
const popups = document.querySelectorAll('.popup');
const popupName = document.querySelector('.popup_type_edit-name');
const popupCard = document.querySelector('.popup_type_add-card');
const popupImg = document.querySelector('.popup_type_image-zoomed');
// Формы для event слушателя
const formElementName = document.querySelector(".popup__form_type_editname");
const formElementCard = document.querySelector('popup__form_type_addcard');
// Инпуты в попапах
let nameInput = document.querySelector('.popup__input_value_name');//поле ввод имя
let jobInput = document.querySelector('.popup__input_value_job');//поле ввод работа
let cardNameInput = popupCard.querySelector('.popup__input_value_cardname');//поле ввод места
let imgLinkInput = popupCard.querySelector('.popup__input_value_cardlink');//поле ввод ссылка

const cardTemplate = document.getElementById('card-template').content; // шаблон карточки
const cardElement = cardTemplate.cloneNode(true); // элемент карточки пустой

// то что на сайте в html
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

// Эта функция рендерит карточки перевоначальные(?)
function renderCards(data) {
  data.forEach(item=>renderCard(item));
  }

// Эта функция создает карточку
function renderCard(arr) {
  const cardElement = cardTemplate.cloneNode(true); // элемент карточки пустой
  let cardName = cardElement.querySelector('.card__title');//title карточки в html
  let cardLink = cardElement.querySelector('.card__image'); //ссылка в html
  let cardImageAlt = cardElement.querySelector('.card__image'); //альт в html
  cardName.textContent = arr.name; //работает
  cardLink.src = arr.link; // изнач. карточка получает
  cardImageAlt.alt = arr.name;
  cardList.append(cardElement);
}

// Вызываем функцию, которая генерит первоначальные карточки
renderCards(initialCards);

// Открытие popup: редактирование имени
function openPopupEditName () {
  popupName.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
editButton.addEventListener('click', openPopupEditName);

// Открытие popup: добавление карточки
function openPopupCard () {
  popupCard.classList.add('popup_opened');
}
addButton.addEventListener('click', openPopupCard);

// Открытие popup: увеличенная картинка
//function openPopupImg () {
// находим в документе картинку и вешаем слушатель
//  popupCard.classList.add('popup_opened');
//}
//???.addEventListener('click', openPopupImg);

// Закрытие popup (любого)
function closePopup() {
  closeButton.closest('.popup').classList.remove('popup_opened');
};
closeButton.addEventListener('click', closePopup);

// Обработчик отправки формы редактирования имени
function formNameSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}
formElementName.addEventListener('submit', formNameSubmit); 

// Обработчик отправки формы добавления карточки
//function formCardSubmit (evt) {
//  evt.preventDefault();
//
//  closePopup();
//}
//formElementCard.addEventListener('submit', formCardSubmit); 



