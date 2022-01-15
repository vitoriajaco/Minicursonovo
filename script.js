const botao = document.querySelector('button');

traduzirCondicao = (data) => {
    if(data.status =='unknown'){
        return 'Não sabemos';
    }else if(data.status =='Alive'){
        return 'Sim';
    }else {
        return 'Não. Está morto';
    
    }
}

gerarValorAleatorio =() => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    for(i = 1; i <=3; i++){
        
        const personagem = document.querySelector('#personagem-'+i);
        const imagem = personagem.querySelector('img');
        const nomeDoPersonagem = personagem.querySelector('#nome');
        const especie = personagem.querySelector("#especie");
        const condicao = personagem.querySelector("#status");

        let numeroAleatorio = gerarValorAleatorio();
        fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}` , {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                "Content-type": 'application/json'
            }
        }).then((response) => response.json()).then((data) => {
            imagem.src = data.image;
            imagem.alt= data.name;
            nomeDoPersonagem.innerHTML = data.name;
            especie.innerHTML = data.species;
            condicao.innerHTML = traduzirCondicao(data);
        });

    }
}

botao.onclick = pegarPersonagem;



