
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