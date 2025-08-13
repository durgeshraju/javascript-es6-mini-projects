// App ← Entry point

// Reference selectors..
const formWrapper = document.getElementById('formWrapper');
const submitButton = document.getElementById('submitBtn');
const formInputs = ['username', 'email', 'password', 'confrimPassword'];

// Capturing form data input values and consrtucting to object.

const formData = () => {
  return formInputs.reduce((acc, id) => {
    acc[id] = document.getElementById(id).value.trim();
    return acc;
  }, {});
};

// Ensure all data is entered to validate and enbale to the 'Submit' button

const checkFormValidity = () => {
  const allFilled = Object.values(formData()).every(
    (value) => value.trim() !== ''
  );
  submitButton.disabled = !allFilled;
};

formWrapper.addEventListener('input', checkFormValidity);

// Form data validators

const validateForm = (data) => {
  const errors = {};

  if (!data.username) errors.username = 'Username is required';
  if (!data.email.includes('@')) errors.email = 'Invalid email';
  if (data.password.length < 6) errors.password = 'Password too short';
  if (data.password !== data.confrimPassword)
    errors.confrimPassword = 'Passwords do not match';

  return errors;
};

// Submit button handler

const onSubmitHandler = (event) => {
  event.preventDefault();
  const data = formData();
  const errors = validateForm(data);
  if (Object.keys(errors).length > 0) {
    formInputs.forEach((id) => {
      const inputEl = document.getElementById(id);
      const hasError = !!errors[id];
      inputEl.classList.toggle('is-invalid', hasError);
      const feedbackEl = inputEl.nextElementSibling;
      feedbackEl.textContent = errors[id];
    });
    return;
  }
  console.log('Final Form Data:', data);
  formWrapper.reset();
};

formWrapper.addEventListener('submit', onSubmitHandler);
