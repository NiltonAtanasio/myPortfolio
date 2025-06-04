import styled from "styled-components";

export const ButtonStyled = styled.button`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.bgColor || props.theme.colors.primary[5]};
  border-radius: 12px;
  border: 1px solid
    ${(props) => props.borderColor || props.theme.colors.primary[5]};
  padding: 8px 15px;
  font-weight: 600;
  box-shadow: ${(props) =>
    props.boxShadow || `0 2px 15px ${props.theme.colors.primary[6]}`};
  cursor: pointer;
  transition: 0.3s ease;
  font-size: ${(props) => props.fontSize || "0.8rem"};
  min-width: 70px;
  color: ${(props) => props.color || props.theme.colors.neutral[1]};

  &:hover {
    background-color: ${(props) =>
      props.hoverBgColor || props.theme.colors.primary[3]};
    transform: scale(1.04);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
