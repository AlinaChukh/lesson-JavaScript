export const manageClasses = () => {
  const elemClassOne = document.querySelector('.one');
  const elemClassTwo = document.querySelector('.two');
  const elemClassThree = document.querySelector('.three');
  const elemClassFour = document.querySelector('.four');

  elemClassOne.classList.add('selected');
  elemClassTwo.classList.remove('selected');
  elemClassThree.classList.toggle('three_done');
  if (elemClassFour.outerHTML.includes('some-class')) {
    elemClassFour.classList.add('another-class');
  }
};

// manageClasses();
