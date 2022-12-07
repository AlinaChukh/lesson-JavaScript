const elemCheck = document.querySelector('.task-status');

elemCheck.addEventListener('change', (event) => {
  console.log(event.target.checked);
});
