
// TO DO

// Удаление карточки по нажатию корзины. Код не работает
deleteButton.addEventListener('click', function() {
 deleteButton.closest('.card').remove();
});

// Обработчик отправки формы добавления карточки
function formCardSubmit (evt) {
  evt.preventDefault();
  //создаем новый массив пустой, в нем будет новые данные
  let newCard = []; 
  // добавляем новые данные в массив
  // newCard.push(
  //   {
  //     name: `${cardNameInput.value}`,
  //     link: `${imgLinkInput.value}`
  //   })
  // initialCards.concat('newCard');//добавляем новый массив в конец старого
  initialCards.push({name: cardNameInput.value, link: imgLinkInput.value});
  closePopup(popupCard);
}
formElementCard.addEventListener('submit', formCardSubmit); 

// Открытие popup: увеличенная картинка
function openPopupImg () {
находим в документе картинку и вешаем слушатель
 popupCard.classList.add('popup_opened');
}
???.addEventListener('click', openPopupImg);

// кнопка лайк меняет картинку при нажамии
function like() {
   likeButton.classList.toggle('.button-like_pressed');
}
likeButton.addEventListener('click', like);

/// Нажатие на лайк
function toLike (evt) {
  evt.target.classList.toggle('button-like_pressed');
}
likes.addEventListener('click', toLike);





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