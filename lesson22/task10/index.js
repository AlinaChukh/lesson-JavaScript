const elemBtn = document.querySelectorAll('.pagination__page');

const handleClick = (event) => {
  console.log(event.target.getAttribute('data-page-number'));
};

elemBtn.forEach((el) => el.addEventListener('click', handleClick));
