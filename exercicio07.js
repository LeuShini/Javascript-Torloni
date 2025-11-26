

// let valor = parseFloat(prompt("Digite o valor")) 

// if (valor <= 100) {
//     alert ("Sem Desconto")
// } if (valor > 100.01 && valor <= 200) {
   
// }
// else  if(valor <100) {   
//     alert ("Compra com desconto de 10%")
// }
// let desconto
// if (valor <= 100) {
//     desconto = 0
//     console.log ("Sem desconto")
// }
// else if(valor <=200){
//     desconto = 0.1 
//     console.log ("10% de desconto")
// }else{
//     desconto = 0.2
//     c
// }

// let valorFinal = valor - ((valor*desconto)/100)








// let valorTotalCompra = parseFloat(prompt("Digite o valor total da compra: "));
// let desconto = 0;
// let mensagemDesconto = "";

// if (valor > 200) {
//     desconto = 0.20;
//     mensagemDesconto = "Desconto aplicado: 20%";
// } else if (valor > 100) {
//     desconto = 0.10;
//     mensagemDesconto = "Desconto aplicado: 10%";
// } else {
//     desconto = 0;
//     mensagemDesconto = "Sem desconto.";
// }

// let valorDesconto = valor * desconto;
// let valorFinal = valor - valorDesconto;

// alert(mensagemDesconto +
//       "\nValor do desconto: R$ " + valorDesconto.toFixed(2) +
//       "\nValor final da compra: R$ " + valorFinal.toFixed(2));







let valorTotalCompra = parseFloat(prompt("Digite o valor total da compra: "));

let desconto;

if (valorTotalCompra <= 100) {   
    desconto = 0;
}

else if(valorTotalCompra  <=200)
{desconto = 10/100;

}


else {

    desconto = 20/100;
}

let valorFinal = valorTotalCompra - (valorTotalCompra * desconto);

alert (valorFinal);