document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sorteador').addEventListener('submit', function(e) {
        e.preventDefault();

        let numeroMaximo = document.getElementById('numeroMax').value; //pegar o valor do campo numeroMax
        numeroMaximo = parseInt(numeroMaximo);
        
        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);
        document.getElementById('resultadoValor').innerText = numeroAleatorio;

        document.querySelector('.resultado').style.display = 'block';
    })
})