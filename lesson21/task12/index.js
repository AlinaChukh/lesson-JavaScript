export const squaredNumbers = () => {
  const elemNumber = document.querySelectorAll('.number');
  const numberZero = elemNumber[0].dataset.number;
  const numberOne = elemNumber[1].dataset.number;
  const numberTwo = elemNumber[2].dataset.number;

  elemNumber[0].dataset.squaredNumber = numberZero * numberZero;
  elemNumber[1].dataset.squaredNumber = numberOne * numberOne;
  elemNumber[2].dataset.squaredNumber = numberTwo * numberTwo;
};

//squaredNumbers();
