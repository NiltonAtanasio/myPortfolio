import React from "react";
import Spline from "@splinetool/react-spline";

import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import "./App.css";
import logoReact from "./assets/images/react-logo.jpg";
import logoNodeJs from "./assets/images/Node.js-logo.png";
import logoMongoDB from "./assets/images/MongoDb-logo.png";

export default function App() {
  return (
    <div>
      <body>
        <header>
          <nav className="navbar">
            <div className="navbar__content">
              <div>
                <h2>DEV</h2>
              </div>
              <ul className="nav__list">
                <li className="nav-item active">
                  <a href="#inicio">Início</a>
                </li>
                <li className="nav-item">
                  <a href="#">Blog</a>
                </li>
                <li className="nav-item">
                  <a href="#">Sobre Mim</a>
                </li>
              </ul>
              <button className="btn-default">Baixar CV</button>
            </div>
          </nav>
        </header>

        <main className="content">
          <section className="home" id="inicio">
            <div className="home__content">
              <div className="shape"></div>
              <div className="home__title">
                <h1 className="title leftSlide">
                  Tudo o que você vê online, começa aqui, nos bastidores do
                  <span> back-end</span>
                </h1>

                <p className="description upSlide">
                  Sou desenvolvedor back-end com habilidades em front-end,
                  unindo lógica e design para criar soluções completas. Formado
                  em Análise e Desenvolvimento de Sistemas.
                </p>

                <div className="home__buttons upSlide">
                  <a href="#" className="btn-default">
                    Play
                  </a>
                </div>

                <div className="scroller__div upSlide">
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
              </div>

              <div className="banner">
                <div className="spline__container">
                  <Spline
                    className="spline"
                    scene="https://prod.spline.design/WHyFUU39XRwEpAC9/scene.splinecode"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="portfolio__section autoShow">
            <h2 className="section-title ">Portifólio</h2>
            <h3 className="section-subtitle ">Meus Projetos</h3>

            <div className="card__area">
              <div className="box__area">
                <div className="box">
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

                <div className="box">
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

                <div className="box">
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

          <section className="experience__section">
            <div className="experience__content rightSlide">
              <h2 className="section-title">Skills</h2>
              <h3 className="section-subtitle">Men Stack</h3>

              <div className="card__content">
                <div className="experience__card autoBlur">
                  <img
                    src={logoReact}
                    className="experience__avatar"
                    alt="Logo do React"
                  />

                  <div className="about__content autoBlur">
                    <p>
                      Ciclo de Vida de Componentes, Statefull x Stateless, Rotas
                      para Páginas - SPA, Gerenciamento de Estado com Redux
                    </p>
                  </div>
                </div>

                <div className="experience__card autoBlur">
                  <img src={logoNodeJs} className="experience__avatar" alt="" />

                  <div className="about__content">
                    <p>
                      Express.js, Rest, CRUD, Controller - Router, Ajax, Async e
                      Await, Autenticação, sessão e criptografia, Encriptação de
                      senha bcrypt
                    </p>
                  </div>
                </div>

                <div className="experience__card autoBlur">
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
            </div>
          </section>
        </main>

        <footer>
          <img src="src/images/wave.svg" alt="" />

          <div className="footer__items">
            <span className="copyright">&copy 2025 Nilton Atanazzio</span>

            <div className="social__media__content">
              <div className="social__media__buttons">
                <a href="#" aria-label="Google"></a>
              </div>
              <div className="social__media__buttons">
                <a href="#" aria-label="Google"></a>
              </div>
              <div className="social__media__buttons">
                <a href="#" aria-label="Google"></a>
              </div>
            </div>
          </div>
        </footer>
        <script src="src/javascript/script.js"></script>
      </body>
    </div>
  );
}
