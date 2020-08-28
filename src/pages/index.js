
import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';
import Api from '../components/Api.js';
import {
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


const api = new Api('https://mesto.nomoreparties.co/v1/cohort-14', '2125977c-957d-44bb-839d-acd3b9623b61');

api.getUserinfo()
  .then((res) => {
    const userInfo = new UserInfo({ nameSelector: '.profile__name', descriptionSelector: '.profile__description', avatarSelector: '.profile__avatar' });

    const profilePopup = new PopupWithForm('.popup_type_profile', function(item) {
      userInfo.setUserInfo({ name: item.name, description: item.description });
      api.setUserinfo(item.name, item.description)
      .catch((err) => {
        console.log(err);
      });
      });

    profilePopup.setEventListeners();


    profileEditButton.addEventListener('click', () => {
      const userData = userInfo.getUserInfo();
      nameProfile.value = userData.name;
      descriptionProfile.value = userData.description;

      popupProfileValidate.enableButton(popupProfileForm.querySelector
        (validationConfig.submitButtonSelector));

      profilePopup.open();
    });

    userInfo.setUserInfo({
      name: res.name, description: res.about, avatar: res.avatar
    });
  })
  .catch((err) => {
    console.log(err);
  });


api.initialCards()
  .then((res) => {

    const popupImage = new PopupWithImage('.popup_type_photo');

    function handleCardClick (link, name) {
      popupImage.open(link,name)
    }


    function handleTrashbinClick (card, id) {
      const deleteCardPopup = new PopupWithSubmit ('.popup_type_delete-card', function() {
        if (id) {
        api.deleteCard(id)
        .catch((err) => {
          console.log(err);
        })};
        id = '';
        card.remove();
      })
      deleteCardPopup.setEventListeners();
      deleteCardPopup.open();
    }


    function newCardCreate (item, cardSelector) {
      const newCard = new Card(item, cardSelector, handleCardClick, handleTrashbinClick);
      const cardElement = newCard.generateCard();
      if (item.owner && item.owner._id !== '69586251800ec0627792e91b') {
        cardElement.querySelector('.element__trashbin').remove();
      }

      return cardElement;
    }

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
    popupImage.setEventListeners();


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
