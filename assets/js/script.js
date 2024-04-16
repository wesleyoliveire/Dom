let corpo = window.document.body
var p1 = window.document.getElementsByTagName("p")[1];
var p = window.document.getElementById("msg")
window.document.write(p1.innerText)

var a = window.document.getElementById("area")
var b = window.document.getElementById("area")
var c = window.document.getElementById("area")

a.addEventListener('click', clicar)
b.addEventListener('mouseenter', entrar)
c.addEventListener('mouseout', sair)

function clicar() {

    a.innerText = 'Clicou!'
    a.style.background = 'red'
}
function entrar() {

    b.innerText = 'Entrou!'
}

function sair() {
    c.innerText = 'Saiu!'
    c.style.background = "green"
}
// window.document.write(p1.innerText)
// p1.style.color = "blue"
// window.document.write(p.innerText)