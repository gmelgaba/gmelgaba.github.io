import { FaChevronDown } from "react-icons/fa";
import { resolutions } from "../utils/devices";
import styled from "styled-components";
import { useState } from "react";

const EducationContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
  display: flex;
  gap: 40px;
  font-weight: normal;

  p.section-subtitle {
    font-size: 1.1rem;
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 40px;
    text-align: center;
  }
`;

const EducationElements = styled.div`
  display: grid;
  ${resolutions.mobile} {
    grid-template-columns: 1fr;
  }
  ${resolutions.tabletAndGreater} {
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
  }
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.sectionOdd};
  padding: 20px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;

  &:hover {
    transform: scale(1.05);
    z-index: 10;
  }
`;

const ExpandIcon = styled.div<{ open: boolean }>`
  transition: transform 0.3s ease;
  transform: rotate(${(props) => (props.open ? "180deg" : "0deg")});
  color: ${({ theme }) => theme.primaryColor};
  font-size: 20px;
  margin-left: auto;

  ${resolutions.mobile} {
    margin-top: 10px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Image = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 20px;

  img {
    width: 100%;
    border-radius: 5px;
    object-fit: cover;
  }
`;

const Data = styled.div`
  flex: 1;
`;

const Period = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.primaryColor};
  font-weight: bold;
  display: block;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 5px 0;
`;

const Name = styled.h5`
  font-size: 14px;
  font-weight: normal;
  text-transform: uppercase;
  margin: 5px 0;
  color: ${({ theme }) => theme.textGray};
`;

const Roles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s ease-in-out;
`;

const Description = styled.div`
  font-size: 14px;
  margin-top: 5px;
  color: ${({ theme }) => theme.text};

  ul {
    margin-left: 16px;
    &.left-list {
      float: left;
      width: 270px;
    }
  }
`;

const educationContent = [
  {
    name: "Universidad de la República",
    imagePath: "/public/images/education/fing.jpg",
    url: "https://www.fing.edu.uy/",
    period: "2007 - 2017",
    title: "Software Engineer",
    description:
      "The Computer Engineer career aims at a broad and coherent coverage in the planning, development, maintenance and application of computerized systems, which together with the acquired experience, will be projected in a competent professional.",
  },
  {
    name: "Instituto Tecnológico Superior",
    imagePath: "/public/images/education/its.jpg",
    url: "https://www.linkedin.com/school/arias-balparda/about/",
    period: "2004 - 2006",
    title: "Computer Technician",
    description:
      "The superior technological institute of the CETP - UTU specialized mainly in Computer Science. In it, courses are taught ranging from EMT Technological Middle Education (Level II), Tertiary Technical Course in Networks and Software to the career of Computer Technologist, in agreement with the University of the Republic.",
  },
];

const Education: React.FC = () => {
  const [openCards, setOpenCards] = useState<Record<string, boolean>>({});

  const toggleCard = (key: string) => {
    setOpenCards((prev) => ({ ...prev, [key]: !prev[key] }));
    console.log("open cards", openCards);
  };

  return (
    <EducationContainer>
      <Section>
        <h2 className="section-title">My Education</h2>
        <p className="section-subtitle">
          My education has shaped my approach to problem-solving and continuous
          learning. It provided me with strong technical fundamentals while
          fostering curiosity and adaptability. Every course, project, and
          challenge helped build the skills I rely on today.
        </p>
        <EducationElements>
          {educationContent.map((edu) => (
            <Card key={edu.name} onClick={() => toggleCard(edu.name)}>
              <Header>
                <Image>
                  <img src={edu.imagePath} alt={edu.name} />
                </Image>
                <Data>
                  <Period>{edu.period}</Period>
                  <Title>{edu.title}</Title>
                  <Name>{edu.name}</Name>
                </Data>
                <ExpandIcon open={!!openCards[edu.name]}>
                  <FaChevronDown />
                </ExpandIcon>
              </Header>
              <Roles
                style={{ maxHeight: openCards[edu.name] ? "1100px" : "0" }}
              >
                <Description
                  dangerouslySetInnerHTML={{ __html: edu.description }}
                />
              </Roles>
            </Card>
          ))}
        </EducationElements>
      </Section>
    </EducationContainer>
  );
};

export default Education;
