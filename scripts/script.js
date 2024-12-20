import { atualizarLista, deactivateModal, deletarObraModal, showDetalhamentoModal } from "./tabela.js";
import { handleForm } from "./validacao.js";

document.addEventListener("DOMContentLoaded", (event) => {
  //variavel de controle
  const listaDeDados = [];
  let id = 1;
  const dataForm = document.getElementById("dataForm");

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
    const dataObra = {
      id,
      nomeObra,
      nomeAutor,
      anoObra,
      periodoObra,
      tipoObra,
      detalhamentoObra,   
    }  
    id++;
    handleForm(dataForm, listaDeDados, dataObra); // a inclusão na tabela e na lista esta dentro de esta dentro da função
    
  });

  function deletarObra(id){

    const index = listaDeDados.findIndex((item)=> item.id === id)
    if(index !== -1){
      listaDeDados.splice(index, 1);
      console.log("feito")
    }
    
    console.log(listaDeDados, index, id)
    atualizarLista(dataForm, listaDeDados);
    deactivateModal();
  }

  window.deactivateModal = deactivateModal;
  window.deletarObraModal = deletarObraModal;
  window.deletarObra = deletarObra;
  window.showDetalhamentoModal = showDetalhamentoModal;


});
