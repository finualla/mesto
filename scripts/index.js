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

// Кнопки
const editButton = document.querySelector('.profile__button-edit');
const addButton = document.querySelector('.button-add');
const closeButtons = document.querySelectorAll('.button-close');
const deleteButton = document.querySelector('.button-delete');

// Template
const cardList = document.querySelector('.posts__list'); // куда вставляем контент
const cardTemplate = document.getElementById('card-template').content; // шаблон карточки
const cardElement = cardTemplate.cloneNode(true); // элемент карточки пустой
// то что на сайте в html
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

// Попапы
const popups = document.querySelectorAll('.popup');
const popupName = document.querySelector('.popup_type_edit-name');
const popupCard = document.querySelector('.popup_type_add-card');
const popupImg = document.querySelector('.popup_type_image-zoomed');

// Формы для event слушателя
const formElementName = popupName.querySelector('.popup__form_type_editname');
const formElementCard = popupCard.querySelector('popup__form_type_addcard');

// Инпуты в попапах
let nameInput = popupName.querySelector('.popup__input_value_name');//поле ввод имя
let jobInput = popupName.querySelector('.popup__input_value_job');//поле ввод работа
let cardNameInput = popupCard.querySelector('.popup__input_value_cardname');//поле ввод места
let imgLinkInput = popupCard.querySelector('.popup__input_value_cardlink');//поле ввод ссылка


// Попап закрытие (любого)
function closePopup(evt) {
  evt.target.closest('.popup').classList.remove('popup_opened');
  console.log(evt.target.closest('.popup'));
  }
  closeButtons.forEach((item) => {
  item.addEventListener('click', closePopup)
  });

// Эта функция рендерит карточки перевоначальные
function renderCards(data) {
  data.forEach(item=>renderCard(item));
  };

// Эта функция рендерит карточку
function renderCard(arr) {
  const cardElement = cardTemplate.cloneNode(true); // элемент карточки пустой
  let cardName = cardElement.querySelector('.card__title');//title карточки в html
  let cardLink = cardElement.querySelector('.card__image'); //ссылка в html
  let cardImageAlt = cardElement.querySelector('.card__image'); //альт в html
  cardName.textContent = arr.name;
  cardLink.src = arr.link;
  cardImageAlt.alt = arr.name;
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
  imgLinkInput.value = ''; //очищаем поля ввода при открытии попапа
  popupCard.classList.add('popup_opened');
}
addButton.addEventListener('click', openPopupCard);

// Обработчик отправки формы редактирования имени
function formNameSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupName);
}
formElementName.addEventListener('submit', formNameSubmit); 


// не через массивы, через темплейт добавлять карточки