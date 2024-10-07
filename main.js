const carro = {
    modelo: 'uno',
    ano: 2019,
    fabricacao: 2020,
    acelerar: function() {
        console.log('vai')
    }
}

function Carro(modelo, ano, fabricacao) {
    this.modelo = modelo;
    this.ano = ano;
    Carro.fabricacao = fabricacao;
    Carro.acelerar = function() {
        console.log('vai');
    }
}

const carroAna = new Carro('uno', 2019, 2020);
const carrojoao = new Carro('fiesta', 2020, 2024);

console.log(carroAna.modelo);
console.log(carroAna['modelo']);