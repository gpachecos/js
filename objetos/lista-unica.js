const clientes = [
    {
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
    }, 
    {
        nome: 'Barbara',
        idade: 25,
        cpf: '12345678999',
        email: 'barbara@email.com',
        fones: [ '44999998888', '44988887777' ],
        dependentes: [{
            nome: 'Phoebe cat',
            parentesco: 'Animal de Estimação',
            dataNasc: '07/08/2019'
          }],
    },   
]

// const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]
// console.log(listaDependentes)

// function listaDependentes(obj){
//     const chave = Object.keys(obj);
//     if ( chave.includes('dependentes') ){
//       const arrayDep = [1,2,3]
//       // arrayDep.push( obj.dependentes.map( lista => {return [...obj.dependentes]} ) )
//       console.log(arrayDep)
//     }else{
//       console.log('Deu errado')
//     }
    
// }

//  listaDependentes(clientes)

console.log( Object.values(clientes) )