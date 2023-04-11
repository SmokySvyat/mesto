import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, {submitCallback}) {
        super(popupSelector);
        this._submitCallback = submitCallback;
        this._form = this._popup.querySelector('.popup-form');
        this._inputsList = Array.from(this._form.querySelectorAll('.popup-form__input'));
        this._inputsValues = {};
    }

    _getInputValue() {
        this._inputsList.forEach((input) => {
            const inputName = input['name'];
            this._inputsValues[inputName] = input.value;
        });

        return this._inputsValues
    };

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._submitCallback(this._getInputValue());
        });
    };

    close() {
        super.close();
        this._form.reset();
    };

    fillInputs(userData) {
        this._inputsList.forEach((input) => {
          input.value = userData[input.name];
        });
      }
}