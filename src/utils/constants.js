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
      name: 'Гошан',
      link: "https://sun4.userapi.com/sun4-12/s/v1/ig2/IcIoPXVm9zGsySr_dtQAr1o-U6v3pX9QHO-28hz0UdDL8YQ6l3DF162tDlqHfDJcwsONG4J9faOzBpqYPWKa7CQ6.jpg?size=883x1266&quality=95&type=album"
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
  containerSelector: '.cards',
  templateSelector: 'card-template',
  cardSelector: '.card',
  cardHeadingSelector: '.card__text',
  deleteBtnSelector: '.card__del',
  likeBtnSelector: '.card__like',
  imgSelector: '.card__img',
  likeBtnClass: 'card__like_active'
};

export {initialCards, validationOptions, cardTemplateOptions}