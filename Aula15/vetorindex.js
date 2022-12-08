var num = [9, 5, 4, 7, 1, 3]//começa com 0 
var pos = num.indexOf(3)
console.log(num)
if(pos == -1){
    console.log('O vetor não foi encontrado')
}else{
    console.log(`O vetor está na posição ${pos}`)
}