import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._element = document.querySelector(this._popupSelector);
    this._image = this._element.querySelector('.popup__image');
    this._descr = this._element.querySelector('.popup__image');
    this._name = this._element.querySelector('.popup__name');
  }

  open (link, name) {
    this._image.src = link;
    this._descr.alt = name;
    this._name.textContent = name;

    super.open();
  }
}
