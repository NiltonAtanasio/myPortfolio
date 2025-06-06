// Estrutura dos tópicos e subtópicos
export const blogData = [
  {
    id: 1,
    title: "Node.js",
    subtopics: [
      {
        id: 1,
        title: "Node.js para Iniciantes",
        content: [
          {
            type: "p",
            text: "E aí, dev! 👋 Tá começando agora no mundo do Node.js e não sabe por onde começar? Relaxa, que hoje a gente vai descomplicar tudo! Vamos falar desde o que é Node.js até como criar seu primeiro servidor. Bora? 😎",
          },
          {
            type: "h2",
            text: "O que é Node.js?",
          },

          {
            type: "p",
            text: "Node.js não é uma linguagem de programação, viu? É um ambiente de execução que permite rodar JavaScript fora do navegador (sim, JS no backend! 🎉)."
          },
          {
            type: "ul",
            items: [
              "🔹 Criado em 2009 por Ryan Dahl",
              "🔹 Baseado no motor V8 do Google Chrome (aquele que executa JS super rápido)",
              "🔹 Event-driven e não-bloqueante (ou seja, lida com muitas conexões sem travar)"
            ]
          },
          {
            type: "p",
            text: "Resumindo: Node.js deixa você usar JavaScript para criar aplicações server-side, como APIs, servidores e até chatbots!"
          },
          {
            type: "h2",
            text: "✨ Por Que Usar Node.js?",
          },
          {
            type: "p",
            text: "Se você já manja de JavaScript, vai adorar o Node! Mas não é só por isso que ele é tão popular:"

          },
          {
            type: "ul",
            items: [
              "✅ Rápido e eficiente (graças ao modelo não-bloqueante)",
              "✅ Ótimo para aplicações em tempo real (como chats e jogos online)",
              "✅ Ecossistema gigante (npm tem milhões de pacotes prontos pra usar!)",
              "✅ Fácil de aprender (se já sabe JS, metade do caminho tá feito)",
            ],
          },
          {
            type: "h2",
            text: "🔧 Instalando o Node.js",
          },
          {
            type: "p",
            text: "Antes de começar, você precisa instalar o Node no seu PC. É super fácil:"
          },
          {
            type: "ul",
            items: [
              "Acesse https://nodejs.org/",
              "Baixe a versão LTS (recomendada para maioria dos usuários)",
              "Siga o instalador (next, next, finish! ✔️)",
            ]
          },
          {
            type: "p",
            text: "Depois, abra o terminal e digite:"
          },
          {
            type: "code",
            language: "bash",
            content:
              "node -v",
          },
          {
            type: "p",
            text: "Se aparecer a versão (ex: v18.12.1), tudo certo! 🎉"
          },
        ],
      },
      {
        id: 2,
        title: "O Que é npm?",
        content: [
          {
            type: "p",
            text: "O npm (Node Package Manager) é muito mais do que um simples gerenciador de pacotes - é a ferramenta fundamental que torna o Node.js tão poderoso e popular. Vamos explorar em detalhes como ele funciona e por que é tão importante.",
          },

          {
            type: "h2",
            text: "🔍 O Que é npm Exatamente?",
          },
          {
            type: "p",
            text: "O npm é:",
          },
          {
            type: "ul",
            items: [
              "✅ Gerenciador de Pacotes Padrão do Node.js (como uma loja de aplicativos para código)",
              "✅ Maior Registro de Software do Mundo (com mais de 2 milhões de pacotes públicos)",
              "✅ Ferramenta de Gestão de Dependências para seus projetos",
            ]
          },
          {
            type: "p",
            text: "Ele resolve um problema crítico: como compartilhar e reutilizar código de forma organizada.",
          },
          {
            type: "h2",
            text: "⚙️ Como o npm Funciona?",
          },
          {
            type: "p",
            text: "Estrutura Básica",
          },
          {
            type: "ul",
            items: [
              "Registro npm: Um repositório online de pacotes (https://www.npmjs.com/)",
              "CLI (Interface de Linha de Comando): Ferramenta que você usa no terminal",
              "package.json: Arquivo que descreve seu projeto e suas dependências",
            ]
          },
          {
            type: "p",
            text: "Comandos Essenciais",
          },
          {
            type: "ul",
            items: [
              "➡️​ Comando: npm init | O que faz: Cria um novo projeto Node.js | Exemplo: npm init -y (cria com configurações padrão)",
              "➡️​ Comando: npm install | O que faz: Instala um pacote | Exemplo: npm install express",
              "➡️​ Comando: npm uninstall | O que faz: Remove um pacote | Exemplo: npm uninstall lodash",
              "➡️​ Comando: npm update | O que faz: Atualiza pacotes | Exemplo: npm update express",
              "➡️​ Comando: npm list | O que faz: Mostra pacotes instalados | Exemplo: npm list --depth=0 (mostra apenas os principais)",

            ]
          },
          {
            type: "h2",
            text: "💡 Boas Práticas com npm",
          },
          {
            type: "ul",
            items: [
              "✔️​​ Sempre inicie projetos com npm init",
              "✔️​​ Verifique versões com npm outdated",
              "✔️​​ Atualize regularmente com npm update",
              "✔️​​ Use npm audit para verificar vulnerabilidades",
              "✔️​​ Documente scripts úteis no package.json",

            ]
          },
        ],
      },
      {
        id: 3,
        title: "Express.js",
        content: [
          {
            type: "p",
            text: "Se você já entendeu o básico do Node.js, agora é hora de conhecer o Express - o framework que torna a criação de servidores web muito mais fácil! Vamos explicar tudo de forma simples e prática. ✨"
          },
          {
            type: "h2",
            text: "O Que é Express.js?",
          },


          {
            type: "p",
            text: "O Express é um framework minimalista para Node.js que facilita:"
          },
          {
            type: "ul",
            items: [
              "🔹 Criar servidores web e APIs",
              "🔹 Definir rotas (URLs que respondem a requisições)",
              "🔹 Gerenciar requisições (requests) e respostas (responses)",
              "🔹 Adicionar middlewares (funções intermediárias)"
            ]
          },
          {
            type: "p",
            text: "👉 É como um superpoder para o Node.js!"
          },
          {
            type: "h2",
            text: "💡 Por Que Usar Express?",
          },
          {
            type: "ul",
            items: [
              "🔹 Simplicidade: Faz em 5 linhas o que no Node puro levaria 20",
              "🔹 Flexibilidade: Você controla tudo, sem muitas opiniões impostas",
              "🔹 Middleware: Sistema de plugins poderoso",
              "🔹 Comunidade: Muitos tutoriais e pacotes disponíveis"
            ]
          },
          {
            type: "h2",
            text: "🛠️ Como Usar Express - Passo a Passo",
          },
          {
            type: "h3",
            text: "Instalação",
          },
          {
            type: "p",
            text: "Primeiro, crie um projeto Node e instale o Express:"

          },
          {
            type: "code",
            language: "bash",
            content:
              "npm init -y\nnpm install express",
          },
          {
            type: "h3",
            text: "Servidor Básico",
          },
          {
            type: "p",
            text: "Crie um arquivo server.js:"

          },
          {
            type: "code",
            language: "javascript",
            content:
              "import express from 'express')\nconst app = express()\nconst port = 3000\n\n// Rota principal\napp.get('/', (req, res) => {\nres.send('Olá Mundo! 🌎')\n})\n\n// Inicia o servidor\napp.listen(port, () => {\nconsole.log(`Servidor rodando em http://localhost:${port}`)\n})",
          },
          {
            type: "h3",
            text: "Principais Conceitos",
          },
          {
            type: "p",
            text: "🔄 Rotas - Definem como o servidor responde a requisições:"

          },
          {
            type: "code",
            language: "javascript",
            content:
              "// GET /produtos\napp.get('/produtos', (req, res) => {\nres.send('Lista de produtos')\n})\n\n// POST /produtos\napp.post('/produtos', (req, res) => {\nres.send('Criar novo produto')\n})",
          },
          {
            type: "p",
            text: "📦 Middlewares - Funções que processam requisições antes de chegar nas rotas:"
          },
          {
            type: "code",
            language: "javascript",
            content:
              "// Middleware para ler JSON\napp.use(express.json())\n\n// Middleware customizado\napp.use((req, res, next) => {\n console.log('Requisição recebida:', req.method, req.url)\n next() // Passa para o próximo middleware/rota\n})",
          },
          {
            type: "p",
            text: "📝 Parâmetros - Captura dados das URLs:"
          },
          {
            type: "code",
            language: "javascript",
            content:
              "// /produtos/123\napp.get('/produtos/:id', (req, res) => {\nconst productId = req.params.id\nres.send(`Detalhes do produto ${productId}`)\n})",
          },
          {
            type: "h2",
            text: "🔍 Exemplo Prático: API Simples",
          },
          {
            type: "p",
            text: "Vamos criar uma mini API para gerenciar tarefas:"
          },
          {
            type: "code",
            language: "javascript",
            content:
              "import express from 'express'\nconst app = express()\n\n// Habilita leitura de JSON\napp.use(express.json())\n\n// 'Banco de dados' temporário\nlet tasks = [\n{ id: 1, title: 'Aprender Express', done: false }\n]\n\n// GET /tasks - Lista todas tarefas\napp.get('/tasks', (req, res) => {\n  res.json(tasks)\n})\n\n// POST /tasks - Adiciona nova tarefa\napp.post('/tasks', (req, res) => {\n const newTask = req.body\ntasks.push(newTask)\n  res.status(201).send('Tarefa criada!')\n})\n\n",
          },
          {
            type: "h3",
            text: "Dica:",
          },
          {
            type: "p",
            text: "A documentação oficial https://expressjs.com é excelente para se aprofundar!",
            links: [
              {
                url: "https://expressjs.com/",
                text: "https://expressjs.com"
              }
            ]
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "MongoDB",
    subtopics: [
      {
        id: 1,
        title: "🥸​ Em breve...",
        content: [

        ],
      },
    ],
  },
  {
    id: 3,
    title: "Métodos Ágeis",
    subtopics: [
      {
        id: 1,
        title: "🥸​ Em breve...",
        content: [

        ],
      },
    ],
  },
  {
    id: 4,
    title: "Power BI",
    subtopics: [
      {
        id: 1,
        title: "🥸​ Em breve...",
        content: [

        ],
      },
    ],
  },
];