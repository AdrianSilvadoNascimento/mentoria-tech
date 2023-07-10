// class Pessoa {
//     constructor(nome, idade) {
//         this.nome = nome
//         this.idade = idade

//         this.initiate()
//     }

//     static initiate() {
//         console.log(this.nome)
//         console.log(this.idade)
//     }

//     sorrir() {
//         console.log('Está rindo')
//     }
// }

// const pessoa1 = new Pessoa('ADRIAN', 21)
// pessoa1.sorrir()

// class Animal {
//     constructor() {
//         this.name = ''
//         this.raca = ''
//     }

//     mostrarNomeAnimal() {
//         console.log(this.name)
//     }
// }

// const cachorro = new Animal()
// cachorro.name = 'Rufus'
// cachorro.mostrarNomeAnimal()

// class Cachorro extends Animal {
//     mostrarRaca() {
//         console.log(this.raca)
//     }
// }

// const cachorro = new Cachorro()
// cachorro.name = 'Rufus'
// cachorro.raca = 'Labrador'
// cachorro.mostrarNomeAnimal()
// cachorro.mostrarRaca()


class Usuario {
    constructor(nome, idade, endereco, cpf,  telefone) {
        this.name = nome
        this.idade = idade
        this.endereco = endereco
        this.cpf = cpf
        this.telefone = telefone
    }
}

class Banco {
    constructor(Usuario) {
        this.usuario = Usuario
        console.log(Usuario)
        this.saldo = 0
    }

    criarContaBancaria(nome, cpf, senha) {
        console.log('Criou conta com sucesso')
    }

    sacarDinheiro(quantia) {
        console.log('Retirou:', quantia)
    }
    
    depositarDinheiro(quantia) {
        console.log('Depositou:', quantia)
    }
} 

const usuario1 = new Usuario('adrian', 21, 'BKABKABKA', '12345678912', '123456789')

const contaBancaria = new Banco(usuario1)

contaBancaria.criarContaBancaria(usuario1.nome, usuario1.cpf, '123456')









































