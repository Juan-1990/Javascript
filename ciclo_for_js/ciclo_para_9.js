// Desarrolla una función que genere y devuelva los primeros N términos de la serie de Fibonacci

function generarFibonacci(n) {
  let fibonacci = [];
  
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      fibonacci.push(0);
    } else if (i === 1) {
      fibonacci.push(1);
    } else {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
  }
  
  return fibonacci;
}

// Ejemplo de uso
let n = 10;
let serie = generarFibonacci(n);

console.log(`Los primeros ${n} términos de Fibonacci son:`);
console.log(serie);