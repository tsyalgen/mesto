import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor (popupSelector, handleSubmitForm) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._element = document.querySelector(this._popupSelector);
    this._form = this._element.querySelector('.popup__form');
  }

  _getInputValues () {
    this._inputList= this._element.querySelectorAll('.popup__field');

    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);

    return this._formValues;
  }

  setEventListeners () {
    super.setEventListeners();

    this._element.addEventListener('submit', (event) => {
      event.preventDefault();


      this._handleSubmitForm(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();

    this._form.reset();
  }
}
