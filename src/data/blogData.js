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
            text: "E aí, pessoal! Tudo bem com vocês? Hoje vamos mergulhar no mundo dos métodos ágeis, um tema que parece complexo, mas que, quando quebrado direitinho, fica superfácil de entender. 😎"
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
            text: "E aí, galera! No último post, demos uma introdução massa sobre o que são métodos ágeis e por que eles são tão importantes. Hoje, vamos mergulhar mais fundo nos 12 princípios do Manifesto Ágil, entender por que chamamos de 'estrutura' e não só 'método', e ainda explorar o Kanban, uma das abordagens mais flexíveis do mundo ágil."
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
              "2️⃣ Alterações ➝ Aceitar mudanças nos requisitos, mesmo nos estágios finais de desenvolvimento.! 🔄",
              "3️⃣ Entrega periódica ➝ Entrega periódica de software funcional, de preferência em ciclos curtos. ⏳",
              "4️⃣ Colaboração ➝ Colaboração estreita e diária entre a equipe de desenvolvimento e os clientes. . 🤝",
              "5️⃣ Projetos ➝ Projetos construídos em torno de indivíduos motivados, proporcionando o ambiente e o suporte necessários. 💪",
              "6️⃣ Comunicação ➝ Comunicação direta por meio do método mais eficaz de transmissão de informações. 🗣️",
              "7️⃣ Software ➝ O software funcional é o principal parâmetro de evolução.  ✅",
              "8️⃣ Sustentabilidade ➝ Desenvolvimento sustentável, mantendo um ritmo constante. . ♻️",
              "9️⃣ Atenção contínua ➝ Atenção à excelência técnica e ao bom projeto. 🛠️",
              "🔟 Simplicidade ➝ Simplicidade como a arte de maximizar a quantidade de trabalho não realizado. ✨",
              "1️⃣1️⃣ Equipes ➝ Equipes auto-organizadas para obter a melhor arquitetura, requisitos e projetos. 🧠",
              "1️⃣2️⃣ Reflexão ➝ Reflexão regular sobre como ser mais eficaz, ajustando o comportamento conforme necessário. 🔄",

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
      {
        id: 3,
        title: "Scrum: A Metáfora do Rugby",
        content: [
          {
            type: "p",
            text: "E aí, time! No último post, falamos dos princípios ágeis e do Kanban, certo? Hoje, vamos mergulhar no Scrum,a metodologia mais famosa do mundo ágil!"
          },
          {
            type: "p",
            text: "Vamos entender:"
          },
          {
            type: "ul",
            items: [
              "✅ O que significa o nome Scrum (e a metáfora do rugby!)",
              "✅ De onde veio e como surgiu",
              "✅ Por que times autogerenciados são tão importantes",
            ]
          },
          {
            type: "h2",
            text: "🏉 Scrum: A Metáfora do Rugby ",
          },
          {
            type: "p",
            text: "Você sabia que o nome Scrum vem do rugby? Pois é! No jogo, o 'scrum' (ou 'scrúmage') é aquela formação em que os jogadores se encaixam em conjunto para avançar com a bola."
          },
          {
            type: "ul",
            items: [
              "🔹 No desenvolvimento de software, a ideia é a mesma:",
              "O time se alinha em um objetivo.",
              "Trabalha junto em pequenos ciclos (sprints).",
              "Avança de forma coordenada, mesmo com obstáculos.",
            ]
          },
          {
            type: "p",
            text: "Ou seja, não é sobre individualidade, mas sobre colaboração! 🤝"
          },
          {
            type: "h2",
            text: "📜 A Origem do Scrum",
          },
          {
            type: "p",
            text: "O Scrum como metodologia surgiu nos anos 1980-1990, quando Jeff Sutherland e Ken Schwaber (inspirados por um artigo japonês sobre gestão de produtos) perceberam que os métodos tradicionais eram muito lentos para o mundo da tecnologia."
          },
          {
            type: "p",
            text: "Em 1995, eles formalizaram o Scrum como um framework ágil para desenvolvimento de software, baseado em:"
          },
          {
            type: "ul",
            items: [
              "Iterações curtas (sprints)",
              "Papéis definidos (Product Owner, Scrum Master, Dev Team)",
              "Cerimônias (Daily, Planning, Review, Retrospective)",
            ]
          },
          {
            type: "p",
            text: "E em 2001, o Scrum se tornou um dos pilares do Manifesto Ágil."
          },
          {
            type: "h2",
            text: "🔄 Times Autogerenciados: O Coração do Scrum",
          },
          {
            type: "p",
            text: "Um dos princípios mais importantes do Scrum é que o time se auto-organiza. Mas o que isso significa?"
          },
          {
            type: "ul",
            items: [
              "🔹 Não tem 'chefe' mandando ➝ O Scrum Master facilita, mas não decide pelo time.",
              "🔹 Decisões são coletivas ➝ O time escolhe como fazer o trabalho.",
              "🔹 Maior responsabilidade ➝ Todos são donos do resultado.",
            ]
          },
          {
            type: "h3",
            text: "💡 Por que isso funciona?",
          },
          {
            type: "ul",
            items: [
              "✅ Maior engajamento (quem decide se compromete mais).",
              "✅ Melhor criatividade (ideias vêm de todos, não só de um líder).",
              "✅ Adaptação rápida (o time pode ajustar o rumo sem burocracia).",

            ]
          },
          {
            type: "p",
            text: "Exemplo: se um dev vê um problema técnico, ele não precisa pedir permissão para mudar a abordagem, conversa com o time e ajusta!"
          },
          {
            type: "h2",
            text: "🎯 Conclusão: Scrum é Sobre Time e Adaptação!",
          },
          {
            type: "ul",
            items: [
              "Scrum vem do rugby → Trabalho em equipe e avanço conjunto.",
              "Surgiu nos anos 90 → Para resolver problemas de métodos lentos.",
              "Times autogerenciados → São mais ágeis, criativos e responsáveis.",
            ]
          },
        ],
      },
      {
        id: 4,
        title: "Produto Funcional, MVP e Gestão de Riscos",
        content: [
          {
            type: "p",
            text: "E aí, pessoal! No último post, falamos sobre Scrum, times autogerenciados e sua origem. Hoje, vamos entrar em um dos pilares mais importantes do desenvolvimento ágil: entregar valor rápido com produtos funcionais, MVPs e gestão inteligente de riscos."
          },
          {
            type: "p",
            text: "Se você já ouviu falar em MVP mas não sabe bem como aplicar, ou se quer entender como evitar falhas em projetos, esse post é pra você! Bora lá? 👇"
          },
          {
            type: "h2",
            text: "🎯 O Que é um 'Produto Funcional' no Ágil?",
          },
          {
            type: "p",
            text: "No manifesto ágil, um dos princípios diz:"
          },
          {
            type: "p",
            text: "'Entregar software funcionando é a principal medida de progresso.'"
          },
          {
            type: "p",
            text: "Mas o que isso significa na prática?"
          },
          {
            type: "ul",
            items: [
              "✅ Não é sobre documentação perfeita → É sobre ter algo usável nas mãos do cliente.",
              "✅ Não é sobre features completas → Mas sim sobre valor entregue em pequenas partes.",
              "✅ Não é protótipo ou mockup → É um produto realmente funcional, mesmo que mínimo.",
            ]
          },
          {
            type: "h3",
            text: "Exemplo Prático:",
          },
          {
            type: "p",
            text: "Se você está desenvolvendo um app de delivery, um produto funcional pode ser:"
          },
          {
            type: "ul",
            items: [
              "Um cadastro de usuários + cardápio básico (sem carrinho ou pagamento ainda).",
              "O cliente já pode testar o fluxo principal, mesmo que simples.",
            ]
          },
          {
            type: "h2",
            text: "📦 MVP (Minimum Viable Product): A Arte do 'Mínimo Necessário'",
          },
          {
            type: "p",
            text: "MVP significa Minimum Viable Product (Produto Mínimo Viável). A ideia é:"
          },
          {
            type: "ul",
            items: [
              "🔹 Criar a versão mais simples possível do produto que resolva o problema do usuário.",
              "🔹 Testar no mercado real para validar a ideia antes de investir tempo e dinheiro em algo que pode falhar.",
            ]
          },
          {
            type: "h3",
            text: "📌 Como Definir um MVP?",
          },
          {
            type: "ul",
            items: [
              "1️⃣ Qual problema você está resolvendo? (Ex.: 'Clientes demoram para escolher restaurantes.')",
              "2️⃣ Qual a solução mais simples? (Ex.: Um app com lista de restaurantes próximos e preços médios.)",
              "3️⃣ O que pode ser cortado? (Ex.: Não precisa de avaliações, cupons ou integração com pagamento ainda.)",
            ]
          },
          {
            type: "h3",
            text: "🚨 Erros Comuns no MVP",
          },
          {
            type: "ul",
            items: [
              "❌ Tentar fazer perfeito → MVP não é a versão final!",
              "❌ Ignorar feedback → Se o mercado não gostar, pivotar é melhor que insistir.",
              "❌ Achar que MVP é só um protótipo → Precisa ser usável, mesmo que básico.",
            ]
          },
          {
            type: "h2",
            text: "📈 Maximizando o Ajuste do Produto ao Mercado (Product-Market Fit - PMF)",
          },
          {
            type: "p",
            text: "O grande objetivo de um MVP é chegar ao Product-Market Fit (PMF), ou seja, o momento em que:"
          },
          {
            type: "p",
            text: "'Seu produto resolve uma dor real, para um público real, que está disposto a pagar por isso.'"
          },
          {
            type: "h3",
            text: "🔍 Como Saber Se Você Tem PMF?",
          },
          {
            type: "ul",
            items: [
              "Retenção de usuários → Eles voltam a usar o produto?",
              "Crescimento orgânico → Pessoas indicam seu produto sem propaganda?",
              "Feedback positivo → 'Como eu vivia sem isso antes? '",
            ]
          },
          {
            type: "h3",
            text: "🛠️ Estratégias para Atingir PMF",
          },
          {
            type: "ul",
            items: [
              "✔ Testar com usuários reais (entrevistas, beta-testers).",
              "✔ Medir métricas (taxa de conversão, NPS, churn).",
              "✔ Iterar rápido (se algo não funciona, mudar antes de gastar mais recursos).",

            ]
          },
          {
            type: "h2",
            text: "⚠️ Gestão de Riscos no Desenvolvimento Ágil",
          },
          {
            type: "p",
            text: "Um dos maiores benefícios do ágil é reduzir riscos desde o início. Como?"
          },
          {
            type: "h3",
            text: "1️⃣ Riscos de Mercado (O produto vai vender?)",
          },
          {
            type: "p",
            text: "Solução: MVP + validação contínua."
          },
          {
            type: "h3",
            text: "2️⃣ Riscos Técnicos (Vai funcionar como planejado?)",
          },
          {
            type: "p",
            text: "Solução: Protótipos técnicos e spikes (testes rápidos de viabilidade)."
          },
          {
            type: "h3",
            text: "3️⃣ Riscos de Escopo (O projeto vai fugir do controle?)",
          },
          {
            type: "p",
            text: "Solução: Backlog priorizado e sprints curtos (para ajustes frequentes)."
          },
          {
            type: "h3",
            text: "4️⃣ Riscos Financeiros (Vai estourar o orçamento?)",
          },
          {
            type: "p",
            text: "Solução: Entregas incrementais (parar se o ROI não valer a pena)."
          },
          {
            type: "h2",
            text: "🎯 Conclusão: Menos Achismo, Mais Validação!",
          },
          {
            type: "ul",
            items: [
              "✅ Produto funcional > documentação perfeita → Entregue valor real, mesmo que pequeno.",
              "✅ MVP é sobre aprender, não sobre lançar → Use para testar hipóteses antes de escalar.",
              "✅ Gestão de riscos no ágil é contínua → Identifique ameaças cedo e ajuste o rumo.",
            ]
          },
        ],
      },
      {
        id: 5,
        title: "Do Backlog ao Incremento",
        content: [
          {
            type: "p",
            text: "Se você já se perguntou como times ágeis conseguem entregar produtos incríveis em prazos curtos, a resposta está no Scrum! Este framework revolucionário não é só uma metodologia, é uma forma de pensar, colaborar e evoluir constantemente."
          },
          {
            type: "h2",
            text: "🎯 Os Papéis Fundamentais: Quem Faz o Quê?",
          },
          {
            type: "p",
            text: "Imagine um time de futebol: cada jogador tem uma posição específica, mas todos trabalham juntos para marcar gols. No Scrum é a mesma coisa!"
          },
          {
            type: "h3",
            text: "O Trio Essencial"
          },
          {
            type: "h3",
            text: "1️⃣ Product Owner (PO) - O estrategista"
          },
          {
            type: "p",
            text: "É o 'dono do produto', responsável por maximizar seu valor. Ele prioriza funcionalidades, define a visão e garante que o time esteja sempre trabalhando no que realmente importa para os usuários e para o negócio."
          },
          {
            type: "h3",
            text: "2️⃣ Scrum Master (SM) - O facilitador"
          },
          {
            type: "p",
            text: "Pense nele como um técnico que remove obstáculos. Seu trabalho é garantir que o time entenda e siga os princípios do Scrum, além de proteger o time de interferências externas."
          },
          {
            type: "h3",
            text: "3️⃣ Equipe de Desenvolvimento - Os executores"
          },
          {
            type: "p",
            text: "São os profissionais multidisciplinares (desenvolvedores, testadores, designers) que transformam ideias em realidade. O diferencial? Eles se auto-organizam para cumprir as metas!"
          },
          {
            type: "p",
            text: "Mas não para por aí! O ecossistema do Scrum também envolve:"
          },
          {
            type: "ul",
            items: [
              "Stakeholders: Pessoas interessadas no produto (clientes, patrocinadores, outros departamentos)",
              "Usuários finais: Quem realmente vai usar o que está sendo desenvolvido",
            ]
          },
          {
            type: "h2",
            text: "📦 Os Artefatos: O Que Produzimos?",
          },
          {
            type: "p",
            text: "Assim como um pintor precisa de tintas e pincéis, o time Scrum trabalha com artefatos específicos que dão estrutura ao processo."
          },
          {
            type: "h3",
            text: "Product Backlog - A Fonte da Verdade",
          },
          {
            type: "p",
            text: "Esta lista dinâmica contém tudo o que o produto pode precisar: funcionalidades, melhorias, correções de bugs. O PO é como um chef, constantemente refinando e priorizando os ingredientes desse 'cardápio' de acordo com o valor que cada item traz."
          },
          {
            type: "h3",
            text: "Sprint Backlog - O Plano de Ação",
          },
          {
            type: "p",
            text: "Quando começa uma Sprint (nosso ciclo de trabalho), o time seleciona itens do Product Backlog para transformar em realidade. É como fazer a lista de compras para uma receita específica."
          },
          {
            type: "h3",
            text: "Incremento - O Resultado Tangível",
          },
          {
            type: "p",
            text: "No final de cada Sprint, temos algo concreto: uma versão nova e melhorada do produto, mesmo que pequena. A regra é clara: tem que funcionar!"
          },
          {
            type: "h2",
            text: "📝 User Stories: Falando a Língua do Usuário",
          },
          {
            type: "p",
            text: "'Como usuário, quero poder recuperar minha senha facilmente, para não ficar travado quando esquecê-la.'"
          },
          {
            type: "p",
            text: "Essa é uma user story típica - uma forma simples de capturar necessidades reais. A magia está na estrutura:"
          },
          {
            type: "p",
            text: "'Como [papel], quero [ação], para [benefício].'"
          },
          {
            type: "p",
            text: "Por que funciona?"
          },
          {
            type: "ul",
            items: [
              "Mantém o foco no usuário",
              "É específica o suficiente para desenvolver",
              "Pequena o bastante para caber em uma Sprint",
            ]
          },
          {
            type: "h2",
            text: "🗓️ Os Eventos: O Ritmo do Scrum",
          },
          {
            type: "p",
            text: "O Scrum é como uma dança bem coreografada, com eventos que criam um ritmo produtivo:"
          },
          {
            type: "h3",
            text: "Sprint Planning - O Pontapé Inicial",
          },
          {
            type: "p",
            text: "Aqui o time define o que será feito nas próximas 1-4 semanas. Não é só pegar tarefas - é estabelecer uma meta clara que todos entendem e abraçam."
          },
          {
            type: "h3",
            text: "Daily Scrum - O Check-in Diário",
          },
          {
            type: "p",
            text: "Só 15 minutos! A ideia não é resolver problemas, mas alinhar:"
          },
          {
            type: "ul",
            items: [
              "O que fiz ontem?",
              "O que farei hoje?",
              "Há algum impedimento?",
            ]
          },
          {
            type: "h3",
            text: "Sprint Review - Mostra e Conta",
          },
          {
            type: "p",
            text: "Momento de demonstrar o trabalho concluído e coletar feedbacks valiosos. Lembre-se: não é aprovação, é conversa!"
          },
          {
            type: "h3",
            text: "Retrospectiva - Melhorando o Processo",
          },
          {
            type: "p",
            text: "O time reflete: o que funcionou? O que pode melhorar? É aqui que a magia da melhoria contínua acontece."
          },
          {
            type: "h2",
            text: "💡 Por Que Tudo Isso Importa?",
          },
          {
            type: "p",
            text: "O Scrum não é só um conjunto de regras, é uma filosofia que:"
          },
          {
            type: "ul",
            items: [
              "✅ Entrega valor mais rápido - Em vez de esperar meses ou anos, os usuários recebem melhorias constantes",
              "✅ Reduz riscos - Se algo não está dando certo, você descobre cedo e pode ajustar",
              "✅ Empodera times - As pessoas têm voz ativa no processo",
              "✅ Cria transparência - Todos sabem o que está acontecendo e por quê",
            ]
          },
        ],
      },
      {
        id: 6,
        title: "Planejamento e Estimativa Ágil",
        content: [
          {
            type: "p",
            text: "Ei você aí, que já ficou perdido tentando planejar um projeto ágil! Sabia que você não está sozinho? Muita gente se enrola quando começa a trabalhar com Scrum e métodos ágeis. Mas calma, vem comigo que vou te explicar tudo de um jeito fácil de entender, cheio de exemplos práticos e sem aqueles termos complicados que só servem pra confundir. 😉"
          },
          {
            type: "h2",
            text: "Por Que o Planejamento Ágil é Diferente?",
          },
          {
            type: "p",
            text: "No mundo tradicional, a gente fazia aquele planejamento gigante antes mesmo de começar o projeto. Passava meses criando cronogramas detalhados, estimativas precisas (que nunca eram precisas), e no final... tudo mudava mesmo! No ágil, a gente entende que mudanças são inevitáveis, então nosso planejamento é muito mais flexível e inteligente. Imagine que você está construindo uma casa. No método tradicional, você faria plantas detalhadas de todos os cômodos antes mesmo de comprar o terreno. No ágil, você começa pela fundação, depois vai para as paredes, e vai ajustando os cômodos conforme descobre o que realmente precisa. Bem melhor, né?"
          },
          {
            type: "h2",
            text: "Estimativas Ágeis"
          },
          {
            type: "p",
            text: "Agora vamos falar da parte que todo mundo ama odiar: estimativas! No mundo ágil, a gente sabe que prever tempo exato é impossível, então usamos técnicas muito mais inteligentes."
          },
          {
            type: "h3",
            text: "Story Points - A Medida da Complexidade"
          },
          {
            type: "p",
            text: "Ao invés de estimar em horas (que todo mundo erra feio), usamos story points. Eles medem complexidade relativa, não tempo. Funciona assim: definimos uma história simples como baseline (por exemplo, 'adicionar um botão' = 1 ponto) e comparamos outras histórias com ela. A escala mais comum é a sequência de Fibonacci (1, 2, 3, 5, 8, 13). Por quê? Porque quanto maior a história, mais incerteza temos. A diferença entre algo de 8 e 13 pontos é bem subjetiva mesmo - e tá tudo bem!"
          },
          {
            type: "h3",
            text: "Planning Poker - Quando Todo Mundo Vota 🃏"
          },
          {
            type: "p",
            text: "Essa é a técnica mais divertida de estimativa! Cada membro do time recebe um baralho com os números da sequência. O PO explica a história, o time discute brevemente, e todos viram suas cartas ao mesmo tempo. Se tiver muita divergência (um votou 3, outro 8), os extremos explicam seu raciocínio, e a gente vota de novo. O legal é que elimina aquele viés de todo mundo concordar com quem falou primeiro ou com o chefe. Já usei muito e realmente funciona!"
          },
          {
            type: "h2",
            text: "O Backlog: Seu Melhor Amigo ou Pior Inimigo",
          },
          {
            type: "p",
            text: "Um backlog bem gerenciado é como uma geladeira organizada: você acha tudo que precisa rapidão. Um backlog bagunçado é aquela geladeira onde tudo está jogado e você nunca acha o que quer."
          },
          {
            type: "h3",
            text: "Priorização: A Arte de Dizer 'Não'",
          },
          {
            type: "p",
            text: "O segredo é priorizar com critério. Uma técnica que adoro é o MoSCoW:"
          },
          {
            type: "ul",
            items: [
              "Must have: Sem isso, não vale a pena entregar",
              "Should have: Importante, mas pode esperar um pouco",
              "Could have: Seria legal, mas não essencial",
              "Won't have: Deixa pra depois (ou nunca)",
            ]
          },
          {
            type: "p",
            text: "Outra dica é usar uma matriz Valor vs. Esforço. Coloque no eixo X o esforço estimado e no Y o valor para o usuário. As histórias no quadrante 'alto valor, baixo esforço' são suas prioridades máximas!"
          },
          {
            type: "h3",
            text: "Refinamento: A Reunião que Muita Pula, Mas é Essencial",
          },
          {
            type: "p",
            text: "APelo menos uma vez por sprint, reserve 1-2 horas para refinar o backlog. Nessa reunião:"
          },
          {
            type: "ul",
            items: [
              "Quebre histórias grandes em menores",
              "Defina critérios de aceitação claros",
              "Remova o que ficou obsoleto",
              "Estime o que ainda não foi estimado",
            ]
          },
          {
            type: "p",
            text: "Pode parecer perda de tempo, mas acredite: uma hora de refinamento economiza dez horas de confusão durante a sprint!"
          },
          {
            type: "h2",
            text: "Gerenciando Sprints: Do Planejado ao Real",
          },
          {
            type: "p",
            text: "Planejar é fácil, difícil é executar! Aqui vão algumas lições que aprendi na marra:"
          },
          {
            type: "h3",
            text: "O Daily que Realmente Funciona",
          },
          {
            type: "p",
            text: "O Daily Scrum não é relatório para o Scrum Master! É um alinhamento rápido (15 minutos no máximo) onde cada um fala:"
          },
          {
            type: "ul",
            items: [
              "✅ O que fez ontem para atingir a Sprint Goal",
              "✅ O que fará hoje",
              "✅ Quais impedimentos estão atrapalhando",

            ]
          },
          {
            type: "p",
            text: "Se surgir algum problema complexo, marque uma discussão separada com quem precisa estar envolvido. Daily não é reunião de solução de problemas!"
          },
          {
            type: "h3",
            text: "Quando as Coisas Saem dos Trilhos",
          },
          {
            type: "p",
            text: "Mesmo com o melhor planejamento, coisas dão errado. E agora?"
          },
          {
            type: "ul",
            items: [
              "Time atrasado? Remova escopo, não estique a sprint! É melhor entregar menos coisas bem feitas.",
              "Requisito mudou? O PO decide se cancela a sprint ou ajusta a meta.",
              "Tarefa mais fácil que o esperado? Pegue mais itens do backlog!",

            ]
          },
          {
            type: "p",
            text: "Lembre-se: transparência é tudo. Se algo está errado, fale logo para poder ajustar."
          },
        ],
      },
      {
        id: 7,
        title: "Design Thinking na Prática",
        content: [
          {
            type: "p",
            text: "Ei, você aí! Já teve aquela ideia genial pra um produto novo, mas não sabia por onde começar? Ou pior: criou algo que achava incrível, mas ninguém usou? 😬 Pois é, isso acontece mais do que você imagina! Mas calma, o Design Thinking tá aqui pra te salvar e vou te explicar tudo num papo reto, cheio de dicas práticas e exemplos reais. Bora? 👇"
          },
          {
            type: "h2",
            text: "O Que é Design Thinking? (E Por Que Você Deveria Se Importar)",
          },
          {
            type: "p",
            text: "Design Thinking não é só um método bonitinho que as startups adoram, é uma forma diferente de resolver problemas, colocando as pessoas no centro de tudo. 🤝"
          },
          {
            type: "p",
            text: "Imagine que você quer criar um app de fitness. No método tradicional, você faria uma pesquisa rápida, desenvolveria o app e torceria pra dar certo. Com Design Thinking, você primeiro entende profundamente as dores reais das pessoas, testa ideias antes de gastar rios de dinheiro, e só então desenvolve a solução certa. Bem melhor, né?"
          },
          {
            type: "h3",
            text: "As 5 Fases do Design Thinking (O Ciclo da Inovação)"
          },
          {
            type: "ul",
            items: [
              "Empatia ❤️ - Entender as pessoas como Sherlock Holmes",
              "Definição 🎯 - Focar no problema certo",
              "Ideação 💡 - Soltar a criatividade sem freio",
              "Prototipagem ✂️ - Fazer ideias virarem algo tangível",
              "Teste 🧪 - Validar com usuários reais",
            ]
          },
          {
            type: "h2",
            text: "Mão na Massa: Como Aplicar Design Thinking"
          },
          {
            type: "h3",
            text: "Fase da Empatia - Virando um Detetive de Necessidades 🔍"
          },
          {
            type: "p",
            text: "Aqui é onde a mágica começa! Você precisa mergulhar na vida das pessoas que vai ajudar. Não adianta só mandar um formulário no Google Forms, tem que observar, ouvir e sentir as dores reais."
          },
          {
            type: "p",
            text: "Técnicas de Pesquisa TOP (Que Realmente Funcionam)"
          },
          {
            type: "p",
            text: "Shadowing 👥: Seguir o usuário no dia a dia (tipo um stalker profissional) Exemplo: Ver como idosos realmente usam apps de banco"
          },
          {
            type: "p",
            text: "Entrevistas Emocionais 🎤: Perguntas que vão além do óbvio 'Me conta sobre a última vez que você ficou frustrado tentando se exercitar em casa'"
          },
          {
            type: "p",
            text: "Diários de Uso 📔: Pedir pras pessoas registrarem experiências 'Anote toda vez que pensar em pedir comida por delivery esta semana'"
          },
          {
            type: "h3",
            text: "Pesquisa Secundária: O Atalho dos Espertos 🕵️♂️",
          },
          {
            type: "p",
            text: "Antes de sair entrevistando todo mundo, use o que já existe! Pesquisa secundária é pegar dados que outros já coletaram:"
          },
          {
            type: "ul",
            items: [
              "Relatórios de mercado",
              "Estudos acadêmicos",
              "Dados governamentais",
              "Análises de concorrentes",
            ]
          },
          {
            type: "p",
            text: "👉 Dica de Ouro: Crie um 'board de inspiração' com tudo que encontrar (fotos, artigos, estatísticas). Isso ajuda a ver padrões!"
          },
          {
            type: "h3",
            text: "Definição - O Pulo do Gato 🐱💥",
          },
          {
            type: "p",
            text: "Depois de coletar um monte de informações, é hora de sintetizar e encontrar o problema raiz. Uma técnica poderosa é o 'Point of View' (POV): '[Persona] precisa de [necessidade] porque [insight surpreendente'"
          },
          {
            type: "p",
            text: "Exemplo Ruim: 'As pessoas querem um app de exercícios'"
          },
          {
            type: "p",
            text: "Exemplo Bom: Maria, 35 anos, precisa se exercitar em casa em 20 minutos porque se sente culpada quando falta tempo pra família'"
          },
          {
            type: "h3",
            text: "3. Ideação - Tempestade de Ideias Que Vale a Pena ⚡",
          },
          {
            type: "p",
            text: "Hora de soltar a criatividade! Mas não vale ficar só no 'vamos fazer um app'. Algumas técnicas matadoras:"
          },
          {
            type: "ul",
            items: [
              "Brainwriting ✍️: Todo mundo escreve ideias em silêncio antes de discutir",
              "'E Se...' 🤔: Forçar conexões inusitadas ('E se fitness fosse um jogo de RPG?')",
              "Pior Ideia Possível 😈: Inventar soluções horríveis pra depois inverter",
            ]
          },
          {
            type: "h3",
            text: "Prototipagem - Feio Mas Funcional 🛠️",
          },
          {
            type: "p",
            text: "Aqui a regra é: gaste o mínimo possível pra testar sua ideia! Pode ser:"
          },
          {
            type: "ul",
            items: [
              "Storyboard (quadrinhos da experiência)",
              "Protótipo de papel",
              "Landing page fake",
              "Vídeo conceito",
            ]
          },
          {
            type: "p",
            text: "Case Real: A Airbnb testou a ideia inicial fotografando casas dos fundadores e colocando no site. Custo: $0!"
          },
          {
            type: "h3",
            text: "Teste - A Hora da Verdade 🧪",
          },
          {
            type: "p",
            text: "Leve seu protótipo pra pessoas reais e OBSERVE (não só pergunte!). Anote:"
          },
          {
            type: "ul",
            items: [
              "Onde eles travam",
              "O que amam",
              "O que não entendem",
            ]
          },
          {
            type: "p",
            text: "Dica Pro: Grave as sessões (com permissão) - expressões faciais falam muito!"
          },
          {
            type: "h2",
            text: "Erros Que Você Vai Querer Evitar ❌",
          },
          {
            type: "ul",
            items: [
              "Pular a empatia (90% dos fracassos começam aqui)",
              "Apegar-se à primeira ideia (o segredo é pivotar!)",
              "Prototipar perfeito (quanto mais feio, melhor no início)",
              "Ignorar dados contraditórios (viés de confirmação é traiçoeiro)",
            ]
          },
          {
            type: "h2",
            text: "Ferramentas Que Vale a Pena Conhecer 🧰",
          },
          {
            type: "ul",
            items: [
              "Miro 👩💻: Para mapas mentais e colaboração remota",
              "Figma 🎨: Prototipagem digital fácil",
              "Hotjar 🔥: Ver como usuários navegam seu site",
              "Typeform 📝: Criar pesquisas bonitas",
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