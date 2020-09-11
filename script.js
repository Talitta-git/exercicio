
function calcularimc(){
    var peso = (document.getElementById("peso").value)
    var altura = (document.getElementById("altura").value)
    var res = peso/(altura*altura)
    alert("O resultado é = "+res)
}
function calcularcir(){
    var raio = (document.getElementById("raio").value)
    var res = (Math.PI * Math.pow(raio,2))
    alert("O resultado é = "+res)
}
function calcularret(){
    var base = (document.getElementById("base").value)
    var altura = (document.getElementById("altura").value)
    var res = (base * altura)
    alert("O resultado é = "+res)
}