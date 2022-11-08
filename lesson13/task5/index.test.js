import { reverseArray, withdraw, getAdults } from './index.js';

it('should get a reverse array', () => {
  const result = reverseArray([1, 2, 3, 4, 5]);
  expect(result).toEqual([5, 4, 3, 2, 1]);
});

it('should get not array', () => {
  const result = reverseArray('2, 3, 4, 5');
  expect(result).toEqual(null);
});

it('should get empty array', () => {
  const result = reverseArray([]);
  expect(result).toEqual(null);
});

it('should get a balance', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});

it('should get the balance is smaller', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 89);
  expect(result).toEqual(-1);
});

it('should get the balance is not array', () => {
  const result = withdraw(['Ann', 'John', 'User'], '1400, 87, -6', 'John', 89);
  expect(result).toEqual(null);
});

it('should get usser age 18+', () => {
  const result = getAdults({ John: 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ John: 19, Bob: 18 });
});

it('should get not object', () => {
  const result = getAdults(" 'John Doe', 19, Tom, 17, Bob, 18 ");
  expect(result).toEqual({});
});

it('should get not object', () => {
  const result = getAdults(0);
  expect(result).toEqual({});
});
