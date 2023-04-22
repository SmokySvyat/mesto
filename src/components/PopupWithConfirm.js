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
        
        console.log(card)
        console.log(card.cardId)
        this.cardId = card.cardID;
        this.card = card;
    }

    setEventListeners() {
        super.setEventListeners();

        this._buttonSubmit.addEventListener('click', () => {
            this._submitCallback(this)
        });
    }
}