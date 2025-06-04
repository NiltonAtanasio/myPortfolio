import styled from "styled-components";

export const HorizontalCardStyled = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg || "20px"};
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  padding: ${({ theme }) => theme.spacing.md || "12px"};
  border-radius: 12px;
  box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.1);

  img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    object-fit: cover;
  }

  .about__content p {
    display: flex;
    justify-content: space-between;
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

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 0;

    img {
      width: 80px;
      height: 80px;
    }
  }
`;
