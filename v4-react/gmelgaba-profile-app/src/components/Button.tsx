import styled from "styled-components";

interface ButtonProps extends React.ComponentPropsWithoutRef<"a"> {
  primary?: boolean;
  href?: string;
  download?: boolean;
}

const ButtonComponent = styled.a<ButtonProps>`
  position: relative;
  display: inline-flex; /* fixes alignment */
  align-items: center;
  justify-content: center;

  padding: 15px 25px;
  border-radius: 35px;
  font-size: 20px;
  font-family: inherit;
  font-weight: 400;
  text-align: center;
  text-decoration: none;

  background: ${({ primary, theme }) =>
    primary ? theme.gradient : theme.gradientInverse};
  color: white;
  border: none;
  cursor: pointer;
  z-index: 1;
  margin-bottom: 40px;

  /* Remove default <a> focus styles */
  outline: none;
  appearance: none;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ primary, theme }) =>
      primary ? theme.gradientInverse : theme.gradient};
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    z-index: -1;
    border-radius: inherit;
  }

  &:hover::after {
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primaryColor};
    outline-offset: 3px;
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  download,
  ...props
}) => {
  return (
    <ButtonComponent href={href} download={download} {...props}>
      {children}
    </ButtonComponent>
  );
};

export default Button;
