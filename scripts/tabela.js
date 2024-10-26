export function atualizarLista(dataForm, listaDeDados) {
    dataForm.innerHTML = "";
    listaDeDados.forEach((item) => {
      const row = document.createElement("tr"); // Cria uma nova linha
      row.id = `data-row-${item.id}` // adicionar uma id para linha da lista
  
      // Cria e insere células na linha
      const cellNomeObra = document.createElement("td");
      cellNomeObra.textContent = item.nomeObra;
      row.appendChild(cellNomeObra);
  
      const cellNomeAutor = document.createElement("td");
      cellNomeAutor.textContent = item.nomeAutor;
      row.appendChild(cellNomeAutor);
  
      const cellAnoObra = document.createElement("td");
      cellAnoObra.textContent = item.anoObra;
      row.appendChild(cellAnoObra);
  
      const cellPeriodoObra = document.createElement("td");
      cellPeriodoObra.textContent = item.periodoObra;
      row.appendChild(cellPeriodoObra);
  
      const cellTipoObra = document.createElement("td");
      cellTipoObra.textContent = item.tipoObra;
      row.appendChild(cellTipoObra);
  
      const cellDetalhamentoObra = document.createElement("td");
      cellDetalhamentoObra.textContent = item.detalhamentoObra;
      row.appendChild(cellDetalhamentoObra);

      const cellButtomDelete = document.createElement("td");
      cellButtomDelete.innerHTML = "<button id='deletarObra' class='btn btn-danger' onclick='deletarObra("+item.id+")'>Deletar</button>";
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

    export function deletarObra(id){
      document.getElementById(`data-row-${id}`).remove();
      
    }