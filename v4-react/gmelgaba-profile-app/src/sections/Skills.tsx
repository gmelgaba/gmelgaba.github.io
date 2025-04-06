import { FaAws, FaNodeJs, FaReact } from "react-icons/fa";
import { SiNestjs, SiSketchup } from "react-icons/si";

import styled from "styled-components";

const skills = [
  {
    icon: <FaReact color="#61DBFB" />,
    label: "React / Next.js / Gatsby",
    level: "90%",
  },
  {
    icon: <FaNodeJs color="#3C873A" />,
    label: "Node.js",
    level: "85%",
  },
  {
    icon: <SiNestjs color="#E0234E" />,
    label: "Nest.js",
    level: "80%",
  },
  {
    icon: <FaAws color="#FF9900" />,
    label: "AWS",
    level: "75%",
  },
  {
    icon: <SiSketchup color="#DA251D" />,
    label: "Google SketchUp",
    level: "88%",
  },
];

const SkillsSection = styled.div`
  padding: 40px 5%;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.textGray};
  margin-bottom: 50px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 30px;
`;

const Icon = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textGray};
  transition: transform 0.3s ease 0.1s, filter 0s ease 0.1s, color 0s ease 0.1s;
  filter: grayscale(100%);
`;

const Level = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
  transition: color 0.3s ease;
`;

const Label = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.primaryColor};
  transition: color 0.3s ease;
`;

const SkillCard = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 20px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  &:hover {
    /* background-color: ${({ theme }) => theme.primaryColor}; */

    ${Icon} {
      transform: scale(1.3);
      filter: none;
    }

    ${Level},
    ${Label} {
      /* color: white; */
    }
  }
`;

const Skills: React.FC = () => {
  return (
    <SkillsSection id="skills">
      <Title>My Skills</Title>
      <Subtitle>
        A snapshot of tools and technologies I use on my projects
      </Subtitle>
      <Grid>
        {skills.map((skill) => (
          <SkillCard key={skill.label}>
            <Icon>{skill.icon}</Icon>
            <Level>{skill.level}</Level>
            <Label>{skill.label}</Label>
          </SkillCard>
        ))}
      </Grid>
    </SkillsSection>
  );
};

export default Skills;
