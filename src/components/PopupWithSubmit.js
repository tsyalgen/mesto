import Popup from './Popup';

export default class PopupWithSubmit extends Popup {
  constructor (popupSelector, handleSubmitForm) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._element = document.querySelector(this._popupSelector);
  }

  setEventListeners () {
    super.setEventListeners();

    this._element.addEventListener('submit', (event) => {
      event.preventDefault();


      this._handleSubmitForm();
      this.close();
    });
  }
}
