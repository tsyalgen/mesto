import {
  elLikeButton,
  elImage,
} from '../utils/constants.js';

export default class Card {
  constructor(card, cardSelector, handleCardClick, handleTrashbinClick) {
    this._name = card.name;
    this._link = card.link;
    this._likes = card.likes;
    this._id = card._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleTrashbinClick = handleTrashbinClick;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardElement;
  }

  _handleLikeButton () {
    this._element.querySelector(elLikeButton).classList.toggle('element__like-button_active');
  }

  _setEventListeners () {
    this._element.querySelector(elLikeButton).addEventListener('click', () =>{
      this._handleLikeButton();
    });
    this._element.querySelector('.element__trashbin').addEventListener('click', () =>{
      this._handleTrashbinClick(this._element, this._id);
    });
    this._element.querySelector(elImage).addEventListener('click', () =>{
      this._handleCardClick(this._link, this._name);
    });
  }

  generateCard () {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__name').textContent = this._name;
    this._element.querySelector(elImage).src = this._link;
    this._element.querySelector(elImage).alt = this._name;
    if (this._likes) {
    this._element.querySelector('.element__like-counter').textContent = this._likes.length;
    }


    return this._element;
  }
}
