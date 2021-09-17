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
      }],
    saldo:100,
    depositar:function(valor){
        this.saldo += valor
    }
  }
  
  function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes('dependentes')){
        console.log(`${obj.nome}, deseja um seguro de vida?`)
    }
  }

  console.log(Object.values(cliente))
  console.log(Object.entries(cliente))
  oferecerSeguro(cliente)