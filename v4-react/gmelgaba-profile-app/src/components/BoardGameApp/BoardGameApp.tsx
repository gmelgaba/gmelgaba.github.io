import {
  BggXmlGameDetails,
  BggXmlGameResponse,
} from "../../interfaces/ExtendedGameDetails";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { BggXmlCollection } from "../../interfaces/BggGame";
import { Game } from "../../interfaces/Game";
import { GameCard } from "./GameCard";
import { GameModal } from "./GameModal";
import { SortControls } from "./SortControls";
import { TopRightInfo } from "./TopRightInfo";
import axios from "axios";
import { fadeIn } from "../../styles/global";
import { resolutions } from "../../utils/devices";
import styled from "styled-components";
import { xml2js } from "xml-js";

const COLLECTION_URL =
  "https://www.boardgamegeek.com/xmlapi/collection/gmelgaba?own=1";
const GAME_DETAILS_URL = (id: string) =>
  `https://corsproxy.io/?https://boardgamegeek.com/xmlapi/boardgame/${id}`;

const BoardgameAppContainer = styled.div`
  padding: 20px;
  position: relative;
  background-color: ${({ theme }) => theme.sectionOdd};
  min-height: 100vh;
`;

const AnimatedGridWrapper = styled.div`
  animation: ${fadeIn} 0.4s ease;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
`;

const Typography = styled.p<{ color?: string }>`
  color: ${(props) => props.color || props.theme.text};

  &.not-found {
    color: ${({ theme }) => theme.textGray};
    text-align: center;
  }
`;
const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
  padding: 20px;
  background-color: ${({ theme }) => theme.sectionEven};
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h2`
  font-size: 36px;
  color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 8px;
  ${resolutions.mobile} {
    margin-top: 0;
  }
`;

const Subtitle = styled.p`
  font-size: 16.5px;
  max-width: 600px;
  margin: 0 auto;
  color: ${({ theme }) => theme.textGray};
`;

