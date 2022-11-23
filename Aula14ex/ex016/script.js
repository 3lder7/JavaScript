    var initxt = window.document.getElementById('initxt')
    var fimtxt = window.document.getElementById('fimtxt')
    var pulostxt = window.document.getElementById('pulostxt')
    var res = window.document.getElementById('res')
    
    function contador(){
    var n1 = Number(initxt.value)
    var n2 = Number(fimtxt.value)
    var p = Number (pulostxt.value)
    
    if(initxt.value.length == 0 || fimtxt.value.lenght == 0 || pulostxt.value.lenght == 0){
        window.alert('ERRO! AUSÊNCIA DE DADOS')
    }else{
        res.innerHTML = 'Contando: '

        if(n1 < n2){
            for(c = n1; c <= n2; c += p){
                res.innerHTML += ` ${c}`
        }
    }
        if(n1 > n2){
            for(c = n1; c >= n2;){
                res.innerHTML += ` ${c}`
            }
        }
    }
}
    