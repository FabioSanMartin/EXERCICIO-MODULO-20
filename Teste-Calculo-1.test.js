const mdc = require('./Calculo-1');

describe('Validar resultados da formula', () => {
    it('calculo correto de valores', () => {
        expect(mdc(36, 48)).toBe(12)
    });

    it('resultado incorreto', () => {
        expect(mdc(24, 32)).not.toBe(6)
    });

    it('resultado correto utilizando valores negativos', () => {
        expect(mdc(-36, -48)).toBe(-12)
    });

    it('resultado correto utilizando um valor negativo', () => {
        expect(mdc(8, -24)).toBe(8)
    });
});