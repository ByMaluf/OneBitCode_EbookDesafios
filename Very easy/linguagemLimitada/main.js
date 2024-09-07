function limitedLanguage(array) {
  let arrayInvertido = new Array();  // Cria um novo array com o tamanho apropriado

  for (let i = 0; i < array.length; i++) {
    arrayInvertido[array.length - 1 - i] = array[i];  // Atribui o valor na posição invertida
  }

  return arrayInvertido;  // Retorna o array invertido
}

console.log(limitedLanguage([0, 9, 6, 8, 9, 1, 5, 7]));
