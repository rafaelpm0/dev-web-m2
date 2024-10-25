document.addEventListener("DOMContentLoaded", (event) => {
  //variavel de controle
  const listaDeDados = [];
  let id = 1;
  const dataForm = document.getElementById("dataForm");

  //funcao para colocar para atualizar a lista - isso tem mudar para tabela
  const atualizarLista = () => {
    dataForm.innerHTML = "";
    listaDeDados.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `Nome da Obra: ${item.nomeObra} - Nome do Autor: ${item.nomeAutor}`;
      dataForm.appendChild(li);
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
    listaDeDados.push({ id, nomeObra, nomeAutor });
    id++;
    atualizarLista(); // atualizar a lista
    limparInputs();
  });







});
