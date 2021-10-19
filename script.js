var lista = new Array();

var mayor;
var menor;

var numero

function add() {
    numero = document.getElementById("leNumero").value;
    lista.push(numero);
    document.getElementById("leNumero").value = "";
}

function listar() {
    document.getElementById("lista").innerHTML = "Lista: " + lista;
}

function mostrarMayor() {
    const listaOrdenada = lista.sort(function (a, b) { return a - b });
    mayor = listaOrdenada[listaOrdenada.length - 1];
    document.getElementById("mayor").innerHTML = "Mayor: " + mayor;
    if (mayor >= 100) {
        document.getElementById("mayor").classList.add("verde");
        document.getElementById("mayor").classList.remove("rojo");
    } else {
        document.getElementById("mayor").classList.add("rojo");
        document.getElementById("mayor").classList.remove("verde");
    }
}

function mostrarMenor() {
    const listaOrdenada = lista.sort(function (a, b) { return a - b });
    menor = listaOrdenada[0];
    document.getElementById("menor").innerHTML = "Menor: " + menor;
    if (menor < 100) {
        document.getElementById("menor").classList.add("verde");
        document.getElementById("menor").classList.remove("rojo");
    } else {
        document.getElementById("menor").classList.add("rojo");
        document.getElementById("menor").classList.remove("verde");
    }

}

function borrar() {
    lista = [];
}