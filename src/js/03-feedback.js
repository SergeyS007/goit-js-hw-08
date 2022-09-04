import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

updateOutput();

function onInput(event) {
  event.preventDefault();
  const settings = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(settings));
}

function updateOutput() {
  if (localStorage.length === 0) {
    form.elements.email.value = '';
    form.elements.message.value = '';
  } else {
    const dataFromLocalStorage = localStorage.getItem(LOCALSTORAGE_KEY);
    try {
      const parsedData = JSON.parse(dataFromLocalStorage);
      form.elements.email.value = parsedData.email;
      form.elements.message.value = parsedData.message;
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
    }
    localStorage.setItem(LOCALSTORAGE_KEY, dataFromLocalStorage);
  }
}
function onSubmit(event) {
  event.preventDefault();
  const settings = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  console.log(settings);

  localStorage.clear();
  form.reset();
}
