import { FaChevronDown } from "react-icons/fa";
import { resolutions } from "../utils/devices";
import styled from "styled-components";
import { useState } from "react";
import { yearsFromDate } from "../utils/years";

const MainContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
  display: block;
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

const ExperienceContainer = styled.div`
  ${resolutions.tabletAndGreater} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
  }
`;

const Column = styled.div`
  flex: 1;
`;

const Section = styled.div`
  ${resolutions.tabletAndGreater} {
    margin-bottom: 40px;
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.background};
  padding: 30px;
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
  text-transform: uppercase;
  span {
    color: ${({ theme }) => theme.textGray};
    text-transform: none;
    font-weight: 500;
    ${resolutions.mobile} {
      display: block;
      font-weight: 300;
      &.dot {
        display: none;
      }
    }
  }
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 5px 0;

  ${resolutions.mobile} {
    font-size: 20px;
  }
`;

const CompanyName = styled.div`
  font-size: 14px;
  font-weight: normal;
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

  ${resolutions.mobile} {
    padding-left: 0;
  }

  ${resolutions.tabletAndGreater} {
    padding-left: 77px;
  }
`;

const Description = styled.div`
  font-size: 14px;
  margin-top: 5px;
  color: ${({ theme }) => theme.text};

  ul {
    list-style: disc;
    margin-left: -26px;
    &.left-list {
      float: left;
      width: 270px;
    }
  }
  li::marker {
    color: ${({ theme }) => theme.primaryColor};
  }
`;

const experienceContent = [
  {
    company: "tarmac",
    imagePath: "/public/images/experience/tarmac.jpg",
    url: "https://tarmac.io/",
    duration: `${yearsFromDate(2020)} years`,
    position: "Team Leader",
    type: "Fulltime",
    period: "Sept 2020 - Current",
    description:
      "<p>Leading multiple teams of developers across different products trying to create an open communication culture.\n\nSome of the responsibilities I had were:</p><div>\n<ul>\n  <li>Set clear team goals</li>\n  <li>Client communication</li>\n  <li>Oversee day-to-day operation</li>\n  <li>Facilitating team needs in order to get aligned with the current objective</li>\n  <li>Annual review and monthly performance meetings with all team members</li>\n  <li>Running interviews with potential company candidates</li>\n</ul></div>",
  },
  {
    company: "tarmac",
    imagePath: "/public/images/experience/tarmac.jpg",
    url: "https://tarmac.io/",
    duration: "2 years and 4 months",
    position: "Principal Engineer",
    type: "Fulltime",
    period: "Jun 2018 - Sept 2020",
    description:
      "The role involved being an official reference of a specific technology, Node.js in my case.\nSome of the responsibilities I had were:\n<ul>\n  <li>Code audits</li>\n  <li>Hiring Interviews</li>\n  <li>Candidates assessment</li>\n  <li>Onboarding meetings with new recruits</li>\n  <li>Occasional Sales appearances</li>\n  <li>Internal reviews</li>\n</ul></div>",
  },
  {
    company: "tarmac",
    imagePath: "/public/images/experience/tarmac.jpg",
    url: "https://tarmac.io/",
    duration: "2 years and 6 months",
    position: "Senior Software Developer",
    type: "Fulltime",
    period: "Jan 2016 - Jun 2018",
    description:
      "Worked across different clients and was lucky enough to play with different technologies in the meantime, such as:\n<ul class='left-list'>\n  <li>express.js</li>\n  <li>typescript</li>\n  <li>node.js</li>\n  <li>aws (s3, lambda, cloudwatch, glue)</li>\n</ul>\n<ul class='right-list'>\n  <li>angular 7+</li>\n  <li>Ruby</li>\n  <li>insomnia</li>\n</ul></div>",
  },
  {
    company: "tarmac",
    imagePath: "/public/images/experience/tarmac.jpg",
    url: "https://tarmac.io/",
    duration: "1 year and 7 months",
    position: "Semi Senior Software Developer",
    type: "Part-time",
    period: "Jun 2014 - Dec 2015",
    description:
      "Worked across different clients and was lucky enough to play with different technologies in the meantime, such as:\n<ul class='left-list'>\n  <li>node.js</li>\n  <li>angular 1.x</li>\n  <li>gulpjs</li>\n  <li>aws (ec2, cloudfront, s3, lambda)</li>\n</ul>\n<ul class='right-list'>\n  <li>Ruby on Rails</li>\n  <li>Ionic</li>\n  <li>Laravel</li>\n  <li>RiotJS, CucumberJS</li>\n</ul></div>",
  },
  {
    company: "Spiria SRL",
    imagePath: "/public/images/experience/spiria.jpg",
    url: "http://www.spiria.com.uy/",
    duration: "2 years and 9 months",
    position: "Junior Software Developer",
    type: "Part-time",
    period: "Oct 2011 - Jun 2014",
    description:
      "Collaborated in a team-focused environment providing creation, and support in different applications, mostly web and mobile hybrids. Some of the techs I used:<br>\n<ul class='left-list'>\n  <li>html, js, css</li>\n  <li>php</li>\n  <li>native android</li>\n  <li>slim</li>\n</ul>\n<ul class='right-list'>\n  <li>native android</li>\n  <li>phonegap</li>\n  <li>titanium app celerator</li>\n  <li>webapps</li>\n</ul>",
  },
  {
    company: "VTV Uruguay",
    imagePath: "/public/images/experience/vtv.jpg",
    url: "http://www.spiria.com.uy/",
    duration: "1 year and 8 months",
    position: "Graphics Operator",
    type: "Fulltime",
    period: "Mar 2010 - Oct 2011",
    description:
      "Responsible for producing suitable accurate graphic captions across a variety of live productions and different national events.\n<ul>\n  <li>Software: Photoshop CS10, CG5 multichannel.</li>\n  <li>Daily Broadcasts: News Broadcast VTV Noticias Morning Edition, Dia a Dia, News Boardcast VTV Noticias Noon Edition, Sin limite.</li>\n  <li>Weekly broadcasts/events: Rumbo a la Cancha, Mid-term elections, South American U-20 Championship, Uruguayan Championship, American Cup 2011, Basketball, among others.</li>\n</ul>",
  },
];

