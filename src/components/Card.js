import { cardTemplateOptions as options } from "../utils/constants.js";

export default class Card {
  constructor(element, templateSelector, handleCardClick) {
    this._name = element.name;
    this._link = element.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  };

  // _openPopupImg = () => {
  //   imageIntoPopup.setAttribute('src', this._link);
  //   imageIntoPopup.setAttribute('alt', this._name);
  //   imageIntoPopupHeading.textContent = this._name;
  
  //   this._openPopup(popupImg);
  // };
  

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

  _setEventListeners() {
    this._deleteBtn.addEventListener('click', this._handleDeleteCard);
  
    this._likeBtn.addEventListener('click', this._handleLikeCard);
  
    this._img.addEventListener('click', this._handleCardClick);
  }
  
  generateCard() {
    this._listItem = this._getTemplate();
    this._deleteBtn = this._listItem.querySelector(options.deleteBtnSelector);
    this._likeBtn = this._listItem.querySelector(options.likeBtnSelector);
    this._img = this._listItem.querySelector(options.imgSelector);
    
    this._listItem.querySelector(options.cardHeadingSelector).textContent = this._name;
    this._img.src = this._link;
    this._img.alt = this._name;

    this._setEventListeners()
    
    return this._listItem;
  };
}