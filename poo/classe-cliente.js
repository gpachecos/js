class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const guilherme = new Cliente('Guilherme','guilherme@email.com','1234578903', 100)

guilherme.exibirSaldo()

guilherme.depositar(1000)

console.log(guilherme)