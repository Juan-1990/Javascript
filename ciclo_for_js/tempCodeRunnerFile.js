let numeros = [4,5,2,3,8,9,10,6];
function media(array){
    let acumulador = 0
    for(let i=0; i<=numeros.length;i++){
        acumulador += numeros[i];
    } 
    let promedio = acumulador/numeros.length;
}