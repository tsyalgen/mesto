import Popup from './Popup';

export default class PopupWithSubmit extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
    this._element = document.querySelector(this._popupSelector);
    // this._functest = functest;
  }

  setSubmitAction (action) {
    this._action = action;
  }

  setEventListeners () {
    super.setEventListeners()

    this._element.addEventListener('submit', (event) => {
      event.preventDefault();

      this._action()
    });
  }
}

