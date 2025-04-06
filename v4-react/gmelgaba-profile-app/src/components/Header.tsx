import ThemeToggleButton from "./ThemeToggleButton";
import { resolutions } from "../utils/devices";
import styled from "styled-components";
import { useState } from "react";

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

const NavIcon = styled.div`
  position: fixed;
  top: 16px;
  left: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2000;

  div {
    &:nth-child(1) {
      width: 35px;
      margin-bottom: 8px;
    }
    &:nth-child(2) {
      width: 40px;
      margin-bottom: 8px;
    }
    &:nth-child(3) {
      width: 30px;
    }
    height: 3px;
    background: ${({ theme }) => theme.primaryColor};
    border-radius: 5px;
    transform-origin: 1px;
  }

  ${resolutions.tabletAndGreater} {
    display: none;
  }
`;

const Nav = styled.nav`
  display: none;

  ${resolutions.tabletAndGreater} {
    display: flex;
    gap: 30px;
  }
`;

const NavLink = styled.a`
  position: relative;
  ${resolutions.mobile} {
    font-size: 30px;
  }
  ${resolutions.tabletAndGreater} {
    font-size: 15px;
  }
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

const MobileMenu = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.sectionOdd};
  color: ${({ theme }) => theme.text};
  width: 100vw;
  height: 100vh;
  z-index: 1500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  font-weight: 300;
  opacity: ${({ show }) => (show ? 0.95 : 0)};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  pointer-events: ${({ show }) => (show ? "auto" : "none")};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.navText};
  }
`;

const Spacer = styled.div`
  height: 60px;
`;

const Header: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNavClick = () => setShowNav(false);

  const navLinks = [
    { label: "About Me", href: "/#about-me" },
    { label: "Education", href: "/#education" },
    { label: "Experience", href: "/#experience" },
    { label: "Interests", href: "/#interests" },
    { label: "Dev Tools", href: "/#tools" },
    // { label: "Boardgames App", href: "/boardgame-app" },
  ];

  return (
    <>
      <HeaderContainer>
        <NavIcon onClick={() => setShowNav(!showNav)}>
          <div />
          <div />
          <div />
        </NavIcon>

        <Nav>
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </Nav>

        {/* <ThemeToggleButton /> */}
      </HeaderContainer>

      <MobileMenu show={showNav}>
        {navLinks.map((link) => (
          <NavLink key={link.href} href={link.href} onClick={handleNavClick}>
            {link.label}
          </NavLink>
        ))}
      </MobileMenu>

      <Spacer />
    </>
  );
};

export default Header;
