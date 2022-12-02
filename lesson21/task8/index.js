export const createButton = (buttonText) => {
  const buttonElem = document.createElement('button');
  buttonElem.textContent = buttonText;
  const elemenBody = document.querySelector('body');
  elemenBody.append(buttonElem);
};

createButton('Send Email');
