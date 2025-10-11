/*
let num = [5, 8 ,2, 9, 3]
num.sort()
num.push(1)
num[3] = 6 // para acrescentar dentro da variavel escolhendo o local
num.push(7) // já acrescenta o espaço sem eu precisar escolher o espaço
num.length // é o numero de caracteres que tem na variável

num.sort() //organiza os numeros na variável em ordem crescente

num.indexOf(7) irá procurar o numero 7 nos vetores e irá dizer qual a posição que o número - caso não tenha- apresentará o valor -1

//a ordem dos comandos altera o resultado, exemplo se você primeiro organizar e depois adicionar irá adicionar desorganizado, se vocÊ primeiro adicionar e depois organizar irá ficar organizado

console.log(num)
console.log(`o vetor tem  ${num.length}`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
*/

let valores = [8, 5, 7, 4, 1]
//dessa forma terá que escrever muito para mostrar todos os vetores
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
*/
//dessa forma escreve menos, usando a repetição
//código tradicional
for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//código mais fácil e simplificado
//irá usar o for( in )
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

