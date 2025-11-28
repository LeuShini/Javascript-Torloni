// // ============================ 1 ===============================
// function FalarImc (peso, altura) {


// let imc = peso / (altura * altura);

// alert("Seu IMC é: " + imc);

// if (imc < 18.5) {
//     alert("Abaixo do peso");
// } else if (imc < 18.5 && imc <= 24.9) {
    
//     alert("Peso normal");
// } else if (imc >= 25 && imc <=29.9) {
//     alert("Sobrepeso");
// } else if (imc >= 30 && imc <=34.9) {
//     alert("Obesidade grau 1");
// } else if (imc >= 35 && imc <=39.9) {
//     alert("Obesidade grau 2");
// } else {
//     alert("Obesidade grau 3");}
// }

// let peso = parseFloat(prompt("Digite seu peso: "));
// let altura = parseFloat(prompt("Digite sua altura: "));


// FalarImc (peso, altura)

// // ============================ 2 ===========================

// function solicitarNome (){

//     let pedirNome = (prompt("Digite seu nome"))
//     alert(pedirNome)

// solicitarNome()
// }

// // ============================ 3 =============================

// function somenteOZero () {
//     let numeroEscolhido = parseInt (prompt("Digite um numero"))

// while(numeroEscolhido !== 0 ){
//     numeroEscolhido = parseInt (prompt("Escreva outro numero"))
// }
// }
// numeroEscrito()

// =============================== 4 ============================

// function exibirTabuadaEscolhida() {
//     let tabuadaEscolhida = parseInt(prompt("Digite o numero da tabuada que voce quer"))

//     //------------Tabuada X -----------
//     // 2x1 = 2
//     // 2x1 = 2
//     // 2x1 = 2
//     // 2x1 = 2
//     // 2x1 = 2



//     // 1 numero dentro da consicao for - inicializacao - variavel
//     // 2 numero dentro da condicao for - condicao - verifica a volta da variavel
//     // 3 numero dentro da condicao for - incremento - soma as voltas 
//     //i++ = i=i i + 1


//     console.log("=============== Tabuada " + tabuadaEscolhida + " ===============")



//     for (let i = 1; i <= 10; i++) {
//         console.log(tabuadaEscolhida + " X " + i + " = " + (tabuadaEscolhida * i))
//     }


// }

// exibirTabuadaEscolhida();

// ============================ 5 ==============================

function somarTodosOsNumeros() {
    let numero = 1;
let soma = 0;

while (numero <= 100) {
soma = soma + numero;
numero++;
}

alert ("A soma dos numeros de 1 a 100 é " + soma)
}

somarTodosOsNumeros ()

