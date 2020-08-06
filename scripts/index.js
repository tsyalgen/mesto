import {closePopup, openPopup} from './utils.js';
import {Card} from './Card.js';
import {initialCards} from './initialCards.js';


const page = document.querySelector('.page');
const profileEditButton = page.querySelector('.profile__edit-button');
const addCardButton = page.querySelector('.profile__add-button');
const cards = page.querySelector('.elements');
const popupProfile = page.querySelector('.popup_type_profile');
const popupAddCard = page.querySelector('.popup_type_add-card');
//const popupPhoto = page.querySelector('.popup_type_photo');
const popupProfileButton = popupProfile.querySelector('.popup__save-button');
const popupAddButton = popupAddCard.querySelector('.popup__save-button');
const popupProfileOverlay = popupProfile.querySelector('.popup__overlay');
const popupAddCardOverlay = popupAddCard.querySelector('.popup__overlay');
// const popupPhotoOverlay = popupPhoto.querySelector('.popup__overlay');
const popupProfileCloseButton = popupProfile.querySelector('.popup__close-button');
const popupAddCardCloseButton = popupAddCard.querySelector('.popup__close-button');
// const popupPhotoCloseButton = popupPhoto.querySelector('.popup__close-button');
const profileName = page.querySelector('.profile__name');
const profileDescription = page.querySelector('.profile__description');
const popupProfileForm = popupProfile.querySelector('.popup__form');
const popupAddCardForm = popupAddCard.querySelector('.popup__form');
const nameInput = popupProfileForm.querySelector('.popup__field_type_name');
const nameInputError = popupProfileForm.querySelector('.popup__field-error_type_name');
const descriptionInput = popupProfileForm.querySelector('.popup__field_type_description');
const descriptionInputError = popupProfileForm.querySelector('.popup__field-error_type_description');
const cardNameInput = popupAddCardForm.querySelector('.popup__field_type_card-name');
const cardNameInputError = popupAddCardForm.querySelector('.popup__field-error_type_card-name');
const linkInput = popupAddCardForm.querySelector('.popup__field_type_link');
const linkInputError = popupAddCardForm.querySelector('.popup__field-error_type_link');
//const photoImage = popupPhoto.querySelector('.popup__image');
//const photoName = popupPhoto.querySelector('.popup__name');
//  const cardTemplate = document.querySelector('#card-template').content;

//popup close and open
// function closePopup(currentPopup) {
//   currentPopup.classList.remove('popup_opened');
//   document.removeEventListener('keyup', handleEscKey);
// }

// function handleEscKey(event) {
//   if (event.key === 'Escape') {
//     const activePopup = document.querySelector('.popup_opened');
//     closePopup(activePopup);
//   }
// }

// function openPopup(currentPopup) {
//   currentPopup.classList.add('popup_opened');
//   document.addEventListener('keyup', handleEscKey);
// }

//functions for cardElement listeners
// function likeButtonHandler(event){
//   event.currentTarget.classList.toggle('element__like-button_active');
// }

// function deleteCardHandler(event) {
//   const currentCard = event.currentTarget.closest('.element');
//   currentCard.remove();
// }

// function openImageHandler(event) {
//   photoImage.src = event.currentTarget.src;
//   photoName.textContent = event.currentTarget.alt;
//   photoImage.alt = event.currentTarget.alt;

//   openPopup(popupPhoto);
// }

//create cards and render default cards
// function createCard (card) {
//   const cardElement = cardTemplate.cloneNode(true);

//   cardElement.querySelector('.element__name').textContent = card.name;
//   cardElement.querySelector('.element__image').src = card.link;
//   cardElement.querySelector('.element__image').alt = card.name;
//   cardElement.querySelector('.element__like-button').addEventListener('click', likeButtonHandler);
//   cardElement.querySelector('.element__trashbin').addEventListener('click', deleteCardHandler);
//   cardElement.querySelector('.element__image').addEventListener('click', openImageHandler);

//   return cardElement;
// };

function renderCards(startCards) {
  startCards.forEach((item) => {
    const newCard = new Card(item, '#card-template');
    const cardElement = newCard.generateCard();

    cards.prepend(cardElement);
  });
}

renderCards(initialCards);


// profile handlers
function profileOpenHandler () {
  nameInput.value = profileName.textContent;
  nameInput.classList.remove(validationConfig.inputErrorClass);
  nameInputError.classList.remove(validationConfig.errorIsVisibleClass);

  descriptionInput.value = profileDescription.textContent;
  descriptionInput.classList.remove(validationConfig.inputErrorClass);
  descriptionInputError.classList.remove(validationConfig.errorIsVisibleClass);

  popupProfileButton.removeAttribute('disabled');
  popupProfileButton.classList.remove(validationConfig.inactiveButtonClass);

  openPopup(popupProfile);
}

function profileCloseHandler () {
  closePopup(popupProfile);
}

function profileFormSubmitHandler (event) {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  closePopup(popupProfile);
}

//cards handlers
function addCardOpenHandler () {
  cardNameInput.value = '';
  cardNameInput.classList.remove(validationConfig.inputErrorClass);
  cardNameInputError.classList.remove(validationConfig.errorIsVisibleClass);

  linkInput.value = '';
  linkInput.classList.remove(validationConfig.inputErrorClass);
  linkInputError.classList.remove(validationConfig.errorIsVisibleClass);

  popupAddButton.setAttribute('disabled', 'true');
  popupAddButton.classList.add(validationConfig.inactiveButtonClass);

  openPopup(popupAddCard);
}

function addCardCloseHandler () {
  closePopup(popupAddCard);
}

function addCardFormSubmitHandler (event) {
  event.preventDefault();

  const card = {
    name: cardNameInput.value,
    link: linkInput.value
  };
  const newCard = new Card(card, '#card-template');
  const cardElement = newCard.generateCard();

  cards.prepend(cardElement);

  closePopup(popupAddCard);

  cardNameInput.value = '';
  linkInput.value = '';
}

// photo popup handlers

// function closeImageHandler() {
//   closePopup(popupPhoto);
// }

//listeners
// profile popup
profileEditButton.addEventListener('click', profileOpenHandler);
popupProfileCloseButton.addEventListener('click', profileCloseHandler);
popupProfileOverlay.addEventListener('click', profileCloseHandler);
popupProfileForm.addEventListener('submit', profileFormSubmitHandler);
// add card popup
addCardButton.addEventListener('click', addCardOpenHandler);
popupAddCardCloseButton.addEventListener('click', addCardCloseHandler);
popupAddCardOverlay.addEventListener('click', addCardCloseHandler);
popupAddCardForm.addEventListener('submit', addCardFormSubmitHandler);
// photo popup
// popupPhotoCloseButton.addEventListener('click', closeImageHandler);
// popupPhotoOverlay.addEventListener('click', closeImageHandler);


