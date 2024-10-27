export function atualizarLista(dataForm, listaDeDados) {
    dataForm.innerHTML = "";
    listaDeDados.forEach((item) => {
      const row = document.createElement("tr"); // Cria uma nova linha
      row.id = `data-row-${item.id}` // adicionar uma id para linha da lista
      
      // Cria e insere células na linha
      const cellNomeObra = document.createElement("td");
      cellNomeObra.innerHTML = linkDetalhamento(item.detalhamentoObra, item.nomeObra);
      row.appendChild(cellNomeObra);
  
      const cellNomeAutor = document.createElement("td");
      cellNomeAutor.innerHTML = linkDetalhamento(item.detalhamentoObra, item.nomeAutor);
      row.appendChild(cellNomeAutor);
  
      const cellAnoObra = document.createElement("td");
      cellAnoObra.innerHTML =  linkDetalhamento(item.detalhamentoObra, item.anoObra);
      row.appendChild(cellAnoObra);
  
      const cellPeriodoObra = document.createElement("td");
      cellPeriodoObra.innerHTML =  linkDetalhamento(item.detalhamentoObra, item.periodoObra);
      row.appendChild(cellPeriodoObra);
  
      const cellTipoObra = document.createElement("td");
      cellTipoObra.innerHTML =  linkDetalhamento(item.detalhamentoObra, item.tipoObra);
      row.appendChild(cellTipoObra);
      
      const cellButtomDelete = document.createElement("td");
      cellButtomDelete.innerHTML = "<button class='btn btn-danger' onclick='deletarObraModal("+item.id+")'>Deletar</button>";
      row.appendChild(cellButtomDelete);

      dataForm.appendChild(row);
    });
  }

    // função para limpar os input
    export function limparInputs(){
      document.getElementById("nomeObra").value = "";
      document.getElementById("nomeAutor").value = "";
      document.getElementById("anoObra").value = "";
      document.getElementById("periodoObra").value = "0";
      document.getElementById("tipoObra").value = "0";
      document.getElementById("detalhamentoObra").value = "";

    };

    // função para desativar o modal
    export function deactivateModal() {
      const modal = document.getElementById("modal");
      modal.className = "modal";
    }

    export function modalErrorValidation(ul){
      const modal = document.getElementById("modal");
      const modalContent = document.getElementById("modalContent");
      
      modal.className = "modal active";
      modalContent.innerHTML = "";
      modalContent.appendChild(ul);

    }

    export function deletarObraModal(id){
      const modal = document.getElementById("modal");
      const modalContent = document.getElementById("modalContent");
      const div = document.createElement("div");
      div.className = 'deleteContainer';
      div.innerHTML = `<p>Deseja realmente deletar a obra?</p>
      <button class='btn btn-danger' onclick='deletarObra(${id})'>Sim</button>
      <button class='btn btn-primary' onclick='deactivateModal()'>Não</button>`;
      modal.className = "modal active";
      modalContent.innerHTML = "";
      modalContent.appendChild(div);
      
    }

    export function deletarObra(id){
      document.getElementById(`data-row-${id}`).remove();
      deactivateModal();
    }

    export function showDetalhamentoModal(detalhamento){
      const modal = document.getElementById("modal");
      const modalContent = document.getElementById("modalContent");
      const div = document.createElement("div");
      div.className = 'detalhamentoContainer';
      if(detalhamento === ""){
        detalhamento = "Detalhamento não informado";
      }
      div.innerHTML = `<p>${detalhamento}</p>
      <button class='btn btn-primary' onclick='deactivateModal()'>Fechar</button>`;
      modal.className = "modal active";
      modalContent.innerHTML = "";
      modalContent.appendChild(div);
    }

    function linkDetalhamento(detalhamento, conteudo){
      return `<a onclick='showDetalhamentoModal("${detalhamento}")'>${conteudo}</a>`;
    }