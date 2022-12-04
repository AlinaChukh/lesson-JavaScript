export const finishForm = () => {
  const elemFormInput = document.querySelector('form');

  const elemNewType = document.querySelector('input');
  elemNewType.setAttribute('type', 'password');
  console.log(elemNewType);

  const elemNewForm = document.createElement('input');
  elemNewForm.setAttribute('name', 'login');
  elemFormInput.prepend(elemNewForm);
};

// finishForm();
