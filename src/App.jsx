import "./App.css";

import Navbar from "./components/navbar/Navbar.jsx";

import PortfolioSection from "./components/Sections/portfolioSection/PortfolioSection.jsx";
import Footer from "./components/Sections/footer/Footer.jsx";
import HomeSection from "./components/Sections/homeSection/HomeSection.jsx";
import ExperienceSection from "./components/Sections/experienceSection/ExperienceSection.jsx";

export default function App() {
  return (
    <div>
      <body>
        <header>
          <Navbar />
        </header>

        <main className="content">
          <HomeSection />

          <ExperienceSection />

          <PortfolioSection />
        </main>

        <Footer />
      </body>
    </div>
  );
}
