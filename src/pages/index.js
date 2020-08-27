
import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import {
  initialCards, //ПОТОМ УБРАТЬ
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

  return cardElement;
}

const userInfo = new UserInfo({ nameSelector: '.profile__name', descriptionSelector: '.profile__description', avatarSelector: '.profile__avatar' });

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-14', '2125977c-957d-44bb-839d-acd3b9623b61');

api.getUserinfo()
  .then((res) => {
    userInfo.setUserInfo({
      name: res.name, description: res.about, avatar: res.avatar
    });
  })
  .catch((err) => {
    console.log(err);
  });


api.initialCards()
  .then((res) => {
    const defaultCardList = new Section({
      items: res,
      renderer: (item) => {
        const card = newCardCreate(item, '#card-template');
        defaultCardList.addItem(card);
      }
    }, cardListSelector)

    const addCardPopup = new PopupWithForm('.popup_type_add-card', function(item) {
      const card = newCardCreate(item, '#card-template');
      api.addNewCard(item.name, item.link)
      .catch((err) => {
        console.log(err);
      });
      defaultCardList.addItem(card);
    });

    addCardPopup.setEventListeners();


    addCardButton.addEventListener('click', () => {
      popupAddCardValidate.disableButton(popupAddCardForm.querySelector
        (validationConfig.submitButtonSelector));

      addCardPopup.open();
    });

    return defaultCardList;
  })
  .then((defaultCardList) => {
    defaultCardList.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });



const popupImage = new PopupWithImage('.popup_type_photo');

function handleCardClick (link, name) {
  popupImage.open(link,name)
}

// const defaultCardList = new Section({
//   items: initialCards,
//   renderer: (item) => {
//     newCardCreate(item, '#card-template');
//   }
// }, cardListSelector)

// const addCardPopup = new PopupWithForm('.popup_type_add-card', function(item) {
//   const card = newCardCreate(item, '#card-template');
//   defaultCardList.addItem(card);

// });


const profilePopup = new PopupWithForm('.popup_type_profile', function(item) {
  userInfo.setUserInfo({ name: item.name, description: item.description });
  api.setUserinfo(item.name, item.description)
  .catch((err) => {
    console.log(err);
  });
  });

popupImage.setEventListeners();
// addCardPopup.setEventListeners();
profilePopup.setEventListeners();
// defaultCardList.renderItems();


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
// addCardButton.addEventListener('click', () => {
//   popupAddCardValidate.disableButton(popupAddCardForm.querySelector
//     (validationConfig.submitButtonSelector));

//   addCardPopup.open();
// });


