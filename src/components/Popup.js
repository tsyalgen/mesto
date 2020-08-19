import {popupOpened} from '../utils/constants.js';

export default class Popup {
  constructor (popupSelector) {
    this._popupSelector = popupSelector;
    this._element = document.querySelector(this._popupSelector);
  }

  open () {
    this._element.classList.add(popupOpened);
    document.addEventListener('keyup', this._handleEscClose.bind(this));
  }

  close () {
    this._element.classList.remove(popupOpened);
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
