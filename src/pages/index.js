import './index.css';

import {initialCards, validationOptions, cardTemplateOptions} from '../utils/constants.js'
import Card from '../components/Card.js'
import FromValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import PicturePopup from '../components/PicturePopup.js'
import PopupWithForm from '../components/PopupWithForm.js'

const buttonEditProfile = document.querySelector('.profile__edit');
const buttonAdd = document.querySelector('.profile__add');

const popupEdit = document.querySelector('#popup-edit');
const formEdit = popupEdit.querySelector('.popup-form');
const buttonEditSubmit = popupEdit.querySelector('.popup-form__btn');

const popupAdd = document.querySelector('#popup-add');
const formAdd = popupAdd.querySelector('.popup-form');
const buttonAddSubmit = popupAdd.querySelector('.popup-form__btn');

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
  {submitCallback: (values) => {
    cardSection.addItem(renderCard({
      name: values.place,
      link: values.link
    }));
      validatorAddForm.setButtonInactive(buttonAddSubmit);
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

buttonAdd.addEventListener('click', () => {
  popupAddCard.open()
});

buttonEditProfile.addEventListener('click', () => {
  popupProfile.fillInputs(userInfo.getUserInfo())
  popupProfile.open();
});

popupAddCard.setEventListeners();
popupProfile.setEventListeners();
popupImage.setEventListeners();

const validatorAddForm = new FromValidator(validationOptions, formAdd, buttonAddSubmit);
validatorAddForm.enableValidation();
const validatorEditForm = new FromValidator(validationOptions, formEdit, buttonEditSubmit);
validatorEditForm.enableValidation();