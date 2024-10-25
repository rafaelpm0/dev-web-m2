import { atualizarLista, limparInputs } from "./tabela.js";

document.addEventListener("DOMContentLoaded", (event) => {
  //variavel de controle
  const listaDeDados = [];
  let id = 1;
  const dataForm = document.getElementById("dataForm");


  listaDeDados.forEach((item) => {
    dataForm.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = `Nome da Obra: ${item.nomeObra} - Nome do Autor: ${item.nomeAutor}`;
    dataForm.appendChild(li);
  });

  //controle para fazer o submit e atualizar a lista
  const formulario = document.getElementById("submitForm");
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nomeObra = document.getElementById("nomeObra").value;
    const nomeAutor = document.getElementById("nomeAutor").value;
    const anoObra = document.getElementById("anoObra").value;
    const periodoObra = document.getElementById("periodoObra").value;
    const tipoObra = document.getElementById("tipoObra").value;
    const detalhamentoObra = document.getElementById("detalhamentoObra").value;
    listaDeDados.push({
      id,
      nomeObra,
      nomeAutor,
      anoObra,
      periodoObra,
      tipoObra,
      detalhamentoObra,   
    });
    id++;
    atualizarLista(dataForm, listaDeDados); // atualizar a lista, precisa transformar em tabela ainda
    limparInputs();
  });
});
