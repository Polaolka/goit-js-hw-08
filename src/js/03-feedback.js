import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const TIME_OUT = 1000;
const savedFeedBackData = localStorage.getItem(LOCALSTORAGE_KEY);
const parsedFeedBackData = JSON.parse(savedFeedBackData);

form.elements.email.value = savedFeedBackData ? parsedFeedBackData.email : '';
form.elements.message.value = savedFeedBackData
  ? parsedFeedBackData.message
  : '';

form.addEventListener('input', throttle(handleFormInput, TIME_OUT));
form.addEventListener('submit', handleFormSubmit);

function handleFormInput(evt) {
  const feedback = {
    email: form.email.value,
    message: form.message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedback));
}
function handleFormSubmit(evt) {
  evt.preventDefault();
  console.log(
    ` email: ${form.elements.email.value}\n message: ${form.elements.message.value}`
  );
  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
