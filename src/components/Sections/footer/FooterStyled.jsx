import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: var(--color-primary-2);

  .footer__items {
    display: flex;
    justify-content: space-between;
    padding: 0px 8% 24px 8%;
    align-items: center;
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
  }

  .social__media__buttons {
    height: 30px;
    width: 30px;
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
