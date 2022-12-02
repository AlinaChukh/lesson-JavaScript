'use strict';

export const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = (tasksList) => {
  const tasksListElem = document.querySelector('.list'); // где создаем, внутри .list новый список
  tasksListElem.innerHTML = '';

  const listItemsElem = tasksList
    .sort((a, b) => a.done - b.done) //сортировка по выполненым задачам
    .map(({ text, done }) => {
      const newListElem = document.createElement('li'); //какой элемент создаем
      newListElem.classList.add('list__item'); // добавляем класс на элемент
      if (done === true) {
        //если чекбокс выполнен/////
        newListElem.classList.add('list__item_done'); //то на весь елемент ставится новый классc
      }
      const newCheckboxElem = document.createElement('input'); // создаем чекбоксы
      newCheckboxElem.setAttribute('type', 'checkbox'); // устанавливаем атрибут для чекбоксов
      newCheckboxElem.checked = done; //установка атрибута в правильное значение
      newCheckboxElem.classList.add('list__item-checkbox'); //добавляем класс чекбоксам
      newListElem.append(newCheckboxElem, text); //вставляем нужный текст
      return newListElem;
    });

  tasksListElem.append(...listItemsElem);
};

renderTasks(tasks);
