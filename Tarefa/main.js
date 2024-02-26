const form = document.getElementById('formulario')

const valor1 = document.getElementById('valor1')
const valor2 = document.getElementById('valor2')

function compararValor(v1, v2) {
    if(v1 < v2) {
        return true
    }else {
        return false
    }
}


form.addEventListener('submit', function(e) {

    //cancela o recarregamento da pagina
    e.preventDefault();

    const mensagemSucesso = `O Valor 1: ${valor1.value} é menor que o Valor 2: ${valor2.value} formulario valido`
    const mensagemErro = `O Valor 1: ${valor1.value} é maior que o Valor 2: ${valor2.value} formulario invalido`
    const comparacao = compararValor(valor1.value, valor2.value)
    const texto = document.getElementById('aviso')

    texto.classList.remove('sucesso')
    texto.classList.remove('erro')

    if(comparacao) {
        texto.classList.add('sucesso')
        texto.innerHTML = mensagemSucesso
        valor1.value = ''
        valor2.value = ''
    }else {
        texto.classList.add('erro')
        texto.innerHTML = mensagemErro
        valor1.value = ''
        valor2.value = ''
    }
})


console.log(teste)