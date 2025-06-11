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
        title: "O Que é Yarn?",
        content: [
          {
            type: "p",
            text: "E aí, dev! Tá cansado de só usar o npm e quer descobrir o que o Yarn tem de especial? Então bora desvendar esse gerenciador de pacotes que veio pra turbinar seus projetos Node.js!✨"
          },
          {
            type: "h2",
            text: "O Gerenciador de Pacotes Turbo para Node.js 🚀🧶"
          },
          {
            type: "p",
            text: "O Yarn (Yet Another Resource Negotiator) é um gerenciador de pacotes criado pelo Facebook em 2016 para resolver alguns problemas do npm, como:"
          },
          {
            type: "ul",
            items: [
              "⚡ Velocidade  (instalações mais rápidas)",
              "🔒 Consistência (garante que todos na equipe usem as mesmas versões)",
              "🔐 Segurança  (verificação mais rigorosa dos pacotes)"
            ]
          },
          {
            type: "p",
            text: "👉 Traduzindo: Yarn é um 'npm turbinado' com features extras que facilitam sua vida!"
          },
          {
            type: "h2",
            text: "💡 Por Que Usar Yarn?"
          },
          {
            type: "h3",
            text: "🔹 Comparação Rápida: Yarn vs npm"
          },
          {
            type: "ul",
            items: [
              "Velocidade:  Yarn 🧶 Mais rápido (usa cache local) - npm 📦 Mais lento",
              "Lock File: Yarn 🧶 yarn.lock (mais preciso) - npm 📦 package-lock.json",
              "Comandos: Yarn 🧶 yarn add / yarn install - npm 📦 npm install",
              "Offline Mode: Yarn 🧶 Sim (usa cache)✅ - npm 📦 Não❌"
            ]
          },
          {
            type: "h3",
            text: "🔹 Vantagens do Yarn"
          },
          {
            type: "ul",
            items: [
              "✅ Instalações paralelas (baixa vários pacotes ao mesmo tempo)",
              "✅ Checksum verification (verifica a integridade dos pacotes)",
              "✅ Workspaces (ótimo para projetos com múltiplos pacotes)"
            ]
          },
          {
            type: "h2",
            text: "🛠️ Instalando o Yarn"
          },
          {
            type: "p",
            text: "Antes de começar, você precisa instalar o Yarn globalmente na sua máquina:"
          },
          {
            type: "code",
            language: "bash",
            content:
              "npm install -g yarn",
          },
          {
            type: "p",
            text: "Depois, verifique se a instalação funcionou:"
          },
          {
            type: "code",
            language: "bash",
            content:
              "yarn --version",
          },
          {
            type: "p",
            text: "Se aparecer a versão (ex: 1.22.19), tudo certo! 🎉"
          },
          {
            type: "h2",
            text: "📦 Comandos Básicos do Yarn"
          },
          {
            type: "h3",
            text: "Iniciando um Projeto"
          },
          {
            type: "code",
            language: "bash",
            content:
              "yarn init",
          },
          {
            type: "p",
            text: "Isso cria um package.json igual ao do npm, mas você pode usar:"
          },
          {
            type: "code",
            language: "bash",
            content:
              "yarn init -y  # Pula as perguntas e usa configurações padrão",
          },
          {
            type: "h3",
            text: "Instalando Pacotes"
          },
          {
            type: "p",
            text: "Instalar uma dependência:"
          },
          {
            type: "code",
            language: "bash",
            content:
              "yarn add express",
          },
          {
            type: "p",
            text: "Instalar como devDependency (ferramentas de desenvolvimento):"
          },
          {
            type: "code",
            language: "bash",
            content:
              "yarn add --dev typescript",
          },
          {
            type: "p",
            text: "Instalar globalmente (CLI tools):"
          },
          {
            type: "code",
            language: "bash",
            content:
              "yarn global add nodemon",
          },
          {
            type: "h3",
            text: "Removendo Pacotes"
          },
          {
            type: "code",
            language: "bash",
            content:
              "yarn remove lodash",
          },
          {
            type: "h3",
            text: "Atualizando Pacotes"
          },
          {
            type: "code",
            language: "bash",
            content:
              "yarn upgrade  # Atualiza tudo\nyarn upgrade express  # Atualiza apenas o Express",
          },
          {
            type: "h3",
            text: "Rodando Scripts"
          },
          {
            type: "p",
            text: "No package.json:"
          },
          {
            type: "code",
            language: "bash",
            content:
              "'scripts': {\n'start': 'node index.js'\n,'dev': 'nodemon index.js'\n}",
          },
          {
            type: "p",
            text: "No terminal:"
          },
          {
            type: "code",
            language: "bash",
            content:
              "yarn start\nyarn dev",
          },
          {
            type: "h2",
            text: "🔍 O Que é o yarn.lock?"
          },
          {
            type: "p",
            text: "O yarn.lock é um arquivo super importante que:"
          },
          {
            type: "ul",
            items: [
              "✅ Trava as versões exatas dos pacotes instalados.",
              "✅ Garante consistência entre diferentes ambientes (seu PC, servidor, CI/CD).",
            ]
          },
          {
            type: "p",
            text: "👉 Nunca mexa manualmente nele! O Yarn atualiza ele automaticamente."
          },
          {
            type: "h2",
            text: "📌 Migrando de npm para Yarn"
          },
          {
            type: "p",
            text: "Se você já tem um projeto com npm e quer migrar para Yarn:"
          },
          {
            type: "p",
            text: "Delete a node_modules e o package-lock.json:"
          },
          {
            type: "code",
            language: "bash",
            content:
              "rm -rf node_modules package-lock.json",
          },
          {
            type: "p",
            text: "Instale as dependências com Yarn:"
          },
          {
            type: "code",
            language: "bash",
            content:
              "yarn install",
          },
          {
            type: "p",
            text: "Pronto! Agora seu projeto usa Yarn. 🎉"
          },
          {
            type: "h3",
            text: "Mas e aí, vai continuar no npm ou partir pro Yarn? Testa aí e me conta o que achou! 😉"
          },
        ]
      },
      {
        id: 4,
        title: "Event Loop e Call Stack",
        content: [
          {
            type: "p",
            text: "E aí, dev curioso! 👋 Tá afim de entender como o Node.js consegue ser tão rápido e lidar com milhares de conexões ao mesmo tempo? Então bora desvendar dois conceitos super importantes: o Call Stack e o Event Loop!"
          },
          {
            type: "h2",
            text: "🤔 O Que é o Call Stack? (Pilha de Chamadas)",
          },


          {
            type: "p",
            text: "Imagine que o Call Stack é uma pilha de pratos 🍽️:"
          },
          {
            type: "ul",
            items: [
              "👉 Quando você chama uma função, ela é colocada no topo da pilha.",
              "👉 Quando a função termina, ela é removida da pilha.",
            ]
          },
          {
            type: "p",
            text: " É assim que o JavaScript sabe qual função está rodando no momento!"
          },
          {
            type: "h3",
            text: "🔹 Exemplo Prático",
          },
          {
            type: "code",
            language: "javascript",
            content:
              "function saudacao() {\nconsole.log('Olá!');\n}\n\nfunction despedida() {\nconsole.log('Tchau!');\n}\n\nsaudacao();  // 1° na pilha\ndespedida(); // 2° na pilha",
          },
          {
            type: "h3",
            text: "Como o Call Stack funciona nesse caso?"

          },
          {
            type: "p",
            text: "saudacao() entra na pilha → executa console.log('Olá!') → sai da pilha ✅"
          },
          {
            type: "p",
            text: "despedida() entra na pilha → executa console.log('Tchau!') → sai da pilha ✅"
          },
          {
            type: "p",
            text: "Fácil, né? Mas e se a função for assíncrona? Aí a coisa fica interessante!"
          },
          {
            type: "h2",
            text: "🌀 O Que é o Event Loop?",
          },
          {
            type: "p",
            text: "O Event Loop é o cérebro do Node.js! Ele é responsável por:"

          },
          {
            type: "ul",
            items: [
              "✅ Verificar o Call Stack (se está vazio).",
              "✅ Pegar callbacks da fila de eventos e colocá-los no Call Stack.",
              "✅ Garantir que operações assíncronas não bloqueiem o código.",
            ]
          },
          {
            type: "h3",
            text: "🔹 Como o Event Loop Funciona?",
          },
          {
            type: "p",
            text: "Imagine que o Node.js é um restaurante 🍕:"
          },
          {
            type: "p",
            text: "Call Stack → Cozinha (onde as coisas são preparadas)."
          },
          {
            type: "p",
            text: "Callback Queue → Balcão de pedidos prontos.:"
          },
          {
            type: "p",
            text: "Event Loop → Garçom que leva os pedidos prontos pra cozinha quando ela está livre."
          },
          {
            type: "p",
            text: "Exemplo com setTimeout:"
          },
          {
            type: "code",
            language: "javascript",
            content:
              "console.log('Início'); // 1° no Call Stack\n\nsetTimeout(() => {\n console.log('Timeout depois de 2s'); // Vai pro Callback Queue\n}, 2000);\n\nconsole.log('Fim'); // 2° no Call Stack",
          },
          {
            type: "h3",
            text: "O que acontece?"
          },
          {
            type: "ul",
            items: [
              "console.log('Início') → roda e sai do Call Stack.",
              "setTimeout → não bloqueia o código! Ele manda a callback pra Web APIs (que contam os 2 segundos).",
              "console.log('Fim') → roda e sai do Call Stack.",
              "Call Stack vazio? ✅ → Event Loop pega a callback do setTimeout e joga no Call Stack.",
            ]
          },
          {
            type: "p",
            text: "Saída:"
          },
          {
            type: "code",
            language: "text",
            content:
              "Início\nFim\nTimeout depois de 2s",
          },
          {
            type: "h2",
            text: "🚨 Bloqueando o Event Loop (CUIDADO!)"
          },
          {
            type: "p",
            text: "Se você colocar um código síncrono pesado no Call Stack, o Event Loop não consegue processar outras coisas!"
          },
          {
            type: "h3",
            text: "❌ Exemplo Ruim (Bloqueante):"
          },
          {
            type: "code",
            language: "javascript",
            content:
              "function tarefaPesada() {\nfor (let i = 0; i < 1e9; i++) {} // Loop gigante!\n}\n\nconsole.log('Início');\ntarefaPesada(); // TRAVA TUDO! 😱\nconsole.log('Fim');",
          },
          {
            type: "p",
            text: "✅ Solução: Use callbacks assíncronos ou Worker Threads!"
          },
        ],
      },
      {
        id: 5,
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
              // eslint-disable-next-line no-template-curly-in-string
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
              // eslint-disable-next-line no-template-curly-in-string
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