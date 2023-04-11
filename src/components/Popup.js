export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._closeBtn = this._popup.querySelector('.popup__close')
    };

    _handleKey(evt) {
        if (evt.key ==='Escape') {
            this.close();
          };
    };

    _handleOverlayClose(evt) {
        if (evt.target === evt.currentTarget) {
            this.close();
        }
      }

    open() {
        this._popup.classList.add('popup_active');
        document.addEventListener('keydown', this._handleKey.bind(this));
    };

    close() {
        this._popup.classList.remove('popup_active');
        document.addEventListener('keydown', this._handleKey);
    };

    setEventListeners() {
        this._closeBtn.addEventListener('click', this.close.bind(this));

        this._popup.addEventListener('click', this._handleOverlayClose.bind(this));
    };
}