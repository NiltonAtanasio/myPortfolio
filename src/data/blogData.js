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
        title: "Single Thread, LibUV e I/O Não-Bloqueante",
        content: [
          {
            type: "p",
            text: "E aí, dev! 👋 Tá confuso com esse papo de 'Node.js é single-thread mas faz coisas em paralelo'? 🤯 Calma que hoje a gente vai desvendar toda a mágica por trás disso! Vamos falar de:"
          },
          {
            type: "ul",
            items: [
              "✅ Single Thread (o que diabos isso significa?)",
              "✅ LibUV (a biblioteca poderosa por trás do Node.js)",
              "✅ I/O Não-Bloqueante (como o Node lida com milhares de conexões)"
            ]
          },
          {
            type: "p",
            text: "Bora decifrar esse quebra-cabeça? 🔍"
          },
          {
            type: "h2",
            text: "🤔 O Que Significa 'Single Thread'?",
          },
          {
            type: "p",
            text: "Primeiro, vamos entender o básico:"
          },
          {
            type: "ul",
            items: [
              "Thread → 'Linha de execução' (um caminho que o processador segue para executar código).",
              "Single Thread → O Node.js roda seu código JavaScript em apenas uma thread principal.",
              "🔹 Mas Como Assim 'Single Thread'?"
            ]
          },
          {
            type: "p",
            text: "Se você tem um código assim:"
          },
          {
            type: "code",
            language: "javascript",
            content:
              "console.log('Início');\nsetTimeout(() => console.log('Timeout'), 1000);\nconsole.log('Fim');",
          },
          {
            type: "p",
            text: "Tudo isso é executado na mesma thread."
          },
          {
            type: "h3",
            text: " E Isso Não é Ruim?",
          },
          {
            type: "p",
            text: "Não! Porque o Node.js não fica esperando operações lentas (como ler um arquivo ou fazer uma requisição HTTP). Ele delega essas tarefas e continua executando outras coisas."
          },
          {
            type: "p",
            text: "👉 Resumo: 'Single thread' significa que seu código JS roda em uma única thread, mas operações de I/O (entrada/saída) são tratadas em segundo plano."
          },
          {
            type: "h2",
            text: "⚡ LibUV: O Motor do Node.js",
          },
          {
            type: "p",
            text: "Aqui entra a LibUV (Unicorn Velociraptor... brincadeira, é Unicorn Velox 😆)."
          },
          {
            type: "h3",
            text: "🔹 O Que a LibUV Faz?",
          },
          {
            type: "ul",
            items: [
              "Gerencia operações assíncronas (I/O de arquivos, redes, timers).",
              "Implementa o Event Loop (aquele ciclo que fica verificando callbacks).",
              "Usa uma thread pool (sim, o Node tem threads escondidas!)."
            ]
          },
          {
            type: "h3",
            text: "🔹 Thread Pool? Mas Não Era Single Thread?",
          },
          {
            type: "ul",
            items: [
              "Seu código JS roda em uma thread, mas:",
              "Operações pesadas (como ler arquivos) são enviadas para 4 threads paralelas (default).",
              "Isso evita que a thread principal trave."
            ]
          },
          {
            type: "p",
            text: "👉 Exemplo:"
          },
          {
            type: "code",
            language: "javascript",
            content:
              "const fs = require('fs');\n\n// Isso vai para o Thread Pool!\nfs.readFile('arquivo.txt', (err, data) => {\n  console.log('Arquivo lido!');\n});",
          },
          {
            type: "h2",
            text: "🚀 I/O Não-Bloqueante: O Poder do Node.js",
          },
          {
            type: "p",
            text: "Agora a parte mais importante: como o Node.js lida com milhares de conexões sem travar?"
          },
          {
            type: "h3",
            text: "🔹 Bloqueante vs Não-Bloqueante",
          },
          {
            type: "p",
            text: "🐢Modelo Bloqueante: Espera cada operação terminar antes de continuar | Usado em PHP, Java (tradicional)"
          },
          {
            type: "p",
            text: "🚀Modelo Não-Bloqueante: Delega operações e segue executando código | Usado em Node.js, Go, Rust"
          },
          {
            type: "h3",
            text: "🔹 Exemplo Prático"
          },
          {
            type: "code",
            language: "javascript",
            content:
              "// Código NÃO-BLOQUEANTE\nconsole.log('Início');\n\nsetTimeout(() => console.log('Timeout'), 0); // I/O assíncrono\n\nconsole.log('Fim');",
          },
          {
            type: "p",
            text: "Saída:"
          },
          {
            type: "code",
            language: "bash",
            content:
              "Início\nFim\nTimeout",
          },
          {
            type: "p",
            text: "Por quê?"
          },
          {
            type: "ul",
            items: [
              "setTimeout é não-bloqueante (vai para a LibUV).",
              "O Node.js não espera e já executa o próximo console.log.",

            ]
          },
          {
            type: "h2",
            text: "🎯 Como Tudo Isso Se Junta?"
          },
          {
            type: "ul",
            items: [
              "Seu código roda na thread principal (single thread).",
              "Operações de I/O (arquivos, rede, etc.) são delegadas para: LibUV (que usa thread pool ou sistemas operacionais)",
              "Quando a operação termina, o callback vai para a fila de eventos.",
              "O Event Loop pega o callback e executa na thread principal.",
            ]
          },
          {
            type: "p",
            text: "👉 Resultado: Seu servidor Node.js consegue lidar com 10.000+ conexões sem travar!"
          },
          {
            type: "h2",
            text: "🚨 Cuidado com Código Bloqueante!"
          },
          {
            type: "p",
            text: "Se você fizer isso:"
          },
          {
            type: "code",
            language: "javascript",
            content:
              "// Código BLOQUEANTE (trava tudo!)\nfunction calcularPesado() {\n let soma = 0;\nfor (let i = 0; i < 1e10; i++) soma += i;\nreturn soma;\n}\n\nconsole.log('Início');\ncalcularPesado(); // TRAVA A THREAD PRINCIPAL! 😱\nconsole.log('Fim');",
          },
          {
            type: "p",
            text: "Solução:"
          },
          {
            type: "ul",
            items: [
              "✅ Use Worker Threads para tarefas pesadas.",
              "✅ Divida em callbacks assíncronos.",

            ]
          },
        ],
      },
      {
        id: 6,
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
        title: "O Guia Descomplicado",
        content: [
          {
            type: "p",
            text: "E aí, pessoal! Tudo bem com vocês? Hoje vamos mergulhar no mundo dos métodos ágeis—um tema que parece complexo, mas que, quando quebrado direitinho, fica superfácil de entender. 😎"
          },
          {
            type: "p",
            text: "Se você já ouviu falar em Scrum, Kanban, XP e ficou confuso, relaxa! Vamos explicar tudinho de um jeito leve e descontraído. Bora lá? 👇"
          },
          {
            type: "h2",
            text: "🔍 O Que São Métodos Ágeis?",
          },
          {
            type: "p",
            text: "Métodos ágeis são abordagens flexíveis para gerenciar projetos, especialmente no desenvolvimento de software. Ao invés de seguir um plano rígido e demorado (como no método tradicional cascata), os times ágeis trabalham em ciclos curtos, chamados de iterações ou sprints, entregando valor constantemente."
          },
          {
            type: "p",
            text: "💡 Resumindo: É como construir um carro peça por peça, testando e melhorando a cada etapa, em vez de montar tudo de uma vez só e só ver o resultado no final."
          },
          {
            type: "h2",
            text: "🤔 Por Que os Métodos Ágeis Surgiram?",
          },
          {
            type: "p",
            text: "Nos anos 90 e início dos 2000, o desenvolvimento de software era lento e burocrático. Os projetos demoravam anos para ficar prontos e, quando ficavam, muitas vezes já estavam ultrapassados ou não atendiam às necessidades reais dos clientes. 😫 Em 2001, um grupo de experts se reuniu e criou o 'Manifesto Ágil', um documento com 4 valores e 12 princípios que revolucionaram a forma de trabalhar. Os pilares principais são"
          },
          {
            type: "ul",
            items: [
              "✅ Indivíduos e interações > Processos e ferramentas",
              "✅ Software funcionando > Documentação extensiva",
              "✅ Colaboração com o cliente > Negociação de contratos",
              "✅ Responder a mudanças > Seguir um plano fixo"
            ]
          },
          {
            type: "p",
            text: "Ou seja, adaptabilidade e pessoas em primeiro lugar! 🎯"
          },
          {
            type: "h2",
            text: "💥 Quais Problemas os Métodos Ágeis Resolvem?",
          },
          {
            type: "p",
            text: "Se antes os projetos eram lentos e cheios de falhas, os métodos ágeis vieram para acelerar entregas, reduzir riscos e aumentar a satisfação do cliente. Veja alguns problemas que eles ajudam a resolver:"
          },
          {
            type: "ul",
            items: [
              "🔹 Mudanças de última hora → Com ciclos curtos, é mais fácil ajustar o rumo.",
              "🔹 Falta de transparência → Reuniões diárias (como o Daily Scrum) mantêm todo mundo alinhado.",
              "🔹 Entregas demoradas → Pequenas partes do projeto são concluídas e testadas rapidamente",
              "🔹 Clientes insatisfeitos → O feedback constante garante que o produto atenda às reais necessidades."
            ]
          },
          {
            type: "h2",
            text: "🎯 E aí, Bora Ser Ágil?",
          },
          {
            type: "p",
            text: "Se você quer trabalhar de forma mais inteligente, rápida e colaborativa, os métodos ágeis são o caminho! Nos próximos posts, vamos explorar Scrum, Kanban, Lean e outras metodologias incríveis. Fiquem ligados! 📢"
          },
        ],
      },
      {
        id: 2,
        title: "Princípios, Estruturas e Kanban!",
        content: [
          {
            type: "p",
            text: "E aí, galera! No último post, demos uma introdução massa sobre o que são métodos ágeis e por que eles são tão importantes. Hoje, vamos mergulhar mais fundo nos 12 princípios do Manifesto Ágil, entender por que chamamos de 'estrutura' e não só 'método', e ainda explorar o Kanban—uma das abordagens mais flexíveis do mundo ágil."
          },
          {
            type: "p",
            text: "Bora descomplicar tudo? 👇"
          },
          {
            type: "h2",
            text: "📜 Os 12 Princípios do Manifesto Ágil ",
          },
          {
            type: "p",
            text: "O Manifesto Ágil não tem só 4 valores, mas também 12 princípios que guiam a mentalidade ágil. Vamos ver os mais importantes de um jeito fácil:"
          },
          {
            type: "ul",
            items: [
              "1️⃣ Satisfação do cliente ➝ Entregar software funcional rápido e com frequência. 🏆",
              "2️⃣ Aceitar mudanças ➝ Requisitos mudam, e tá tudo bem! 🔄",
              "3️⃣ Entregas frequentes ➝ De semanas a meses, com preferência para prazos curtos. ⏳",
              "4️⃣ Trabalho em conjunto ➝ Pessoas de negócio e devs colaborando todo dia. 🤝",
              "3️⃣ Entregas frequentes ➝ De semanas a meses, com preferência para prazos curtos. ⏳",
              "4️⃣ Trabalho em conjunto ➝ Pessoas de negócio e devs colaborando todo dia. 🤝",
              "3️⃣ Entregas frequentes ➝ De semanas a meses, com preferência para prazos curtos. ⏳",
              "4️⃣ Trabalho em conjunto ➝ Pessoas de negócio e devs colaborando todo dia. 🤝",
              "5️⃣ Times motivados ➝ Dê autonomia e confiança para quem faz acontecer. 💪",
              "6️⃣ Conversa cara a cara ➝ A melhor forma de comunicação é direta! 🗣️",
              "7️⃣ Software funcionando = progresso ➝ Não adianta documentação sem resultado. ✅",
              "8️⃣ Ritmo sustentável ➝ Trabalhar em um fluxo que não queime a equipe. ♻️",
              "9️⃣ Excelência técnica ➝ Boa arquitetura e design para agilidade a longo prazo. 🛠️",
              "🔟 Simplicidade ➝ Fazer só o necessário, sem complicação. ✨",
              "1️⃣1️⃣ Times auto-organizáveis ➝ Decisões vêm de quem está na ação. 🧠",
              "1️⃣2️⃣ Refletir e ajustar ➝ Melhoria contínua é a chave! 🔄",

            ]
          },
          {
            type: "p",
            text: "💡 Resumo: O foco é valor, adaptação e pessoas, não burocracia!"
          },
          {
            type: "h2",
            text: "🤷 Por Que 'Estrutura' e Não 'Método'?",
          },
          {
            type: "p",
            text: "Você já deve ter ouvido 'metodologia ágil', mas o termo mais correto é 'estrutura ágil' ou 'framework ágil'. Mas por quê?"
          },
          {
            type: "ul",
            items: [
              "🔹 Método ➝ Parece algo engessado, com regras fixas (e ágil é justamente o oposto!).",
              "🔹 Estrutura/Framework ➝ São guias flexíveis, que se adaptam ao contexto do time.",

            ]
          },
          {
            type: "p",
            text: "Ou seja, Scrum e Kanban não são receitas de bolo, mas sim modelos que você ajusta conforme sua necessidade. 🎯"
          },
          {
            type: "h2",
            text: "📌 Kanban: O Método Visual e Fluido",
          },
          {
            type: "p",
            text: "Se tem uma estrutura ágil que é simples e poderosa, é o Kanban! Ele veio do sistema Toyota de produção e foi adaptado para TI e outros setores."
          },
          {
            type: "h3",
            text: "🔹 Como Funciona?",
          },
          {
            type: "ul",
            items: [
              "Tarefas são colocadas em um quadro visual (físico ou digital, como Trello/Jira).",
              "Dividido em colunas, geralmente: 'Pendentes' | 'Em Processo' | 'Terminado' (mas pode customizar, como adicionar uma coluna de 'Prioridades').",
              "Limite de trabalho em progresso (WIP) ➝ Evita sobrecarregar o time.",

            ]
          },
          {
            type: "h3",
            text: "🔹 Benefícios do Kanban",
          },
          {
            type: "ul",
            items: [
              "✅ Visualização clara do fluxo de trabalho.",
              "✅ Flexibilidade total – sem sprints fixos como no Scrum.",
              "✅ Melhoria contínua através da análise do fluxo.",

            ]
          },
          {
            type: "h3",
            text: "🔹 Quando Usar?",
          },
          {
            type: "ul",
            items: [
              "Times que precisam de mais liberdade sem cerimônias rígidas.",
              "Suporte e manutenção (onde demandas chegam a todo momento).",
              "Qualquer área! Desde TI até marketing e RH.",
            ]
          },
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