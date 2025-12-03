// // Dom e a arvore/fluxo do meu documento html
// // ele serve para que o javascript consiga manipular (visualizar, editar, criar e excluir)
// // O DOM ele torna os elementos HTML em Objetos para que o JS consiga acessar de fato


// let elementoBody = document.getElementsByTagName("body");
// console.log(elementoBody);

//acessar pela tag h1
let elementoH1 = document.getElementsByTagName("h1");

//acessando o elemento pela sua posicao 
console.log(elementoH1 [0].textContent = "Arroz");

// // exibe o id tecnica


// let exibeId = document.getElementById("tecnica");
// console.log(exibeId);



// // exibe os elementos que possuem a class jogador


// console.log(exibeClass);



// // exibe o item 4 dos elementos que possuem a class jogador


// console.log(exibeClass[3]);

// // muda o texto do conteudo do item da 3 posicao dos elementos que possuem a class jogador



// exibeClass[3].textContent = "Macarrao";



// //mudar a estilizacao de um elemento 

let exibeId = document.getElementById("tecnica");
let exibeClass = document.getElementsByClassName("jogador");


exibeId.style.color = "red";
exibeId.style.fontSize = "50px";

//mude a cor da font do item da 3 posicao dos elementos que possuem a class jogador

exibeClass[3].style.color = "red";

