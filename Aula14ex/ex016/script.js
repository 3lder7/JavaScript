var iniciotxt = window.document.getElementById('iniciotxt')
var fimtxt = window.document.getElementById('fimtxt')
var pulostxt = window.document.getElementById('pulostxt')
var res = window.document.getElementById('res')

var inicio = Number(iniciotxt.value)
var fim = Number(fimtxt.value)
var pulos = Number (pulostxt.value)

var contador = contador++

function contar(){
   while(inicio <= 5)
   res.innerHTML=`${contador}`
}