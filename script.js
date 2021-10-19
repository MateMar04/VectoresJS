const lista = new Array();

var mayor;
var menor;

var numero

function add() {
    numero = document.getElementById("leNumero").value;
    lista.push(numero);
}

function listar() {
    document.getElementById("lista").innerHTML = lista;
}

function mostrarMayor() {
    mayor = lista.sort()[lista.length - 1];
    document.getElementById("mayor").innerHTML = mayor;
}