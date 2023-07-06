const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);

const clienteString = JSON.stringify(dados);

console.log(clienteString);
console.log(typeof clienteString);


const objetoCliente = JSON.parse(clienteString);

console.log(objetoCliente);
console.log(typeof objetoCliente);
