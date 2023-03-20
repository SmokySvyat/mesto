class Card {
  constructor(element, templateSelector, openPopupImg) {
    console.log(templateSelector)
    this._name = element.name;
    this._link = element.link;
    this._templateSelector = templateSelector;
    this._openPopupImg = openPopupImg;
  }

  _getTemplate() {
    const cardTemplate = document.getElementById(this._templateSelector).content;
    console.log(cardTemplate)
    const listItem = cardTemplate.querySelector('.card').cloneNode(true);
    return listItem;
  };

  _handleDeleteCard = (event) => {
    event.target.closest('.card').remove();
  };
  
  _handleLikeCard = (event) => {
    const eventTarget = event.target;
    eventTarget.classList.toggle('card__like_active');
  };

  generateCard() {
    this._listItem = this._getTemplate();
    const deleteBtn = this._listItem.querySelector('.card__del');
    const likeBtn = this._listItem.querySelector('#like');
    const img = this._listItem.querySelector('.card__img');
    const name = this._name;
    const link = this._link;
  
    this._listItem.querySelector('#place-name').textContent = name;
    img.src = link;
    img.alt = name;
    
    deleteBtn.addEventListener('click', this._handleDeleteCard);
  
    likeBtn.addEventListener('click', this._handleLikeCard);
  
    img.addEventListener('click', this._openPopupImg);
  
    return this._listItem;
  };
}

export default Card;