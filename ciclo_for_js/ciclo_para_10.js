//esarrolla una función que genere el total de las tablas de multiplicar dado un numero entero.
function tablaMultiplicar(numero) {
  console.log(`Tabla de multiplicar del ${numero}:`);
  console.log("----------------------------");
  
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

// Ejemplo de uso
tablaMultiplicar(5);