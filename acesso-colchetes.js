// Acessando dados com colchetes

const cliente = {
    nome: "Camila",
    idade: 17,
    CPF: "158153148115",
    email: "camilafeldantunes@gmail.com",
};

console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos`);

console.log(`Os primeiros dígitos do CPF dessa pessoa são: ${cliente.CPF.substring(0,3)}`);