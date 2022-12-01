export function makeCounter() {
  let counter = 0;
  return function () {
    return counter++;
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();
console.log(counter1()); //0
console.log(counter1()); //1
console.log(counter2()); //0
console.log(counter1()); //2
console.log(counter2()); //1

const array = ['aaa', 'bbb', 'ccc', 'ddd'];

const returnArray = (arr) => {
  let sum = array.indexOf(arr);
  if (sum === array.length - 1) {
    console.log(array[0]);
  }
  console.log(`'${array[sum + 1]}'`);
};

const arr = 'aaa';
returnArray(arr);
