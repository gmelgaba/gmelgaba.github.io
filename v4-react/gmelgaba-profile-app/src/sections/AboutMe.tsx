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
  grid-template-columns: auto 1fr;
  gap: 64px;
  justify-content: center;
`;

const AboutMeImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 10%;
  object-fit: cover;
`;

const AboutMeText = styled.div`
  flex: 1;
  width: 80%;
`;

const aboutContent = {
  introduction:
    "I'm a software engineer living in Montevideo, Uruguay, currently working at Tarmac.",
  experience: `I have ${yearsOfExperience}+ years of experience in the software business, learning while working with great people.`,
  additional: [
    "I really encourage best practices, and I think that there are always new things to learn.",
    "I enjoy playing video games, the occasional board game, and going to the movies anytime.",
    "I started learning Google SketchUp and got into DIY woodworking projects. I really enjoy designing and building things with my own hands.",
    "I'm a music enthusiast, and I try to make a humble contribution by playing drums. From my personal point of view, I think there's a soundtrack for every moment in life.",
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
          <div>{aboutContent.introduction}</div>
          <div>{aboutContent.experience}</div>
          {aboutContent.additional.map((text) => (
            <div key={text}>{text}</div>
          ))}
        </AboutMeText>
      </AboutMeContent>
    </AboutMeContainer>
  );
};

export default AboutMe;
