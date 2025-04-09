import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
`;

const SpinnerCircle = styled.div`
  border: 6px solid ${({ theme }) => theme.sectionEven};
  border-top: 6px solid ${({ theme }) => theme.primaryColor};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

const Spinner = () => (
  <SpinnerWrapper>
    <SpinnerCircle />
  </SpinnerWrapper>
);

export default Spinner;
