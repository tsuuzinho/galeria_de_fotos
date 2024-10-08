$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const endereçoDaNovaImagem = $('#endereço-imagem-nova').val();
        const novoItem = $('<li style="display: none"> </li>');
        $(`<img src="${endereçoDaNovaImagem}" />`).appendTo(novoItem);
        $(`<img src="${endereçoDaNovaImagem}" />`).appendTo(novoItem);
        $(`<div class="overlay-imagem-link">
            <a href="${endereçoDaNovaImagem}" title="Ver imagem em tamanho real" target="_blank"> 
          Ver imagem em tamanho real
            </a>
            </div>`
        ).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn()
        $('#endereço-imagem-nova').val('')
    })
})