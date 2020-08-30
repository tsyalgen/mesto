export const validationConfig = {
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__field_type_error',
  errorIsVisibleClass: 'popup__field-error_visible',
};

export const page = document.querySelector('.page');
export const profileEditButton = page.querySelector('.profile__edit-button');
export const addCardButton = page.querySelector('.profile__add-button');
export const avatarButton = page.querySelector('.profile__button-avatar');
export const cardListSelector = '.elements';
export const popupProfile = page.querySelector('.popup_type_profile');
export const popupAddCard = page.querySelector('.popup_type_add-card');
export const popupAvatar = page.querySelector('.popup_type_avatar');
export const popupProfileForm = popupProfile.querySelector('.popup__form');
export const popupAddCardForm = popupAddCard.querySelector('.popup__form');
export const popupAvatarForm = popupAvatar.querySelector('.popup__form');
export const nameProfile = document.querySelector('.popup__field_type_name');
export const avatarProfile = document.querySelector(
  '.popup__field_type_avatar'
);
export const descriptionProfile = document.querySelector(
  '.popup__field_type_description'
);
export const elLikeButton = '.element__like-button';
export const elImage = '.element__image';
export const saveButton = '.popup__save-button';
export const popupOpened = 'popup_opened';
export const myId = '69586251800ec0627792e91b';
