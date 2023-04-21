import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
    constructor(selector, {submitCallback}) {
        super (selector)
    };

    close() {
        super.close();
    };

    open() {
        super.open()
    }
}