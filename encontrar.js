const clientes = require("./exercicios.json");

function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes 
    (valor));
}

const encontrado = encontrar(clientes, "nome", "Kirby");

const encontrado2 = encontrar(clientes, "telefone", "5193301028");

console.log(encontrado2);