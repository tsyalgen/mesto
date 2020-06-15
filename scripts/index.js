const page = document.querySelector('.page');
const profileEditButton = page.querySelector('.profile__edit-button');
const popup = page.querySelector('.popup');
const popupOverlay = popup.querySelector('.popup__overlay');
const popupCloseButton = popup.querySelector('.popup__close-button');
const profileName = page.querySelector('.profile__name');
const profileDescription = page.querySelector('.profile__description');
const popupForm = popup.querySelector('.popup__form');

function popupToggle(event) {
  popup.classList.toggle('popup_opened');
}

// close popup by clicking overlay
function closePopupAlt (event) {
  if (event.target !== event.currentTarget) {
    return
  }
  popupToggle()
}

// profile submitter
function formSubmitHandler (evt) {
  evt.preventDefault();

  let nameInput = popupForm.querySelector('.popup__field_type_name').value;
  let descriptionInput = popupForm.querySelector('.popup__field_type_description').value;

  profileName.textContent = nameInput;
  profileDescription.textContent = descriptionInput;

  popupToggle();
}

// assignment popup inputs from profile block
popup.querySelector('.popup__field_type_name').value = profileName.textContent;
popup.querySelector('.popup__field_type_description').value = profileDescription.textContent;

//listeners
profileEditButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
popupOverlay.addEventListener('click', closePopupAlt);
popupForm.addEventListener('submit', formSubmitHandler);

