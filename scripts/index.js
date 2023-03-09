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
    link: 'images/nsk_cat.jpg'
  }
];

const cardsBlock = document.querySelector('.cards');
const popupEdit = document.querySelector('#popup-edit');
const popupAdd = document.querySelector('#popup-add');
const popupImg = document.querySelector('#popup-img');
const imageIntoPopup = popupImg.querySelector('.popup__image');
const imageIntoPopupHeading = popupImg.querySelector('.popup__heading');
const overlays = Array.from(document.querySelectorAll('.popup'));

const editBtn = document.querySelector('.profile__edit');
const addBtn = document.querySelector('.profile__add')
const closeBtns = document.querySelectorAll('.popup__close');

const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__job');

const nameValue = document.querySelector('#name');
const jobValue = document.querySelector('#job');

const cardTemplate = document.getElementById('card-template').content;
const placeValue = popupAdd.querySelector('#place');
const placeLinkValue = popupAdd.querySelector('#place-link');
const addedCards = [];
const validationOptions = {
  formSelector: '.popup-form',
  inputSelector: '.popup-form__input',
  submitButtonSelector: '.popup-form__btn',
  inactiveButtonClass: 'popup-form__btn_inactive',
  inputErrorClass: 'popup-form__input_invalid',
  errorClass: 'popup__error_active',
  errorText: '.popup__error',
  errorClosestParent: '.popup-form__input-section'
};


//Edit
function handleFormSubmitEdit(evt) {
  evt.preventDefault(evt);
  const userNameNew = nameValue.value;
  const userJobNew = jobValue.value;
  
  userName.textContent = userNameNew;
  userJob.textContent = userJobNew;

  closePopup(popupEdit);
};


//Add
function addCard(evt) {
  evt.preventDefault(evt);

  addedCards.unshift({
    name: placeValue.value,
    link: placeLinkValue.value
  });

  placeValue.value = ``;
  placeLinkValue.value = ``;

  renderCard(addedCards[0]);
  closePopup(popupAdd);
};


//Delete
const handleDeleteCard = (event) => {
  event.target.closest('.card').remove();
};


//Like
const handleLikeCard = (event) => {
  const eventTarget = event.target;
  eventTarget.classList.toggle('card__like_active');
};


//Render cards
const renderCard = (element) => {
  cardsBlock.prepend(generateCard(element));
};

function generateCard(element) {
  const listItem = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteBtn = listItem.querySelector('.card__del');
  const likeBtn = listItem.querySelector('#like');
  const img = listItem.querySelector('#place-img');
  const name = element.name;
  const link = element.link;

  listItem.querySelector('#place-name').textContent = name;
  img.src = link;
  img.alt = name;
  
  deleteBtn.addEventListener('click', handleDeleteCard);

  likeBtn.addEventListener('click', handleLikeCard);

  img.addEventListener('click', openPopupImg);

  return listItem;
};


//Img popup
const openPopupImg = (event) => {
  const imgLink = event.target.getAttribute('src'); 
  const imgHeading = event.target.closest('.card').querySelector('#place-name').textContent; 

  imageIntoPopup.setAttribute('src', imgLink);
  imageIntoPopup.setAttribute('alt', imgHeading);
  imageIntoPopupHeading.textContent = imgHeading;

  openPopup(popupImg);
};


//Popup
function openPopup (popup) {
  popup.classList.add('popup_active');
  addHandleKey(popup);
};

function closePopup (popup) {
  popup.classList.remove('popup_active');
  removeHandleKey(popup);
};

const addHandleKey = (popup) => {
  document.addEventListener('keydown', handleKey(popup));
};

const removeHandleKey = (popup) => {
  document.removeEventListener('keydown', handleKey(popup));
};

const handleKey = (popup) => {
  document.addEventListener('keydown', (event) => {
    if (event.key ==='Escape') {
      closePopup(popup)
    };
  });
};


//Begining
initialCards.forEach(renderCard);

editBtn.addEventListener('click', () => {
  nameValue.value = userName.textContent;
  jobValue.value = userJob.textContent;

  openPopup(popupEdit);
});

closeBtns.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => {closePopup(popup)});
});

overlays.forEach((overlay) => {
  overlay.addEventListener('click', (evt) => {
    if (evt.target === overlay) {
    closePopup(overlay);
    };    
  });
});

addBtn.addEventListener('click', () => {openPopup(popupAdd)});
popupEdit.addEventListener('submit', handleFormSubmitEdit);
popupAdd.addEventListener('submit', addCard);
enableValidation(validationOptions);