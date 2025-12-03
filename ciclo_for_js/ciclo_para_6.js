//Escribe una función que reciba un array de números y devuelva un nuevo array que contenga solo los números pares.
function filtrarPares(array) {
  let pares = [];
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      pares.push(array[i]);
    }
  }
  
  return pares;
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = filtrarPares(numeros);

console.log("Array original:", numeros);
console.log("Solo pares:", numerosPares);