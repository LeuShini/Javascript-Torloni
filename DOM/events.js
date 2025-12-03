// eventos sao interacoes do usuario com o website e também
// comportamentos (por exempllo carregar ou recarregar a tela)

let elementoBtn = document.getElementById("btn");
let elementoIdLeandra = document.getElementById("tecnica");


let novoElemento = document.createElement("a")

elementoBtn.addEventListener("click", () => {
    // alert("Voce clicou no botao")


// elementoBtn.style.backgroundColor = "yellow";

})
novoElemento.textContent = "DE NOVO";
novoElemento.href = "https://poki.com/br?campaign=20607849561&adgroup=154221802477&extensionid=&targetid=kwd-395440198971&location=1001768&matchtype=e&network=g&device=c&devicemodel=&creative=675917374552&keyword=clicks+jogos&placement=&target=&gad_source=1&gad_campaignid=20607849561&gbraid=0AAAAADlg9ZFA-MNZIiW4nZ6Svpg-xizzY&gclid=CjwKCAiA3L_JBhAlEiwAlcWO57oD61NshWdEtMyGeU21n_ez_FouApEiWvtati-OrihQ1HYHo9KfvBoCJ5sQAvD_BwE"

elementoBtn.addEventListener("click", () => {

 document.body.appendChild(novoElemento);

//document.body.removeChild(elementoIdLeandra);

// console.log(document.body.children);

 document.body.children[1].removeChild(elementoIdLeandra);
})

