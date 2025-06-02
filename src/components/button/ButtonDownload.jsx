import { ButtonStyled } from "./ButtonStyled";

export default function Button({
  href,
  download,
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
      as="a"
      href={href}
      download={download}
      bgColor={bgColor}
      borderColor={boderColor}
      boxShadow={boxShadow}
      color={color}
      hoverBgColor={hoverBgColor}
      fontSize={fontSize}
      rel="noopener noreferrer"
    >
      {text}
    </ButtonStyled>
  );
}
