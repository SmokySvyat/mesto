import './index.css';

import {
  validationOptions, 
  profileSelectors, 
  cardTemplateOptions, 
  popupsSelectors, 
  formSelectors
} from '../utils/constants.js'
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

const formEdit = document.forms[formSelectors.formProfile];
const buttonEditSubmit = formEdit.querySelector(formSelectors.submit);

const formAdd = document.forms[formSelectors.formAdd];
const buttonAddSubmit = formAdd.querySelector(formSelectors.submit);

const formAvatar = document.forms[formSelectors.formAvatar];
const buttonAvatarSubmit = formAvatar.querySelector(formSelectors.submit);

let userCurrentId;


const api = new Api ({
  url: 'https://mesto.nomoreparties.co/v1/cohort-64/',
  headers: {
    authorization: '476fa7c1-24a0-4703-9208-cf8aef471951',
    'content-type': 'application/json'
  }
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


//==============Popup's===============//

//Profile
const popupProfile = new PopupWithForm(
  popupsSelectors.editProfile,
  {submitCallback: (values) => {
    popupProfile.renderLoading(true, 'Сохранение...')
    
    api.patchProfile(values)
      .then((result) => {
      userInfo.setUserInfo(result);
      popupProfile.close();
      })
      .catch((err) => console.log(err))
      .finally(() => popupProfile.renderLoading(false))
  }
});

//Add Card
const popupAddCard = new PopupWithForm(
  popupsSelectors.addCard,
  {submitCallback: (values) => {
    popupAddCard.renderLoading(true, 'Сохранение...')
    
    api.postCard({
      name: values.place,
      link: values.link
    })
      .then((newCard) => {
          cardSection.addItem(renderCard(newCard));
          popupAddCard.close()
        })
      .catch(err => console.log(err))
      .finally(() => popupAddCard.renderLoading(false));
    }
  }
);

//Image Popup
const popupImage = new PicturePopup(popupsSelectors.imagePopup);

//Change Avatar
const popupChangeAvatar = new PopupWithForm(
  popupsSelectors.changeAvatar,
  {submitCallback: (values) => {
    popupChangeAvatar.renderLoading(true, 'Сохранение...');
    
    api.setUserAvatar(values)
      .then((res) => {
        userInfo.setUserInfo(res);
        popupChangeAvatar.close()
      })
      .catch(err => console.log(err))
      .finally(() => popupChangeAvatar.renderLoading(false))
  }}
);

//Delete Card
const popupConfirmDelete = new PopupWithConfirm(
  popupsSelectors.confirmDelete,
  {submitCallback: ({card}) => {
    popupConfirmDelete.renderLoading(true, 'Удаление...');

    api.deleteCard(card.cardId)
    .then(() => {
      card.deleteCard()})
      .then(() => popupConfirmDelete.close())
      .catch(err => console.log(err))
      .finally(() => popupConfirmDelete.renderLoading(false))
  }}
);


//==============Render================//

const renderCard = (element) => {
  const newCard =  new Card(
    element,
    cardTemplateOptions.templateSelector,
    {
    userId: userCurrentId,
    handleCardClick: () => {popupImage.open(element)},
    
    confirmDelete: () => {
      popupConfirmDelete.open(newCard)},

    handleLikeCard: () => {
      api.like(newCard.cardId, newCard.isLiked(newCard.likes))
      .then(res => {
        newCard.like(res)
      })
      .catch(err => console.log(err))}
    }
    );
    
    return newCard.generateCard();
};
  
const renderPage = () => {
  Promise.all([
    api.getCard(),
    api.getProfile()
  ]).then(([cardResult, profileResult]) => {
    userCurrentId = profileResult._id;
    cardResult.forEach(card => cardSection.addItemsReverse(renderCard(card)))
    userInfo.setUserInfo(profileResult)
  })
    .catch(err => console.log(err))
};


//==============Begining==============//

renderPage();

buttonAdd.addEventListener('click', () => {
  validatorAddForm.setButtonInactive()
  popupAddCard.open()
});
  
buttonEditProfile.addEventListener('click', () => {
  popupProfile.fillInputs(userInfo.getUserInfo())
  popupProfile.open()
});

buttonAvatar.addEventListener('click', () => {
  validatorChangeAvatar.setButtonInactive()
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
const validatorChangeAvatar = new FromValidator (validationOptions, formAvatar, buttonAvatarSubmit);
validatorChangeAvatar.enableValidation()