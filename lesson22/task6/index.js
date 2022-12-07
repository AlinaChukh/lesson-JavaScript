const elemBtn = document.querySelector('.single-use-btn');

const clickBtnElem = () => {
  console.log('clicked');
  elemBtn.removeEventListener('click', clickBtnElem);
};

elemBtn.addEventListener('click', clickBtnElem);
