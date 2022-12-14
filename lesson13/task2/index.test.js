import getSum, { getSquaredArray, getOddNumbers } from './calculator.js';

it('should get is number in squared', () => {
    const result = getSquaredArray([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
}); 

it('should keeps odd numbers only', () => {
    const result = getOddNumbers([1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 3, 5]);
}); 

it('should get numbers sum', () => {
    const result = getSum(5, 2);
  expect(result).toEqual(7);
}); 






