import { Game } from "../../interfaces/Game";
import { getRatingColor } from "../../utils/boardgames";
import styled from "styled-components";

const GameCardContainer = styled.div`
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.sectionEven};
  color: ${({ theme }) => theme.text};
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;

const GameCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const GameCardContent = styled.div`
  padding: 15px;
  text-align: center;
`;

const GameName = styled.span`
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  text-transform: uppercase;
`;

const Text = styled.p<{ color?: string }>`
  color: ${(props) => props.color || props.theme.text};
  margin: 5px 0;
`;

// Component for a single Game Card
export const GameCard: React.FC<{ game: Game; onClick: () => void }> = ({
  game,
  onClick,
}) => (
  <GameCardContainer onClick={onClick}>
    <GameCardImage src={game.image} alt={game.name} />
    <GameCardContent>
      <GameName>{game.name}</GameName>
      <Text>
        Jugadores: {game.minPlayers} - {game.maxPlayers}
      </Text>
      <Text color={getRatingColor(game.rating)}>
        {game.rating === "No rating" ? game.rating : `${game.rating}/10`}
      </Text>
    </GameCardContent>
  </GameCardContainer>
);
