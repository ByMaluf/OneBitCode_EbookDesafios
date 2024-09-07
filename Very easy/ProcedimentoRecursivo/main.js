const recursivo = (number) => {
  if (number === 0) {
    return ''; // Caso base: Retornar uma string vazia
  }
  // Chamada recursiva e construção da string
  return recursivo(number - 1) + (number > 1 ? '-' : '') + 'chunk';
}

console.log(recursivo(4)); // Esperado: "chunk-chunk-chunk-chunk"
