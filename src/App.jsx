import "./App.css";

import Navbar from "./components/navbar/Navbar.jsx";
import ExperienceContainer from "./components/experienceContainer/ExperienceContainer.jsx";
import PortfolioSection from "./components/Sections/portfolioSection/PortfolioSection.jsx";
import Footer from "./components/Sections/footer/Footer.jsx";
import HomeSection from "./components/Sections/home/HomeSection.jsx";

export default function App() {
  return (
    <div>
      <body>
        <header>
          <Navbar />
        </header>

        <main className="content">
          <HomeSection />

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
