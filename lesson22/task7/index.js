const elementsBtn = document.querySelectorAll('.btn');

const handleClick = (event) => {
  console.log(event.target.textContent);
};

elementsBtn.forEach((el) => el.addEventListener('click', handleClick));
