document.getElementById("nome").focus();
function calcula() {
    let nome = document.getElementById("nome").value;
    let trab = parseFloat(document.getElementById("trab").value);
    let teste = parseFloat(document.getElementById("teste").value);
    let media = (trab + teste) / 2;
    let res = nome + " oteve média: " + media;
    document.getElementById("res").value = res;
}
function cl() {
    document.getElementById("nome").value = "";
    document.getElementById("trab").value = "";
    document.getElementById("teste").value = "";
    document.getElementById("res").value = "";
    document.getElementById("nome").focus();
}
document.addEventListener("keydown", event => {
    if (event.keyCode == 27) {
        cl();
    }
})
document.addEventListener("keydown", event => {
    if (event.keyCode == 13) {
        calcula();
    }
})
