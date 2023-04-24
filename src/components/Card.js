import { cardTemplateOptions as options } from "../utils/constants.js";

export default class Card {
  constructor(element, templateSelector, {userId, handleCardClick, confirmDelete, handleLikeCard}) {
    this._name = element.name;
    this._link = element.link;
    this._ownerId = element.owner._id;
    this.cardId = element._id;
    this.likes = element.likes;
    this.likesCounter = (element.likes).length;
    this._userId = userId

    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._confirmDelete = confirmDelete;
    this._handleLikeCard = handleLikeCard;
  };  

  _getTemplate() {
    const cardTemplate = document.querySelector(`#${this._templateSelector}`).content;
    const listItem = cardTemplate.querySelector(options.cardSelector).cloneNode(true);
    return listItem;
  };

  _handleDeleteCard = () => {
    this._listItem.remove();
  };

  isLiked(likes) {
    return likes.some(like => {
      return like._id === this._userId;
    })
  };
  
  like = ({likes}) => {
    this._likeBtn.classList.toggle(options.likeBtnClass);
    this._counter.textContent = likes.length;
  };

  deleteCard(card) {
    this._listItem.remove(card);
    this._listItem = null;
  }

  _setEventListeners() {
    this._deleteBtn.addEventListener('click', () => {
      this._confirmDelete()
    });
  
    this._likeBtn.addEventListener('click', this._handleLikeCard);
  
    this._img.addEventListener('click', this._handleCardClick);
  };
  
  generateCard() {
    this._listItem = this._getTemplate();
    
    this._deleteBtn = this._listItem.querySelector(options.deleteBtnSelector);
    this._likeBtn = this._listItem.querySelector(options.likeBtnSelector);
    this._img = this._listItem.querySelector(options.imgSelector);
    this._counter = this._listItem.querySelector(options.counterSelector)
    
    this._listItem.querySelector(options.cardHeadingSelector).textContent = this._name;
    this._img.src = this._link;
    this._img.alt = this._name;
    this._counter.textContent = this.likesCounter;

    if (this._ownerId !== this._userId) {
      this._deleteBtn.remove()
    }

    if (this.isLiked(this.likes)) {
      this._likeBtn.classList.add('card__like_active')
    }

    this._setEventListeners()
    
    return this._listItem;
  };
}