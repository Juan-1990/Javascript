//Implementa una función que calcule la suma de los cuadrados de los primeros N números naturales.

function sumaCuadrados(n) {
  let suma = 0;
  
  for (let i = 1; i <= n; i++) {
    suma += i * i;
  }
  
  return suma;
}

let n = 5;
let resultado = sumaCuadrados(n);

console.log(`La suma de los cuadrados de los primeros ${n} números es:`, resultado);