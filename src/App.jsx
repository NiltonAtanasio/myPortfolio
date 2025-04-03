import React from "react";
import Spline from "@splinetool/react-spline";
import "./App.css";

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
                  <a href="#home">Início</a>
                </li>
                <li className="nav-item">
                  <a href="#menu">Portifólio</a>
                </li>
                <li className="nav-item">
                  <a href="#testimonials">Sobre Mim</a>
                </li>
              </ul>
              <button className="btn-default">Baixar CV</button>
            </div>
          </nav>
        </header>

        <main className="content">
          <section className="home">
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
                  <div className="item item1"></div>
                  <div className="item item2"></div>
                  <div className="item item3"></div>
                  <div className="item item4"></div>
                  <div className="item item5"></div>
                  <div className="item item6"></div>
                  <div className="item item7"></div>
                  <div className="item item8"></div>
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
            <h3 className="section-subtitle ">Meu Projetos</h3>

            <div className="card__area">
              <div className="box__area">
                <div className="box">
                  <img src="#" alt="" />
                  <div className="overlay">
                    <h3>Teste</h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      A, necessitatibus? Exercitationem suscipit aliquid
                      voluptatibus autem ratione asperiores harum saepe sit
                      soluta ipsa quae molestias odit ab pariatur praesentium,
                      nulla facilis.
                    </p>
                  </div>
                </div>

                <div className="box">
                  <img src="#" alt="" />
                  <div className="overlay">
                    <h3>Teste</h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      A, necessitatibus? Exercitationem suscipit aliquid
                      voluptatibus autem ratione asperiores harum saepe sit
                      soluta ipsa quae molestias odit ab pariatur praesentium,
                      nulla facilis.
                    </p>
                  </div>
                </div>

                <div className="box">
                  <img src="#" alt="" />
                  <div className="overlay">
                    <h3>Teste</h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      A, necessitatibus? Exercitationem suscipit aliquid
                      voluptatibus autem ratione asperiores harum saepe sit
                      soluta ipsa quae molestias odit ab pariatur praesentium,
                      nulla facilis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="experience__section">
            <div className="experience__content rightSlide">
              <h2 className="section-title">Sobre Mim</h2>
              <h3 className="section-subtitle">Minhas experiências e skills</h3>

              <div className="card__content">
                <div className="experience__card">
                  <img
                    src="src/images/avatar.png"
                    className="experience__avatar"
                    alt=""
                  />

                  <div className="about__content autoBlur">
                    <p>Fulana de Tal</p>
                    <p>
                      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repellat voluptatibus cumque dolor ea est quae alias
                      necessitatibus"
                    </p>
                  </div>
                </div>

                <div className="experience__card">
                  <img
                    src="src/images/avatar.png"
                    className="experience__avatar"
                    alt=""
                  />

                  <div className="about__content autoBlur">
                    <p>Fulana de Tal</p>
                    <p>
                      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repellat voluptatibus cumque dolor ea est quae alias
                      necessitatibus"
                    </p>
                  </div>
                </div>

                <div className="experience__card">
                  <img
                    src="src/images/avatar.png"
                    className="experience__avatar"
                    alt=""
                  />

                  <div className="about__content autoBlur">
                    <p>Fulana de Tal</p>
                    <p>
                      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repellat voluptatibus cumque dolor ea est quae alias
                      necessitatibus"
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

            <div className="social-media-buttons">
              <a href="#" aria-label="Google"></a>

              <a href="#" aria-label="Google"></a>

              <a href="#" aria-label="Google"></a>
            </div>
          </div>
        </footer>
        <script src="src/javascript/script.js"></script>
      </body>
    </div>
  );
}
