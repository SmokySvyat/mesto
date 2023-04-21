export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._closeBtn = this._popup.querySelector('.popup__close');
        this._buttonSubmit = this._popup.querySelector('.popup-form__btn')
    };

    _handleEscClose = (evt) => {
        if (evt.key ==='Escape') {
            this.close();
          };
    };

    _handleOverlayClose = (evt) => {
        if (evt.target === evt.currentTarget) {
            this.close();
        }
    };

    renderLoading(isLoading, loadingText) {
        if (!this._buttonSubmit) return;
        if (isLoading) {
            this.defaultText = this._buttonSubmit.value;
            console.log(loadingText)
            console.log(this._buttonSubmit.value)
            this._buttonSubmit.value = loadingText;
            console.log(this._buttonSubmit.value)
        } else {
          this._buttonSubmit.value = this.defaultText;
        }
      }

    open() {
        this._popup.classList.add('popup_active');
        document.addEventListener('keydown', this._handleEscClose);
    };

    close = () => {
        this._popup.classList.remove('popup_active');
        document.addEventListener('keydown', this._handleEscClose);
    };

    setEventListeners() {
        this._closeBtn.addEventListener('click', this.close);

        this._popup.addEventListener('click', this._handleOverlayClose);
    };
}