export const getSection = (num) => {
  const elemSpan = document.querySelector(`span[data-number='${num}']`);

  return elemSpan.parentElement.dataset.section;
};

//getSection(3);
