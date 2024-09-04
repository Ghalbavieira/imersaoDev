document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('results');
    const infoLink = document.querySelector('.link-info');

    if (!searchButton || !searchInput || !resultsContainer || !infoLink) {
        console.error("Um ou mais elementos não foram encontrados na página.");
        return;
    }

    const livros = [
        { 
            titulo: 'JavaScript: O Guia Definitivo', 
            autor: 'David Flanagan', 
            descricao: 'Este é um dos livros mais completos sobre JavaScript, cobrindo desde os conceitos básicos até os mais avançados.',
            link: '#',
            imagem: 'https://down-br.img.susercontent.com/file/br-11134207-7qukw-liio54ywc2lx8d' 
        },
        { 
            titulo: 'Eloquent JavaScript', 
            autor: 'Marijn Haverbeke', 
            descricao: 'Um livro moderno e prático que ensina JavaScript através de exemplos claros e compreensíveis.',
            link: 'https://eloquentjavascript.net/',
            imagem: 'https://eloquentjavascript.net/img/cover.jpg' 
        },
        { 
            titulo: 'JavaScript: The Good Parts', 
            autor: 'Douglas Crockford', 
            descricao: 'Douglas Crockford analisa as melhores partes do JavaScript, recomendando práticas eficazes para programadores.',
            link: 'https://www.amazon.com.br/dp/0596517742',
            imagem: 'https://covers.openlibrary.org/b/id/6660317-L.jpg' 
        },
        { 
            titulo: 'Você Não Conhece JS: Escopo e Closures', 
            autor: 'Kyle Simpson', 
            descricao: 'Parte de uma série de livros que exploram profundamente o funcionamento do JavaScript. Este volume foca em escopo e closures.',
            link: 'https://www.amazon.com.br/dp/1491904151',
            imagem: 'https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nML.jpg' 
        },
        { 
            titulo: 'Padrões JavaScript', 
            autor: 'Stoyan Stefanov', 
            descricao: 'Um guia prático para padrões de design em JavaScript, ajudando a escrever código mais limpo e eficiente.',
            link: 'https://www.amazon.com.br/dp/0596806752',
            imagem: 'https://m.media-amazon.com/images/I/51bTkG+gwTL.jpg' 
        },
        { 
            titulo: 'Aprendendo Padrões de Design em JavaScript', 
            autor: 'Addy Osmani', 
            descricao: 'Este livro cobre padrões de design aplicados ao JavaScript, ideal para desenvolvedores que querem aprimorar suas habilidades.',
            link: 'https://www.amazon.com.br/dp/1449331815',
            imagem: 'https://m.media-amazon.com/images/I/51xSVc0mJrL.jpg' 
        },
        { 
            titulo: 'JavaScript Eficaz: 68 Maneiras Específicas de Explorar o Poder do JavaScript', 
            autor: 'David Herman', 
            descricao: 'Este livro oferece 68 maneiras específicas de escrever código JavaScript mais eficaz e robusto.',
            link: 'https://www.amazon.com.br/dp/0321812182',
            imagem: 'https://m.media-amazon.com/images/I/51lVml-KQmL.jpg' 
        },
        { 
            titulo: 'Segredos do Ninja JavaScript', 
            autor: 'John Resig e Bear Bibeault', 
            descricao: 'Um guia para levar suas habilidades JavaScript para o próximo nível, ensinando técnicas avançadas.',
            link: 'https://www.amazon.com.br/dp/193398869X',
            imagem: 'https://images-na.ssl-images-amazon.com/images/I/81Ujl8luAqL.jpg' 
        },
        { 
            titulo: 'JavaScript Profissional para Desenvolvedores Web', 
            autor: 'Nicholas C. Zakas', 
            descricao: 'Um recurso essencial para desenvolvedores que querem dominar JavaScript em contextos profissionais.',
            link: 'https://www.amazon.com.br/dp/1118026691',
            imagem: 'https://images-na.ssl-images-amazon.com/images/I/91asIC1fRwL.jpg' 
        },
        { 
            titulo: 'HTML e CSS: Projete e Construa Websites', 
            autor: 'Jon Duckett', 
            descricao: 'Um livro visualmente atraente que ensina HTML e CSS de forma simples e eficaz, ideal para iniciantes.',
            link: 'https://www.amazon.com.br/dp/1118008189',
            imagem: 'https://images-na.ssl-images-amazon.com/images/I/518FqJvR9aL.jpg' 
        },
        { 
            titulo: 'Segredos do CSS: Melhores Soluções para Problemas Cotidianos de Design Web', 
            autor: 'Lea Verou', 
            descricao: 'Este livro revela truques e técnicas de CSS que podem resolver problemas comuns de design web.',
            link: 'https://www.amazon.com.br/dp/1449372635',
            imagem: 'https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg' 
        },
        { 
            titulo: 'Design Responsivo com HTML5 e CSS', 
            autor: 'Ben Frain', 
            descricao: 'Um guia prático para construir sites modernos e responsivos usando HTML5 e CSS.',
            link: 'https://www.amazon.com.br/dp/1784398931',
            imagem: 'https://images-na.ssl-images-amazon.com/images/I/51wqKtfE30L.jpg' 
        },
        { 
            titulo: 'Aprendendo Design Web: Um Guia para Iniciantes em HTML, CSS, JavaScript e Gráficos Web', 
            autor: 'Jennifer Niederst Robbins', 
            descricao: 'Perfeito para iniciantes, este livro cobre todos os fundamentos de HTML, CSS e JavaScript.',
            link: 'https://www.amazon.com.br/dp/1449319270',
            imagem: 'https://images-na.ssl-images-amazon.com/images/I/51SWBoJnuIL.jpg' 
        },
        { 
            titulo: 'CSS: O Guia Definitivo', 
            autor: 'Eric A. Meyer', 
            descricao: 'Um recurso abrangente que abrange tudo o que você precisa saber sobre CSS.',
            link: 'https://www.amazon.com.br/dp/1449393195',
            imagem: 'https://images-na.ssl-images-amazon.com/images/I/51J4D6tINFL.jpg' 
        }

    ];

    
    function buscarLivros(query) {
        return livros.filter(livro => 
            livro.titulo.toLowerCase().includes(query.toLowerCase()) || 
            livro.autor.toLowerCase().includes(query.toLowerCase())
        );
    }

    searchButton.addEventListener('click', function() {
        const query = searchInput.value;
        const resultados = buscarLivros(query);

        resultsContainer.innerHTML = '';

        if (resultados.length > 0) {
            resultados.forEach(livro => {
                const itemResultado = document.createElement('div');
                itemResultado.classList.add('item-resultado');

                const imagem = document.createElement('img');
                imagem.src = livro.imagem;
                imagem.alt = `Capa do livro ${livro.titulo}`;
                imagem.classList.add('livro-imagem');

                const livroDiv = document.createElement('div');
                livroDiv.classList.add('livro-item');
                livroDiv.innerHTML = `
                    <strong>${livro.titulo}</strong> - ${livro.autor}
                    <p>${livro.descricao}</p>
                `;

                const linkBtn = document.createElement('a');
                linkBtn.href = livro.link;
                linkBtn.textContent = 'Saiba Mais';
                linkBtn.classList.add('botao-link');
                linkBtn.target = '_blank';

                itemResultado.appendChild(imagem);
                itemResultado.appendChild(livroDiv);
                itemResultado.appendChild(linkBtn);
                
                resultsContainer.appendChild(itemResultado);
            });
        } else {
            resultsContainer.innerHTML = '<p>Nenhum livro encontrado.</p>';
        }
    });
});