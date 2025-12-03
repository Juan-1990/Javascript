/*Escribe una funcion que calcula la media aritmetica (promedio) de los numeros en un array*/ 

function calcularPromedio(array) {
  let suma = 0;
  
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  
  let promedio = suma / array.length;
  return promedio;
}

let numeros = [10, 20, 30, 40, 50];
let resultado = calcularPromedio(numeros);

console.log("Números:", numeros);
console.log("Promedio:", resultado);