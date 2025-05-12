import styled from "styled-components";

export const SectionTitleStyled = styled.div`
  width: 36%;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  margin-top: 0;
  justify-content: center;

  .title {
    font-size: 2rem;
    color: var(--color-neutral-1);
  }

  h3 {
    font-size: 1.5rem;
  }

  .description {
    font-size: 1.1rem;
    text-align: left;
    font-weight: 400;
  }

  .text__animation span {
    position: relative;
  }

  .text__animation span::before {
    content: "Desenvolvedor";
    color: var(--color-primary-6);
    animation: words 20s infinite;
  }

  .text__animation span::after {
    content: "";
    background-color: var(--color-primary-1);
    position: absolute;
    width: calc(100% + 8px);
    height: 100%;
    border-left: 3px solid var(--color-primary-1);
    right: -8px;
    animation: cursor 0.6s infinite, typing 20s infinite;
  }

  @keyframes cursor {
    to {
      border-left: 2px solid var(--color-primary-6);
    }
  }

  @keyframes words {
    0%,
    20% {
      content: "Desenvolvedor Back-end";
    }
    21%,
    40% {
      content: "Analista de Sistemas";
    }
    41%,
    60% {
      content: "Desenvolvedor FullStack";
    }
    61%,
    80% {
      content: "Desenvolvedor Back-end";
    }
    81%,
    100% {
      content: "Analista de Sistemas";
    }
  }

  @keyframes typing {
    10%,
    15%,
    30%,
    35%,
    50%,
    55%,
    70%,
    75%,
    90%,
    95% {
      width: 0;
    }
    5%,
    20%,
    25%,
    40%,
    45%,
    60%,
    65%,
    80%,
    85% {
      width: calc(100% + 8px);
    }
  }

  @media screen and (max-width: 1170px) {
    .title {
      font-size: 1.5rem;
    }

    .description {
      font-size: 0.8rem;
    }

    h3 {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 950px) {
    width: 100%;
    order: 2;

    .title {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    .description {
      font-size: 1.1rem;
    }

    .scroller__div {
      margin: 5px 0 10px 0;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0 10px;

    .title {
      font-size: 1.6rem;
    }

    .description {
      font-size: 0.9rem;
    }

    h3 {
      font-size: 1.2rem;
    }
  }
`;
