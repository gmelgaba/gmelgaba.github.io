import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useEffect, useMemo, useState } from "react";

import axios from "axios";
import styled from "styled-components";
import { xml2js } from "xml-js";

// Styled Components
const Container = styled.div`
  padding: 20px;
  position: relative;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #1976d2;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
  &:hover {
    background-color: #1565c0;
  }
`;

const Select = styled.select`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
`;

const GameCardContainer = styled.div`
  cursor: pointer;
  font-family: "Raleway", sans-serif;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  background: white;
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

const Typography = styled.p<{ color?: string }>`
  color: ${(props) => props.color || "initial"};
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dialog = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const DialogTitle = styled.h3`
  text-transform: uppercase;
  text-align: center;
`;

const DialogContent = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const DialogActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

// Types
interface Game {
  id: string;
  name: string;
  minPlayers: number;
  maxPlayers: number;
  image: string;
  rating: string;
}

// Component for a single Game Card
const GameCard: React.FC<{ game: Game; onClick: () => void }> = ({
  game,
  onClick,
}) => (
  <GameCardContainer onClick={onClick}>
    <GameCardImage src={game.image} alt={game.name} />
    <GameCardContent>
      <Typography>{game.name}</Typography>
      <Typography>
        Jugadores: {game.minPlayers} - {game.maxPlayers}
      </Typography>
      <Typography color={getRatingColor(game.rating)}>
        {game.rating === "No rating" ? game.rating : `${game.rating}/10`}
      </Typography>
    </GameCardContent>
  </GameCardContainer>
);

// Utility Functions
const getRatingColor = (rating: string) => {
  if (rating === "No rating") return "gray";
  const numRating = parseFloat(rating);
  if (numRating < 5) return "red";
  if (numRating < 7) return "orange";
  if (numRating < 8.5) return "green";
  return "blue";
};

const BoardGameApp: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [playerCount, setPlayerCount] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [sortOption, setSortOption] = useState<string>("name");
  const [sortDirection, setSortDirection] = useState<string>("asc");

  useEffect(() => {
    const fetchBoardGames = async () => {
      try {
        const response = await axios.get(
          "https://www.boardgamegeek.com/xmlapi/collection/gmelgaba?own=1",
          { headers: { Accept: "application/xml" } }
        );
        const json = xml2js(response.data, { compact: true, spaces: 2 });
        const items = json.items?.item || [];
        const formattedGames = (Array.isArray(items) ? items : [items]).map(
          (game) => ({
            id: game._attributes?.objectid,
            name: game.name?._text || "Unknown Game",
            minPlayers: parseInt(game.stats?._attributes?.minplayers, 10) || 1,
            maxPlayers: parseInt(game.stats?._attributes?.maxplayers, 10) || 10,
            image: game.image?._text || "https://via.placeholder.com/150",
            rating:
              parseFloat(
                game.stats.rating?.average?._attributes?.value
              ).toFixed(2) || "No rating",
          })
        );

        setGames(formattedGames);
        setFilteredGames(formattedGames);
      } catch (err) {
        setError("Failed to fetch data. Make sure your username is correct.");
      }
    };

    fetchBoardGames();
  }, []);

  useEffect(() => {
    setFilteredGames(sortGames(games, sortOption, sortDirection));
  }, [games, sortOption, sortDirection]);

  const sortGames = useMemo(() => {
    return (gamesToSort: Game[], option: string, direction: string) => {
      return [...gamesToSort].sort((a, b) => {
        const compareValue =
          option === "name"
            ? a.name.localeCompare(b.name)
            : option === "minPlayers"
            ? a.minPlayers - b.minPlayers
            : option === "maxPlayers"
            ? a.maxPlayers - b.maxPlayers
            : parseFloat(b.rating) - parseFloat(a.rating);

        return direction === "asc" ? compareValue : -compareValue;
      });
    };
  }, []);

  return (
    <Container>
      <Title>¿Cuántos somos?</Title>
      <Box>
        <Input
          type="number"
          placeholder="Número de jugadores"
          value={playerCount}
          onChange={(e) => setPlayerCount(e.target.value)}
        />
        <Button
          onClick={() =>
            setFilteredGames(sortGames(games, sortOption, sortDirection))
          }
        >
          Obtener Juegos
        </Button>
      </Box>

      <Grid>
        {filteredGames.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onClick={() => setSelectedGame(game)}
          />
        ))}
      </Grid>

      {selectedGame && (
        <Dialog open={!!selectedGame}>
          <DialogTitle>{selectedGame.name}</DialogTitle>
          <img
            src={selectedGame.image}
            alt={selectedGame.name}
            style={{
              width: "100%",
              maxHeight: "500px",
              objectFit: "cover",
              marginBottom: "10px",
            }}
          />
          <DialogActions>
            <Button onClick={() => setSelectedGame(null)}>Cerrar</Button>
          </DialogActions>
        </Dialog>
      )}
    </Container>
  );
};

export default BoardGameApp;
