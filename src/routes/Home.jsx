import "../App.css";

import PortfolioSection from "../components/sections/portfolioSection/PortfolioSection.jsx";
import Footer from "../components/sections/footer/Footer.jsx";
import HomeSection from "../components/sections/homeSection/HomeSection.jsx";
import ExperienceSection from "../components/sections/experienceSection/ExperienceSection.jsx";

export default function Home() {
  return (
    <div>
      <main className="content">
        <HomeSection />

        <ExperienceSection />

        <PortfolioSection />
      </main>

      <Footer />
    </div>
  );
}
