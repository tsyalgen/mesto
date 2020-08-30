import {popupOpened} from '../utils/constants.js';

export default class Popup {
  constructor (popupSelector) {
    this._popupSelector = popupSelector;
    this._element = document.querySelector(this._popupSelector);
    this._closeButton = this._element.querySelector('.popup__close-button');
    this._overlayClose = this._element.querySelector('.popup__overlay');
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open () {
    this._element.classList.add(popupOpened);
    document.addEventListener('keyup', this._handleEscClose);
  }

  close () {
    this._element.classList.remove(popupOpened);
    document.removeEventListener('keyup', this._handleEscClose);
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
