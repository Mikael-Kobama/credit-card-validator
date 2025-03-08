// src/index.js

const { validarCartao } = require('./utils/cardValidator');

// Função de exemplo para testar a validação de um número de cartão
const numeroCartao = '4111111111111111'; // Exemplo de número de cartão Visa

const resultado = validarCartao(numeroCartao);

console.log(`Cartão de Crédito: ${numeroCartao}`);
console.log(`Validade: ${resultado.valido ? 'Válido' : 'Inválido'}`);
console.log(`Bandeira: ${resultado.bandeira}`);
