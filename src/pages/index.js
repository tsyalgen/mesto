
import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {
  initialCards,
  validationConfig,
  profileEditButton,
  addCardButton,
  cardListSelector,
  popupProfileForm,
  popupAddCardForm,
  nameProfile,
  descriptionProfile
} from '../utils/constants.js';

//validation
const popupAddCardValidate = new FormValidator (validationConfig, popupAddCardForm);
const popupProfileValidate = new FormValidator (validationConfig, popupProfileForm);
popupAddCardValidate.enableValidation();
popupProfileValidate.enableValidation();

//classes amd methods
function newCardCreate (item, cardSelector) {
  const newCard = new Card(item, cardSelector, handleCardClick);
  const cardElement = newCard.generateCard();

  defaultCardList.addItem(cardElement);
}

const popupImage = new PopupWithImage('.popup_type_photo');

function handleCardClick (link, name) {
  popupImage.open(link,name)
}

const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    newCardCreate(item, '#card-template');
  }
}, cardListSelector)

const addCardPopup = new PopupWithForm('.popup_type_add-card', function(item) {
  newCardCreate(item, '#card-template');
});

const userInfo = new UserInfo({ nameSelector: '.profile__name', descriptionSelector: '.profile__description' });

const profilePopup = new PopupWithForm('.popup_type_profile', function(item) {
  userInfo.setUserInfo(item.name, item.description);
  });

popupImage.setEventListeners();
addCardPopup.setEventListeners();
profilePopup.setEventListeners();
defaultCardList.renderItems();




//listeners
// profile edit listener
profileEditButton.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  nameProfile.value = userData.name;
  descriptionProfile.value = userData.description;

  popupProfileValidate.enableButton(popupProfileForm.querySelector
    (validationConfig.submitButtonSelector));

  profilePopup.open();
});
// add card listener
addCardButton.addEventListener('click', () => {
  popupAddCardValidate.disableButton(popupAddCardForm.querySelector
    (validationConfig.submitButtonSelector));

  addCardPopup.open();
});


