export default class Popup {
  constructor (popupSelector) {
    this._popupSelector = popupSelector;
    this._element = document.querySelector(this._popupSelector);
  }

  open () {
    this._element.classList.add('popup_opened');
    document.addEventListener('keyup', this._handleEscClose.bind(this));
  }

  close () {
    this._element.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._handleEscClose.bind(this));
  }

  _handleEscClose () {
    if (event.key === 'Escape') {
      const activePopup = this._element.querySelector('.popup_opened');
      this.close(activePopup);
    }
  }

  setEventListeners () {
    this._element.querySelector('.popup__close-button').addEventListener('click', this.close.bind(this));
    this._element.querySelector('.popup__overlay').addEventListener('click', this.close.bind(this));
  }
}
