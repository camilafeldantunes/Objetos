const clientes = require("./exercicios.json");

function filtrarApartamentos(clientes){
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"));
    });
}

const filtrados = filtrarApartamentos(clientes);

console.log(filtrados);