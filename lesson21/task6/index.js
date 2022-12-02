export const setButton = (buttonText) => {
  const buttonElem = document.querySelector('body');

  // const newButton = `<button>${buttonText}</button>`;

  // buttonElem.innerHTML = newButton;

  const button = document.createElement('button');
  button.innerText = buttonText;
  buttonElem.append(button);
};

setButton('button text');
