import { cardTemplateOptions as options } from "./constants.js";

class Card {
  constructor(element, templateSelector, openPopup) {
    this._name = element.name;
    this._link = element.link;
    this._templateSelector = templateSelector;
    this._openPopup = openPopup;
  };

  _openPopupImg = () => {
    const popupImg = document.querySelector('#popup-img');
    const imageIntoPopup = popupImg.querySelector('.popup__image');
    const imageIntoPopupHeading = popupImg.querySelector('.popup__heading');
  
    imageIntoPopup.setAttribute('src', this._link);
    imageIntoPopup.setAttribute('alt', this._name);
    imageIntoPopupHeading.textContent = this._name;
  
    this._openPopup(popupImg);
  };
  

  _getTemplate() {
    const cardTemplate = document.getElementById(this._templateSelector).content;
    const listItem = cardTemplate.querySelector(options.cardSelector).cloneNode(true);
    return listItem;
  };

  _handleDeleteCard = () => {
    this._listItem.remove();
  };
  
  _handleLikeCard = (event) => {
    const eventTarget = event.target;
    eventTarget.classList.toggle(options.likeBtnClass);
  };

  generateCard() {
    this._listItem = this._getTemplate();
    const deleteBtn = this._listItem.querySelector(options.deleteBtnSelector);
    const likeBtn = this._listItem.querySelector(options.likeBtnSelector);
    const img = this._listItem.querySelector(options.imgSelector);
  
    this._listItem.querySelector(options.cardHeadingSelector).textContent = this._name;
    img.src = this._link;
    img.alt = this._name;
    
    deleteBtn.addEventListener('click', this._handleDeleteCard);
  
    likeBtn.addEventListener('click', this._handleLikeCard);
  
    img.addEventListener('click', this._openPopupImg);
  
    return this._listItem;
  };
}

export default Card;