const Resume: React.FC = () => {
  const [openCards, setOpenCards] = useState<Record<string, boolean>>({});

  const toggleCard = (key: string) => {
    setOpenCards((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <MainContainer>
      <h2 className="section-title">My Experience</h2>
      <p className="section-subtitle">
        Throughout my career, I've taken on different roles that have shaped my
        skills and perspective. Each position brought new challenges and
        learning experiences, allowing me to grow as a professional and a team
        player
      </p>
      <ExperienceContainer>
        {experienceContent.map((company) => (
          <Column key={company.position}>
            <Section>
              <Card
                key={company.position}
                onClick={() => toggleCard(company.position)}
              >
                <Header>
                  <Image>
                    <img src={company.imagePath} alt={company.company} />
                  </Image>
                  <Data>
                    <Period>
                      {company.period} <span className="dot">·</span>{" "}
                      <span>{company.duration}</span>
                    </Period>
                    <Title>{company.position}</Title>
                    <CompanyName>@ {company.company}</CompanyName>
                  </Data>
                  <ExpandIcon open={!!openCards[company.position]}>
                    <FaChevronDown />
                  </ExpandIcon>
                </Header>
                <Roles
                  style={{
                    maxHeight: openCards[company.position] ? "1100px" : "0",
                  }}
                >
                  <div>
                    <Description
                      dangerouslySetInnerHTML={{ __html: company.description }}
                    />
                  </div>
                </Roles>
              </Card>
            </Section>
          </Column>
        ))}
      </ExperienceContainer>
    </MainContainer>
  );
};

export default Resume;
