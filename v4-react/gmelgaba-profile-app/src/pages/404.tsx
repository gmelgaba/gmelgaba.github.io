import { Link } from "react-router-dom";
import { resolutions } from "../utils/devices";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  text-align: center;
`;

const Content = styled.div`
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text};

  ${resolutions.mobile} {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.textGray};

  ${resolutions.mobile} {
    font-size: 1rem;
  }
`;

const HomeButton = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  background: ${({ theme }) => theme.gradient};
  border-radius: 8px;
  color: white;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.gradientInverse};
  }
`;

const NotFoundPage = () => {
  return (
    <Container>
      <Content>
        <Title>404 — Whoops!</Title>
        <Subtitle>
          The page you're looking for doesn't exist.
          <br />
          Maybe try going back to the homepage?
        </Subtitle>
        <HomeButton to="/">Return to Home</HomeButton>
      </Content>
    </Container>
  );
};

export default NotFoundPage;
