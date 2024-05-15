const prompt = require('readline-sync');

const carrinho = [
{ produto: "Feijao", preco: 26, quantidade: 3},
{ produto: "Arroz", preco: 20, quantidade: 5},
{ produto: "Leite 1L", preco: 60, quantidade: 2},
{ produto: "Carne", preco: 50, quantidade: 1},
{ produto: "Cerveja", preco: 10, quantidade: 12},
{ produto: "Ovo", preco: 15, quantidade: 1},
{ produto: "Pao", preco: 5, quantidade: 5},
{ produto: "Cafe", preco: 30, quantidade: 2},
{ produto: "Acucar", preco: 10, quantidade: 1},
{ produto: "Sal", preco: 2, quantidade: 1},
{ produto: "Macarrao", preco: 15, quantidade: 4},
{ produto: "Molho de Tomate", preco: 8, quantidade: 2},
{ produto: "Queijo", preco: 12, quantidade: 1},
{ produto: "Sabonete", preco: 5, quantidade: 2},
{ produto: "Shampoo", preco: 15, quantidade: 1},
{ produto: "Condicionador", preco: 18, quantidade: 1},
{ produto: "Escova de Dentes", preco: 8, quantidade: 1},
{ produto: "Pasta de Dentes", preco: 10, quantidade: 1},
{ produto: "Desodorante", preco: 12, quantidade: 1}

];

const carrinhoComTotal= carrinho.filter((itemDoCarrinho) => itemDoCarrinho.preco > 10);

console.log(carrinhoComTotal);
