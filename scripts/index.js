let initialCards = [
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
    link: 'images/nsk_cat.jpg'
  }
];

const cardsBlock = document.querySelector('.cards');
const popupEdit = document.querySelector('#popup-edit');
const popupAdd = document.querySelector('#popup-add');
const popupImg = document.querySelector('#popup-img');

const editBtn = document.querySelector('.profile__edit');
const addBtn = document.querySelector('.profile__add')
const closeBtn = document.querySelectorAll('.popup__close');

const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__job');

const nameValue = document.querySelector('#name');
const jobValue = document.querySelector('#job');

const cardTemplate = document.getElementById('card-template').content;
const placeName = document.querySelector('#place-name');
const placeImg = document.querySelector('#place-img');
const placeValue = popupAdd.querySelector('#place');
const placeLinkValue = popupAdd.querySelector('#place-link');


//Edit
function popupEditOpenClose() {
  popupEdit.classList.toggle('popup_active');
};

function handleFormSubmitEdit(evt) {
  evt.preventDefault(evt);
  const userNameNew = nameValue.value;
  const userJobNew = jobValue.value;
  
  userName.textContent = userNameNew;
  userJob.textContent = userJobNew;

  popupEditOpenClose();
};


//Add
function popupAddOpenClose() {
  popupAdd.classList.toggle('popup_active');
};

function addCard(evt) {
  evt.preventDefault(evt);

  initialCards.unshift({
    name: placeValue.value,
    link: placeLinkValue.value
  });

  renderCard(initialCards[0]);
  popupAddOpenClose();
};


//Delete
const handleDeleteCard = (event) => {
  event.target.closest('.card').remove();
};


//Like
const handleLikeCard = (event) => {
  const eventTarget = event.target;
  console.log(eventTarget.classList);
  if (eventTarget.classList.contains('card__like') || eventTarget.classList.contains('card__like_active')) {
    if (eventTarget.classList.contains('card__like')) {
      eventTarget.classList.remove('card__like');
      eventTarget.classList.add('card__like_active');
    }
    else {
      eventTarget.classList.remove('card__like_active');
      eventTarget.classList.add('card__like');
    };
  };
};


//Img popup
const popupImgOpen = (event) => {
  popupImg.classList.toggle('popup_active-image');

  const imgLink = event.target.getAttribute('src');
  const imgHeading = event.target.closest('.card').querySelector('#place-name').textContent;

  popupImg.querySelector('.popup__image').setAttribute('src', imgLink);
  popupImg.querySelector('.popup__image-container').querySelector('.popup__heading').textContent = imgHeading;
};


//Render cards
const renderCard = (element) => {
  cardsBlock.prepend(generateCard(element));
};

function generateCard(element) {
  const listItem = cardTemplate.querySelector('.card').cloneNode(true);

  listItem.querySelector('#place-name').textContent = element.name;
  listItem.querySelector('#place-img').src = element.link;

  const deleteBtn = listItem.querySelector('.card__del');
  deleteBtn.addEventListener('click', handleDeleteCard);

  const likeBtn = listItem.querySelector('#like');
  likeBtn.addEventListener('click', handleLikeCard);

  const img = listItem.querySelector('#place-img');
  img.addEventListener('click', popupImgOpen);

  return listItem;
};


//Begining
initialCards.forEach((element) => {
  renderCard(element);
});

editBtn.addEventListener('click', () => {
  nameValue.value = userName.textContent;
  jobValue.value = userJob.textContent;

  popupEditOpenClose();
});

closeBtn.forEach((element) => {
  element.addEventListener('click', (event) => {
    const popup = event.target.closest('.popup');

    if (popup.classList.contains('popup_active'))
      popup.classList.toggle('popup_active');
    else {
      popup.classList.remove('popup_active-image');
    }
  });
});

addBtn.addEventListener('click', popupAddOpenClose);
popupEdit.addEventListener('submit', handleFormSubmitEdit);
popupAdd.addEventListener('submit', addCard);