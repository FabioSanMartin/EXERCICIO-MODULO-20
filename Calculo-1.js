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
 