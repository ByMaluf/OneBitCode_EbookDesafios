

function letterMax(frase) {
  const arrayString = Array.from(frase);
  const arrayCharCode = arrayString.map((letter) => letter.charCodeAt())
  const charCodeMax = Math.max(...arrayCharCode)
  const stringMax = String.fromCharCode(charCodeMax)
  return stringMax
}

function letterMaxOne(frase) {
  let codeMax = 0;
  for (let i = 0; i < frase.length; i++) {
    let currentCode = frase[i].charCodeAt()
    if (currentCode > codeMax) {
      codeMax = currentCode
    }
  }
  return String.fromCharCode(codeMax);
}

console.log(letterMaxOne('Lorem ipsum dolore sec avanti'));

// console.log(letterMax('Lorem ipsum dolore sec avanti'));
// console.log(letterMax('Hello'));
// console.log(letterMax('May the force be with you'));
// console.log(letterMax('Its over nine thousand'));

