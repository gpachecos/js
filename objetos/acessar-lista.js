const cliente = {
    nome: 'Guilherme',
    idade: 30,
    cpf: '12345678909',
    email: 'guilherme@email.com'
}

const chaves = ['nome', 'idade', 'cpf', 'email']
// console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))

console.log(cliente["conta"])