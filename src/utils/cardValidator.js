// src/utils/cardValidator.js

// Função para verificar a bandeira com base no número do cartão
const validarBandeira = (numeroCartao) => {
  if (numeroCartao.startsWith('4')) {
    return 'Visa';
  } else if (numeroCartao.startsWith('5')) {
    return 'Mastercard';
  } else if (numeroCartao.startsWith('3')) {
    return 'American Express';
  } else {
    return 'Desconhecida';
  }
};

// Função de validação do cartão de crédito
const validarCartao = (numeroCartao) => {
  const bandeira = validarBandeira(numeroCartao);

  // Lógica de validação: aqui apenas um exemplo simples (Luhn algorithm poderia ser adicionado)
  if (numeroCartao.length === 16 || numeroCartao.length === 15) {
    return { valido: true, bandeira };
  }

  return { valido: false, bandeira };
};

module.exports = { validarCartao };
