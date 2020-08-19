// import {closePopup, openPopup} from './utils.js';

// const page = document.querySelector('.page');
// const popupPhoto = page.querySelector('.popup_type_photo');
// const photoImage = popupPhoto.querySelector('.popup__image');
// const photoName = popupPhoto.querySelector('.popup__name');
// const popupPhotoCloseButton = popupPhoto.querySelector('.popup__close-button');
// const popupPhotoOverlay = popupPhoto.querySelector('.popup__overlay');

export default class Card {
  constructor(card, cardSelector, handleCardClick) {
    this._name = card.name;
    this._link = card.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardElement;
  }

  _handleOpenImage () {
    this._handleCardClick(this._link, this._name);
  }

  // _handleCloseImage () {
  //   closePopup(popupPhoto);
  // }

  _handleLikeButton () {
    this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
  }

  _handleDeleteCard () {
    this._element.remove();
  }

  _setEventListeners () {
    this._element.querySelector('.element__like-button').addEventListener('click', () =>{
      this._handleLikeButton();
    });
    this._element.querySelector('.element__trashbin').addEventListener('click', () =>{
      this._handleDeleteCard();
    });
    this._element.querySelector('.element__image').addEventListener('click', () =>{
      this._handleOpenImage();
    });
    // popupPhotoCloseButton.addEventListener('click', () => {
    //   this._handleCloseImage();
    // });
    // popupPhotoOverlay.addEventListener('click', () => {
    //   this._handleCloseImage();
    // });

  }

  generateCard () {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__name').textContent = this._name;
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name;

    return this._element;
  }
}
