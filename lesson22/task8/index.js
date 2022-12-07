const elemInput = document.querySelector('.text-input');

elemInput.addEventListener('change', (event) => {
  console.log(event.target.value);
});
