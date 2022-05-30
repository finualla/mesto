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

const cardTemplate = document.getElementById('card-template').content;// шаблон карточки
const cardList = document.querySelector('.posts__list');// куда вставляем контент

// Попапы:
const popups = document.querySelectorAll('.popup')
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
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const imageZoomed = popupImg.querySelector('.popup__image-zoomed');
const captionZoomed = popupImg.querySelector('.popup__zoom-caption');

// Кнопки, кол-во не изменяется:
const editButton = document.querySelector('.profile__button-edit');
const addButton = document.querySelector('.button-add');

// Функция создает массив карточек:
function renderList(data) {
  data.forEach(item => renderCard(item.name, item.link));
};

// Функция создает карточку из шаблона, наполняет ее данными и вставляет в разметку:
function renderCard(name, link) {
  const listElement = cardTemplate.cloneNode(true);// элемент карточки пустой  
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

// Функция открытия попапа:
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// Функция закрытия попапа:
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// Функция открытия попапа редактирования имени:
function openPopupEditName () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupName);
};

// Функция открытие попапа увеличенной картинки
function openPopupImg (evt) {
  // находим данные из поста, которые передаем в попап:
  imageZoomed.src = evt.target.src;
  imageZoomed.alt = evt.target.alt;
  captionZoomed.textContent = evt.target.alt;
  openPopup(popupImg);
};

// Функция открытия попапа добавление карточки
function openPopupCard () {
  cardNameInput.value = null;// очищаем поля ввода при открытии попапа
  cardLinkInput.value = null;// очищаем поля ввода при открытии попапа
  openPopup(popupCard);
};

// Функция навешивает слушателей на элементы/кнопки внутри карточки:
function subscribeToEvents(listElement) {
  const likeButton = listElement.querySelector('.button-like');
  likeButton.addEventListener('click', likeUnlike);
  const deleteButton = listElement.querySelector('.button-delete');
  deleteButton.addEventListener('click', deleteCard);
  const image = listElement.querySelector('.card__image');
  image.addEventListener('click', openPopupImg);
};

// Обработчик отправки формы редактирования имени
function handleFormNameSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupName)
};

// Обработчик отправки формы добавления карточки:
function handleFormCardSubmit (evt) {
  evt.preventDefault();
  renderCard(cardNameInput.value, cardLinkInput.value);
  closePopup(popupCard)
};

// Функция удаление поста:
function deleteCard (evt) {
  const selectedCard = evt.target.closest('.card');
  selectedCard.remove();
};

// Функция поставить/убрать лайк:
function likeUnlike(evt) {
  evt.target.classList.toggle('button-like_pressed');
};

// Cлушатели:
formElementName.addEventListener('submit', handleFormNameSubmit);// Слушатель: редактирование имени
formElementCard.addEventListener('submit', handleFormCardSubmit);// Слушатель добалвление карточки
editButton.addEventListener('click', openPopupEditName);// Слушатель для кнопки редактирования профиля
addButton.addEventListener('click', openPopupCard);// Слушатель для кнопки плюс в профиле

// Закрытия любого попапа по крестику:
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('button-close')) {
      closePopup(popup)
    }
  })
});