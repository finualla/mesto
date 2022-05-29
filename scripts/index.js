// Тут много комментариев, я писала их для себя. 

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

const cardList = document.querySelector('.posts__list');// куда вставляем контент
const cardTemplate = document.getElementById('card-template').content;// шаблон карточки

// Попапы:
const popupName = document.querySelector('.popup_type_edit-name');
const popupCard = document.querySelector('.popup_type_add-card');
const popupImg = document.querySelector('.popup_type_image-zoomed');

// Инпуты в попапах:
const nameInput = popupName.querySelector('.popup__input_value_name');//поле ввод имя
const jobInput = popupName.querySelector('.popup__input_value_job');//поле ввод работа
const cardNameInput = popupCard.querySelector('.popup__input_value_cardname');//поле ввод места
const cardLinkInput = popupCard.querySelector('.popup__input_value_cardlink');//поле ввод ссылка

// Формы для event слушателя:
const formElementName = popupName.querySelector('.popup__form_type_editname'); 
const formElementCard = popupCard.querySelector('.popup__form_type_addcard');

// То, куда вставляем данные в html:
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

// Кнопки, кол-во не изменяется:
const editButton = document.querySelector('.profile__button-edit');
const addButton = document.querySelector('.button-add');
const closeButtons = document.querySelectorAll('.button-close');

// Функция создает массив карточек:
function renderList(data) {
  data.forEach(item => renderCard(item.name, item.link));
};

// Функция создает карточку из шаблона, наполняет ее данными и вставляет в разметку:
function renderCard(name, link) {
  const cardTemplate = document.getElementById('card-template').content;// шаблон карточки
  let listElement = cardTemplate.cloneNode(true);// элемент карточки пустой  
  const cardName = listElement.querySelector('.card__title');//title карточки в html
  const cardLink = listElement.querySelector('.card__image');//ссылка в html
  const cardImageAlt = listElement.querySelector('.card__image');//альт в html
  // наполняем карточку данными:
  cardName.textContent = name;
  cardLink.src = link;
  cardImageAlt.alt = name;
  subscribeToEvents(listElement);
  cardList.prepend(listElement);// вставляем в HTML
};

// Рендерим дефолтные 6 карточек:
renderList(initialCards);

// Функция закрытия попапа по крестику:
function openClosePopup (evt) {
  evt.target.closest('.popup').classList.toggle('popup_opened');
};

// Функция открытия попапа редактирования имени:
function openPopupEditName () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popupName.classList.toggle('popup_opened');
};

// Функция открытие попапа увеличенной картинки
function openPopupImg (evt) {
  // находим картинку и текст в попапе куда передадим данные:
  const imageZoomed = popupImg.querySelector('.popup__image-zoomed');
  const captionZoomed = popupImg.querySelector('.popup__zoom-caption');
  // находим данные из поста, которые передаем в попап:
  imageZoomed.src = evt.target.src;
  captionZoomed.textContent = evt.target.alt;
  popupImg.classList.toggle('popup_opened');
};

// Функция навешать слушателя на элементы/кнопки внутри карточки:
function subscribeToEvents(listElement) {
  let likeButton = listElement.querySelector('.button-like');
  likeButton.addEventListener('click', likeUnlike);
  let deleteButton = listElement.querySelector('.button-delete');
  deleteButton.addEventListener('click', deleteCard);
  let image = listElement.querySelector('.card__image');
  image.addEventListener('click', openPopupImg);
};

// Функция открытия попапа добавление карточки
function openPopupCard () {
  cardNameInput.value = null;// очищаем поля ввода при открытии попапа
  cardLinkInput.value = null;// очищаем поля ввода при открытии попапа
  popupCard.classList.toggle('popup_opened');
};

// Обработчик отправки формы редактирования имени
function formNameSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupName.classList.toggle('popup_opened');
};

// Обработчик отправки формы добавления карточки:
function formCardSubmit (evt) {
  evt.preventDefault();
  renderCard(cardNameInput.value, cardLinkInput.value);
  popupCard.classList.toggle('popup_opened');
};

// Функция удаление поста:
function deleteCard (evt) {
  let selectedCard = evt.target.closest('.card');
  selectedCard.remove();
};

// Функция поставить/убрать лайк:
function likeUnlike(evt) {
  evt.target.classList.toggle('button-like_pressed');
};

// Cлушатели:
formElementName.addEventListener('submit', formNameSubmit);// Слушатель: редактирование имени
formElementCard.addEventListener('submit', formCardSubmit);// Слушатель добалвление карточки
editButton.addEventListener('click', openPopupEditName);// Слушатель для кнопки редактирования профиля
addButton.addEventListener('click', openPopupCard);// Слушатель для кнопки плюс в профиле

// Слушатель для всех кнопок крестика попапа:
closeButtons.forEach((item) => {
  item.addEventListener('click', openClosePopup);
});