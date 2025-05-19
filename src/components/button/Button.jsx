import { ButtonStyled } from "./ButtonStyled";
import { Link } from "react-router-dom";

export default function Button({
  link,
  bgColor,
  boderColor,
  text,
  boxShadow,
  color,
  hoverBgColor,
  fontSize,
}) {
  return (
    <ButtonStyled
      as={Link}
      to={link}
      bgColor={bgColor}
      borderColor={boderColor}
      boxShadow={boxShadow}
      color={color}
      hoverBgColor={hoverBgColor}
      fontSize={fontSize}
      target="_blank"
    >
      {text}
    </ButtonStyled>
  );
}
