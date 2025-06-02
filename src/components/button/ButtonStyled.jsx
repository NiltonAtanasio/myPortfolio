import styled from "styled-components";

export const ButtonStyled = styled.button`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor || "var(--color-primary-5)"};
  border-radius: 12px;
  border: ${(props) => props.boderColor || "var(--color-primary-5)"};
  padding: 8px 15px;
  font-weight: 600;
  box-shadow: ${(props) => props.boxShadow || "var(--color-neutral-1)"};
  cursor: pointer;
  transition: 0.3s ease;
  font-size: ${(props) => props.fontSize || "0.8rem"};
  min-width: 70px;
  color: ${(props) => props.color || "var(--color-neutral-1)"};

  &:hover {
    background-color: ${(props) =>
      props.hoverBgColor || "var(--color-primary-3)"};
    transform: scale(1.04);
  }
`;
