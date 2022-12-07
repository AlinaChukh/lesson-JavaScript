const elemBtn = document.querySelectorAll('.pagination__page');

const handleClick = (event) => {
  console.log(event.target.dataset.pageNumber);
};

elemBtn.forEach((el) => el.addEventListener('click', handleClick));
