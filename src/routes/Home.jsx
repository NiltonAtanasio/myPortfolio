import "../App.css";
import {
  ExperienceSection,
  HomeSection,
  PortfolioSection,
} from "../components";

export default function Home() {
  return (
    <div>
      <main className="content">
        <HomeSection />

        <ExperienceSection />

        <PortfolioSection />
      </main>
    </div>
  );
}
