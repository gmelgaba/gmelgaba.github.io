import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutMe from "./sections/AboutMe";
import BackToTop from "./components/BackToTop";
import BoardGameApp from "./pages/boardgames";
import EasterEgg from "./components/EasterEgg";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Interests from "./sections/Interests";
import Presentation from "./sections/Presentation";
import React from "react";
import { ThemeProviderWrapper } from "./context/ThemeContext";
import Tools from "./sections/Tools";
import styled from "styled-components";

const Container = styled.div`
  scroll-snap-type: y mandatory;
  height: 100vh;
  width: 100%;
`;

const Section = styled.section`
  display: block;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  font-size: 2rem;
  font-weight: bold;
  padding: 0 5%;
`;

const Home: React.FC = () => (
  <>
    <Section id="header">
      <Header />
    </Section>
    <Section id="presentation">
      <Presentation />
    </Section>
    <Section id="about-me">
      <AboutMe />
    </Section>
    <Section id="education">
      <Education />
    </Section>
    <Section id="experience">
      <Experience />
    </Section>
    {/* <Section id="skills">
      <Skills />
    </Section> */}
    <Section id="interests">
      <Interests />
    </Section>
    <Section id="tools">
      <Tools />
    </Section>
    <Section id="footer">
      <Footer />
    </Section>
  </>
);

const App: React.FC = () => {
  return (
    <ThemeProviderWrapper>
      <Router>
        <GlobalStyle />
        <Container>
          <Routes>
            <Route path="/boardgame-app" element={<BoardGameApp />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <BackToTop />
          <EasterEgg />
        </Container>
      </Router>
    </ThemeProviderWrapper>
  );
};

export default App;
