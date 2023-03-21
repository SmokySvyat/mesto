import {initialCards, validationOptions, cardTemplateOptions} from './constants.js'
import Card from './Card.js'
import FromValidator from './FormValidator.js';

const cardsBlock = document.querySelector('.cards');
// const forms = document.querySelectorAll('.popup-form');
const popupImg = document.querySelector('#popup-img');
const imageIntoPopup = popupImg.querySelector('.popup__image');
const imageIntoPopupHeading = popupImg.querySelector('.popup__heading');
const overlays = Array.from(document.querySelectorAll('.popup'));
const closeBtns = document.querySelectorAll('.popup__close');

const editBtn = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('#popup-edit');
const formEdit = popupEdit.querySelector('.popup-form');
const submitEditBtn = popupEdit.querySelector('.popup-form__btn');

const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__job');

const nameValue = document.querySelector('#name');
const jobValue = document.querySelector('#job');

const addBtn = document.querySelector('.profile__add');
const popupAdd = document.querySelector('#popup-add');
const formAdd = popupAdd.querySelector('.popup-form');
const submitAddBtn = popupAdd.querySelector('.popup-form__btn');
const placeValue = popupAdd.querySelector('#place');
const placeLinkValue = popupAdd.querySelector('#place-link');


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

  renderCard({
    name: placeValue.value,
    link: placeLinkValue.value
  });
  
  formAdd.reset();
  validatorAddForm.setButtonInactive(submitAddBtn);

  closePopup(popupAdd);
};


//Render cards
const renderCard = (element) => {
  const createCard =  new Card(element, cardTemplateOptions.templateSelector, openPopupImg)
  cardsBlock.prepend(createCard.generateCard(element));
};


//Img popup
const openPopupImg = (event) => {
  const imgLink = event.target.getAttribute('src'); 
  const imgHeading = event.target.getAttribute('alt');

  imageIntoPopup.setAttribute('src', imgLink);
  imageIntoPopup.setAttribute('alt', imgHeading);
  imageIntoPopupHeading.textContent = imgHeading;

  openPopup(popupImg);
};


//Popup
function openPopup (popup) {
  popup.classList.add('popup_active');
  addHandleKey();
};

function closePopup (popup) {
  popup.classList.remove('popup_active');
  removeHandleKey();
};

const addHandleKey = () => {
  document.addEventListener('keydown', handleKey);
};

const removeHandleKey = () => {
  document.removeEventListener('keydown', handleKey);
};

const handleKey = (event) => {
    if (event.key ==='Escape') {
      const activePopup = document.querySelector('.popup_active');
      closePopup(activePopup);
    };
  };


//Begining
initialCards.forEach(renderCard);

const validatorAddForm = new FromValidator(validationOptions, formAdd, submitAddBtn);
validatorAddForm.enableValidation();

const validatorEditForm = new FromValidator(validationOptions, formEdit, submitEditBtn);
validatorEditForm.enableValidation();

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