function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada item de dado no array 'dados'
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if(!campoPesquisa){
            section.innerHTML = "<p>Resultado não encontrado<p/>"
            return 
        }

        campoPesquisa = campoPesquisa.toLowerCase();

        //se titulo includes campoPesquisa
        //então, faça 
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Constrói o HTML para cada resultado, formatando o título, descrição e link
        resultados += `
        <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">
                    ${dado.descricao} 
                </p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;
        }
        
        
    }

    if(!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atualiza o conteúdo da seção com os resultados construídos
    section.innerHTML = resultados;
    
}

