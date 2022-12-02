const clearList = () => {
  const listElem = document.querySelector('.categories');
  listElem.innerHTML = '';
  return listElem;
};

clearList();
