import { createGlobalStyle, keyframes } from "styled-components";

import { resolutions } from "../utils/devices";

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.sectionEven};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.primaryColor};
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: ${({ theme }) => theme.text};
    }
  }

  * {
    font-family: Sora, sans-serif;
  }

  body {
    margin: 0;
    font-family: Sora, sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.4s ease, color 0.4s ease;
  }

  ::selection {
    background: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.textLight};
  }

  p {
    font-weight: normal;
  }

  section:nth-child(odd) {
    background-color: ${({ theme }) => theme.sectionOdd};
  }

  section:nth-child(even) {
    background-color: ${({ theme }) => theme.sectionEven};
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: bold;
    background-image: ${({ theme }) => theme.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    display: inline-block;
    text-align: center;
    width: 100%;
    font-weight: bold;
    margin-bottom: 8px;
    &.align-left {
      text-align: left;
    }
    ${resolutions.mobile} {
      font-size: 29px;
    }
  }
  .section-subtitle {
    text-align: center;
    width: 100%;
  }
`;

export default GlobalStyle;
