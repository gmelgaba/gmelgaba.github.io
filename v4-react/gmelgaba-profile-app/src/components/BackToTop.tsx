import { useEffect, useState } from "react";

import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";

const ScrollButton = styled.button<{ visible: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: transparent;
  color: ${({ theme }) => theme.primaryColor};
  border: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: opacity 0.4s ease, transform 0.3s ease-in-out,
    background 0.3s ease-in-out, color 0.3s ease-in-out;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: ${({ visible }) => (visible ? "auto" : "none")};

  &:hover {
    background: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.textLight};
    transform: scale(1.05);
    border: none;
  }
`;

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ScrollButton visible={isVisible} onClick={scrollToTop}>
      <FaArrowUp />
    </ScrollButton>
  );
};

export default BackToTop;
