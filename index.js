// Code your solutions in this file
function printBadges(array) {
  let employeeNumber = 0;
  for (i = 0; i < array.length; i++) {
    employeeNumber++;
    console.log(`Welcome ${array[i]}! You are employee #${employeeNumber}.`);

  }
  return array;
}

function tailsNeverFails() {
  let tailsCount = 0
  function coinFlip() {
    return Math.random() >= .5;
  }
  while (coinFlip()) {
    tailsCount++;
  }
  return `You got ${tailsCount} tails in a row!`;
}
