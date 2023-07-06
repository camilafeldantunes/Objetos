const cliente = {
    nome: "João",
    idade: 24,
    email: "camifeldantunes@gmail.com",
    telefone: ["123456789", "987654321"],
};

cliente.enderecos = [
    {
    rua: "R. Coronel Gervásio",
    numero:397,
    casa: true,

},
];


function ligaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
}

console.log(encomenda)
