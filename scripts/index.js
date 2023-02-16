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
let popupImg = document.querySelector('#popup-img');

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

const cardsBlock = document.querySelector('.cards');
cardsBlock.addEventListener('click', (event) => {
  const eventTarget = event.target;
  console.log(eventTarget.classList);
  if (eventTarget.classList.contains('card__like') || eventTarget.classList.contains('card__like_active')) {
    if (eventTarget.classList.contains('card__like')) {
      eventTarget.classList.remove('card__like')
      eventTarget.classList.add('card__like_active')
    }
    else {
      eventTarget.classList.remove('card__like_active')
      eventTarget.classList.add('card__like')
    }
  }

  else if (eventTarget.classList.contains(`card__del`)) {
    const card = eventTarget.closest('.card')
    card.remove();
  }

  else if (eventTarget.classList.contains('card__img')){
    const imgLink = eventTarget.getAttribute('src');
    const imgHeading = eventTarget.nextSibling.textContent;

    popupImg.querySelector('.popup__image').setAttribute('src', imgLink)
    popupImg.classList.toggle('popup_active');
    console.log(imgLink)
    console.log(imgHeading)
  }
});

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