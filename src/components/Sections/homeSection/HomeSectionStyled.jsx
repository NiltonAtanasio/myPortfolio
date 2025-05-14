import styled from "styled-components";

export const HomeSectionStyled = styled.section`
  display: flex;
  height: 95vh;
  width: 100%;
  justify-content: center;

  .home__content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;
    max-width: 1300px;
    padding: 0 20px;
    margin-bottom: 20px;
    height: 95vh;
  }

  @media screen and (max-width: 950px) {
    .home__content {
      flex-direction: column;
      align-items: center;
      padding: 0 15px;
      height: 90vh;
    }
  }

  @media screen and (max-width: 600px) {
    .home__content {
      height: 80vh;
      margin: 0;
      padding: 0 5px 0 10px;
    }
  }
`;
