import styled from "styled-components";

export const TitleContentStyled = styled.div`
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

  // infinite horizon
  .scroller__div {
    width: 100%;
    margin-inline: auto;
    margin: 20px 0;
    position: relative;
    height: 35px;
    overflow: hidden;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0)
    );
  }

  .item {
    width: 35px;
    height: 35px;
    border-radius: 6px;
    position: absolute;
    left: max(calc(10px * 6), 100%);
    animation-name: scrollLeft;
    animation-duration: 30s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    color: var(--color-primary-6);
  }

  .item1 {
    animation-delay: calc(30s / 6 * (6 - 1) * -1);
  }

  .item2 {
    animation-delay: calc(30s / 6 * (6 - 2) * -1);
  }

  .item3 {
    animation-delay: calc(30s / 6 * (6 - 3) * -1);
  }

  .item4 {
    animation-delay: calc(30s / 6 * (6 - 4) * -1);
  }

  .item5 {
    animation-delay: calc(30s / 6 * (6 - 5) * -1);
  }

  .item6 {
    animation-delay: calc(30s / 6 * (6 - 6) * -1);
  }

  .item__icon {
    height: 100%;
    width: 100%;
  }

  //animation to infinite horizon
  @keyframes scrollLeft {
    to {
      left: -200px;
    }
  }

  .home__buttons {
    display: flex;
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
