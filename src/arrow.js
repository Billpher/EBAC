const minhaFuncao = () => 'Ola';

const retornaUmCarro = () => ({
    modelo: 'Ka',
    Fabricante: 'Ford'
})

const carro = {
    velocidadeAtual: 40,
    acelerar: function() {
        this.velocidadeAtual += 10;
    },
    frear: () => {
        this.velocidadeAtual -= 10;
    }
}

console.log(minhaFuncao());