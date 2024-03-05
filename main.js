$(document).ready(function() {
    //selecionar pelo javascript
    //document.querySelector('header button');

    //selecionar pelo jquery
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();

        const enderecoDaImagem = $('#imagemNova').val();

        const novoItem = $('<li style="display: none"></li>');

        $(`
            <img src='${enderecoDaImagem}' />
        `).appendTo(novoItem);

        $(`
            <div class='overlay-img-link'>
                <a href'${enderecoDaImagem}' target='_blank' title'Imagem em tamanho real'> Ver imagem em tamanho real </a>
            </div>
        `).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(3000);

        $('#imagemNova').val(' ');

    })
})