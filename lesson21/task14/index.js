export const getTitle = () => {
  const text = document.querySelector('.title');
  console.log(text.textContent);
};

//getTitle();

export const getDescription = () => {
  const text = document.querySelector('.about');
  console.log(text.innerText);
};

//getDescription();

export const getPlans = () => {
  const text = document.querySelector('.plans');
  console.log(text.innerHTML);
};

//getPlans();

export const getGoal = () => {
  const text = document.querySelector('.goal');
  console.log(text.outerHTML);
};

//getGoal();
