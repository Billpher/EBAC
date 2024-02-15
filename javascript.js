//Criar varialvel
let nome = 'Lucas'
console.log(nome)

//Tipos de variavel
let primeiroNome = 'Lucas' //string
let Feriado = false //booleano
let idade = 32 //number
let altura = 1.73 //number
let tecnologiasWeb = ['HTML', 'CSS', 'Javascript'] //array

//Verificar o Tipo de variavel
typeof primeiroNome

//Ver quantidade de caracteres
primeiroNome.length

//Cortar a variavel
primeiroNome.slice(0,2)

//Procurar uma letra na Variavel
primeiroNome.search('letra')

//Diferenciar numero inteiro de fracionado
Number.isInteger(altura)

//mudar string para number (tem que ser um numero)
parseFloat(primeiroNome)
parseInt(primeiroNome)

//pegar item em uma posiçao do array
tecnologiasWeb[1]

//Adiconar item no array
tecnologiasWeb.push(15)

//laços de repetiçao

let listaNomes = ['Lucas', 'Maria', 'Jose']

//   onde começa,    ate a onde vai,  tipo de implementaçao
for (let i = 0; i < listaNomes.length; i++) {
    console.log('O nome é ' + listaNomes[i])
}

for (listaNome in listaNomes) {
    console.log('o nome é ' + listaNomes[listaNome])
}

let saudacoes = 0

while (saudacoes < listaNomes.length) {
    console.log('o nome é ' + listaNomes[saudacoes]);
    saudacoes++
}

do {
    console.log('o nome é ' + listaNomes[saudacoes]);
    saudacoes++
} while (saudacoes < listaNomes.length);