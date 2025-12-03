// Algoritmo para contar ocurrencias de 'a' en un texto
let texto = "Camilo esta estudiando en el sena una tecnologia de analisis de desarrollo de software";
let contador = 0;

for (let i = 0; i < texto.length; i++) {
  if (texto[i] === 'a' || texto[i] === 'A') {
    contador++;
  }
}

console.log("El número de 'a' en el texto es:", contador);

/* let texto = "Camilo esta estudiando en el sena una tecnologia de analisis de desarrollo de software";
let contador = texto.toLowerCase().split('a').length - 1;

console.log("El número de 'a' en el texto es:", contador); */