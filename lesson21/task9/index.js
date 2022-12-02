export const finishList = () => {
  const listElem = document.querySelector('ul'); //нашла

  const elemList = document.createElement('li'); //создала
  elemList.textContent = '8'; //добавила текст
  listElem.append(elemList); //вставила елемент в конец

  const elemList1 = document.createElement('li'); //создала
  elemList1.textContent = '1'; //добавила текст
  listElem.prepend(elemList1); //вставила елемент вначало

  const listElemClass = document.querySelector('.special');
  const elemList2 = document.createElement('li'); //создала
  elemList2.textContent = '4'; //добавила текст
  listElemClass.before(elemList2); //вставила елемент до

  const elemList3 = document.createElement('li'); //создала
  elemList3.textContent = '6'; //добавила текст
  listElemClass.after(elemList3); //вставила елемент после
};

finishList();
