import Button from "../components/Button";
import { resolutions } from "../utils/devices";
import socialLinks from "../utils/socials";
import styled from "styled-components";

const PresentationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  padding: 40px;
  padding-bottom: 0;

  ${resolutions.mobile} {
    grid-template-columns: 1fr;
  }
  ${resolutions.tabletAndGreater} {
    grid-template-columns: 1fr 1fr;
    align-items: end;
    justify-content: space-between;
  }
`;

const PresentationText = styled.div`
  flex: 1;
  margin-bottom: 40px;

  ${resolutions.mobile} {
    max-width: 50%;
  }
  ${resolutions.tabletAndGreater} {
    max-width: 100%;
  }

  p {
    font-size: 24px;
    color: #555;
  }

  button {
    font-size: 18px;
  }
`;

const PresentationName = styled.h2`
  margin: 0;

  ${resolutions.mobile} {
    font-size: 50px;
    line-height: 50px;
  }
  ${resolutions.tabletAndGreater} {
    font-size: 80px;
    line-height: 80px;
  }
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

    ${resolutions.mobile} {
      width: 100px;
      height: 40px;
    }
    ${resolutions.tabletAndGreater} {
      width: 40px;
      height: 40px;
    }
  }
`;

const ProfileImageMobile = styled.img`
  ${resolutions.mobile} {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    margin-top: 24px;
    margin-left: -20px;
    border-radius: 40px;
    width: 100%;
    -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
  }
  ${resolutions.tabletAndGreater} {
    display: none;
  }
`;

const ProfileImage = styled.img`
  ${resolutions.mobile} {
    display: none;
  }
  ${resolutions.tabletAndGreater} {
    max-width: 600px;
    max-height: 600px;
  }
  height: auto;
  object-fit: contain;
`;

const presentationContent = {
  greeting: "Hello,",
  name: "I'm Gonzalo Melgar",
  title: "Software Engineer / Team Leader",
  buttonText: "Download CV   ",
  socialLinks: socialLinks,
  imagePath: "/images/me-transparent.png",
  imagePathSquare: "/images/me-transparent-square.png",
};

const Presentation: React.FC = () => {
  return (
    <PresentationContainer>
      <PresentationText>
        <PresentationSubtitle>
          {presentationContent.greeting}
        </PresentationSubtitle>
        <PresentationName>{presentationContent.name}</PresentationName>
        <ProfileImageMobile
          src={presentationContent.imagePathSquare}
          alt="Gonzalo Melgar"
        />
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
