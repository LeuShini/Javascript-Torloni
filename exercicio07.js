let valor = parseFloat(prompt("Digite o valor")) 

// if (valor <= 100) {
//     alert ("Sem Desconto")
// } if (valor > 100.01 && valor <= 200) {
   
// }
// else  if(valor <100) {   
//     alert ("Compra com desconto de 10%")
// }
let desconto
if (valor <= 100) {
    desconto = 0
    console.log ("Sem desconto")
}
else if(valor <=200){
    desconto = 0.1 
    console.log ("10% de desconto")
}else{
    desconto = 0.2
    c
}

let valorFinal = valor - ((valor*desconto)/100)