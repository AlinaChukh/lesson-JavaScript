const elemBtn = document.querySelector('.single-use-btn');

elemBtn.addEventListener(
  'click',
  (clickBtnElem = () => {
    console.log('clicked');
    elemBtn.removeEventListener('click', clickBtnElem);
  })
);
