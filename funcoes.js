const cliente = {
    nome: "João",
    idade: 24,
    email: "camifeldantunes@gmail.com",
    telefone: ["123456789", "987654321"],
    saldo: 200,
    efetuaPagamento: function(valor){
        if(valor > this.saldo){
            console.log("Saldo insuficiente");
        } else{
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo é ${this.saldo}`);
        }
    }
};

cliente.efetuaPagamento(150);



