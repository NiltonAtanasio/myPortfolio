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
      title: "React",
      subtopics: [
        {
          id: 1,
          title: "Introdução ao React",
          content: "Conteúdo sobre Introdução ao React...",
        },
        {
          id: 2,
          title: "Componentes",
          content: "Conteúdo sobre Componentes...",
        },
        { id: 3, title: "Hooks", content: "Conteúdo sobre Hooks..." },
      ],
    },
    {
      id: 2,
      title: "JavaScript",
      subtopics: [
        {
          id: 1,
          title: "ES6 Features",
          content: "Conteúdo sobre ES6 Features...",
        },
        {
          id: 2,
          title: "Async/Await",
          content: "Conteúdo sobre Async/Await...",
        },
      ],
    },
    {
      id: 3,
      title: "CSS",
      subtopics: [
        { id: 1, title: "Flexbox", content: "Conteúdo sobre Flexbox..." },
        { id: 2, title: "Grid", content: "Conteúdo sobre Grid..." },
        { id: 3, title: "Animações", content: "Conteúdo sobre Animações..." },
      ],
    },
  ];

  // Alterna a expansão do tópico
  const toggleTopic = (topicId) => {
    setExpandedTopic(expandedTopic === topicId ? null : topicId);
  };

  // Seleciona o conteúdo para exibir
  const selectContent = (content) => {
    setSelectedContent(content);
  };

  return (
    <BlogStyled>
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
            <h2>{selectedContent.title}</h2>
            <p>{selectedContent.content}</p>
          </div>
        ) : (
          <div className="welcome-message">
            <h2>Bem-vindo ao meu Blog!</h2>
            <p>Selecione um tópico no menu lateral para começar a ler.</p>
          </div>
        )}
      </div>
    </BlogStyled>
  );
}
