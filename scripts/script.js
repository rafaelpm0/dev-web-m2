document.addEventListener("DOMContentLoaded", (event) => {
  //variavel de controle
  const listaDeDados = [];
  let id = 1;
  const dataForm = document.getElementById("dataForm");

  //funcao para colocar para atualizar a lista - isso tem mudar para tabela
  const atualizarLista = () => {
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
  };

  // função para limpar os input
  const limparInputs = () => {
    document.getElementById("nomeObra").value = "";
    document.getElementById("nomeAutor").value = "";
  };

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
    atualizarLista(); // atualizar a lista, precisa transformar em tabela ainda
    limparInputs();
  });
});
