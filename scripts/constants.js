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

const cardTemplateOptions = {
  templateSelector: 'card-template',
  cardSelector: '.card',
  deleteBtnSelector: '.card__del',
  imgSelector: '.card__img'
}

export {initialCards, validationOptions, cardTemplateOptions}