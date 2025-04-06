import { resolutions } from "../utils/devices";
import styled from "styled-components";
import { yearsOfExperience } from "../utils/years";

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const AboutMeContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  font-weight: normal;
  padding-bottom: 80px;
`;

const AboutMeContent = styled.div`
  display: grid;

  ${resolutions.mobile} {
    grid-template-columns: 1fr;
  }
  ${resolutions.tabletAndGreater} {
    grid-template-columns: auto 1fr;
    column-gap: 64px;
    justify-content: center;
  }
`;

const AboutMeImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 10%;
  object-fit: cover;
  ${resolutions.mobile} {
    display: none;
  }
`;

const AboutMeText = styled.div`
  flex: 1;
  width: 80%;
  ${resolutions.mobile} {
    width: 100%;
    text-align: center;
  }
`;

const aboutContent = {
  info: [
    "I'm a software engineer living in Montevideo, Uruguay, currently working at tarmac.",
    `I have ${yearsOfExperience}+ years of experience in the software business, learning while working with great people.`,
    "I really encourage best practices, and I think that there are always new things to learn.",
    "I started learning Google SketchUp and got into DIY woodworking projects. I really enjoy designing and building things with my own hands.",
  ],
};

const AboutMe: React.FC = () => {
  return (
    <AboutMeContainer>
      <SectionTitle className="section-title">About Me</SectionTitle>
      <AboutMeContent>
        <AboutMeImage
          src="/images/about-me/desk-setup.jpg"
          alt="My desk setup with a laptop, keyboard, and board games"
        />
        <AboutMeText>
          {aboutContent.info.map((text) => (
            <span key={text}>{text}</span>
          ))}
        </AboutMeText>
      </AboutMeContent>
    </AboutMeContainer>
  );
};

export default AboutMe;
