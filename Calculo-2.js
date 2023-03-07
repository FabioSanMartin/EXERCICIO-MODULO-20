//Indice do maior e do menor


var arr = ["200", "15.5", "1080.8", "450", "89", "75.1", "940", "15.4", "300", "654"];
var numeros = arr.map(parseFloat);
var valorMaximo = Math.max(...arr)
var valorMinimo = Math.min(...arr)
console.log("valor máximo:", valorMaximo);
console.log("valor mínimo:", valorMinimo);
