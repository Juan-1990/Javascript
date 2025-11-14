function fibonacci(N) {
  let a = 0;
  let b = 1;
  let serie = [];

  for (let i = 0; i < N; i++) {
    serie.push(a);
    let siguiente = a + b;  
    a = b;                  
    b = siguiente;
  }

  return serie;
}

// Ejemplo de uso:
let cantidad = 10;
let resultado = fibonacci(cantidad);

console.log("Los primeros " + cantidad + " términos de la serie Fibonacci son:");
console.log(resultado);
