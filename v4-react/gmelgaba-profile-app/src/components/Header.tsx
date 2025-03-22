import ThemeToggleButton from "./ThemeToggleButton";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 93%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  padding-left: 5%;
  background-color: ${({ theme }) => theme.sectionOdd};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

const NavLink = styled.a`
  position: relative;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  color: ${({ theme }) => theme.navText};
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.primaryColor};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-out;
  }
  &:hover {
    color: ${({ theme }) => theme.navText};
    &::after {
      transform: scaleX(1);
    }
  }
`;

const Spacer = styled.div`
  height: 60px;
`;

const Header: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <Nav>
          <NavLink href="#about-me">About Me</NavLink>
          <NavLink href="#interests">Interests</NavLink>
          <NavLink href="#resume">Resume</NavLink>
          <NavLink href="#tools">Dev Tools</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>
        <ThemeToggleButton />
      </HeaderContainer>
      <Spacer />
    </>
  );
};

export default Header;
