import "./App.css";

import Navbar from "./components/navbar/Navbar.jsx";
import SectionTitle from "./components/sectionTitle/SectionTitle.jsx";
import Banner from "./components/banner/Banner.jsx";
import ExperienceContainer from "./components/experienceContainer/ExperienceContainer.jsx";
import PortfolioSection from "./components/Sections/portfolioSection/PortfolioSection.jsx";
import Footer from "./components/Sections/footer/Footer.jsx";

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

        <Footer />
      </body>
    </div>
  );
}
