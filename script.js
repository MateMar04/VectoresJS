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
    const listaOrdenada = lista.sort(function(a, b){return a-b});
    mayor = listaOrdenada[listaOrdenada.length - 1];
    document.getElementById("mayor").innerHTML = mayor;
}

function mostrarMenor() {
    const listaOrdenada = lista.sort(function(a, b){return a-b});
    menor = listaOrdenada[0];
    document.getElementById("menor").innerHTML = menor;
}