import styled from "styled-components";

export const NavbarStyled = styled.nav`
  position: fixed;
  top: 0;
  height: 5vh;
  width: 100%;
  z-index: 9000;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  .navbar__content {
    width: 100%;
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navbar__content div {
    width: 5%;
  }

  #nav__title {
    color: var(--color-primary-6);
    transition: transform 0.3s ease-in-out;
    cursor: default;
    font-size: 0.9rem;
  }

  #nav__title:hover {
    color: var(--color-primary-5);
    transform: scale(1.1);
  }

  .nav_logo {
    font-size: 24px;
    color: var(--color-primary-6);
  }

  .nav__list {
    display: flex;
    list-style: none;
    gap: 50px;
  }

  .nav-item a {
    text-decoration: none;
    position: relative;
    display: inline-block;
    color: var(--color-neutral-1);
    font-weight: 600;
    transition: 0.3s;
    font-size: 0.8rem;
    transition: transform 0.2s ease-in-out;
  }

  .nav-item a:after {
    content: "";
    position: absolute;
    background-color: var(--color-primary-4);
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
