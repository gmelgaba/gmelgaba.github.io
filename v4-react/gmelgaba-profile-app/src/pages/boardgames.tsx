import BoardGameApp from "../components/BoardGameApp/BoardGameApp";
import Footer from "../components/Footer";
import { styled } from "styled-components";

const FooterWrapper = styled.div`
  padding: 0 24px;
  background-color: ${({ theme }) => theme.sectionEven};
`;

export default function BoardgamesPage() {
  return (
    <>
      <BoardGameApp />
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </>
  );
}
