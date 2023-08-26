const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;

const localKey = 'feedback-form-state';
const localData = JSON.parse(localStorage.getItem(localKey));

form.addEventListener('input', throttle(handlerInput, 500));
form.addEventListener('submit', handlerSubmit);

if (localStorage.getItem(localKey)) {
  email.value = localData.email;
  message.value = localData.message;
}

function handlerInput(evt) {
  const formValue = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem(localKey, JSON.stringify(formValue));
}

function handlerSubmit(evt) {
  evt.preventDefault();

  if (email.value === '' || message.value === '') {
    return alert('Заполните все поля!');
  }

  console.log(`Email: ${email.value}, Message: ${message.value}`);
  form.reset();
  localStorage.clear();
}
