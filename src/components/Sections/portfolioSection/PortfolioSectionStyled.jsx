import styled from "styled-components";

export const PortfolioSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  width: 100%;
  margin-bottom: 100px;
  scroll-margin-top: 15vh;

  .section-title {
    color: ${({ theme }) => theme.colors.primary[6]};
    font-size: 1.5rem;
  }

  .section-subtitle {
    font-size: 2rem;
  }

  .section-subtitle span {
    font-size: 1.5rem;
  }

  /* card */
  .card__area,
  .box__area {
    width: 100%;
    padding: 10px 15px;
  }

  .box__area {
    display: flex;
    justify-content: center;
    gap: 50px;
    align-items: start;
    flex-wrap: wrap;
  }

  .box {
    height: 220px;
    width: 180px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    box-shadow: 1px 1px 10px ${({ theme }) => theme.colors.primary[6]};
    transition: 0.5s;
  }

  .box img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: block;
    transition: transform 0.5s;
  }

  .overlay {
    height: 0;
    width: 100%;
    background: linear-gradient(
      transparent,
      ${({ theme }) => theme.colors.primary[2]} 65%
    );
    border-radius: 10px;
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    padding: 0 10px;
    text-align: center;
    font-size: 0.7rem;
    transition: height 0.3s;
    color: #292828;
  }

  .overlay h3 {
    font-weight: 500px;
    font-family: "Poppins", sans-serif;
    font-size: 0.9rem;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.colors.neutral[1]};
  }

  .box:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 25px ${({ theme }) => theme.colors.primary[6]};
  }

  .box:hover img {
    transform: scale(1.1);
    opacity: 0.2;
  }

  .box:hover .overlay {
    height: 100%;
  }

  @media screen and (max-width: 1170px) {
    .section-subtitle {
      text-align: center;
    }
  }

  @media screen and (max-width: 600px) {
    .portfolio__section,
    .section-subtitle {
      text-align: center;
    }

    img {
      opacity: 0.2;
    }

    .overlay {
      height: 100%;
    }
  }
`;
