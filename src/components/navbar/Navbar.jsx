import { useLayoutEffect } from "react";

import { NavbarStyled } from "./NavbarStyled.jsx";
import { gsap } from "gsap";
import cv from "../../assets/pdf/Cv_Nilton_2025.pdf";

export default function Navbar() {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.5, opacity: 0, ease: "back.out(1.7)" },
    });

    tl.fromTo(
      "#nav__title",
      {
        y: -50,
      },
      {
        y: 0,
        opacity: 1,
        onComplete: () => {
          gsap.set("#nav__title", { clearProps: "transform" }); // remove o transform inline
        },
      }
    )
      .fromTo(
        "#nav__item1",
        {
          y: -50,
        },
        {
          y: 0,
          opacity: 1,
        },
        "-=0.45"
      )
      .fromTo(
        "#nav__item2",
        {
          y: -50,
        },
        {
          y: 0,
          opacity: 1,
        },
        "-=0.45"
      )
      .fromTo(
        "#nav__item3",
        {
          y: -50,
        },
        {
          y: 0,
          opacity: 1,
        },
        "-=0.45"
      )
      .fromTo(
        "#nav__button",
        {
          y: -50,
        },
        {
          y: 0,
          opacity: 1,
          onComplete: () => {
            gsap.set("#nav__button", { clearProps: "transform" });
          },
        },
        "-=0.45"
      );
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <NavbarStyled className="navbar">
      <div className="navbar__content">
        <div>
          <h2 id="nav__title">DEV</h2>
        </div>
        <ul className="nav__list">
          <li className="nav-item" id="nav__item1">
            <a href="#inicio">Início</a>
          </li>
          <li className="nav-item" id="nav__item2">
            <a href="#skills">Skills</a>
          </li>
          <li className="nav-item" id="nav__item3">
            <a href="#portfolio">Portfolio</a>
          </li>
        </ul>
        <a
          href={cv}
          download="cv_Nilton_Atanazzio"
          className="btn-default"
          id="nav__button"
        >
          Baixar CV
        </a>
      </div>
    </NavbarStyled>
  );
}
