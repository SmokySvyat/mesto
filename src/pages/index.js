import './index.css';

import {validationOptions, profileSelectors, cardTemplateOptions} from '../utils/constants.js'
import Api from '../components/Api.js'
import Card from '../components/Card.js'
import FromValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import PicturePopup from '../components/PicturePopup.js'
import PopupWithForm from '../components/PopupWithForm.js'

const buttonEditProfile = document.querySelector(profileSelectors.buttonEditSelector);
const buttonAdd = document.querySelector(profileSelectors.buttonAddSelector);
const buttonAvatar = document.querySelector(profileSelectors.buttonAvatarSelector);

const popupEdit = document.querySelector('#popup-edit');
const formEdit = popupEdit.querySelector('.popup-form');
const buttonEditSubmit = popupEdit.querySelector('.popup-form__btn');

const popupAdd = document.querySelector('#popup-add');
const formAdd = popupAdd.querySelector('.popup-form');
const buttonAddSubmit = popupAdd.querySelector('.popup-form__btn');

let userCurrentId;


const api = new Api ({
  url: 'https://mesto.nomoreparties.co/v1/cohort-64/',
  authorization: '476fa7c1-24a0-4703-9208-cf8aef471951'
  }
);

const userInfo = new UserInfo ({
  profileNameSelector: profileSelectors.nameSelector,
  profileAboutSelector: profileSelectors.aboutSelector,
  profileAvatarSelector: profileSelectors.avatarSelector
});

const cardSection = new Section ({
  renderer: (element) => {
    cardSection.addItem(renderCard(element))
  }
  },
  cardTemplateOptions.containerSelector
);


//Popup's
const popupProfile = new PopupWithForm(
  '#popup-edit',
  {submitCallback: (values) => {
    popupProfile.renderLoading(true, 'Сохранение...')
    api.patchProfile(values)
    .then((result) => {
    userInfo.setUserInfo(result);
    popupProfile.close();
    })
    .catch(err => console.log(err))
    .finally(popupProfile.renderLoading(false))
  }
});

const popupAddCard = new PopupWithForm(
  '#popup-add',
  {submitCallback: (values) => {
    console.log(values)
    popupAddCard.renderLoading(true, 'Сохранение...')
    api.postCard({
      name: values.place,
      link: values.link,
      likes: [0]
    })
    .then((newCard) => {
      newCard.json()
      console.log(newCard)
        cardSection.addItem(renderCard(newCard));
        validatorAddForm.setButtonInactive(buttonAddSubmit);
        popupAddCard.close()
      })
      .catch(err => console.log(err))
      .finally(() => {
        popupAddCard.renderLoading(false);
      });
    }
  }
);

const popupImage = new PicturePopup('.popup-image');

const popupChangeAvatar = new PopupWithForm(
  '#popup-change-avatar',
  {submitCallback: (values) => {
    popupChangeAvatar.renderLoading(true, 'Сохранение...');
    api.setUserAvatar(values)
    .then(console.log(values))
    .then(res => {
      console.log(res)
      userInfo.setUserInfo(res);
      popupChangeAvatar.close()
    })
    .catch(err => console.log(err))
    .finally(() => {
      popupChangeAvatar.renderLoading(false)
    })
  }}
);

const popupConfirmDelete = new PopupWithConfirm(
  '#popup-confirm-delete',
  {submitCallback: (values) => {
    popupConfirmDelete.close()
  }}
);


//Render
const renderCard = (element) => {
  // console.log(element._id)
  const createCard =  new Card(
    element,
    cardTemplateOptions.templateSelector,
    {
    userId: userCurrentId,
    handleCardClick: () => {popupImage.open(element)},
    ConfirmDelete: () => {popupConfirmDelete.open()},
    handleLikeCard: () => {
      api.like(createCard.cardId, createCard.isLiked(createCard.likes))
      .then(res => {
        createCard.like(res)
      })
      .catch(err => console.log(err))
    }
    }
    );
    
    return createCard.generateCard();
};
  
const renderPage = () => {
  Promise.all([
    api.getCard(),
    api.getProfile()
  ]).then(([cardResult, profileResult]) => {
    userCurrentId = profileResult._id;
    cardResult.forEach(card => cardSection.addItemReverse(renderCard(card)))
    userInfo.setUserInfo(profileResult)
  })
};


//Begining
renderPage();

buttonAdd.addEventListener('click', () => {
  popupAddCard.open()
});
  
buttonEditProfile.addEventListener('click', () => {
  popupProfile.fillInputs(userInfo.getUserInfo())
  popupProfile.open();
});

buttonAvatar.addEventListener('click', () => {
  popupChangeAvatar.open()
})
  
popupAddCard.setEventListeners();
popupProfile.setEventListeners();
popupImage.setEventListeners();
popupChangeAvatar.setEventListeners();
popupConfirmDelete.setEventListeners()
  
const validatorAddForm = new FromValidator(validationOptions, formAdd, buttonAddSubmit);
validatorAddForm.enableValidation();
const validatorEditForm = new FromValidator(validationOptions, formEdit, buttonEditSubmit);
validatorEditForm.enableValidation();