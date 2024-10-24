function somar() {
    let soma = 0;

    for(let i = 0; i< arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
};

console.log(somar(10, 20, 30));

//Rest
function somarRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)

    return soma;
}

console.log(somarRest(10, 20, 30));

//Spread

const numeros = [1,2,3,4];
console.log(...numeros);

const timesDeFutebol = ['Santos', 'Palmeiras', 'Sao Paulo'];
const timeDeVoley = ['Vasco', 'Flamengo', 'Botafogo'];

const uniao = [...timesDeFutebol, ...timeDeVoley];
console.log(uniao);

const carro1 = {
    modelo: 'Gol',
    marca: 'Vw',
    motor: 1.6
}

const carro2 = {
    ...Carro1,
    motor: 1.8
}

const {motor: motorCarro2} = carro2;
const {motor: motorCarro1} = carro1;