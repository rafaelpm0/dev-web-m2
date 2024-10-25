export function atualizarLista(dataForm, listaDeDados) {
    dataForm.innerHTML = "";
    listaDeDados.forEach((item) => {
      const row = document.createElement("tr"); // Cria uma nova linha
  
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