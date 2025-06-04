import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
* {
    font-family: ${({ theme }) => theme.fonts.primary};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin-top: ${({ theme }) => theme.spacing.navbarHeight};
    background-color: ${({ theme }) => theme.colors.primary[1]};
  }

  header {
    width: 100%;
    padding: 10px ${({ theme }) => theme.spacing.pagePadding};
    background-color: ${({ theme }) => theme.colors.primary[1]};
    display: flex;
    justify-content: center;
  }
`;
