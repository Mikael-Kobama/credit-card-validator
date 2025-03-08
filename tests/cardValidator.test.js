// tests/cardValidator.test.js

const { validarCartao } = require('../src/utils/cardValidator');

test('valida cartão com número correto (Visa)', () => {
  const resultado = validarCartao('4111111111111111');
  expect(resultado.valido).toBe(true);  // Espera que o cartão seja válido
  expect(resultado.bandeira).toBe('Visa');  // Espera a bandeira Visa
});

test('valida cartão com número incorreto', () => {
  const resultado = validarCartao('123');
  expect(resultado.valido).toBe(false);  // Espera que o cartão seja inválido
  expect(resultado.bandeira).toBe('Desconhecida');  // Espera bandeira desconhecida
});

test('valida cartão com número correto (Mastercard)', () => {
  const resultado = validarCartao('5105105105105100');
  expect(resultado.valido).toBe(true);  // Espera que o cartão seja válido
  expect(resultado.bandeira).toBe('Mastercard');  // Espera a bandeira Mastercard
});
