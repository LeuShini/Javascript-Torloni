// let mercedes = {
//     modelo: "G63", //caracteristicas - propriedades
//     ano: 2025,
//     fabricante: "mercedes",
//     cor: "preto fosco",
//     acelerar(){ //comportamento - metodos
//         console.log("Acelerando...vrum...vrum...");
//     },
//     freiar(){
//         console.log("Freiando....");
//     }
// };

// console.log(mercedes.modelo);
// console.log(mercedes.acelerar())



// Criar um objeto Professor Tadeu ou Jonas
// 3 propriedades nome, NIF, salario
// 2 comportamentos atribuirNota e baterPonto
// De escolha propria pelomenos mais uma propriedade e mais um comportamento

let professor = {
    nome: "Felipe Tadeu",
    NIF: 4235674,
    salario: 15.673,
    cpf: 234422523343,
    BaterPonto(){
        let horarioBatido = new Date(2025, 10, 28, 17,5);
        console.log (horarioBatido)
        // console.log("bip...bip...")
    },
    AtribuirNota(){
        console.log("Esse vai reprovar...")
    },
    Hobbie(){
        console.log("Vou jogar videogame...")
    }

}
console.log (professor.cpf);
console.log(professor.salario)
console.log(professor.NIF)
