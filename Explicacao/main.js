const form = document.getElementById('formDeposito')
const nomeBeneficiario = document.getElementById('nome')
let formValido = false

//valida o nome se é maior que uma palavra
function validaNome(nomeCompleto) {
    const nomeComArray = nomeCompleto.split(' ');
    return nomeComArray.length >= 2;
}

//adiconar funçoes a eventos
form.addEventListener('submit', function(e) {

    //cancela o recarregamento da pagina
    e.preventDefault();

    const numeroConta = document.getElementById('conta')
    const valorDeposito = document.getElementById('deposito')
    const mensagemSucesso = `Valor de: <b>R$${valorDeposito.value}</b>  depositado para o cliente <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroConta.value}</b>`;

    formValido = validaNome(nomeBeneficiario.value)
    if (formValido) {

        //editar um elemento HTML
        const mensagem = document.querySelector('.sucesso');
        mensagem.innerHTML = mensagemSucesso;

        //alterar o css por js
        mensagem.style.display = 'block'

        //limpar os campos
        nomeBeneficiario = '';
        numeroConta = '';
        valorDeposito = '';

    } else {
        nomeBeneficiario.style.border = '1px solid red'
        document.querySelector('.nomeIncompleto').style.display = 'block'
    }
})

nomeBeneficiario.addEventListener('keyup', function(e) {
    formValido = validaNome(e.target.value)

    if (!formValido) {
        //adicionar uma classe
        nomeBeneficiario.classList.add('error');
        //nomeBeneficiario.style.border = '1px solid red'
        document.querySelector('.nomeIncompleto').style.display = 'block'
    }else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.nomeIncompleto').style.display = 'none'
    }
})