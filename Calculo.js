//Calcular o MDC entre dois numeros

function mdc(a =24, b = 48) {
    while (b !== 0) {
      let temp = a;
      a = b;
      b = temp % b;
    }
    return a;
  }
  console.log(mdc(36, 48));
  

//Indice do maior e do menor


var arr = ["200", "15.5", "1080.8", "450", "89", "75.1", "940", "15.4", "300", "654"];
var numeros = arr.map(parseFloat);
var valorMaximo = Math.max(...arr)
var valorMinimo = Math.min(...arr)
console.log("valor máximo:", valorMaximo);
console.log("valor mínimo:", valorMinimo);

//Soma de todos os multiplos

function somaTotal() {
    let soma = 0;
    for (let i = 1; i < 1000; i++) {
      if (i % 5 === 0 || i % 7 === 0) {
        soma += i;
      }
    }
    return soma;
  }
  
  const resultadoSoma = somaTotal();
  console.log(` ${resultadoSoma}.`);