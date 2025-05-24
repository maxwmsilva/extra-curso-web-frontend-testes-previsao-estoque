/*Você está desenvolvendo um sistema de previsão de estoque para uma loja que vende diferentes tipos de produtos. O objetivo do sistema é prever quando um produto ficará fora de estoque e sugerir uma quantidade adequada para reabastecimento.

Requisitos Funcionais:
Produtos:
Cada produto é representado por um objeto contendo nome, preço, quantidade atual em estoque, e uma taxa de venda diária (número de unidades vendidas por dia). Deve haver funções para atualizar o estoque e calcular quanto tempo resta até o produto ficar fora de estoque com base na taxa de venda.

Loja:
A loja é um array de produtos. Deve haver uma função para verificar qual produto está mais próximo de ficar sem estoque. Deve haver uma função para sugerir uma quantidade de reabastecimento com base no histórico de vendas (simulado).

Simulação de Histórico de Vendas:
Deve ser criada uma função que simula 30 dias de vendas para cada produto, usando uma variável de taxa de vendas diárias. O estoque de cada produto deve ser atualizado diariamente.

Teste com Jest:

Testes unitários devem ser criados para garantir que as funções do sistema funcionem corretamente.
Instruções*/

// const { somar, subtrair, multiplicar, dividir, ehPar } = require('./index.js');


function criarProduto() {
  return [
    { nome: 'Medidor de energia', preco: 1199.99, estoque: 1000, vendaDiaria: 10 },
    { nome: 'Medidor de temperatura e umidade', preco: 299.99, estoque: 500, vendaDiaria: 3 },
    { nome: 'Medidor de água', preco: 499.99, estoque: 600, vendaDiaria: 7 },
    { nome: 'Medidor de pressão', preco: 399.99, estoque: 800, vendaDiaria: 5 },
    { nome: 'Medidor de pH', preco: 199.99, estoque: 200, vendaDiaria: 2 },
    { nome: 'Medidor de vazão', preco: 899.99, estoque: 300, vendaDiaria: 4 },
    { nome: 'Medidor de nível', preco: 699.99, estoque: 400, vendaDiaria: 6 },
  ];
}

const produtos = criarProduto();
console.log(produtos);

function venderDia(produtos) {
  produtos.forEach(produto => {
    if (produto.estoque > 0) {
      produto.estoque -= produto.vendaDiaria;
      console.log(`Vendido ${produto.vendaDiaria} unidade(s) de ${produto.nome}. Estoque restante: ${produto.estoque}`);
    } else {
      console.log(`O produto ${produto.nome} está fora de estoque.`);
    }
  });

  return produtos;
}

venderDia(produtos);
console.log(produtos);


// Função para adicionar um produto à loja
function adicionarProdutoNaLoja() {
  
}

// Função para verificar qual produto está mais próximo de esgotar o estoque
function produtoMaisProximoDeEsgotar() {

}

// Função para sugerir uma quantidade de reabastecimento com base no histórico de vendas
function sugerirReabastecimento() {
}

// Função para simular vendas por 30 dias
function simularVendasPor30Dias() {

}

// Função para simular as vendas para todos os produtos da loja
function simularVendasNaLoja() {

}

module.exports = {
  criarProduto,
  venderDia,
  diasAteEstoqueZerado,
  adicionarProdutoNaLoja,
  produtoMaisProximoDeEsgotar,
  sugerirReabastecimento,
  simularVendasNaLoja,
};
