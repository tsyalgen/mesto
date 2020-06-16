const page = document.querySelector('.page');
const profileEditButton = page.querySelector('.profile__edit-button');
const popup = page.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close-button');
const profileName = page.querySelector('.profile__name');
const profileDescription = page.querySelector('.profile__description');
const popupForm = popup.querySelector('.popup__form');
let nameInput = popupForm.querySelector('.popup__field_type_name');
let descriptionInput = popupForm.querySelector('.popup__field_type_description');

//popup toggle and assignment inputs from profile
function popupToggle(event) {
  popup.classList.toggle('popup_opened');

  if (popup.classList.contains('popup_opened')) {
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
  }
}

// profile submitter
function formSubmitHandler (event) {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  popupToggle();
}

//listeners
profileEditButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
popupForm.addEventListener('submit', formSubmitHandler);


/* //close popup by clicking overlay :( :( :(
const popupOverlay = popup.querySelector('.popup__overlay');

function closePopupAlt (event) {
  if (event.target !== event.currentTarget) {
    return
  }
  popupToggle()
}

popupOverlay.addEventListener('click', closePopupAlt);
*/
