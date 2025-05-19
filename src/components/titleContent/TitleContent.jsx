import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

import { TitleContentStyled } from "./TitleContentStyled.jsx";
import Button from "../button/Button.jsx";

export default function SectionTitle() {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 0.5,
        opacity: 0,
        ease: "back.out(1.7)",
      },
    });

    tl.fromTo(
      ".title",
      {
        x: -200,
      },
      {
        delay: 0.5,
        x: 0,
        opacity: 1,
      }
    )
      .fromTo(
        ".text__animation",
        {
          x: -200,
        },
        {
          x: 0,
          opacity: 1,
        },
        "-=0.45"
      )
      .fromTo(
        ".description",
        {
          x: -200,
        },
        {
          x: 0,
          opacity: 1,
        },
        "-=0.45"
      )
      .fromTo(
        ".scroller__div",
        {
          y: 70,
        },
        {
          y: 0,
          opacity: 1,
        },
        "-=0.45"
      )
      .fromTo(
        ".home__buttons",
        {
          y: 70,
        },
        {
          y: 0,
          opacity: 1,
        },
        "-=0.45"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <TitleContentStyled>
      <h1 className="title">Olá, me chamo Atanazzio</h1>
      <h3 className="text__animation">
        Eu sou <span></span>
      </h3>

      <p className="description">
        Tudo o que você vê online, começa aqui, nos bastidores do back-end
      </p>

      <div className="scroller__div">
        <div className="item item1">
          <FaReact className="item__icon" />
        </div>
        <div className="item item2">
          <FaNodeJs className="item__icon" />
        </div>
        <div className="item item3">
          <SiMongodb className="item__icon" />
        </div>
        <div className="item item4">
          <FaHtml5 className="item__icon" />
        </div>
        <div className="item item5">
          <FaCss3Alt className="item__icon" />
        </div>
        <div className="item item6">
          <IoLogoJavascript className="item__icon" />
        </div>
      </div>

      <div className="home__buttons">
        <Button
          link="https://www.linkedin.com/in/niltonatanasio/"
          text="Linkedin"
        />
      </div>
    </TitleContentStyled>
  );
}
