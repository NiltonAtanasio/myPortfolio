import styled from "styled-components";

export const BannerStyled = styled.div`
  width: 40%;

  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  z-index: 2;

  .img__container {
    width: 300px;
    height: 300px;
    border-radius: 55% 45% 55% 45%;
    overflow: hidden;
    animation: imgFloat 7s ease-in-out infinite;
  }

  .img__container img {
    width: 320px;
    height: 320px;
    object-fit: cover;
  }

  @keyframes imgFloat {
    50% {
      transform: translateY(10px);
      border-radius: 45% 55% 45% 55%;
    }
  }

  @media screen and (max-width: 950px) {
    width: 200px;
    height: 200px;

    .img__container {
      width: 180px;
      height: 180px;
    }

    .img__container img {
      width: 100%;
      height: 100%;
    }
  }
`;
