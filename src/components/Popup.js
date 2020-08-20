import {popupOpened} from '../utils/constants.js';

export default class Popup {
  constructor (popupSelector) {
    this._popupSelector = popupSelector;
    this._element = document.querySelector(this._popupSelector);
    this._closeButton = this._element.querySelector('.popup__close-button');
    this._overlayClose = this._element.querySelector('.popup__overlay');
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
    this._closeButton.addEventListener('click', this.close.bind(this));
    this._overlayClose.addEventListener('click', this.close.bind(this));
  }
}
