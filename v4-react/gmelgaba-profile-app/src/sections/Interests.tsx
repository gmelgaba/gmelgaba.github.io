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
  max-width: 180px;
  text-align: center;
  will-change: transform;

  &:hover {
    transform: scale(1.05);
    z-index: 10;
  }
`;

const InterestImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 10%;
  margin-bottom: 10px;
`;

const InterestName = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const InterestDescription = styled.p`
  margin: 0;
  font-size: 0.9rem;
  font-weight: normal;
`;

const interestsContent = [
  {
    text: "Amateur crafter",
    imageUrl: "/images/interests/craft.jpg",
    description:
      "I love DIY projects and woodworking. It's a relaxing and satisfying creative outlet. I even share some of my builds on YouTube — feel free to check it out!",
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
  },
  {
    text: "Funko Pop Collector",
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

const Interests: React.FC = () => {
  return (
    <InterestsContainer>
      <InterestsTitle className="section-title">My Interests</InterestsTitle>
      <InterestList>
        {interestsContent.map((interest) => (
          <InterestCard key={interest.text}>
            <InterestImage src={interest.imageUrl} alt={interest.text} />
            <InterestName>{interest.text}</InterestName>
            <InterestDescription>{interest.description}</InterestDescription>
          </InterestCard>
        ))}
      </InterestList>
    </InterestsContainer>
  );
};

export default Interests;
