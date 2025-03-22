import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";

const ToggleButton = styled.button`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: 20px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
  position: absolute;
  right: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.textLight};
  }
`;

const ThemeToggleButton: React.FC = () => {
  const { toggleTheme } = useTheme();

  return <ToggleButton onClick={toggleTheme}>🌙 / ☀️</ToggleButton>;
};

export default ThemeToggleButton;
