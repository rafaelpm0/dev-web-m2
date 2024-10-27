import { atualizarLista, limparInputs, modalErrorValidation } from "./tabela.js";

export function handleForm(dataForm, listaDeDados, dataObra) {
    

    // Validação dos campos
    const { nomeObra, nomeAutor, anoObra, periodoObra, tipoObra } = dataObra;

    const validacoes = {
        nomeObra: typeof nomeObra === 'string' && nomeObra.length >= 6,
        nomeAutor: typeof nomeAutor === 'string' && nomeAutor.length >= 10,
        anoObra: typeof anoObra === 'string' && anoObra.length >= 4,
        periodoObra: typeof periodoObra === 'string' && periodoObra !== '0',
        tipoObra: typeof tipoObra === 'string' && tipoObra !== '0'
    };

    const mensagensErro = {
        nomeObra: "Nome da obra deve ter pelo menos 6 caracteres.",
        nomeAutor: "Nome do autor deve ter pelo menos 10 caracteres.",
        anoObra: "Ano da obra deve ter exatamente 4 caracteres.",
        periodoObra: "Período da obra deve ser selecionado.",
        tipoObra: "Tipo de obra deve ser selecionado."
    };
    
    const ul = document.createElement("ul");

    Object.keys(validacoes).forEach(id => {
        document.getElementById(id).className = validacoes[id] ? "valid" : "notValid";
        if(!validacoes[id]){
            const li = document.createElement("li");
            li.textContent = mensagensErro[id];
            ul.appendChild(li);
        }
    });

    const todosValidos = Object.values(validacoes).every(value => value)

    if(todosValidos){
        listaDeDados.push(dataObra);
        atualizarLista(dataForm, listaDeDados);
        limparInputs();
    }else{
        modalErrorValidation(ul);
    }

    
}
