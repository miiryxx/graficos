async function vizualizarInformacoesGlobais() { 
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';
    const res = await fetch(url);
    const dados = await res.json();

    // Verificando os dados no console
    console.log(dados);

    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9);
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9);
    const horas = parseInt(dados.tempo_medio);
    const minutos = Math.round((dados.tempo_medio - horas) * 100);
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2);

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> conectadas.<br>Isso significa que aproximadamente <span>${porcentagemConectada}%</span> de pessoas estão conectadas em alguma rede social.`;
    
    // Log para verificar se o parágrafo foi criado corretamente
    console.log(paragrafo);
    
    const container = document.getElementById('graficos-container');
    
    if (container) {
        container.appendChild(paragrafo);
    } else {
        console.log("Não encontrei o container para adicionar o texto");
    }
}

// Chama a função para adicionar as informações no site
vizualizarInformacoesGlobais();