import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
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
    &.align-left {
      text-align: left;
    }
  }
  .section-subtitle {
    text-align: center;
  }
`;

export default GlobalStyle;
