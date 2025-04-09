import { resolutions } from "../../utils/devices";
import styled from "styled-components";

const Info = styled.div`
  display: grid;
  align-items: center;
  gap: 10px;
  z-index: 1;
  margin-top: 0 auto;
  justify-content: center;
  img {
    height: 50px;
    margin: 0 auto;
    border-radius: 8px;
  }

  ${resolutions.mobile} {
    display: grid;
    img {
      height: 50px;
      margin: 0 auto;
    }
  }
`;

interface Props {
  username: string;
}

export const UserInfo: React.FC<Props> = ({ username }) => (
  <Info>
    <img src="/images/bgg-logo3.jpg" alt="BoardGameGeek Logo" />
    <strong>{username}</strong>
  </Info>
);
