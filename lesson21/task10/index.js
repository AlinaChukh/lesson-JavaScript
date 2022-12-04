export const finishForm = () => {
  const elemFormInput = document.querySelector('.login-form');

  const elemNewForm = document.createElement('input');
  elemNewForm.setAttribute('type', 'text');
  elemNewForm.setAttribute('name', 'login');
  elemFormInput.prepend(elemNewForm);

  document.querySelector('[name=password]').setAttribute('type', 'password');
};

// finishForm();
