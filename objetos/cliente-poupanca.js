function Cliente (nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function ClientePoupanca(nome,cpf,email,saldo,saldoPoup)
{
    Cliente.call(this,nome,cpf,email,saldo)
    this.depositarPoup = function(valor){
        this.saldoPoup += valor
    }
    this.saldoPoup = saldoPoup
}

const guilherme = new ClientePoupanca('Guilherme','12345678909','guilherme@email.com',100,1000)

console.log(guilherme)

// ClientePoupanca.prototype.depositarPoup = function(valor){
//     this.saldoPoup += valor
// }

guilherme.depositarPoup(500)

console.log(guilherme)