import styled, { css } from "styled-components";
import { useEffect, useRef, useState } from "react";

const StyledSection = styled.section<{ $isVisible: boolean }>`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;

interface Props {
  children: React.ReactNode;
  id?: string;
}

const FadeInSection: React.FC<Props> = ({ children, id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <StyledSection ref={ref} $isVisible={isVisible} id={id}>
      {children}
    </StyledSection>
  );
};

export default FadeInSection;
