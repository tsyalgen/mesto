
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
  avatarButton,
  cardListSelector,
  popupProfileForm,
  popupAddCardForm,
  popupAvatarForm,
  nameProfile,
  descriptionProfile,
  avatarProfile,
  elLikeButton
} from '../utils/constants.js';

//validation
const popupAddCardValidate = new FormValidator (validationConfig, popupAddCardForm);
const popupProfileValidate = new FormValidator (validationConfig, popupProfileForm);
const popupAvatarValidate = new FormValidator (validationConfig, popupAvatarForm);
popupAddCardValidate.enableValidation();
popupProfileValidate.enableValidation();
popupAvatarValidate.enableValidation();


const api = new Api('https://mesto.nomoreparties.co/v1/cohort-14', '2125977c-957d-44bb-839d-acd3b9623b61');

// api.getUserinfo()
//   .then((res) => {
//     const userInfo = new UserInfo({ nameSelector: '.profile__name', descriptionSelector: '.profile__description', avatarSelector: '.profile__avatar' });

//     const profilePopup = new PopupWithForm('.popup_type_profile', function(item) {
//       userInfo.setUserInfo({ name: item.name, description: item.description });
//       api.setUserinfo(item.name, item.description)
//       .catch((err) => {
//         console.log(err);
//       });
//     });

//     const avatarPopup = new PopupWithForm('.popup_type_avatar', function(item) {
//       userInfo.setUserInfo({ avatar: item.link });
//       console.log(item.link);
//       api.changeAvatar(item.link)
//       .catch((err) => {
//         console.log(err);
//       });
//     });

//     profilePopup.setEventListeners();
//     avatarPopup.setEventListeners();


//     profileEditButton.addEventListener('click', () => {
//       const userData = userInfo.getUserInfo();
//       nameProfile.value = userData.name;
//       descriptionProfile.value = userData.description;

//       popupProfileValidate.enableButton(popupProfileForm.querySelector
//         (validationConfig.submitButtonSelector));

//       profilePopup.open();
//     });

//     avatarButton.addEventListener('click', () => {
//       const userData = userInfo.getUserInfo();
//       avatarProfile.value = userData.avatar;

//       popupAvatarValidate.enableButton(popupAvatarForm.querySelector
//         (validationConfig.submitButtonSelector));

//         avatarPopup.open()
//     });

//     userInfo.setUserInfo({
//       name: res.name, description: res.about, avatar: res.avatar
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// api.initialCards()
//   .then((res) => {

//     const popupImage = new PopupWithImage('.popup_type_photo');

//     function handleCardClick (link, name) {
//       popupImage.open(link,name)
//     }

//     const deleteCardPopup = new PopupWithSubmit('.popup_type_delete-card');
//     deleteCardPopup.setEventListeners();


//     function handleTrashbinClick (card, id) {
//       deleteCardPopup.setSubmitAction(() => {
//         api.deleteCard(id)
//         .then((res) => {
//         card.remove()
//         deleteCardPopup.close();
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//       });
//       deleteCardPopup.open();
//     }

//     function handleLikeClick (card, id) {
//       const counter = card.querySelector('.element__like-counter');
//       const likeButton = card.querySelector(elLikeButton);
//         if (likeButton.classList.contains('element__like-button_active')) {
//           api.deleteLike(id)
//             .then((res) => {
//               counter.textContent = res;
//             })
//             .catch((err) => {
//               console.log(err);
//             });
//         } else {
//           api.addLike(id)
//           .then((res) => {
//             counter.textContent = res;
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//         }
//       likeButton.classList.toggle('element__like-button_active');
//     }


//     function newCardCreate (item, cardSelector) {
//       const newCard = new Card(item, cardSelector, handleCardClick, handleTrashbinClick, handleLikeClick);
//       const cardElement = newCard.generateCard();

//       return cardElement;
//     }

//     const defaultCardList = new Section({
//       items: res,
//       renderer: (item) => {
//         const card = newCardCreate(item, '#card-template');
//         defaultCardList.addItem(card);
//       }
//     }, cardListSelector)

