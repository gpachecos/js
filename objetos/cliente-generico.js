function Cliente (nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const guilherme = new Cliente('Guilherme','12345678909','guilherme@email.com',300)

console.log(guilherme)