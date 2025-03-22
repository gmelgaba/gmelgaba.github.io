import Button from "../components/Button";
import socialLinks from "../utils/socials";
import styled from "styled-components";

const PresentationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 40px;
  padding-bottom: 0;
`;

const PresentationText = styled.div`
  flex: 1;
  max-width: 50%;

  p {
    font-size: 24px;
    color: #555;
  }

  button {
    font-size: 18px;
  }
`;

const PresentationName = styled.h2`
  font-size: 80px;
  margin: 0;
  line-height: 80px;
`;

const PresentationSubtitle = styled.label`
  font-size: 20px;
  color: ${({ theme }) => theme.textGray};
  margin: 20px 0;
  width: 100%;
  display: block;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin: 20px 0;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.primaryColor};
    border-radius: 50%;
    background: transparent;
    color: ${({ theme }) => theme.primaryColor};
    font-size: 20px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: ${({ theme }) => theme.primaryColor};
      color: ${({ theme }) => theme.textLight};
    }
  }
`;

const ProfileImage = styled.img`
  width: 90%;
  max-width: 600px;
  max-height: 800px;
  height: auto;
  object-fit: contain;
`;

const presentationContent = {
  greeting: "Hello,",
  name: "I'm Gonzalo Melgar",
  title: "Software Engineer / Team Leader",
  buttonText: "Download CV",
  socialLinks: socialLinks,
  imagePath: "/images/me-transparent.png",
};

const Presentation: React.FC = () => {
  return (
    <PresentationContainer>
      <PresentationText>
        <PresentationSubtitle>
          {presentationContent.greeting}
        </PresentationSubtitle>
        <PresentationName>{presentationContent.name}</PresentationName>
        <PresentationSubtitle>{presentationContent.title}</PresentationSubtitle>
        <SocialLinks>
          {presentationContent.socialLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </SocialLinks>
        <Button href="/Gonzalo_Melgar_CV.pdf" download primary>
          {presentationContent.buttonText}
        </Button>
      </PresentationText>
      <ProfileImage src={presentationContent.imagePath} alt="Gonzalo Melgar" />
    </PresentationContainer>
  );
};

export default Presentation;
