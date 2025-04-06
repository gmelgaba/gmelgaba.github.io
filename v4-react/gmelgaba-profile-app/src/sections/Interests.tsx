import { resolutions } from "../utils/devices";
import styled from "styled-components";

const InterestsContainer = styled.div`
  margin: 0 auto;
  padding: 32px 0;
  font-size: 1.1rem;
`;

const InterestsTitle = styled.h2``;

const InterestList = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const InterestCard = styled.div`
  display: flex;
  cursor: default;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.sectionEven};
  transition: transform 0.3s ease-in-out;
  text-align: center;
  will-change: transform;

  ${resolutions.tabletAndGreater} {
    max-width: 180px;
  }

  &:hover {
    transform: scale(1.05);
    z-index: 10;
  }
`;

const InterestImage = styled.img`
  object-fit: cover;
  border-radius: 10%;
  margin-bottom: 10px;

  ${resolutions.mobile} {
    height: 130px;
    width: 130px;
  }

  ${resolutions.tabletAndGreater} {
    height: 120px;
    width: 120px;
  }
`;

const InterestName = styled.h3`
  font-weight: bold;
  color: ${({ theme }) => theme.primaryColor};

  ${resolutions.mobile} {
    font-size: 22px;
    margin-bottom: 0;
    margin-top: 0;
  }

  ${resolutions.tabletAndGreater} {
    font-size: 1rem;
    margin-bottom: 5px;
  }
`;

const InterestDescription = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: normal;

  ${resolutions.mobile} {
    font-size: 15px;
  }
`;

const interestsContent = [
  {
    text: "Amateur crafter",
    imageUrl: "/images/interests/craft.jpg",
    description:
      "I love DIY projects and woodworking. It's a relaxing and satisfying creative outlet. I even share some of my builds on YouTube! feel free to check it out!",
  },
  {
    text: "Lifelong gamer",
    imageUrl: "/images/interests/gaming.jpg",
    description:
      "Proud owner of a PS5 and a dedicated PC gamer. Rocket League is my go-to, but I'm always exploring new games and genres.",
  },
  {
    text: "Boardgame maniac",
    imageUrl: "/images/interests/boardgames.jpg",
    description:
      "I have a growing collection of 40+ board games. Whether it's strategy, co-op, or party games, I love getting people around the table.",
    link: "/boardgame-app",
  },
  {
    text: "Funko Pop collector",
    imageUrl: "/images/interests/funkos.jpg",
    description:
      "With over 30 Funko Pops on my shelf, collecting these little guys has become a fun hobby. They're a mix of nostalgia and style.",
  },
  {
    text: "Amazon shopaholic",
    imageUrl: "/images/interests/amazon.jpg",
    description:
      "I'm a self-declared Amazon addict. From tools to tech, I enjoy discovering cool stuff and leveling up my workspace and hobbies.",
  },
];

const handleOnClick = (link: string | undefined) => {
  if (link) {
    window.location.href = link;
  }
};

const Interests: React.FC = () => {
  return (
    <InterestsContainer>
      <InterestsTitle className="section-title">My Interests</InterestsTitle>
      <InterestList>
        {interestsContent.map((interest) => (
          <InterestCard key={interest.text}>
            <InterestImage src={interest.imageUrl} alt={interest.text} />
            <InterestName onClick={() => handleOnClick(interest.link)}>
              {interest.text}
            </InterestName>
            <InterestDescription>{interest.description}</InterestDescription>
          </InterestCard>
        ))}
      </InterestList>
    </InterestsContainer>
  );
};

export default Interests;
