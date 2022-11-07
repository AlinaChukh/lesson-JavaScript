const getMinSquareNumbers = arr => {
  if(!Array.isArray(arr) || arr.length === 0){
    return null;
  }
  return Math.min(...(arr.map(num => Math.abs(num) * Math.abs(num))));
};