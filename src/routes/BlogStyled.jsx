import styled from "styled-components";

export const BlogStyled = styled.div`
  margin-top: 8vh;
  width: 100%;
  display: flex;
  min-height: 100vh;
  justify-content: center;

  .blog__content {
    display: flex;
    justify-content: center;
    height: 100%;
    width: ${({ theme }) => theme.spacing.maxWidth};
  }
  /* Estilos do menu lateral */
  .sidebar {
    width: 250px;
    background-color: ${({ theme }) => theme.colors.primary[1]};
    color: ${({ theme }) => theme.colors.primary[6]};
    padding: 20px 0;
    height: 100vh;
    position: sticky;
    top: 0;
    overflow-y: auto;
  }

  .sidebar-title {
    padding: 0 20px 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary[6]};
    color: ${({ theme }) => theme.colors.neutral[1]};
    font-size: 1.2rem;
  }

  .topics-list {
    list-style: none;
    margin: 0;
  }

  .topic-item {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary[2]};
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
    background-color: ${({ theme }) => theme.colors.primary[5]};
    color: ${({ theme }) => theme.colors.primary[1]};
  }

  .toggle-icon {
    font-weight: bold;
  }

  .subtopics-list {
    list-style: none;
    background-color: ${({ theme }) => theme.colors.primary[1]};
  }

  .subtopic-item {
    padding: 12px 20px 12px 30px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 0.9rem;
  }

  .subtopic-item.active {
    background-color: ${({ theme }) => theme.colors.primary[5]};
    color: ${({ theme }) => theme.colors.primary[1]};
  }

  /* Estilos da área de conteúdo */
  .content-area {
    flex: 1;
    padding: 30px;
    background-color: ${({ theme }) => theme.colors.primary[1]};
  }

  .content-display {
    background-color: ${({ theme }) => theme.colors.primary[2]};
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .welcome-message {
    text-align: center;
    padding: 50px;
    color: ${({ theme }) => theme.colors.neutral[2]};
  }

  h2 {
    color: ${({ theme }) => theme.colors.neutral[1]};
    margin-bottom: 20px;
  }

  h2 {
    color: #2c3e50;
    margin: 25px 0 15px;
    font-size: 1.6rem;
  }

  h3 {
    color: #2c3e50;
    margin: 20px 0 10px;
    font-size: 1.3rem;
  }

  p {
    line-height: 1.6;
    color: #34495e;
    margin-bottom: 15px;
  }

  ul {
    margin: 15px 0 15px 20px;
    li {
      margin-bottom: 8px;
      line-height: 1.4;
    }
  }

  pre {
    background-color: ${({ theme }) => theme.colors.primary[1]};
    padding: 15px;
    border-radius: 4px;
    overflow-x: auto;
    margin: 15px 0;
    code {
      font-family: "Courier New", Courier, monospace;
      font-size: 0.9rem;
    }
  }

  .content-image {
    max-width: 100%;
    height: auto;
    margin: 15px 0;
    border-radius: 4px;
  }
`;
