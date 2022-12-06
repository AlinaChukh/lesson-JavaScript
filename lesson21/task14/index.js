export const getTitle = () => {
  const text = document.querySelector('.title');
  return text.textContent;
};

//getTitle();

export const getDescription = () => {
  const text = document.querySelector('.about');
  return text.innerText;
};

//getDescription();

export const getPlans = () => {
  const text = document.querySelector('.plans');
  return text.innerHTML;
};

//getPlans();

export const getGoal = () => {
  const text = document.querySelector('.goal');
  return text.outerHTML;
};

//getGoal();
