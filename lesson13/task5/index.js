export const reverseArray = (numbers) => {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return null;
  }
  return numbers.slice().reverse();
};

export const withdraw = (clients, balances, client, amount) => {
  if (!Array.isArray(balances)) {
    return null;
  }
  const clientIndex = clients.indexOf(client);
  return balances[clientIndex] < amount ? -1 : balances[clientIndex] - amount;
};

export const getAdults = (obj) => {
  let empleNewObj = {};

  for (let key in obj) {
    if (obj[key] >= 18) {
      empleNewObj[key] = obj[key];
    }
  }
  return empleNewObj;
};
