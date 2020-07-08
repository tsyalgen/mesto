const page = document.querySelector('.page');
const profileEditButton = page.querySelector('.profile__edit-button');
const addCardButton = page.querySelector('.profile__add-button');
const cards = page.querySelector('.elements');
const popupProfile = page.querySelector('.popup_type_profile');
const popupAddCard = page.querySelector('.popup_type_add-card');
const popupPhoto = page.querySelector('.popup_type_photo');
const popupProfileOverlay = popupProfile.querySelector('.popup__overlay');
const popupAddCardOverlay = popupAddCard.querySelector('.popup__overlay');
const popupPhotoOverlay = popupPhoto.querySelector('.popup__overlay');
const popupProfileCloseButton = popupProfile.querySelector('.popup__close-button');
const popupAddCardCloseButton = popupAddCard.querySelector('.popup__close-button');
const popupPhotoCloseButton = popupPhoto.querySelector('.popup__close-button');
const profileName = page.querySelector('.profile__name');
const profileDescription = page.querySelector('.profile__description');
const popupProfileForm = popupProfile.querySelector('.popup__form');
const popupAddCardForm = popupAddCard.querySelector('.popup__form');
let nameInput = popupProfileForm.querySelector('.popup__field_type_name');
let descriptionInput = popupProfileForm.querySelector('.popup__field_type_description');
let cardNameInput = popupAddCardForm.querySelector('.popup__field_type_card-name');
let linkInput = popupAddCardForm.querySelector('.popup__field_type_link');
let photoImage = popupPhoto.querySelector('.popup__image');
let photoName = popupPhoto.querySelector('.popup__name');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function addCard (card) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.element__name').textContent = card.name;
  cardElement.querySelector('.element__image').src = card.link;
  cardElement.querySelector('.element__like-button').addEventListener('click', likeButtonHandler);
  cardElement.querySelector('.element__trashbin').addEventListener('click', deleteCardHandler);
  cardElement.querySelector('.element__image').addEventListener('click', openImageHandler);

  cards.prepend(cardElement);
};

initialCards.forEach(card => {
  addCard(card);
});

// toggle all popups
function popupToggle(currentPopup) {
  currentPopup.classList.toggle('popup_opened');
}

// profile handlers
function profileToggleHandler (event) {
  popupToggle(popupProfile);

  if (popupProfile.classList.contains('popup_opened')) {
      nameInput.value = profileName.textContent;
      descriptionInput.value = profileDescription.textContent;
  }
}

function profileFormSubmitHandler (event) {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  popupToggle(popupProfile);
}

//cards handlers
function AddCardToggleHandler (event) {
  popupToggle(popupAddCard);
}

function AddCardFormSubmitHandler (event) {
  event.preventDefault();

  card = {};
  card.name = cardNameInput.value;
  card.link = linkInput.value;

  addCard(card);

  popupToggle(popupAddCard);

  cardNameInput.value = '';
  linkInput.value = '';
}

function likeButtonHandler(event){
  event.currentTarget.classList.toggle('element__like-button_active');
}

function deleteCardHandler(event) {
  const currentCard = event.currentTarget.closest('.element');
  currentCard.remove();
}

// photo popup handlers
function openImageHandler(event) {
  photoImage.src = event.currentTarget.src;
  photoName.textContent = event.currentTarget.nextElementSibling.firstElementChild.textContent;

  popupToggle(popupPhoto);
}

function closeImageHandler(event) {
  popupToggle(popupPhoto);
}

//listeners
// profile popup
profileEditButton.addEventListener('click', profileToggleHandler);
popupProfileCloseButton.addEventListener('click', profileToggleHandler);
popupProfileOverlay.addEventListener('click', profileToggleHandler);
popupProfileForm.addEventListener('submit', profileFormSubmitHandler);
// add card popup
addCardButton.addEventListener('click', AddCardToggleHandler);
popupAddCardCloseButton.addEventListener('click', AddCardToggleHandler);
popupAddCardOverlay.addEventListener('click', AddCardToggleHandler);
popupAddCardForm.addEventListener('submit', AddCardFormSubmitHandler);
// photo popup
popupPhotoCloseButton.addEventListener('click', closeImageHandler);
popupPhotoOverlay.addEventListener('click', closeImageHandler);


