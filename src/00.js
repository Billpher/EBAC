// function Pokemon(nomePokemon, tipoPokemon) {
//     this.nomePokemon;
//     this.tipoPokemon;
// }

// const pikachu = new Pokemon('Pikachu', 'eletrico')

class Pokemon {
    #hp = 100;

    constructor(nomePokemon, tipoPokemon){
        this.nome = nomePokemon;
        this.tipo = tipoPokemon;
    }

    atacar(nomeAtaque) {
        console.log(`${this.nome} atacou com ${nomeAtaque}`);
    }

    recebeuAtaque() {
        this.#hp -= 10;
    }

    exibeHp() {
        console.log(this.#hp)
    }
}

class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu', 'Elétrico')
    }

    atacar() {
        console.log(`${this.nome} atacou com choque do trovao`);
    }
}

const pikachuDoAsh = new Pikachu()
pikachuDoAsh.recebeuAtaque();
pikachuDoAsh.atacar();
pikachuDoAsh.exibeHp();

// const pikachu = new Pokemon('Pikachu', 'eletrico');
// pikachu.atacar('choque o trovao')