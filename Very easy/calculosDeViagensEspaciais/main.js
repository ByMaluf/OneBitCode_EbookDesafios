function calcEspacial(number) {
  let arrayString = Array.from(number.toString())
  let arrayNumber = arrayString.map((item) => Math.pow(+item, 2))
  let numeroPotencializado = +arrayNumber.join('')
  return numeroPotencializado
}

console.log(calcEspacial(3514))


function calcEspacialOne(number) {
  let arrayString = number.toString();
  let numeroPotencializado = [];
  for (let i = 0; i < arrayString.length; i++) {
    let element = Math.pow(+arrayString[i], 2);
    numeroPotencializado.push(element)
  }
  return +numeroPotencializado.join('')
}

console.log(calcEspacialOne(3514))
