import { atualizarLista, limparInputs } from "./tabela.js";

export function handleForm(dataForm, listaDeDados, dataObra) {
    listaDeDados.push(dataObra);

    // Validação dos campos
    const { nomeObra, nomeAutor, anoObra, periodoObra, tipoObra } = dataObra;

    const validacoes = {
        nomeObra: typeof nomeObra === 'string' && nomeObra.length >= 6,
        nomeAutor: typeof nomeAutor === 'string' && nomeAutor.length >= 10,
        anoObra: typeof anoObra === 'string' && anoObra.length >= 4,
        periodoObra: typeof periodoObra === 'string' && periodoObra !== '0',
        tipoObra: typeof tipoObra === 'string' && tipoObra !== '0'
    };

    Object.keys(validacoes).forEach(id => {
        document.getElementById(id).className = validacoes[id] ? "valid" : "notValid";
    });

    const todosValidos = Object.values(validacoes).every(value => value)

    if(todosValidos){
        atualizarLista(dataForm, listaDeDados);
        limparInputs();
    }

    
}
