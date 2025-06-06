import React, { useState } from "react";
import { BlogStyled } from "./BlogStyled.jsx";

export default function Blog() {
  // Estado para controlar qual tópico está expandido
  const [expandedTopic, setExpandedTopic] = useState(null);
  // Estado para controlar o tópico/subtópico selecionado
  const [selectedContent, setSelectedContent] = useState(null);

  // Estrutura dos tópicos e subtópicos
  const menuData = [
    {
      id: 1,
      title: "Node.js",
      subtopics: [
        {
          id: 1,
          title: "Introdução ao Node.js",
          content: [
            {
              type: "h2",
              text: "O que é Node.js?",
            },
            {
              type: "p",
              text: "Node.js é um ambiente de execução JavaScript server-side que permite construir aplicações escaláveis usando JavaScript no lado do servidor.",
            },
            {
              type: "h3",
              text: "Principais características",
            },
            {
              type: "ul",
              items: [
                "Assíncrono e orientado a eventos",
                "Leve e eficiente",
                "Ecossistema rico (npm)",
              ],
            },
            {
              type: "h2",
              text: "Instalação",
            },
            {
              type: "p",
              text: "Para instalar o Node.js, visite o site oficial e baixe a versão LTS para seu sistema operacional.",
            },
          ],
        },
        {
          id: 2,
          title: "Criando seu primeiro servidor",
          content: [
            {
              type: "h2",
              text: "Hello World em Node.js",
            },
            {
              type: "p",
              text: "Vamos criar um servidor web simples que responde com 'Hello World' para todas as requisições.",
            },
            {
              type: "code",
              language: "javascript",
              content:
                "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/plain');\n  res.end('Hello World\\n');\n});\n\nserver.listen(3000, () => {\n  console.log('Server running at http://localhost:3000/');\n});",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "JavaScript",
      subtopics: [
        {
          id: 1,
          title: "ES6 Features",
          content: [
            {
              type: "h2",
              text: "Principais recursos do ES6",
            },
            {
              type: "h3",
              text: "Arrow Functions",
            },
            {
              type: "p",
              text: "As arrow functions proporcionam uma sintaxe mais concisa para escrever funções.",
            },
            {
              type: "h3",
              text: "Template Literals",
            },
            {
              type: "p",
              text: "Permitem interpolação de strings e strings multilinha.",
            },
          ],
        },
      ],
    },
  ];

  const toggleTopic = (topicId) => {
    setExpandedTopic(expandedTopic === topicId ? null : topicId);
  };

  const selectContent = (content) => {
    setSelectedContent(content);
  };

  // Componente para renderizar diferentes tipos de conteúdo
  const renderContent = (content) => {
    return content.map((item, index) => {
      switch (item.type) {
        case "h2":
          return <h2 key={index}>{item.text}</h2>;
        case "h3":
          return <h3 key={index}>{item.text}</h3>;
        case "p":
          return <p key={index}>{item.text}</p>;
        case "ul":
          return (
            <ul key={index}>
              {item.items.map((listItem, i) => (
                <li key={i}>{listItem}</li>
              ))}
            </ul>
          );
        case "code":
          return (
            <pre key={index}>
              <code className={`language-${item.language}`}>
                {item.content}
              </code>
            </pre>
          );
        case "image":
          return (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              className="content-image"
            />
          );
        default:
          return null;
      }
    });
  };

  return (
    <BlogStyled>
      <div className="blog__content">
        {/* Menu Lateral */}
        <div className="sidebar">
          <h2 className="sidebar-title">Menu do Blog</h2>
          <ul className="topics-list">
            {menuData.map((topic) => (
              <li key={topic.id} className="topic-item">
                <div
                  className="topic-header"
                  onClick={() => toggleTopic(topic.id)}
                >
                  <span>{topic.title}</span>
                  <span className="toggle-icon">
                    {expandedTopic === topic.id ? "−" : "+"}
                  </span>
                </div>
                {expandedTopic === topic.id && (
                  <ul className="subtopics-list">
                    {topic.subtopics.map((subtopic) => (
                      <li
                        key={subtopic.id}
                        className={`subtopic-item ${
                          selectedContent?.id === subtopic.id &&
                          selectedContent?.topicId === topic.id
                            ? "active"
                            : ""
                        }`}
                        onClick={() =>
                          selectContent({
                            ...subtopic,
                            topicId: topic.id,
                          })
                        }
                      >
                        {subtopic.title}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Área de Conteúdo */}
        <div className="content-area">
          {selectedContent ? (
            <div className="content-display">
              <h1>{selectedContent.title}</h1>
              {renderContent(selectedContent.content)}
            </div>
          ) : (
            <div className="welcome-message">
              <h2>Bem-vindo ao meu Blog!</h2>
              <p>Selecione um tópico no menu lateral para começar a ler.</p>
            </div>
          )}
        </div>
      </div>
    </BlogStyled>
  );
}
