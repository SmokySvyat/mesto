class FromValidator {
    constructor(validationOptions, form) {
        this._form = form;
        this._validationOptions = validationOptions;
    };

    _showError (errorElement, inputElement, options) {
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(options.errorClass);
        inputElement.classList.add(options.inputErrorClass);
    };
      
    _hideError (errorElement, inputElement, options) {
        errorElement.textContent = '';
        errorElement.classList.remove(options.errorClass);
        inputElement.classList.remove(options.inputErrorClass);
    };

    _setButtonActive (submitElement, inactiveButtonClass) {
        submitElement.removeAttribute('disabled');
        submitElement.classList.remove(inactiveButtonClass);
    };
      
    static setButtonInactive (submitElement, inactiveButtonClass) {
        submitElement.setAttribute('disabled', 'true');
        submitElement.classList.add(inactiveButtonClass);
    };

    _setInputState (inputElement, isValid, options) {
        const inputSectionElement = inputElement.closest(options.errorClosestParent);
        const errorElement = inputSectionElement.querySelector(options.errorText);
        if (isValid) {
          this._hideError (errorElement, inputElement, options);
        } else {
          this._showError (errorElement, inputElement, options);
        };
    };

    _toggleInputState = (inputElement, options) => {
        const isValid = inputElement.validity.valid;
        this._setInputState(inputElement, isValid, options);
    };

    _toggleBtnState = (inputs, submitElement, inactiveButtonClass) => {
        const isFormValid = inputs.every((inputElement) => {
          return inputElement.validity.valid;
        });
    
        if (isFormValid) {
          this._setButtonActive (submitElement, inactiveButtonClass);
        } else {
          FromValidator.setButtonInactive (submitElement, inactiveButtonClass);
        }
      }

    _setEventListeners = (form, options) => {
        const submitElement = form.querySelector(options.submitButtonSelector);
        const inputs = Array.from(form.querySelectorAll(options.inputSelector));
      
        inputs.forEach(inputElement => {
          inputElement.addEventListener('input', () => {
            this._toggleInputState(inputElement, options);
            this._toggleBtnState(inputs, submitElement, options.inactiveButtonClass);
          });
      })
      
        this._toggleBtnState(inputs, submitElement)
    }

    enableValidation() {
        const form = this._form;
    
        this._setEventListeners(form, this._validationOptions);
    };
}

export default FromValidator;