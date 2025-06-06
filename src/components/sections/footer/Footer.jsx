import { FaGithub, FaLinkedin } from "react-icons/fa";

import { FooterStyled } from "./FooterStyled.jsx";

export default function Footer() {
  return (
    <FooterStyled>
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
    </FooterStyled>
  );
}
