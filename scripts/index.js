import {closePopup, openPopup} from './utils.js';
import {Card} from './Card.js';
import {validationConfig, FormValidator} from './FormValidator.js';
import {initialCards} from './initialCards.js';


const page = document.querySelector('.page');
const profileEditButton = page.querySelector('.profile__edit-button');
const addCardButton = page.querySelector('.profile__add-button');
const cards = page.querySelector('.elements');
const popupProfile = page.querySelector('.popup_type_profile');
const popupAddCard = page.querySelector('.popup_type_add-card');
const popupProfileButton = popupProfile.querySelector('.popup__save-button');
const popupAddButton = popupAddCard.querySelector('.popup__save-button');
const popupProfileOverlay = popupProfile.querySelector('.popup__overlay');
const popupAddCardOverlay = popupAddCard.querySelector('.popup__overlay');
const popupProfileCloseButton = popupProfile.querySelector('.popup__close-button');
const popupAddCardCloseButton = popupAddCard.querySelector('.popup__close-button');
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

//validation
const popupAddCardValidate = new FormValidator (validationConfig, popupAddCardForm);
const popupProfileValidate = new FormValidator (validationConfig, popupProfileForm);
popupAddCardValidate.enableValidation();
popupProfileValidate.enableValidation();

//cards
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


