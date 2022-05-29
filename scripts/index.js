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

// Эта функция создает карточку, наполняет ее данными и вставляет в разметку
function createCard(name, link) {
  const cardList = document.querySelector('.posts__list'); // куда вставляем контент
  const cardTemplate = document.getElementById('card-template').content; // шаблон карточки
  let cardElement = cardTemplate.cloneNode(true); // элемент карточки пустой
  let cardName = cardElement.querySelector('.card__title');//title карточки в html
  let cardLink = cardElement.querySelector('.card__image'); //ссылка в html
  let cardImageAlt = cardElement.querySelector('.card__image'); //альт в html
  // наполняем карточку данными:
  cardName.textContent = name;
  cardLink.src = link;
  cardImageAlt.alt = name;
  cardList.prepend(cardElement);// вставляем в HTML
};

// Рендер первых 6 карточек
initialCards.forEach(function (item) {
  createCard(item.name, item.link);
});

//То, куда вставляем данные в html
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

// Кнопки
const editButton = document.querySelector('.profile__button-edit');
const addButton = document.querySelector('.button-add');

// Попапы
const popupName = document.querySelector('.popup_type_edit-name');
const popupCard = document.querySelector('.popup_type_add-card');
const popupImg = document.querySelector('.popup_type_image-zoomed');

// Формы для event слушателя
const formElementName = popupName.querySelector('.popup__form_type_editname');
const formElementCard = popupCard.querySelector('.popup__form_type_addcard');

// Инпуты в попапах
let nameInput = popupName.querySelector('.popup__input_value_name');//поле ввод имя
let jobInput = popupName.querySelector('.popup__input_value_job');//поле ввод работа
let cardNameInput = popupCard.querySelector('.popup__input_value_cardname');//поле ввод места
let cardLinkInput = popupCard.querySelector('.popup__input_value_cardlink');//поле ввод ссылка

// Попап: функция закрытия по крестику
function openClosePopup (evt) {
  evt.target.closest('.popup').classList.toggle('popup_opened');
};

// Слушатель для кнопки крестика попапа
let closeButtons = document.querySelectorAll('.button-close');
closeButtons.forEach((item) => {
  item.addEventListener('click', openClosePopup);
});

// Открытие попап: редактирование имени
function openPopupEditName () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popupName.classList.toggle('popup_opened');
};
// Слушатель для кнопки редактирования профиля
editButton.addEventListener('click', openPopupEditName);

// Открытие попап: увеличенная картинка
function openPopupImg (evt) {
  popupImg.classList.toggle('popup_opened');
  // находим картинку и текст в попапе куда передадим данные
  const imageZoomed = popupImg.querySelector('.popup__image-zoomed');
  const captionZoomed = popupImg.querySelector('.popup__zoom-caption');
  // находим данные из поста, которые передаем в попап
  imageZoomed.src = evt.target.src;
  captionZoomed.textContent = evt.target.alt
};
// Слушатель для картинок в постах
let images = document.querySelectorAll('.card__image');
images.forEach((item) => {
  item.addEventListener('click', openPopupImg);
});

// Открытие попап: добавление карточки
function openPopupCard () {
  cardNameInput.value = ''; //очищаем поля ввода при открытии попапа
  cardLinkInput.value = ''; //очищаем поля ввода при открытии попапа
  popupCard.classList.toggle('popup_opened');
};
// Слушатель для кнопки плюс в профиле
addButton.addEventListener('click', openPopupCard);

// Обработчик отправки формы редактирования имени
function formNameSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupName.classList.toggle('popup_opened');
};
// Слушатель: редактирование имени
formElementName.addEventListener('submit', formNameSubmit); 

// Обработчик отправки формы добавления поста
function formCardSubmit (evt) {
  evt.preventDefault();
  createCard(cardNameInput.value, cardLinkInput.value);
  popupCard.classList.toggle('popup_opened');
};
// Слушатель: добавление поста по кнопке
formElementCard.addEventListener('submit', formCardSubmit); 

// Функция удаление поста
function deleteCard (evt) {
  let selectedCard = evt.target.closest('.card');
  selectedCard.remove();
};
// Слушатель для кнопки корзины
let deleteButtons = document.querySelectorAll('.button-delete');
deleteButtons.forEach((item) => {
  item.addEventListener('click', deleteCard);
});

// Функция нажатие / отжатие на лайк
function likeUnlike(evt) {
  evt.target.classList.toggle('button-like_pressed');
};
// Слушатель для кнопки лайка
let likeButtons = document.querySelectorAll('.button-like');
likeButtons.forEach((item) => {
  item.addEventListener('click', likeUnlike);
});

function UpdateCards () {
  likeButtons = document.querySelectorAll('.button-like');
  return likeButtons;
}
UpdateCards();