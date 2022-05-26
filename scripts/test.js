
// TO DO
// кнопка лайк меняет картинку при нажамии
//function like() {
//    likeButton.classList.toggle('.button-like_pressed');
//}
//likeButton.addEventListener('click', like);

/// Нажатие на лайк
function toLike (evt) {
  evt.target.classList.toggle('button-like_pressed');
}
likes.addEventListener('click', toLike);



// Удаление карточки по нажатию корзины. Код не работает, скопирован с тренажера. 
deleteButton.addEventListener('click', function() {
  const listItem = deleteButton.closest('.card');
  listItem.remove();
});

// По нажатию на картинку она открывается полноразмерно




// Добавление template 
function addCard(cardLinkValue, cardTitleValue) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  songElement.querySelector('.вписываемый ссылка - класс').textContent = cardLinkValue;
  songElement.querySelector('.вписываемое название - класс').textContent = cardTitleValue;
  songsContainer.append(songElement);
}

// Обработчик отправки формы добавления поста
function cardSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = cardLink.value;
  profileJob.textContent = cardTitle.value;
  closePopup();
}
cardElement.addEventListener('submit', cardSubmitHandler);

addCardButton.addEventListener('click', function () {
  const cardLink = document.querySelector('.input__text_type_card-link');
  const cardTitle = document.querySelector('.input__text_type_card-title');

  addCard(cardLink.value, cardTitle.value);

  cardLink.value = '';
  cardTitle.value = '';
});


---

Полина

initialCard.forEach(function(item) {
  cardElement.append(createCard)
})
//вывод одной карточки из массива
function createCard() {
const cardElement = document.querySelector('.elements') //карточки
const cardTemplate = document.querySelector('#element-template').content; 


const card = cardTemplate.querySelector('.element').cloneNode(true)
card.querySelector('.element__image').src = initialCards.link
card.querySelector('.element__title').textContent = initialCards.name


name = initialCards.name
link = initialCards.link


return cardElement
---
у каждого попапа своя переменная! и свой класс(модификатор)
все попапы selector all
потом искать каждый попап по find


открытие попапа каждая функция своя!

foreach
для создания инитиал при загрузке страницу

---
Функцию - слушатель события ‘submit’ формы добавления карточки, которая последовательно делает следующее:
извлекает введённые пользователем данные в объект карточки;
создаёт готовую карточку с помощью функции из п.1;
добавляет её в DOM с помощью функции из п.2;
сбрасывает форму вызывая соответствующий метод HTML-элемента формы;
закрывает попап добавления карточки.