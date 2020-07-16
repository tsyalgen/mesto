const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__field_type_error',
  errorIsVisibleClass: 'popup__field-error_visible'
};

function showInputError (formElement, inputElement, errorMessage, inputErrorClass, errorIsVisibleClass) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorIsVisibleClass);
}

function hideInputError (formElement, inputElement, inputErrorClass, errorIsVisibleClass) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorIsVisibleClass);
  errorElement.textContent = '';
}

function checkInputValidity (formElement, inputElement, {inputErrorClass, errorIsVisibleClass}) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorIsVisibleClass);
  } else {
    hideInputError(formElement, inputElement, inputErrorClass, errorIsVisibleClass);
  }
}

function hasInvalidInput (inputList) {
  return inputList.some(function (inputElement) {
    return !inputElement.validity.valid;
  });
}

function actualizeButtonState (formElement, inputList, submitButtonSelector, inactiveButtonClass) {
  const buttonElement = formElement.querySelector(submitButtonSelector);
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'true');
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}

function setEventListeners (formElement, {inputSelector, submitButtonSelector, inactiveButtonClass, ...rest}) {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  actualizeButtonState(formElement, inputList, submitButtonSelector, inactiveButtonClass);

  inputList.forEach(function (inputElement) {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, rest);
      actualizeButtonState(formElement, inputList, submitButtonSelector, inactiveButtonClass);
    });
  });
}

function enableValidation({formSelector, ...rest}) {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach(function (formElement) {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement, rest)
  });
}

enableValidation(validationConfig);
