$(document).ready(function() {
    $('#carousel').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 0000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculo: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form) {
            
        },
        invalidHandler: function(evento, validador) {
            let incorretos = validador.numberOfInvalids();
            if (incorretos) {
                alert(`Existem ${incorretos} campos incorretos`)
            }
        }
    })

    $('.veiculos button').click(function() {

        const destino = $('#contato');
        const marca = $(this).parent().find('h3').text();

        $('#veiculo').val(marca);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})