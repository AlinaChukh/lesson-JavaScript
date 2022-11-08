import { getMinSquareNumbers} from './getMinSquareNumbers.js';

it('should get an empty array', () => {
    const result = getMinSquareNumbers([]);
  expect(result).toEqual(null);
}); 

it('should get null', () => {
    const result = getMinSquareNumbers('1, 2, 3, 4, 5');
  expect(result).toEqual(null);
}); 

it('should get the square of a number', () => {
    const result = getMinSquareNumbers([-777, 3, -2, 6, 45, -20]);
  expect(result).toEqual(4);
}); 