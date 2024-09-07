//Desafio da academia
function arithmeticMean(...numbers) {
  const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return total / numbers.length;
}

function arithmeticMeanOne(...numbers) {
  let accumulator = 0;
  numbers.forEach((number) => {
    accumulator += number
  })
  return accumulator / numbers.length
}

console.log(arithmeticMean(10, 9, 6, 8, 9, 1, 5, 7));
console.log(arithmeticMeanOne(2, 5, 7, 1, -2));