//     const addCardPopup = new PopupWithForm('.popup_type_add-card', function(item) {
//       api.addNewCard(item.name, item.link)
//       .then((res) => {
//         const card = newCardCreate(res, '#card-template');
//         return card;
//       })
//       .then((card) => {
//         defaultCardList.addItem(card);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     });


//     addCardPopup.setEventListeners();
//     popupImage.setEventListeners();


//     addCardButton.addEventListener('click', () => {
//       popupAddCardValidate.disableButton(popupAddCardForm.querySelector
//         (validationConfig.submitButtonSelector));

//       addCardPopup.open();
//     });

//     return defaultCardList;
//   })
//   .then((defaultCardList) => {
//     defaultCardList.renderItems();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

api.loadAllData()
.then((res) => {
  const [ info, cards ] = res;

  const userInfo = new UserInfo({ nameSelector: '.profile__name', descriptionSelector: '.profile__description', avatarSelector: '.profile__avatar' });

    const profilePopup = new PopupWithForm('.popup_type_profile', function(item) {
      userInfo.setUserInfo({ name: item.name, description: item.description });
      api.setUserinfo(item.name, item.description)
      .catch((err) => {
        console.log(err);
      });
    });

    const avatarPopup = new PopupWithForm('.popup_type_avatar', function(item) {
      userInfo.setUserInfo({ avatar: item.link });
      console.log(item.link);
      api.changeAvatar(item.link)
      .catch((err) => {
        console.log(err);
      });
    });

    profilePopup.setEventListeners();
    avatarPopup.setEventListeners();


    profileEditButton.addEventListener('click', () => {
      const userData = userInfo.getUserInfo();
      nameProfile.value = userData.name;
      descriptionProfile.value = userData.description;

      popupProfileValidate.enableButton(popupProfileForm.querySelector
        (validationConfig.submitButtonSelector));

      profilePopup.open();
    });

    avatarButton.addEventListener('click', () => {
      const userData = userInfo.getUserInfo();
      avatarProfile.value = userData.avatar;

      popupAvatarValidate.enableButton(popupAvatarForm.querySelector
        (validationConfig.submitButtonSelector));

        avatarPopup.open()
    });

    userInfo.setUserInfo({
      name: info.name, description: info.about, avatar: info.avatar
    });


    const popupImage = new PopupWithImage('.popup_type_photo');

    function handleCardClick (link, name) {
      popupImage.open(link,name)
    }

    const deleteCardPopup = new PopupWithSubmit('.popup_type_delete-card');
    deleteCardPopup.setEventListeners();


    function handleTrashbinClick (card, id) {
      deleteCardPopup.setSubmitAction(() => {
        api.deleteCard(id)
        .then((res) => {
        card.remove()
        deleteCardPopup.close();
        })
        .catch((err) => {
          console.log(err);
        });
      });
      deleteCardPopup.open();
    }

    function handleLikeClick (card, id) {
      const counter = card.querySelector('.element__like-counter');
      const likeButton = card.querySelector(elLikeButton);
        if (likeButton.classList.contains('element__like-button_active')) {
          api.deleteLike(id)
            .then((res) => {
              counter.textContent = res;
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          api.addLike(id)
          .then((res) => {
            counter.textContent = res;
          })
          .catch((err) => {
            console.log(err);
          });
        }
      likeButton.classList.toggle('element__like-button_active');
    }


    function newCardCreate (item, cardSelector) {
      const newCard = new Card(item, cardSelector, handleCardClick, handleTrashbinClick, handleLikeClick);
      const cardElement = newCard.generateCard();

      return cardElement;
    }

    const defaultCardList = new Section({
      items: cards,
      renderer: (item) => {
        const card = newCardCreate(item, '#card-template');
        defaultCardList.addItem(card);
      }
    }, cardListSelector)

    const addCardPopup = new PopupWithForm('.popup_type_add-card', function(item) {
      api.addNewCard(item.name, item.link)
      .then((res) => {
        const card = newCardCreate(res, '#card-template');
        return card;
      })
      .then((card) => {
        defaultCardList.addItem(card);
      })
      .catch((err) => {
        console.log(err);
      });
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

