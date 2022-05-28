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

// Template
const cardList = document.querySelector('.posts__list'); // куда вставляем контент
const cardTemplate = document.getElementById('card-template').content; // шаблон карточки
const cardElement = cardTemplate.cloneNode(true); // элемент карточки пустой

// то что на сайте в html
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

// Кнопки
const editButton = document.querySelector('.profile__button-edit');
const addButton = document.querySelector('.button-add');
const closeButtons = document.querySelectorAll('.button-close');
const deleteButton = document.querySelector('.button-delete');

// Попапы
const popups = document.querySelectorAll('.popup');
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


// Попап: закрытие по кнопке крестика
function closePopup(evt) {
  evt.target.closest('.popup').classList.remove('popup_opened');
}
closeButtons.forEach((item) => {
  item.addEventListener('click', closePopup)
});

// Эта функция рендерит карточки перевоначальные
function renderCards(data) {
  data.forEach(item=>renderCard(item));
  };

// Эта функция рендерит карточку
function renderCard(item) {
  const cardElement = cardTemplate.cloneNode(true); // элемент карточки пустой
  let cardName = cardElement.querySelector('.card__title');//title карточки в html
  let cardLink = cardElement.querySelector('.card__image'); //ссылка в html
  let cardImageAlt = cardElement.querySelector('.card__image'); //альт в html
  cardName.textContent = item.name;
  cardLink.src = item.link;
  cardImageAlt.alt = item.name;
  cardList.append(cardElement);
}

// Вызываем функцию, которая рендерит первоначальные карточки
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
  cardNameInput.value = ''; //очищаем поля ввода при открытии попапа
  cardLinkInput.value = ''; //очищаем поля ввода при открытии попапа
  popupCard.classList.add('popup_opened');
}
addButton.addEventListener('click', openPopupCard);

// Обработчик отправки формы редактирования имени
function formNameSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  formElementName.closest('.popup').classList.remove('popup_opened');
  }
formElementName.addEventListener('submit', formNameSubmit); 

// Обработчик отправки формы добавления поста
function formCardSubmit (evt) {
  evt.preventDefault();
  const cardElement = cardTemplate.cloneNode(true); // элемент карточки пустой
  let cardName = cardElement.querySelector('.card__title');//title карточки в html
  let cardLink = cardElement.querySelector('.card__image'); //ссылка в html
  let cardImageAlt = cardElement.querySelector('.card__image'); //альт в html
  cardName.textContent = cardNameInput.value;
  cardLink.src = cardLinkInput.value;
  cardImageAlt.alt = cardLinkInput.value;
  cardList.append(cardElement);
  formElementCard.closest('.popup').classList.remove('popup_opened');
}
formElementCard.addEventListener('submit', formCardSubmit); 

/// Нажатие / отжатие на лайк
const likes = document.querySelectorAll('.button-like');
function likeUnlike(evt) {
  evt.target.classList.toggle('button-like_pressed');
  }
likes.forEach((item) => {
  item.addEventListener('click', likeUnlike)
});