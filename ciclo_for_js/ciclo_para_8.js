/*Escribe una funcion que calcula la media aritmetica (promedio) de los numeros en un array*/ 

function calcularPromedio(numeros) {
  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  let promedio = suma / numeros.length;
  return promedio;
}

let lista = [4, 8, 6, 10, 2];
let resultado = calcularPromedio(lista);

console.log("El promedio es: " + resultado);
