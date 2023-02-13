import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form");
const LOCALSTORAGE_KEY = "feedback-form-state";

const savedFeedBackData = localStorage.getItem(LOCALSTORAGE_KEY);
// console.log(savedFeedBackData);
const parsedFeedBackData = JSON.parse(savedFeedBackData);

form.elements.email.value = savedFeedBackData? parsedFeedBackData.email: '';
form.elements.message.value = savedFeedBackData? parsedFeedBackData.message: '';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {

    const feedback = {
        email: form.email.value,
        message: form.message.value,
      };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedback));
    console.log(localStorage.getItem(LOCALSTORAGE_KEY));
}
function onFormSubmit(evt) {
    evt.preventDefault();
    localStorage.removeItem("email");
    localStorage.removeItem("message");

    console.log(` email: ${form.elements.email.value}\n message: ${form.elements.message.value}` );
    evt.currentTarget.reset();
}
