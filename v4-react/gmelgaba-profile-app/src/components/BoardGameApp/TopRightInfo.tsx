import { resolutions } from "../../utils/devices";
import styled from "styled-components";

const Info = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 1;
  margin-top: 50px;
  margin-right: 30px;

  ${resolutions.mobile} {
    position: initial;
    margin: 0 auto;
    display: inline-flex;
  }
`;

export const TopRightInfo = () => (
  <Info>
    <p>
      <strong>User:</strong> gmelgaba
    </p>
    <img
      src="/images/bgg-logo.jpg"
      alt="BoardGameGeek Logo"
      style={{ height: "30px" }}
    />
  </Info>
);
