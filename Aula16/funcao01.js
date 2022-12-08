function parimpar(n){
    if(n % 2 == 0){
        return `O número ${n} é PAR`
    }else{
        return `O número ${n} é IMPAR`
    }
}
let res = parimpar(17)//o número posto aqui, é o 'n' lá de  cima
console.log (res)
//Ou pode escrever direto, sem precisar de variável, com console.log(parimpar(n))