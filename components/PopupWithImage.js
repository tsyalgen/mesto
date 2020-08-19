import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open (link, name) {
    this._element = document.querySelector(this._popupSelector);
    this._element.querySelector('.popup__image').src = link;
    this._element.querySelector('.popup__image').alt = name;
    this._element.querySelector('.popup__name').textContent = name;

    super.open();
  }
}
