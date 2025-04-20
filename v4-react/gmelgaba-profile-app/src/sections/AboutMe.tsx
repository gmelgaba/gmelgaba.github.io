import Button from "../components/Button";
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
    grid-template-columns: auto 1fr auto;
    column-gap: 64px;
    justify-content: center;
  }
`;

const AboutMeLeftImage = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 10%;
  object-fit: cover;
  ${resolutions.mobile} {
    height: 250px;
    width: 100%;
    margin-bottom: 32px;
  }
`;

const AboutMeText = styled.div`
  flex: 1;
  width: 80%;

  a {
    display: block;
    margin-top: 32px;
    height: 20px;
    width: 120px;
  }

  ${resolutions.mobile} {
    width: 100%;
    text-align: center;

    a {
      margin: 0 auto;
      margin-top: 32px;
    }
  }
`;

const AboutMe: React.FC = () => {
  return (
    <AboutMeContainer>
      <SectionTitle className="section-title">About Me</SectionTitle>
      <AboutMeContent>
        <AboutMeLeftImage
          src="/images/about-me/group-photo.jpg"
          alt="My desk setup with a laptop, keyboard, and board games"
        />
        <AboutMeText>
          I'm a software engineer based in Montevideo, Uruguay, with over{" "}
          {yearsOfExperience + " "}years of experience in the software world.
          While my journey started in hands-on development, building web and
          mobile products using technologies like JavaScript, Node.js, and AWS,
          my focus in recent years has shifted toward leadership.
          <br />
          <br />
          I've led cross-functional teams spread across multiple countries and
          time zones, helping align goals, support collaboration, and keep
          communication clear and consistent. I've been involved in people
          management, internal communication, mentoring, hiring processes, and
          performance reviews.
          <br />
          <br />I like to think my approach is rooted in empathy and
          transparency, aiming to create an environment where people can grow,
          collaborate, and feel heard. Outside of work, I enjoy designing and
          building things with my own hands, both digitally and in the real
          world.
          <Button
            href="mailto:gmelgaba@gmail.com?subject=Let's%20Connect"
            primary
          >
            Contact Me
          </Button>
        </AboutMeText>
      </AboutMeContent>
    </AboutMeContainer>
  );
};

export default AboutMe;
