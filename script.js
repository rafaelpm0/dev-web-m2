document.addEventListener('DOMContentLoaded', (event)=>{
    
    //variavel de controle
    const listaDeDados = [1, 2, 3, 4, 5]
    const exibirFormulario = document.getElementById('exibirFormulario');

    //adicionando exibindo conteudo
    listaDeDados.forEach((item)=>{
        const li = document.createElement('li');
        li.textContent = item;
        exibirFormulario.appendChild(li)
})

})