import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./App.css";

import Navbar from "./components/navbar/Navbar.jsx";
import SectionTitle from "./components/sectionTitle/SectionTitle.jsx";
import Banner from "./components/banner/Banner.jsx";
import ExperienceContainer from "./components/experienceContainer/ExperienceContainer.jsx";
import PortfolioSection from "./components/Sections/portfolioSection/PortfolioSection.jsx";

export default function App() {
  return (
    <div>
      <body>
        <header>
          <Navbar />
        </header>

        <main className="content">
          <section className="home" id="inicio">
            <div className="home__content">
              <SectionTitle />
              <Banner />
            </div>
          </section>

          <section className="experience__section" id="skills">
            <ExperienceContainer />
          </section>

          <PortfolioSection />
        </main>

        <footer>
          <img src="src/images/wave.svg" alt="" />

          <div className="footer__items">
            <span className="copyright">&copy 2025 Nilton Atanazzio</span>

            <div className="social__media__content">
              <div className="social__media__buttons">
                <a
                  href="https://github.com/NiltonAtanasio"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="item__icon" />
                </a>
              </div>
              <div className="social__media__buttons">
                <a
                  href="https://www.linkedin.com/in/niltonatanasio/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="item__icon" />
                </a>
              </div>
            </div>
          </div>
        </footer>
        <script src="src/javascript/script.js"></script>
      </body>
    </div>
  );
}
