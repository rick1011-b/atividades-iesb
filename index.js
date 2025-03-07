// exercício 1 Manipulando as strings

// 1. 
let string = 'ferrari'
let MSTR = string.toUpperCase()
console.log(MSTR)

// 2. 

let mstr = string.toLowerCase()
console.log (mstr)

// 3.

let reverse = string.split('').reverse().join('')
console.log (reverse)

// 4.




// exercício 2 - Operadores aritméticos e comparações

//1. 


function calc (n1,n2){
    
    let sum = n1 + n2
    let sub = n2 - n1
    let multi = n1 * n2 
    let div = n1/n2

    console.log (`soma de ${n1} e ${n2}: ${sum}`)
    console.log (`subtração de ${n2} e ${n1}: ${sub}`)
    console.log (`multiplicação de ${n1} e ${n2}: ${multi}`)
    console.log (`divisão de ${n1} e ${n2}: ${div}`)

    console.log ( n1 < n2 ? 'o primeiro número é menor que o segundo': 'o primeiro número é maior que o segundo')
   
}

calc(15,5)

// exercicio 3 
