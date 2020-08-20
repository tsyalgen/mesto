export const initialCards = [
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

export const validationConfig = {
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__field_type_error',
  errorIsVisibleClass: 'popup__field-error_visible'
};

export const page = document.querySelector('.page');
export const profileEditButton = page.querySelector('.profile__edit-button');
export const addCardButton = page.querySelector('.profile__add-button');
export const cardListSelector = '.elements';
export const popupProfile = page.querySelector('.popup_type_profile');
export const popupAddCard = page.querySelector('.popup_type_add-card');
export const popupProfileForm = popupProfile.querySelector('.popup__form');
export const popupAddCardForm = popupAddCard.querySelector('.popup__form');
export const nameProfile = document.querySelector('.popup__field_type_name');
export const descriptionProfile = document.querySelector('.popup__field_type_description');
export const elLikeButton = '.element__like-button';
export const elImage = '.element__image';
export const popupOpened = 'popup_opened';
