export const getTitle = () => {
  const titelElem = document.querySelector('.title');
  return titelElem.textContent;
};

export const getDescription = () => {
  const descriptionElem = document.querySelector('.about');
  return descriptionElem.innerText;
};

export const getPlans = () => {
  const plansElem = document.querySelector('.plans');
  return plansElem.innerHTML;
};

export const getGoal = () => {
  const goalElem = document.querySelector('.goal');
  return goalElem.outerHTML;
};

getTitle();
getDescription();
getPlans();
getGoal();
