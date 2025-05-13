import styled from "styled-components";

export const ExperienceContainerStyled = styled.div`
  max-width: 700px;
  margin-bottom: 100px;

  .card__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
    margin-top: 30px;
  }

  .experience__card {
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: var(--color-neutral-0);
    padding: 12px;
    border-radius: 12px;
    box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.1);
  }

  .experience__avatar {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    object-fit: cover;
  }

  .about__content p {
    display: flex;
    justify-content: space-between;
  }

  .card__web {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 1170px) {
    .img__container {
      width: 250px;
      height: 250px;
    }

    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 600px) {
    .experience__card,
    .about__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 20px 10px;
      font-size: 0.8rem;
    }
  }
`;
