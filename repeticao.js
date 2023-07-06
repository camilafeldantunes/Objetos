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

for (let chave in cliente){
let tipo = typeof cliente[chave];
if (tipo !== 'object' && tipo !== 'function'){
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`); 
}
}
