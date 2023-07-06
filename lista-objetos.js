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

cliente.enderecos.push({
    rua: "R. Tiradentes",
    numero: 16,
    casa: false,
})

console.log(cliente.enderecos)


const listaCasas = cliente.enderecos.filter((endereco) => endereco.casa === true);

console.log(listaCasas);