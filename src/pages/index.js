import './index.css';

import {initialCards, validationOptions, cardTemplateOptions} from '../utils/constants.js'
import Card from '../components/Card.js'
import FromValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import PicturePopup from '../components/PicturePopup.js'
import PopupWithForm from '../components/PopupWithForm.js'

const editBtn = document.querySelector('.profile__edit');
const addBtn = document.querySelector('.profile__add');

const popupEdit = document.querySelector('#popup-edit');
const formEdit = popupEdit.querySelector('.popup-form');
const submitEditBtn = popupEdit.querySelector('.popup-form__btn');

const popupAdd = document.querySelector('#popup-add');
const formAdd = popupAdd.querySelector('.popup-form');
const submitAddBtn = popupAdd.querySelector('.popup-form__btn');
const placeValue = popupAdd.querySelector('#place');
const placeLinkValue = popupAdd.querySelector('#place-link');

const userInfo = new UserInfo ({
  profileNameSelector: '.profile__name',
  profileAboutSelector: '.profile__job'
});

const cardSection = new Section ({
  items: initialCards,
  renderer: (element) => {
    cardSection.addItem(renderCard(element))
  }
  },
  cardTemplateOptions.containerSelector
);
  
const popupProfile = new PopupWithForm(
  '#popup-edit',
  {submitCallback: (values) => {
    userInfo.setUserInfo(values);
    popupProfile.close();
  }
});

const popupAddCard = new PopupWithForm(
  '#popup-add',
  {submitCallback: () => {
    cardSection.addItem(renderCard({
      name: placeValue.value,
      link: placeLinkValue.value
    }));
      validatorAddForm.setButtonInactive(submitAddBtn);
      popupAddCard.close()
    }
  }
);
  
const renderCard = (element) => {
  const createCard =  new Card(
    element,
    cardTemplateOptions.templateSelector,
    () => {
      popupImage.open(element);
    });
    
  return createCard.generateCard(element);
};
  
const popupImage = new PicturePopup('.popup-image');
  

//Begining
cardSection.render();

addBtn.addEventListener('click', () => {
  popupAddCard.open()
});

editBtn.addEventListener('click', () => {
  popupProfile.fillInputs(userInfo.getUserInfo())
  popupProfile.open();
});

popupAddCard.setEventListeners();
popupProfile.setEventListeners();
popupImage.setEventListeners();

const validatorAddForm = new FromValidator(validationOptions, formAdd, submitAddBtn);
validatorAddForm.enableValidation();
const validatorEditForm = new FromValidator(validationOptions, formEdit, submitEditBtn);
validatorEditForm.enableValidation();