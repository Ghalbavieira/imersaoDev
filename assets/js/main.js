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
            link: 'https://link1.com' 
        },
        { 
            titulo: 'Eloquent JavaScript', 
            autor: 'Marijn Haverbeke', 
            descricao: 'Um livro moderno e prático que ensina JavaScript através de exemplos claros e compreensíveis.',
            link: 'https://link2.com' 
        },
        { 
            titulo: 'JavaScript: The Good Parts', 
            autor: 'Douglas Crockford', 
            descricao: 'Douglas Crockford analisa as melhores partes do JavaScript, recomendando práticas eficazes para programadores.',
            link: 'https://link3.com' 
        },
        { 
            titulo: 'Você Não Conhece JS: Escopo e Closures', 
            autor: 'Kyle Simpson', 
            descricao: 'Parte de uma série de livros que exploram profundamente o funcionamento do JavaScript. Este volume foca em escopo e closures.',
            link: 'https://link4.com' 
        },
        { 
            titulo: 'Padrões JavaScript', 
            autor: 'Stoyan Stefanov', 
            descricao: 'Um guia prático para padrões de design em JavaScript, ajudando a escrever código mais limpo e eficiente.',
            link: 'https://link5.com' 
        },
        { 
            titulo: 'Aprendendo Padrões de Design em JavaScript', 
            autor: 'Addy Osmani', 
            descricao: 'Este livro cobre padrões de design aplicados ao JavaScript, ideal para desenvolvedores que querem aprimorar suas habilidades.',
            link: 'https://link6.com' 
        },
        { 
            titulo: 'JavaScript Eficaz: 68 Maneiras Específicas de Explorar o Poder do JavaScript', 
            autor: 'David Herman', 
            descricao: 'Este livro oferece 68 maneiras específicas de escrever código JavaScript mais eficaz e robusto.',
            link: 'https://link7.com' 
        },
        { 
            titulo: 'JavaScript: O Guia Definitivo', 
            autor: 'David Flanagan', 
            descricao: 'Uma obra completa e detalhada que cobre tudo sobre JavaScript, desde fundamentos até conceitos avançados.',
            link: 'https://link8.com' 
        },
        { 
            titulo: 'Segredos do Ninja JavaScript', 
            autor: 'John Resig e Bear Bibeault', 
            descricao: 'Um guia para levar suas habilidades JavaScript para o próximo nível, ensinando técnicas avançadas.',
            link: 'https://link9.com' 
        },
        { 
            titulo: 'JavaScript Profissional para Desenvolvedores Web', 
            autor: 'Nicholas C. Zakas', 
            descricao: 'Um recurso essencial para desenvolvedores que querem dominar JavaScript em contextos profissionais.',
            link: 'https://link10.com' 
        },
        { 
            titulo: 'HTML e CSS: Projete e Construa Websites', 
            autor: 'Jon Duckett', 
            descricao: 'Um livro visualmente atraente que ensina HTML e CSS de forma simples e eficaz, ideal para iniciantes.',
            link: 'https://link11.com' 
        },
        { 
            titulo: 'Segredos do CSS: Melhores Soluções para Problemas Cotidianos de Design Web', 
            autor: 'Lea Verou', 
            descricao: 'Este livro revela truques e técnicas de CSS que podem resolver problemas comuns de design web.',
            link: 'https://link12.com' 
        },
        { 
            titulo: 'Design Responsivo com HTML5 e CSS', 
            autor: 'Ben Frain', 
            descricao: 'Um guia prático para construir sites modernos e responsivos usando HTML5 e CSS.',
            link: 'https://link13.com' 
        },
        { 
            titulo: 'Aprendendo Design Web: Um Guia para Iniciantes em HTML, CSS, JavaScript e Gráficos Web', 
            autor: 'Jennifer Niederst Robbins', 
            descricao: 'Perfeito para iniciantes, este livro cobre todos os fundamentos de HTML, CSS e JavaScript.',
            link: 'https://link14.com' 
        },
        { 
            titulo: 'CSS: O Guia Definitivo', 
            autor: 'Eric A. Meyer', 
            descricao: 'Um recurso abrangente que abrange tudo o que você precisa saber sobre CSS.',
            link: 'https://link15.com' 
        },
        { 
            titulo: 'Projetando Aplicações com Alto Volume de Dados', 
            autor: 'Martin Kleppmann', 
            descricao: 'Um guia essencial para arquitetar sistemas robustos e escaláveis, focado em aplicações intensivas de dados.',
            link: 'https://link21.com' 
        },
        { 
            titulo: 'Design de Banco de Dados e Teoria Relacional', 
            autor: 'Chris Date', 
            descricao: 'Este livro cobre os fundamentos do design de banco de dados relacional e teoria.',
            link: 'https://link22.com' 
        },
        { 
            titulo: 'Alta Performance com MySQL: Otimização, Backups e Replicação', 
            autor: 'Baron Schwartz, Peter Zaitsev e Vadim Tkachenko', 
            descricao: 'Aprenda como otimizar, fazer backup e replicar bancos de dados MySQL para alta performance.',
            link: 'https://link23.com' 
        },
        { 
            titulo: 'Desenvolvimento Web com Node.js', 
            autor: 'David Herron', 
            descricao: 'Um guia completo para construir e implantar aplicativos web de back-end com Node.js.',
            link: 'https://link24.com' 
        },
        { 
            titulo: 'Manual de Design de API REST', 
            autor: 'Mark Masse', 
            descricao: 'Este livro oferece diretrizes práticas para projetar APIs RESTful eficientes e escaláveis.',
            link: 'https://link25.com' 
        },
        { 
            titulo: 'Manual do Hacker de Aplicações Web', 
            autor: 'Dafydd Stuttard e Marcus Pinto', 
            descricao: 'Este livro detalha técnicas de hacking para aplicações web e como defendê-las.',
            link: 'https://link26.com' 
        },
        { 
            titulo: 'Cibersegurança e Ciberwar: O que Todos Precisam Saber', 
            autor: 'P.W. Singer e Allan Friedman', 
            descricao: 'Uma introdução acessível aos tópicos mais críticos em cibersegurança e guerra cibernética.',
            link: 'https://link27.com' 
        },
        { 
            titulo: 'Hacking: A Arte da Exploração', 
            autor: 'Jon Erickson', 
            descricao: 'Um clássico que ensina os fundamentos do hacking e da exploração de vulnerabilidades.',
            link: 'https://link28.com' 
        },
        { 
            titulo: 'Essenciais de Segurança de Redes: Aplicações e Padrões', 
            autor: 'William Stallings', 
            descricao: 'Uma visão abrangente sobre os princípios e práticas de segurança de redes.',
            link: 'https://link29.com' 
        },
        { 
            titulo: 'Engenharia de Segurança: Um Guia para Construir Sistemas Distribuídos Confiáveis', 
            autor: 'Ross Anderson', 
            descricao: 'Um livro essencial para compreender como construir sistemas seguros e confiáveis.',
            link: 'https://link30.com' 
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
        infoLink.style.display = 'none'; // Oculta o link até que um livro seja clicado

        if (resultados.length > 0) {
            resultados.forEach(livro => {
                const itemResultado = document.createElement('div');
                itemResultado.classList.add('item-resultado');

                const livroDiv = document.createElement('div');
                livroDiv.classList.add('livro-item');
                livroDiv.innerHTML = `<strong>${livro.titulo}</strong> - ${livro.autor}`;

                livroDiv.addEventListener('click', function() {
                    infoLink.href = livro.link; // Atualiza o href do link
                    infoLink.textContent = 'Mais Informações sobre ' + livro.titulo; // Atualiza o texto do link
                    infoLink.style.display = 'block'; // Torna o link visível
                });

                itemResultado.appendChild(livroDiv);
                resultsContainer.appendChild(itemResultado);
            });
        } else {
            resultsContainer.innerHTML = '<p>Nenhum livro encontrado.</p>';
        }
    });
});