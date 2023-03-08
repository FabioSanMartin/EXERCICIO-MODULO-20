const { arr, numeros, valorMaximo, valorMinimo } = require('./Calculo-2')

describe(' Validar funções e valores maior e menor', () => {
    it('Deve retornar o valor máximo', () => {
        expect(valorMaximo).toBe(1080.8)
    });

    it('Deve retornar o valor mínimo', () => {
        expect(valorMinimo).toBe(15.4)
    });
});