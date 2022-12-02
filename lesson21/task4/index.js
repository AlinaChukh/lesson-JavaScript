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

export const getCoal = () => {
  const coalElem = document.querySelector('.goal');
  return coalElem.outerHTML;
};

getTitle();
getDescription();
getPlans();
getCoal();
