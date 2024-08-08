function enviarviaformulario(){
    var numeroTelefone = '5511945432020'; 
    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var estado = document.getElementById('estado').value;
    var cidadeCNPJ = document.getElementById('cid_cnpj').value;
    var idade = document.getElementById('idade').value;
    var tipoPlano = document.getElementById('tipo-plano').value
    var planoAtual = document.getElementById('plano-atual').value;
    var planoValor = document.getElementById('plano-valor').value;
    var comentario = document.getElementById('comentario').value

    var mensagemCompleta = 
    "*------------Eu vim pelo site e gostaria de fazer uma cotação grátis hoje--------------*" + "\n" +
    "*------------Esses são meus dados---------------*" + "\n" + "\n" +
    "*Nome:* " + nome + "\n" +
    "*Email:* " + email + "\n" +
    "*Telefone:* " + telefone + "\n" +
    "*Estado:* " + estado + "\n" +
    "*Cidade do CNPJ:* " + cidadeCNPJ + "\n" +
    "*Idade:* " + idade + "\n" +
    "*Tipo de Plano:* " + tipoPlano + "\n" +
    "*Plano Atual:* " + planoAtual + "\n" +
    "*Valor do Plano:* " + planoValor + "\n" +
    "*Comentário:* " + comentario;

    var mensagemCodificada = encodeURIComponent(mensagemCompleta);

    var linkWhatsApp = 'https://wa.me/' + numeroTelefone + '?text=' + mensagemCodificada;

    window.open(linkWhatsApp, '_blank');
}

var itens = document.getElementById("itens");
var menu = document.getElementById("IconMenu");

function clickMenu() {
    if (itens.style.display === 'none' || itens.style.display === '') {
        itens.style.display = 'block';
        menu.style.display = 'block';
    } else {
        itens.style.display = 'none';
        menu.style.display = 'block';
    }
}