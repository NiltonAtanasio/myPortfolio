import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { PortfolioSectionStyled } from "./PortfolioSectionStyled";
import logoCharityConnect from "../../../assets/images/logoCharityConnect.png";
import logoCharityConnectSite from "../../../assets/images/LogoCharityConnectSite.png";
import logoInsta from "../../../assets/images/logoInsta.png";

export default function PortfolioSection() {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    gsap.registerPlugin(ScrollTrigger);
    mm.add("(min-width: 491px)", () => {
      const tl = gsap.timeline({
        defaults: {
          duration: 1,
          ease: "back.out(1.7)",
          opacity: 0,
        },
        scrollTrigger: {
          trigger: ".portfolio__section",
          scrub: 2,
          start: "top bottom",
          end: "center bottom",
        },
      });

      tl.fromTo(
        "#experience__title",
        {
          y: 150,
        },
        {
          y: 0,
          opacity: 1,
        }
      )
        .fromTo(
          "#experience__subtitle",
          {
            y: 100,
          },
          {
            y: 0,
            opacity: 1,
          }
        )
        .fromTo(
          "#card__box1",
          {
            opacity: 1,
            xPercent: 130,
            rotate: "-20deg",
          },
          {
            delay: 1,
            duration: 0.2,
            opacity: 1,
            rotate: "0deg",
            xPercent: 0,
            onComplete: () => {
              gsap.set("#card__box1", { clearProps: "transform" });
            },
          },
          "-=1.5"
        )
        .fromTo(
          "#card__box2",
          {
            x: 1,
            opacity: 1,
          },
          {
            x: 0,
            duration: 0.2,
            opacity: 1,
            onComplete: () => {
              gsap.set("#card__box2", { clearProps: "transform" });
            },
          }
        )
        .fromTo(
          "#card__box3",
          {
            xPercent: -130,
            opacity: 1,
            rotate: "20deg",
          },
          {
            x: 0,
            duration: 0.2,
            opacity: 1,
            rotate: "0deg",
            xPercent: 0,
            onComplete: () => {
              gsap.set("#card__box3", { clearProps: "transform" });
            },
          },
          "-=0.7"
        );

      return () => {
        tl.kill();
      };
    });

    mm.add("(max-width: 490px)", () => {
      const tl = gsap.timeline({
        defaults: {
          duration: 1,
          ease: "back.out(1.7)",
          opacity: 0,
        },
        scrollTrigger: {
          trigger: ".portfolio__section",
          scrub: 2,
          start: "top bottom",
          end: "center bottom",
        },
      });

      tl.fromTo(
        "#experience__title",
        {
          x: 50,
        },
        {
          x: 0,
          opacity: 1,
        }
      )
        .fromTo(
          "#experience__subtitle",
          {
            x: 100,
          },
          {
            x: 0,
            opacity: 1,
          }
        )
        .fromTo(
          "#card__box1",
          {
            opacity: 1,
            yPercent: 100,
            rotate: "-20deg",
          },
          {
            delay: 1,
            duration: 0.2,
            opacity: 1,
            rotate: "0deg",
            yPercent: 0,
          },
          "-=1.5"
        );

      return () => {
        tl.kill();
      };
    });
  }, []);

  return (
    <PortfolioSectionStyled className="portfolio__section" id="portfolio">
      <h2 className="section-title " id="experience__title">
        Portifólio
      </h2>
      <h3 className="section-subtitle" id="experience__subtitle">
        Meus Projetos
      </h3>

      <div className="card__area">
        <div className="box__area">
          <div className="box" id="card__box1">
            <a
              href="https://github.com/NiltonAtanasio/api_charity_connect"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logoCharityConnect} alt="Logo de uma API" />

              <div className="overlay">
                <h3>Charity API</h3>
                <p>
                  API desenvolvida para alimentar a rede social, conectando
                  pessoas, ONGs e empresas em prol da caridade. Ela permite o
                  gerenciamento de usuários, campanhas, doações e interações
                  sociais de forma simples, segura e integrada.
                </p>
              </div>
            </a>
          </div>

          <div className="box" id="card__box2">
            <a
              href="https://github.com/NiltonAtanasio/Charity_Connect"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={logoCharityConnectSite}
                alt="Lodo do site CharityConnect"
              />
              <div className="overlay">
                <h3>CharityConnect</h3>
                <p>
                  O site da CharityConnect é a interface principal da
                  plataforma, onde usuários podem se cadastrar, explorar causas
                  sociais, fazer doações e acompanhar campanhas solidárias.
                </p>
              </div>
            </a>
          </div>

          <div className="box" id="card__box3">
            <a
              href="https://github.com/NiltonAtanasio/instagram"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={logoInsta}
                alt="Uma réplica da interface do instagram"
              />
              <div className="overlay">
                <h3>Instagram</h3>
                <p>
                  réplica do Instagram, com design inspirado na interface
                  original da plataforma. A proposta é recriar visualmente a
                  experiência do usuário.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </PortfolioSectionStyled>
  );
}
