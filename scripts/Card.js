import { cardTemplateOptions as options } from "./constants.js";

class Card {
  constructor(element, templateSelector, openPopupImg) {
    this._name = element.name;
    this._link = element.link;
    this._templateSelector = templateSelector;
    this._openPopupImg = openPopupImg;
  }

  getText(event) {
    const imgLink = event.target.getAttribute('src'); 
    const imgHeading = event.target.getAttribute('alt');
    return console.log(imgHeading, imgLink)
  }

  _getTemplate() {
    const cardTemplate = document.getElementById(this._templateSelector).content;
    const listItem = cardTemplate.querySelector(options.cardSelector).cloneNode(true);
    return listItem;
  };

  _handleDeleteCard = () => {
    console.log(this._name)
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