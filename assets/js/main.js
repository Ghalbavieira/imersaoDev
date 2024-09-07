document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('results');

    const books = [
        { 
            titulo: 'JavaScript: O Guia Definitivo', 
            autor: 'David Flanagan', 
            descricao: 'Este é um dos livros mais completos sobre JavaScript, cobrindo desde os conceitos básicos até os mais avançados.',
            link: 'https://www.amazon.com.br/JavaScript-Guia-Definitivo-David-Flanagan/dp/856583719X',
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
            link: 'https://www.amazon.com.br/Padr%C3%B5es-Javascript-Stoyan-Stefanov/dp/857522266X',
            imagem: 'https://m.media-amazon.com/images/I/71ptg7YuEbL._SY425_.jpg' 
        },
        { 
            titulo: 'Aprendendo Padrões de Design em JavaScript', 
            autor: 'Addy Osmani', 
            descricao: 'Este livro cobre padrões de design aplicados ao JavaScript, ideal para desenvolvedores que querem aprimorar suas habilidades.',
            link: 'https://www.amazon.com.br/dp/1449331815',
            imagem: 'https://m.media-amazon.com/images/I/81LpyFBbo8L._AC_UF894,1000_QL80_.jpg' 
        },
        { 
            titulo: 'Segredos do Ninja JavaScript', 
            autor: 'John Resig e Bear Bibeault', 
            descricao: 'Um guia para levar suas habilidades JavaScript para o próximo nível, ensinando técnicas avançadas.',
            link: 'https://www.amazon.com.br/Segredos-Ninja-Javascript-John-Resig/dp/8575223283',
            imagem: 'https://m.media-amazon.com/images/I/71WwIhf0SLL._SY425_.jpg' 
        },
        { 
            titulo: 'JavaScript Profissional para Desenvolvedores Web', 
            autor: 'Nicholas C. Zakas', 
            descricao: 'Um recurso essencial para desenvolvedores que querem dominar JavaScript em contextos profissionais.',
            link: 'https://www.amazon.com.br/Professional-JavaScript-Developers-Nicholas-Zakas/dp/1118026691',
            imagem: 'https://m.media-amazon.com/images/I/61zGRdIwrWL._SY385_.jpg' 
        },
        { 
            titulo: 'HTML e CSS: Projete e Construa Websites', 
            autor: 'Jon Duckett', 
            descricao: 'Um livro visualmente atraente que ensina HTML e CSS de forma simples e eficaz, ideal para iniciantes.',
            link: 'https://www.amazon.com.br/HTML-CSS-projete-construa-Websites/dp/8576089394',
            imagem: 'https://m.media-amazon.com/images/I/51-paNiiAKL._SY425_.jpg' 
        },
        { 
            titulo: 'Segredos do CSS: Melhores Soluções para Problemas Cotidianos de Design Web', 
            autor: 'Lea Verou', 
            descricao: 'Este livro revela truques e técnicas de CSS que podem resolver problemas comuns de design web.',
            link: '5https://www.amazon.com.br/CSS-Secrets-Lea-Verou/dp/1449372635/ref=sr_1_1?dib=eyJ2IjoiMSJ9.vDHXECw1ZliGXUYV8nyxDgmmg-7ScUKL2zKjX4qQZO0R4Ha93KCjiVRht4i5SZoo.i8FKaQrd2oSAzEQ5-N7Us6H3fkyjKKnt1oAG1og-_9I&dib_tag=se&qid=1725747510&refinements=p_27%3ALea+Verou&s=books&sr=1-1',
            imagem: 'https://m.media-amazon.com/images/I/91EGxvygVTL._SY385_.jpg' 
        },
        { 
            titulo: 'Design Responsivo com HTML5 e CSS', 
            autor: 'Ben Frain', 
            descricao: 'Um guia prático para construir sites modernos e responsivos usando HTML5 e CSS.',
            link: 'https://www.amazon.com.br/Responsive-Web-Design-HTML5-Third/dp/1839211563',
            imagem: 'https://m.media-amazon.com/images/I/71xVO2SmgaL._SY385_.jpg' 
        },
        { 
            titulo: 'Aprendendo Design Web: Um Guia para Iniciantes em HTML, CSS, JavaScript e Gráficos Web', 
            autor: 'Jennifer Niederst Robbins', 
            descricao: 'Perfeito para iniciantes, este livro cobre todos os fundamentos de HTML, CSS e JavaScript.',
            link: 'https://www.amazon.com.br/Learning-Web-Design-Beginners-JavaScript/dp/1449319270',
            imagem: 'https://m.media-amazon.com/images/I/91YPcsFTbIL._SY385_.jpg' 
        },
        { 
            titulo: 'CSS: O Guia Definitivo', 
            autor: 'Eric A. Meyer', 
            descricao: 'Um recurso abrangente que abrange tudo o que você precisa saber sobre CSS.',
            link: 'https://www.amazon.com.br/CSS-Definitive-Guide-Eric-Meyer/dp/0596527330',
            imagem: 'https://m.media-amazon.com/images/I/61nbxIjEPvS._SY385_.jpg' 
        }

    ];

    
    function buscarLivros(query) {
        return books.filter(books => 
            books.titulo.toLowerCase().includes(query.toLowerCase()) || 
            books.autor.toLowerCase().includes(query.toLowerCase())
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
    
                const imagemDiv = document.createElement('div');
                imagemDiv.classList.add('imagem-div');
    
                const imagem = document.createElement('img');
                imagem.src = livro.imagem;
                imagem.alt = `Capa do livro ${livro.titulo}`;
                imagem.classList.add('livro-imagem');
    
                imagemDiv.appendChild(imagem);
    
                const livroDiv = document.createElement('div');
                livroDiv.classList.add('livro-info');
                livroDiv.innerHTML = `
                    <strong>${livro.titulo}</strong> - ${livro.autor}
                    <p>${livro.descricao}</p>
                `;
    
                const linkBtn = document.createElement('a');
                linkBtn.href = livro.link;
                linkBtn.textContent = 'Saiba Mais';
                linkBtn.classList.add('botao-link');
                linkBtn.target = '_blank';
    
                livroDiv.appendChild(linkBtn);
    
                itemResultado.appendChild(imagemDiv);
                itemResultado.appendChild(livroDiv);     
                resultsContainer.appendChild(itemResultado); 
            });
        } else {
            resultsContainer.innerHTML = '<p>Nenhum livro encontrado.</p>';
        }
    });
    
});