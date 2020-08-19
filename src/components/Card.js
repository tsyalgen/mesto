import {
  elLikeButton,
  elImage,
} from '../utils/constants.js';

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

  _handleLikeButton () {
    this._element.querySelector(elLikeButton).classList.toggle('element__like-button_active');
  }

  _handleDeleteCard () {
    this._element.remove();
  }

  _setEventListeners () {
    this._element.querySelector(elLikeButton).addEventListener('click', () =>{
      this._handleLikeButton();
    });
    this._element.querySelector('.element__trashbin').addEventListener('click', () =>{
      this._handleDeleteCard();
    });
    this._element.querySelector(elImage).addEventListener('click', () =>{
      this._handleOpenImage();
    });
  }

  generateCard () {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__name').textContent = this._name;
    this._element.querySelector(elImage).src = this._link;
    this._element.querySelector(elImage).alt = this._name;

    return this._element;
  }
}
