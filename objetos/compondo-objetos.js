const cliente = {
    nome: 'Guilherme',
    idade: 30,
    cpf: '12345678909',
    email: 'guilherme@email.com',
    fones:['44999998888', '44988887777']
}

cliente.dependentes = [{
    nome: 'Katara dog',
    parentesco: 'Animal de Estimação',
    dataNasc: '07/10/2020'
}]

console.log(cliente)

cliente.dependentes.push ( {
    nome: 'Dumbledore dog',
    parentesco: 'Animal de Estimação',
    dataNasc: '07/05/2021'
} )

console.log(cliente)