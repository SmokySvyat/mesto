import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
    constructor(selector, {submitCallback}) {
        super (selector)
        this._submitCallback = submitCallback
    };

    close() {
        super.close();
    };

    open(card) {
        super.open();
        
        this.cardId = card.cardID;
        this.card = card;
    }

    setEventListeners() {
        super.setEventListeners();

        this._buttonSubmit.addEventListener('click', (event) => {
            event.preventDefault()
            this._submitCallback(this)
        });
    }
}