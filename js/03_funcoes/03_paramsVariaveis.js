function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1,3))
console.log(soma(1,3,5,7))
console.log(soma(0.9,0.1,'Teste'))
