// Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

let tabuadaEscolhida = parseInt (prompt("Digite o numero da tabuada que voce quer"))

//------------Tabuada X -----------
// 2x1 = 2
// 2x1 = 2
// 2x1 = 2
// 2x1 = 2
// 2x1 = 2



// 1 numero dentro da consicao for - inicializacao - variavel
// 2 numero dentro da condicao for - condicao - verifica a volta da variavel
// 3 numero dentro da condicao for - incremento - soma as voltas 
//i++ = i=i i + 1


console.log ("=============== Tabuada " + tabuadaEscolhida + " ===============" )



for(let i = 1; i <= 10; i++){
console.log(tabuadaEscolhida + " X " + i + " = " + (tabuadaEscolhida * i))
}

