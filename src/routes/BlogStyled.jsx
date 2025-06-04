import styled from "styled-components";

export const BlogStyled = styled.div`
  margin-top: 8vh;
  display: flex;
  min-height: 100vh;
  max-width: 1000px;

  /* Estilos do menu lateral */
  .sidebar {
    width: 250px;
    background-color: var(--color-primary-1);
    color: var(--color-primary-6);
    padding: 20px 0;
    height: 100vh;
    position: sticky;
    top: 0;
    overflow-y: auto;
  }

  .sidebar-title {
    padding: 0 20px 20px;
    border-bottom: 1px solid var(--color-primary-6);
    color: var(--color-primary-6);
    font-size: 1.2rem;
  }

  .topics-list {
    list-style: none;
  }

  .topic-item {
    border-bottom: 1px solid var(--color-primary-2);
  }

  .topic-header {
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 1rem;
    font-weight: bold;
  }

  .topic-header:hover,
  .subtopic-item:hover {
    background-color: var(--color-primary-5);
    color: var(--color-primary-1);
  }

  .toggle-icon {
    font-weight: bold;
  }

  .subtopics-list {
    list-style: none;
    background-color: var(--color-primary-1);
  }

  .subtopic-item {
    padding: 12px 20px 12px 30px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 0.9rem;
  }

  .subtopic-item.active {
    background-color: var(--color-primary-5);
    color: var(--color-primary-1);
  }

  /* Estilos da área de conteúdo */
  .content-area {
    flex: 1;
    padding: 30px;
    background-color: #f5f6fa;
  }

  .content-display {
    background-color: white;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .welcome-message {
    text-align: center;
    padding: 50px;
    color: #7f8c8d;
  }

  h2 {
    color: #2c3e50;
    margin-bottom: 20px;
  }

  p {
    line-height: 1.6;
    color: #34495e;
  }
`;
