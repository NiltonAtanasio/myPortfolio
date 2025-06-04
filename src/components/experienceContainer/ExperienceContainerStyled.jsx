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

  .experience__avatar {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    object-fit: cover;
  }

  .card__web {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.lg || "20px"};
    background-color: ${({ theme }) => theme.colors.neutral[0]};
    padding: ${({ theme }) => theme.spacing.md || "12px"};
    border-radius: 12px;
    box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 1170px) {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 540px) {
    .card__web {
      flex-direction: column;
    }
  }
`;
