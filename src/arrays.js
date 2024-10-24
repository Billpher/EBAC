const redesSociais = ['facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho ${redesSociais[i]}`);
}

redesSociais.forEach(function(nomeDaRede, indice) {
    console.log(`#${indice}, Eu tenho ${nomeDaRede}`)
})

const alunos = ['Gustavo', 'Julia', 'Paula'];

const alunos2 = alunos.map(function(nomeDosAlunos) {
    nomeDosAlunos = {
        nome: nomeDosAlunos,
        curso: 'Front-End'
    }

    return nomeDosAlunos;
})

const paula = alunos2.find(function(item) {
    return item.nome = 'Paula';
})

const indiceDaPaula = alunos2.findIndex(function(item) {
    return item.nome = 'Paula';
})

console.log(paula);
console.log(indiceDaPaula);
console.log(alunos2);


const numeros = [1, 2, 3, 4, 5];
const dobroNumeros = numeros.map(function(numerosAtuais) {
    return numerosAtuais * 2 ;
})

console.log(dobroNumeros);