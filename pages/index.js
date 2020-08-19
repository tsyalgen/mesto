
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
  popupAddCardForm
} from '../utils/constants.js';

//validation
const popupAddCardValidate = new FormValidator (validationConfig, popupAddCardForm);
const popupProfileValidate = new FormValidator (validationConfig, popupProfileForm);
popupAddCardValidate.enableValidation();
popupProfileValidate.enableValidation();

//classes amd methods
const popupImage = new PopupWithImage('.popup_type_photo');

function handleCardClick (link, name) {
  popupImage.open(link,name)
}

const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const newCard = new Card(item, '#card-template', handleCardClick);
    const cardElement = newCard.generateCard();

    defaultCardList.addItem(cardElement);
  }
}, cardListSelector)

const addCardPopup = new PopupWithForm('.popup_type_add-card', function(item) {
  const newCard = new Card(item, '#card-template', handleCardClick);
  const cardElement = newCard.generateCard();

  defaultCardList.addItem(cardElement);
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
  const nameProfile = document.querySelector('.popup__field_type_name');
  const descriptionProfile = document.querySelector('.popup__field_type_description');
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


