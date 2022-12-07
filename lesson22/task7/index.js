const elementsBtn = document.querySelectorAll('.btn');

elementsBtn.forEach((el) =>
  el.addEventListener('click', () => {
    console.log(el.textContent);
  })
);
