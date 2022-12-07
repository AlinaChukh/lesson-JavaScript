const elemBtn = document.querySelector('.search__btn');
elemBtn.addEventListener('click', () => {
  const textInput = document.querySelector('.search__input');
  console.log(textInput.value);
});
