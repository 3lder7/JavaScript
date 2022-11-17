function verificar(){
        var agora = new Date()
        var anojava = agora.getFullYear()
        //-------------
        var anotxt = window.document.getElementById('anotxt')
        var ano = Number(anotxt.value)
        var calc = anojava - ano
        //-------------
        var box = window.document.getElementsByName('box')
        var gen = ''
        var periodo = ''
        //-------------
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        //-------------
        if(box[0].checked){
                gen = 'Masculino'
                if(calc >= 1 && calc <= 11){
                        periodo = 'Criança'
                        img.setAttribute('src', 'crianca.png')
                }else if(calc >= 12 && calc <= 18){
                        img.setAttribute('src', 'adolescente.png')
                        periodo = 'Adolescente'
                }else if(calc >= 19 && calc <= 29){
                        img.setAttribute('src', 'jovem.png')
                        periodo = 'Jovem'
                }else if(calc >= 30 && calc <= 49){
                        img.setAttribute('src', 'adulto.png')
                        periodo = 'Adulto'
                }else{
                        img.setAttribute('src', 'idoso.png')
                        periodo = 'Idoso'
                }
        
        }else if(box[1].checked){
                gen = 'Feminino'
                if(calc >= 1 && calc <= 11){
                        periodo = 'Criança'
                        img.setAttribute('src', 'criancaf.png')
                }else if(calc >= 12 && calc <= 18){
                        img.setAttribute('src', 'adolescentef.png')
                        periodo = 'Adolescente'
                }else if(calc >= 19 && calc <= 29){
                        img.setAttribute('src', 'jovemf.png')
                        periodo = 'Jovem'
                }else if(calc >= 30 && calc <= 49){
                        img.setAttribute('src', 'adultof.png')
                        periodo = 'Adulto'
                }else{
                        img.setAttribute('src', 'idosaf.png')
                        periodo = 'Idoso'
                }
        }
        //-------------
        var res = window.document.getElementById('res')
        //-------------
        img.style.margin = '15px'
        res.innerHTML=`Detectamos um <strong>${periodo}</strong>, de <strong>${calc}</strong> anos de idade, do gênero <strong>${gen}</strong>.`
        res.appendChild(img)
}      