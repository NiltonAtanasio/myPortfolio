import styled from "styled-components";

export const ExperienceSectionStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  padding: 10px;
  scroll-margin-top: 5.5vh;

  @media screen and (max-width: 1170px) {
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    margin-top: 150px;
  }

  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;
