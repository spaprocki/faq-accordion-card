const emailInputElement = document.getElementById('email-input');
const submitButtonElement = document.getElementById('submit-button');
const errorMessageElement = document.getElementById('error-message');
const errorIconElement = document.getElementById('error-icon');

submitButtonElement.addEventListener('click', evaluateEmail);

function evaluateEmail() {
  if (!emailIsValid(emailInputElement)) {
    showError();
  } else {
    clearError();
  }
}

function emailIsValid(emailInput) {
  const emailInputText = emailInput.value;
  const emailRegex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

  if (emailInputText.match(emailRegex)) {
    return true;
  } else return false;
}

function showError() {
  errorMessageElement.classList.add('visible');
  errorIconElement.classList.add('visible');
  emailInputElement.classList.add('error');
}

function clearError() {
  errorMessageElement.classList.remove('visible');
  errorIconElement.classList.remove('visible');
  emailInputElement.classList.remove('error');
}
