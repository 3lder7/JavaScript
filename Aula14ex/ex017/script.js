var n1txt = window.document.getElementById('n1txt')
var tabu = window.document.getElementById('tabuada')
function calcular(){

    var n1 = Number (n1txt.value)
    var c = 1
    
    if(n1txt.value.length == 0){
        window.alert('ERRO! NÃO HÁ UM NÚMERO!')
    }else{
        tabu.innerHTML = ''
        while(c <= 10){
            var item = document.createElement('option')
            item.text = `${n1} X ${c} = ${n1*c}`
            tabu.appendChild(item)
            c++
        }
    }
}