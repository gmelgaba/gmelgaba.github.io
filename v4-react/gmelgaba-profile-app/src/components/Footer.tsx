import socialLinks from "../utils/socials";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 40px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ContactRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoSection = styled.section`
  display: flex;
  align-items: center;
  gap: 20px;

  .mail {
    font-size: 1rem;
    font-weight: normal;
    background-color: ${({ theme }) => theme.sectionEven};
    color: ${({ theme }) => theme.textGray};
  }
`;

const SocialsSection = styled.section`
  display: flex;
  gap: 15px;

  a {
    color: ${({ theme }) => theme.primaryColor};
    font-size: 1.2rem;
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.text};
    }
  }
`;

const Separator = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.textGray};
  width: 30%;
  opacity: 0.3;
  margin: 0 auto;
`;

const MadeBy = styled.div`
  text-align: center;
  font-size: 0.85rem;
  font-weight: normal;
  color: ${({ theme }) => theme.textGray};
`;

const footerContent = {
  email: "gmelgaba@gmail.com",
  logoPath: "/logo-dark.png",
  socialLinks: socialLinks,
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <ContactRow>
        <InfoSection>
          <span className="mail">{footerContent.email}</span>
        </InfoSection>
        <SocialsSection>
          {footerContent.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </SocialsSection>
      </ContactRow>

      <Separator />

      <MadeBy>© {currentYear} · Gonzalo Melgar · Built in react </MadeBy>
    </FooterWrapper>
  );
};

export default Footer;
