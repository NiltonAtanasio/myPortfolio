import React, { useState } from "react";
import { BlogStyled } from "./BlogStyled.jsx";
import { blogData } from "../data/blogData.js";

export default function Blog() {
  // Estado para controlar qual tópico está expandido
  const [expandedTopic, setExpandedTopic] = useState(null);
  // Estado para controlar o tópico/subtópico selecionado
  const [selectedContent, setSelectedContent] = useState(null);

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
          // Se não tiver links, renderiza normalmente
          if (!item.links) {
            return (
              <p key={index} className="mb-3 text-gray-300">
                {item.text}
              </p>
            );
          }

          // Se tiver links, processa o texto
          let processedText = item.text;
          const elements = [];
          let lastIndex = 0;

          // Para cada link, divide o texto e adiciona o link no lugar
          item.links.forEach((link, linkIndex) => {
            const linkStart = processedText.indexOf(link.text);

            if (linkStart !== -1) {
              // Texto antes do link
              if (linkStart > lastIndex) {
                elements.push(processedText.substring(lastIndex, linkStart));
              }

              // O próprio link
              elements.push(
                <a
                  key={`link-${linkIndex}`}
                  href={link.url}
                  className="Plink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </a>
              );

              lastIndex = linkStart + link.text.length;
            }
          });

          // Texto restante após o último link
          if (lastIndex < processedText.length) {
            elements.push(processedText.substring(lastIndex));
          }

          return (
            <p key={index} className="mb-3 text-gray-300">
              {elements}
            </p>
          );
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
            {blogData.map((topic) => (
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