const BoardGameApp: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const gameDetailsCache = useRef<Record<string, BggXmlGameDetails>>({});
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [playerCount, setPlayerCount] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [gameDetails, setGameDetails] = useState<BggXmlGameDetails | undefined>(
    undefined
  );
  const [sortOption, setSortOption] = useState<string>("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [filterApplied, setFilterApplied] = useState("");

  const sortGames = useMemo(() => {
    return (gamesToSort: Game[], option: string, direction: string) => {
      return [...gamesToSort].sort((a, b) => {
        let compareValue = 0;

        if (option === "name") compareValue = a.name.localeCompare(b.name);
        if (option === "minPlayers") compareValue = a.minPlayers - b.minPlayers;
        if (option === "maxPlayers") compareValue = a.maxPlayers - b.maxPlayers;
        if (option === "rating") {
          const aRating = isNaN(parseFloat(a.rating))
            ? 0
            : parseFloat(a.rating);
          const bRating = isNaN(parseFloat(b.rating))
            ? 0
            : parseFloat(b.rating);
          compareValue = bRating - aRating;
        }

        return direction === "asc" ? compareValue : -compareValue;
      });
    };
  }, []);

  const filterGames = () => {
    setFilterApplied(playerCount);

    if (!playerCount) {
      setFilteredGames(sortGames(games, sortOption, sortDirection));
    } else {
      const count = parseInt(playerCount, 10);
      const filtered = games.filter(
        (game) => count >= game.minPlayers && count <= game.maxPlayers
      );
      setFilteredGames(sortGames(filtered, sortOption, sortDirection));
    }
  };

  const toggleSortDirection = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newDirection);
    setFilteredGames(sortGames(filteredGames, sortOption, newDirection));
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
    setFilteredGames(sortGames(filteredGames, option, sortDirection));
  };

  const navigateToGame = useCallback(
    (direction: "next" | "prev") => {
      if (!selectedGame || filteredGames.length === 0) return;

      const currentIndex = filteredGames.findIndex(
        (g) => g.id === selectedGame.id
      );
      if (currentIndex === -1) return;

      const delta = direction === "next" ? 1 : -1;
      const newIndex =
        (currentIndex + delta + filteredGames.length) % filteredGames.length;
      setSelectedGame(filteredGames[newIndex]);
    },
    [selectedGame, filteredGames]
  );

  const fetchGameDetails = async (gameId: string) => {
    if (gameDetailsCache.current[gameId]) {
      setGameDetails(gameDetailsCache.current[gameId]);
      return;
    }

    try {
      setLoadingDetails(true);
      const response = await axios.get(GAME_DETAILS_URL(gameId), {
        headers: { Accept: "application/xml" },
      });
      const json = xml2js(response.data, {
        compact: true,
      }) as BggXmlGameResponse;
      const details = json.boardgames.boardgame;
      gameDetailsCache.current[gameId] = details;
      setGameDetails(details);
    } catch (error) {
      console.error("Failed to fetch game details:", error);
      setGameDetails(undefined);
    } finally {
      setLoadingDetails(false);
    }
  };

  // Prefetch all detailed info in parallel
  const fetchAllGameDetails = async () => {
    await Promise.allSettled(
      filteredGames.map(async (game) => {
        const id = game.id;
        if (!gameDetailsCache.current[id]) {
          try {
            const response = await axios.get(GAME_DETAILS_URL(id), {
              headers: { Accept: "application/xml" },
            });
            const json = xml2js(response.data, {
              compact: true,
            }) as BggXmlGameResponse;
            const details = json.boardgames.boardgame;
            gameDetailsCache.current[id] = details;
          } catch (error) {
            console.error(`Error prefetching game ${id}:`, error);
          }
        }
      })
    );
  };

  useEffect(() => {
    if (selectedGame) {
      fetchGameDetails(selectedGame?.id);
    }
  }, [selectedGame]);

  useEffect(() => {
    const fetchBoardGames = async () => {
      try {
        const response = await axios.get(COLLECTION_URL, {
          headers: { Accept: "application/xml" },
        });
        const json = xml2js(response.data, {
          compact: true,
        }) as BggXmlCollection;
        const items = json.items?.item || [];

        const formattedGames = (Array.isArray(items) ? items : [items]).map(
          (game) => ({
            id: game._attributes?.objectid,
            name: game.name?._text ?? "Unknown Game",
            image:
              game.image?._text ??
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7KOdTJozEijfI8EIMywZoVREYn4ff9J04Wg&s",
            minPlayers: parseInt(
              game.stats?._attributes?.minplayers ?? "1",
              10
            ),
            maxPlayers: parseInt(
              game.stats?._attributes?.maxplayers ?? "10",
              10
            ),
            rating:
              game.stats?.rating?.average?._attributes?.value !== undefined
                ? parseFloat(
                    game.stats.rating.average._attributes.value
                  ).toFixed(2)
                : "No rating",
          })
        );

        setGames(formattedGames);
        setFilteredGames(formattedGames);
        fetchAllGameDetails();
      } catch (err) {
        console.log(err);
        setError("Failed to fetch data. Make sure your username is correct.");
      }
    };

    fetchBoardGames();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        navigateToGame("next");
      } else if (e.key === "ArrowLeft") {
        navigateToGame("prev");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigateToGame]);

  const handleCardClick = (game: Game) => {
    setSelectedGame(game);
    fetchGameDetails(game.id);
  };

  return (
    <BoardgameAppContainer>
      <HeaderSection>
        <TopRightInfo />
        <Title>🎲 Fit2Play</Title>
        <Subtitle>
          Find the perfect board game for your group size, fast and easy.
        </Subtitle>
      </HeaderSection>

      <SortControls
        playerCount={playerCount}
        onPlayerCountChange={setPlayerCount}
        onFilter={filterGames}
        sortOption={sortOption}
        sortDirection={sortDirection}
        onSortChange={handleSortChange}
        onToggleDirection={toggleSortDirection}
      />

      {error && <Typography color="red">{error}</Typography>}

      {filteredGames.length === 0 && (
        <Typography className="not-found">
          No games found for that player count.
        </Typography>
      )}

      {filteredGames.length !== 0 && (
        <AnimatedGridWrapper
          key={`${filteredGames.length}-${sortOption}-${sortDirection}`}
        >
          <Typography>
            {filteredGames.length} games{" "}
            {filterApplied && `found for ${filterApplied} players`}
          </Typography>
          <Grid>
            {filteredGames.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                onClick={() => handleCardClick(game)}
              />
            ))}
          </Grid>
        </AnimatedGridWrapper>
      )}

      {selectedGame && (
        <GameModal
          game={selectedGame}
          details={gameDetails}
          loading={loadingDetails}
          onClose={() => setSelectedGame(null)}
          onNext={() => navigateToGame("next")}
          onPrev={() => navigateToGame("prev")}
        />
      )}
    </BoardgameAppContainer>
  );
};

export default BoardGameApp;
