import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: var(--color-primary-2);
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: center;

  .footer__items,
  .social__media__buttons a,
  .item__icon {
    width: 100%;
    height: 100%;
  }

  .footer__items {
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-primary-2);
  }

  .copyright {
    color: var(--color-neutral-1);
    font-weight: 500;
    font-size: 0.8rem;
  }

  .social__media__content {
    display: flex;
    width: 100px;
    justify-content: space-evenly;
    align-items: center;
  }

  .social__media__buttons {
    height: 20px;
    width: 20px;
    border-radius: 20%;
  }

  .social__media__buttons a {
    text-decoration: none;
    color: var(--color-primary-6);
  }

  @media screen and (max-width: 600px) {
    .footer__items {
      flex-direction: column;
      gap: 20px;
    }
  }
`;
