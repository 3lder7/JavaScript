function carregar(){
    var msg1 = window.document.getElementById('msg1')
    var msg2 = window.document.getElementById('msg2')
    var img = window.document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg1.innerHTML = `Agora são <strong>${hora} horas</strong>.`
    if(hora >= 0 && hora < 12){
        msg2.innerHTML = 'Bom dia!'
        img.src = 'manha.png'
        window.document.body.style.background = '#E9D2F4'
    }else if(hora >= 12 && hora < 18){
        msg2.innerHTML = 'Boa tarde!'
        img.src = 'tarde.png'
        window.document.body.style.background = '#E55812'
    }else{//Não usei uma condição pois já esta implicitamente declarado que se a  hora for maior do que 18 e menor do que 0, vai acontecer algo. 
        msg2.innerHTML = 'Boa noite!'
        img.src = 'noite.png'
        window.document.body.style.background = '#12130F'
    }
}
