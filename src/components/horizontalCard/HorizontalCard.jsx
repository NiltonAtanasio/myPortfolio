import { HorizontalCardStyled } from "./horizontalCardStyled";

export default function HorizontalCard({ logo, logoAlt, text, cardId }) {
  return (
    <HorizontalCardStyled id={cardId}>
      <img src={logo} alt={logoAlt} />

      <div className="about__content">
        <p>{text}</p>
      </div>
    </HorizontalCardStyled>
  );
}
