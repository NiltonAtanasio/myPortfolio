import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ExperienceContainerStyled } from "./ExperienceContainerStyled";
import HorizontalCard from "../horizontalCard/HorizontalCard";

import logoReact from "../../assets/images/react-logo.jpg";
import logoNodeJs from "../../assets/images/Node.js-logo.png";
import logoMongoDB from "../../assets/images/MongoDb-logo.png";
import logoHtml from "../../assets/images/logoHtml.jpg";
import logoCss from "../../assets/images/logoCss.jpg";
import logoJs from "../../assets/images/logoJS.png";

export default function ExperienceContainer() {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    gsap.registerPlugin(ScrollTrigger);

    mm.add("(min-width: 531px)", () => {
      const tl = gsap.timeline({
        defaults: { duration: 0.7, opacity: 0, ease: "back.out(1.7)" },
        scrollTrigger: {
          trigger: ".experience__container",
          scrub: true,
          start: "top bottom",
          end: "bottom bottom",
        },
      });

      tl.fromTo(
        ".section-title",
        {
          opacity: 0,
          y: 150,
        },
        {
          opacity: 1,
          y: 0,
        }
      )
        .fromTo(
          "#subtitle1",
          {
            opacity: 0,
            y: 150,
          },
          {
            opacity: 1,
            y: 0,
          }
        )
        .fromTo(
          "#card1",
          {
            opacity: 0,
            y: 150,
          },
          {
            opacity: 1,
            y: 0,
          }
        )
        .fromTo(
          "#card2",
          {
            opacity: 0,
            y: 150,
          },
          {
            opacity: 1,
            y: 0,
          }
        )
        .fromTo(
          "#card3",
          {
            opacity: 0,
            y: 150,
          },
          {
            opacity: 1,
            y: 0,
          }
        )
        .fromTo(
          "#subtitle2",
          {
            opacity: 0,
            x: -100,
          },
          {
            opacity: 1,
            x: 0,
          }
        )
        .fromTo(
          "#card4",
          {
            opacity: 0,
            y: 150,
          },
          {
            opacity: 1,
            y: 0,
          }
        );
      return () => {
        tl.kill();
      };
    });

    mm.add("(max-width: 530px)", () => {
      const tl = gsap.timeline({
        defaults: { duration: 0.3, opacity: 0, ease: "back.out(1.7)" },
        scrollTrigger: {
          trigger: ".experience__container",
          scrub: true,
          start: "top bottom",
          end: "80% bottom ",
        },
      });

      tl.fromTo(
        ".section-title",
        {
          opacity: 0,
          y: 150,
        },
        {
          opacity: 1,
          y: 0,
        }
      )
        .fromTo(
          "#subtitle1",
          {
            opacity: 0,
            y: 150,
          },
          {
            opacity: 1,
            y: 0,
          }
        )
        .fromTo(
          "#card1",
          {
            opacity: 0,
            y: 150,
          },
          {
            opacity: 1,
            y: 0,
          }
        )
        .fromTo(
          "#card2",
          {
            opacity: 0,
            y: 150,
          },
          {
            opacity: 1,
            y: 0,
          }
        )
        .fromTo(
          "#card3",
          {
            opacity: 0,
            y: 150,
          },
          {
            opacity: 1,
            y: 0,
          }
        )
        .fromTo(
          "#subtitle2",
          {
            opacity: 0,
            x: -100,
          },
          {
            opacity: 1,
            x: 0,
          }
        )
        .fromTo(
          "#card4",
          {
            opacity: 0,
            y: 150,
          },
          {
            opacity: 1,
            y: 0,
          }
        );

      return () => {
        tl.kill();
      };
    });
  }, []);

  return (
    <ExperienceContainerStyled className="experience__container">
      <h2 className="section-title">Skills</h2>
      <h3 className="section-subtitle" id="subtitle1">
        Mern Stack <span>- MongoDB, Express, React, Node.JS </span>
      </h3>

      <div className="card__content">
        <HorizontalCard
          cardId="card1"
          logo={logoReact}
          logoAlt="Logo do React"
          text="Ciclo de Vida de Componentes, Statefull x Stateless, Rotas para
              Páginas - SPA, Gerenciamento de Estado com Redux"
        />

        <HorizontalCard
          cardId="card2"
          logo={logoNodeJs}
          logoAlt="Logo do Node.js"
          text="Express.js, Rest, CRUD, Controller - Router, Ajax, Async e Await,
              Autenticação, sessão e criptografia, Encriptação de senha bcrypt"
        />

        <HorizontalCard
          cardId="card3"
          logo={logoMongoDB}
          logoAlt="Logo do MongoDB"
          text="Banco de Dados orientado a documentos, ODM e Mongoose"
        />
      </div>

      <h3 className="section-subtitle" id="subtitle2">
        Tríade da Web <span>- HTML, CSS, JavaScript</span>
      </h3>
      <div className="card__content" id="card4">
        <div className="card__web">
          <img
            src={logoHtml}
            className="experience__avatar"
            alt="Logo do React"
          />

          <img
            src={logoCss}
            className="experience__avatar"
            alt="Logo do React"
          />

          <img
            src={logoJs}
            className="experience__avatar"
            alt="Logo do React"
          />
        </div>
      </div>
    </ExperienceContainerStyled>
  );
}
