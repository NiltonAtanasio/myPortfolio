import { useLayoutEffect } from "react";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaLinkedin,
  FaMousePointer,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

import logoHome from "./assets/images/logoHome.png";
import logoReact from "./assets/images/react-logo.jpg";
import logoNodeJs from "./assets/images/Node.js-logo.png";
import logoMongoDB from "./assets/images/MongoDb-logo.png";
import logoHtml from "./assets/images/logoHtml.jpg";
import logoCss from "./assets/images/logoCss.jpg";
import logoJs from "./assets/images/logoJS.png";

export default function App() {
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
        },
        "-=0.45"
      )
      .fromTo(
        ".title",
        {
          x: -200,
        },
        {
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

    gsap.fromTo(
      ".banner",
      {
        x: 200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        delay: 0.7,
      }
    );

    return () => {
      gsap.killTweensOf(
        "#nav__title",
        "#nav__item1",
        "#nav__item2",
        "#nav__item3",
        "#nav__button",
        ".title",
        ".text__animation",
        ".description",
        ".home__title",
        ".banner",
        ".section-title",
        ".scroller__div",
        ".home__buttons"
      );
    };
  }, []);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 531px)", () => {
      const tl = gsap.timeline({
        defaults: { duration: 0.7, opacity: 0, ease: "back.out(1.7)" },
      });
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        tl.current = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".experience__section",
              scrub: true,
              start: "top bottom",
              end: "bottom bottom",
            },
          })
          .fromTo(
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
          gsap.killTweensOf(
            ".experience__content",
            ".section-title",
            "#subtitle1",
            "#card1",
            "#card2",
            "#card3",
            "#subtitle2",
            "#card4"
          );
        };
      });
    });

    mm.add("(max-width: 530px)", () => {
      const tl = gsap.timeline({
        defaults: { duration: 0.3, opacity: 0, ease: "back.out(1.7)" },
      });
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        tl.current = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".experience__section",
              scrub: true,
              start: "top bottom",
              end: "80% bottom ",
              markers: true,
            },
          })
          .fromTo(
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
          gsap.killTweensOf(
            ".experience__content",
            ".section-title",
            "#subtitle1",
            "#card1",
            "#card2",
            "#card3",
            "#subtitle2",
            "#card4"
          );
        };
      });
    });
  }, []);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

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
      gsap.registerPlugin(ScrollTrigger);

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
          },
          "-=0.7"
        );
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
      gsap.registerPlugin(ScrollTrigger);

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
    });
  }, []);

  return (
    <div>
      <body>
        <header>
          <nav className="navbar">
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
              <button className="btn-default" id="nav__button">
                Baixar CV
              </button>
            </div>
          </nav>
        </header>

        <main className="content">
          <section className="home" id="inicio">
            <div className="home__content">
              <div className="home__title">
                <h1 className="title">Olá, me chamo Atanazzio</h1>
                <h3 className="text__animation">
                  Eu sou <span></span>
                </h3>

                <p className="description">
                  Tudo o que você vê online, começa aqui, nos bastidores do
                  back-end
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
                  <a href="#" className="btn-second">
                    Play
                  </a>
                </div>
              </div>

              <div className="banner">
                <div className="img__container">
                  <img
                    src={logoHome}
                    alt="um menino sentado em frente ao computador com elementos em volta dele demonstrando que ele é um desenvolvedor"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="experience__section" id="skills">
            <div className="experience__content">
              <h2 className="section-title">Skills</h2>
              <h3 className="section-subtitle" id="subtitle1">
                Men Stack <span>- React, Node.JS, MongoDB</span>
              </h3>

              <div className="card__content">
                <div className="experience__card" id="card1">
                  <img
                    src={logoReact}
                    className="experience__avatar"
                    alt="Logo do React"
                  />

                  <div className="about__content">
                    <p>
                      Ciclo de Vida de Componentes, Statefull x Stateless, Rotas
                      para Páginas - SPA, Gerenciamento de Estado com Redux
                    </p>
                  </div>
                </div>

                <div className="experience__card" id="card2">
                  <img src={logoNodeJs} className="experience__avatar" alt="" />

                  <div className="about__content">
                    <p>
                      Express.js, Rest, CRUD, Controller - Router, Ajax, Async e
                      Await, Autenticação, sessão e criptografia, Encriptação de
                      senha bcrypt
                    </p>
                  </div>
                </div>

                <div className="experience__card" id="card3">
                  <img
                    src={logoMongoDB}
                    className="experience__avatar"
                    alt=""
                  />

                  <div className="about__content">
                    <p>Banco de Dados orientado a documentos, ODM e Mongoose</p>
                  </div>
                </div>
              </div>

              <h3 className="section-subtitle" id="subtitle2">
                Tríade da Web <span>- HTML, CSS, JavaScript</span>
              </h3>
              <div className="card__content" id="card4">
                <div className="experience__card card__web">
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
            </div>
          </section>

          <section className="portfolio__section" id="portfolio">
            <h2 className="section-title " id="experience__title">
              Portifólio
            </h2>
            <h3 className="section-subtitle" id="experience__subtitle">
              Meus Projetos
            </h3>

            <div className="card__area">
              <div className="box__area">
                <div className="box" id="card__box1">
                  <img src="#" alt="" />
                  <div className="overlay">
                    <h3>Projeto</h3>
                    <p>
                      O projeto ainda está em fase de desenvolvimento.
                      Agradecemos sua paciência e pedimos que retorne em breve,
                      pois a conclusão está prevista para os próximos dias.
                    </p>
                  </div>
                </div>

                <div className="box" id="card__box2">
                  <img src="#" alt="" />
                  <div className="overlay">
                    <h3>Projeto</h3>
                    <p>
                      O projeto ainda está em fase de desenvolvimento.
                      Agradecemos sua paciência e pedimos que retorne em breve,
                      pois a conclusão está prevista para os próximos dias.
                    </p>
                  </div>
                </div>

                <div className="box" id="card__box3">
                  <img src="#" alt="" />
                  <div className="overlay">
                    <h3>Projeto</h3>
                    <p>
                      O projeto ainda está em fase de desenvolvimento.
                      Agradecemos sua paciência e pedimos que retorne em breve,
                      pois a conclusão está prevista para os próximos dias.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <img src="src/images/wave.svg" alt="" />

          <div className="footer__items">
            <span className="copyright">&copy 2025 Nilton Atanazzio</span>

            <div className="social__media__content">
              <div className="social__media__buttons">
                <FaGithub className="item__icon" />
              </div>
              <div className="social__media__buttons">
                <FaLinkedin className="item__icon" />
              </div>
              <div className="social__media__buttons">
                <FaMousePointer className="item__icon" />
              </div>
            </div>
          </div>
        </footer>
        <script src="src/javascript/script.js"></script>
      </body>
    </div>
  );
}
