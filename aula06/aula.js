// Objetivo: trabalhar com requisições HTTP


fetch("https://viacep.com.br/ws/01001000/json/")
.then(response => {
response.json().then((dados) => console.log(dados));

})

.catch((erro) => {
console.log(erro);

});
    