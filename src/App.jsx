import "./App.css";

import Navbar from "./components/navbar/Navbar.jsx";

import PortfolioSection from "./components/sections/portfolioSection/PortfolioSection.jsx";
import Footer from "./components/sections/footer/Footer.jsx";
import HomeSection from "./components/sections/homeSection/HomeSection.jsx";
import ExperienceSection from "./components/sections/experienceSection/ExperienceSection.jsx";

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
