import Popup from "./Popup.js";

export default class PicturePopup extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup__image');
    this._title = this._popup.querySelector('.popup__heading');
  }

  open(img) {
    this._image.src = img.link;
    this._image.alt = img.alt;
    this._title.textContent = img.name;
    super.open();
  }
}