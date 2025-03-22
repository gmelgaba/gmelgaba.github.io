import styled from "styled-components";

interface ButtonProps {
  primary?: boolean;
  href?: string;
  download?: boolean;
}

const Button = styled.button<ButtonProps>`
  position: relative;
  overflow: hidden;
  padding: 10px 20px;
  border-radius: 20px;
  color: white;
  border: none;
  background: ${({ primary, theme }) =>
    primary ? theme.gradient : theme.gradientInverse};
  cursor: pointer;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ primary, theme }) =>
      primary ? theme.gradientInverse : theme.gradient};
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    z-index: -1;
  }

  &:hover::after {
    opacity: 1;
  }
`;

export default Button;
