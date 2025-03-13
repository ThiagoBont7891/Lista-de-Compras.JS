import { criarItemDaLista } from "./scripts/criariItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";
const listaDecompras =document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista();
    listaDecompras.appendChild(itemDaLista);
    verificarListaVazia(listaDecompras);
})


verificarListaVazia(listaDecompras);