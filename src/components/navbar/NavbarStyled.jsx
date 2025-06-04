import styled from "styled-components";

export const NavbarStyled = styled.nav`
  position: fixed;
  top: 0;
  height: ${({ theme }) => theme.spacing.navbarHeight || "8vh"};
  width: 100%;
  z-index: 9000;
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding-left: ${({ theme }) => theme.spacing.md};
  padding-right: ${({ theme }) => theme.spacing.md};

  .navbar__content {
    width: 100%;
    max-width: ${({ theme }) => theme.spacing.maxWidth};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navbar__content div {
    width: 5%;
  }

  #nav__title {
    color: ${({ theme }) => theme.colors.primary[6]};
    transition: transform 0.3s ease-in-out;
    cursor: default;
    font-size: 0.9rem;
  }

  #nav__title:hover {
    color: ${({ theme }) => theme.colors.primary[5]};
    transform: scale(1.1);
  }

  .nav_logo {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary[6]};
  }

  .nav__list {
    display: flex;
    list-style: none;
    gap: ${({ theme }) => theme.spacing.xxl || "50px"};
  }

  .nav-item a {
    text-decoration: none;
    position: relative;
    display: inline-block;
    color: ${({ theme }) => theme.colors.neutral[1]};
    font-weight: 600;
    transition: 0.3s;
    font-size: 0.8rem;
    transition: transform 0.2s ease-in-out;
  }

  .nav-item a:after {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.colors.primary[4]};
    height: 3px;
    width: 0%;
    left: 0;
    bottom: 0;
    transition: 0.3s;
  }

  .nav-item a:hover:after {
    width: 100%;
  }

  .nav-item a:hover {
    color: #111010;
    transform: scale(1.07);
  }

  @media screen and (max-width: 600px) {
    .nav__list {
      display: none;
    }
  }
`;
