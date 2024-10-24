//MAP
let meuMap = new Map();

//estrutura
meuMap.set('nome', 'Gian');
meuMap.set('stack', 'HTML');
//valor
meuMap.get('nome');
//quantidade de informaçoes
meuMap.size
//se contem uma chave
meuMap.has('nome')
//limpar map
meuMap.clear()

//trazer as chaves do map
for (let chave of meuMap.keys()) {
    console.log(chave);
}

//trazer valores
for (let valor of meuMap.values()) {
    console.log(valor);
}

//trazer entradas
for (let entradas of meuMap.entries()) {
    console.log(entradas);
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

//remover item do map
meuMap.delete('stack')



//SET
const cpf = new Set();

//estrutura
cpf.add('48191007851');
cpf.add('12332189721');

//informaçoes do set
cpf.forEach((valor) => {
    console.log(valor);
})

//converter array para set
const array = ['luis', 'luis', 'lucas', 'maria']
const arraySet = new Set([...array]);

//de set para array
const semItensDuplicados = [...arraySet];
