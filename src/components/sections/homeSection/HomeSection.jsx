import { HomeSectionStyled } from "./HomeSectionStyled.jsx";
import TitleContent from "../../titleContent/TitleContent.jsx";
import Banner from "../../banner/Banner.jsx";

export default function HomeSection() {
  return (
    <HomeSectionStyled className="home" id="inicio">
      <div className="home__content">
        <TitleContent />
        <Banner />
      </div>
    </HomeSectionStyled>
  );
}
