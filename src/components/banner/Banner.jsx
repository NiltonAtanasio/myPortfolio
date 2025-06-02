import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { BannerStyled } from "./BannerStyled";

import logoHome from "../../assets/images/logoHome.png";

export default function Banner() {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.5, opacity: 0, ease: "back.out(1.7)" },
    });

    tl.fromTo(
      ".banner",
      {
        x: 200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        delay: 0.7,
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <BannerStyled>
      <div className="img__container">
        <img
          src={logoHome}
          alt="um menino sentado em frente ao computador com elementos em volta dele demonstrando que ele é um desenvolvedor"
        />
      </div>
    </BannerStyled>
  );
}
