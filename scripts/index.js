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
let popupEdit = document.querySelector('#popup-edit');
let popupAdd = document.querySelector('#popup-add');

let userName = document.querySelector('.profile__name');
let userJob = document.querySelector('.profile__job');

let editBtn = document.querySelector('.profile__edit');
let addBtn = document.querySelector('.profile__add')
let closeBtn = document.querySelector('.popup__close');

let nameValue = document.querySelector('#name');
let jobValue = document.querySelector('#job');

let cardTemplate = document.getElementById('card').content;
let placeName = document.querySelector('#place-name');
let placeImg = document.querySelector('#place-img');
let placeValue = popupAdd.querySelector('#place');
let placeLinkValue = popupAdd.querySelector('#place-link');

// let btnsLike = document.querySelectorAll('.card__like');

// btnsLike.forEach((el) => {
//   el.addEventListener('click', (e) => {
//     let path = e.currentTarget.getAttribute('data-path');
//     console.log(path);
//   });
// });

function deleteCard() {}

function popupAddOpenClose() {
  popupAdd.classList.toggle('popup_active');
}

function addCard(evt) {
  evt.preventDefault(evt);

  let cards = document.querySelector('.cards');
  let listItem = cardTemplate.querySelector('.card').cloneNode(true);
  listItem.querySelector('#place-name').textContent = placeValue.value;
  listItem.querySelector('#place-img').src = placeLinkValue.value;

  cards.prepend(listItem);
  popupAddOpenClose();
}

function popupEditOpenClose() {
  popupEdit.classList.toggle('popup_active');
}

function handleFormSubmitEdit(evt) {
  evt.preventDefault(evt);
  let userNameNew = nameValue.value;
  let userJobNew = jobValue.value;
  
  userName.textContent = userNameNew;
  userJob.textContent = userJobNew;

  popupEditOpenClose();
}

editBtn.addEventListener('click', () => {
  nameValue.value = userName.textContent;
  jobValue.value = userJob.textContent;

  popupEditOpenClose();
});
addBtn.addEventListener('click', popupAddOpenClose)
closeBtn.addEventListener('click', popupEditOpenClose);
popupEdit.addEventListener('submit', handleFormSubmitEdit);
popupAdd.addEventListener('submit', addCard)