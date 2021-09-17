const cliente = {
    nome: 'Guilherme',
    idade: 30,
    cpf: '12345678909',
    email: 'guilherme@email.com',
    fones: [ '44999998888', '44988887777' ],
    dependentes: [
      {
        nome: 'Katara dog',
        parentesco: 'Animal de Estimação',
        dataNasc: '07/10/2020'
      },
      {
        nome: 'Dumbledore dog',
        parentesco: 'Animal de Estimação',
        dataNasc: '07/05/2021'
      }
    ],
    saldo:100,
    depositar:function(valor){
        this.saldo += valor
    }
  }

  console.log(cliente.saldo)
  cliente.depositar(80)
  console.log(cliente.saldo)

//   const dogMaisNovo = cliente.dependentes.filter( dog => dog.dataNasc==='07/05/2021')

//   console.log(dogMaisNovo)
//   console.log(dogMaisNovo[0].nome)