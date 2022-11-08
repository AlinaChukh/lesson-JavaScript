import { calc} from './calculator.js';

it('should get the correct addition solution', () => {
    const result = calc('2 + 2');
  expect(result).toEqual('2 + 2 = 4');
}); 

it('should get the correct subtraction solution', () => {
    const result = calc('2 - 2');
  expect(result).toEqual('2 - 2 = 0');
}); 

it('should get the correct multiplication solution', () => {
    const result = calc('2 * 2');
  expect(result).toEqual('2 * 2 = 4');
}); 

it('should get the correct division solution', () => {
    const result = calc('2 / 2');
  expect(result).toEqual('2 / 2 = 1');
}); 

it('should get not string', () => {
    const result = calc([2, 3, 4, 5]);
  expect(result).toEqual(null);
}); 
