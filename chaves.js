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

const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")){
    console.error("Erro. É necessário ter um endereço cadastrado");
}
