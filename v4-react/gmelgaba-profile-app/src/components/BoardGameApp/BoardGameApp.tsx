import { useEffect, useState } from "react";

import { Game } from "../../interfaces/Game";
import { GameCard } from "./GameCard";
import { GameModal } from "./GameModal";
import ShareButton from "./ShareButton";
import { SortControls } from "./SortControls";
import Spinner from "../Spinner";
import { UserInfo } from "./UserInfo";
import { fadeIn } from "../../styles/global";
import { resolutions } from "../../utils/devices";
import styled from "styled-components";
import { useBoardGameData } from "../../hooks/useBoardGameData";
import { useBoardGameFilters } from "../../hooks/useBoardGameFilters";
import { useKeyboardNavigation } from "../../hooks/useKeyboardNavigation";
import { useSearchParams } from "react-router-dom";

const BoardgameAppContainer = styled.div`
  padding: 20px;
  position: relative;
  background-color: ${({ theme }) => theme.sectionOdd};
  min-height: 100vh;
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
  margin-top: 10px;
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

const Typography = styled.p<{ color?: string }>`
  color: ${(props) => props.color || props.theme.text};

  &.not-found {
    color: ${({ theme }) => theme.textGray};
    text-align: center;
    font-size: 3rem;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.text};

    ${resolutions.mobile} {
      font-size: 24px;
    }
  }
`;

const SearchResults = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  ${resolutions.mobile} {
    grid-template-columns: 1fr;
  }
`;
const SearchDetails = styled.div`
  text-align: right;
  ${resolutions.mobile} {
    text-align: left;
  }
`;

const AnimatedGridWrapper = styled.div`
  animation: ${fadeIn} 0.4s ease;
  margin-top: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
`;

const BoardGameApp: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const [username, setUsername] = useState<string | null>(null);
  const [playerCount, setPlayerCount] = useState("");
  const [durationFilter, setDurationFilter] = useState("");
  const [sortOption, setSortOption] = useState("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    const usernameParam = searchParams.get("username");
    const players = searchParams.get("players");
    const duration = searchParams.get("duration");
    const sorting = searchParams.get("sorting");

    if (usernameParam) {
      setUsername(usernameParam);
    } else {
      setUsername("gmelgaba");
    }

    if (usernameParam) setUsername(usernameParam);
    if (players) setPlayerCount(players);
    if (duration) setDurationFilter(duration);

    if (sorting) {
      const match = sorting.match(
        /(name|minPlayers|maxPlayers|rating)(asc|desc)/i
      );
      if (match) {
        setSortOption(match[1]);
        setSortDirection(match[2].toLowerCase() as "asc" | "desc");
      }
    }
  }, [searchParams]);

  const {
    games,
    error,
    loadingGames,
    loadingDetails,
    detailsReady,
    gameDetailsCache,
  } = useBoardGameData(username ?? "");

  const { filteredGames, playerCountApplied } = useBoardGameFilters(
    games,
    gameDetailsCache,
    sortOption,
    sortDirection,
    playerCount,
    durationFilter,
    detailsReady
  );

  useKeyboardNavigation(selectedGame, setSelectedGame, filteredGames);

  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  const handleCardClick = (game: Game) => {
    setSelectedGame(game);
  };

  return (
    <BoardgameAppContainer>
      <HeaderSection>
        <UserInfo username={username ?? ""} />
        <Title>🎲 Fit2Play</Title>
        <Subtitle>
          Find the perfect board game for your group size, fast and easy.
        </Subtitle>
      </HeaderSection>

      <SortControls
        playerCount={playerCount}
        onPlayerCountChange={setPlayerCount}
        sortOption={sortOption}
        sortDirection={sortDirection}
        onSortChange={handleSortChange}
        onSortDirectionChange={(dir) => setSortDirection(dir)}
        durationFilter={durationFilter}
        onDurationFilterChange={setDurationFilter}
      />

      {loadingGames ? (
        <Spinner />
      ) : filteredGames.length === 0 || error ? (
        <Typography className="not-found">No games found.</Typography>
      ) : (
        <AnimatedGridWrapper
          key={`${playerCount}-${durationFilter}-${sortOption}-${sortDirection}`}
        >
          <Typography>
            <SearchResults>
              <ShareButton
                username={username ?? ""}
                playerCount={playerCount}
                durationFilter={durationFilter}
                sortOption={sortOption}
                sortDirection={sortDirection}
              />
              <SearchDetails>
                {filteredGames.length} games{" "}
                {playerCountApplied &&
                  `found for ${playerCountApplied} players`}
              </SearchDetails>
            </SearchResults>
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
          details={gameDetailsCache.current[selectedGame.id]}
          loading={loadingDetails}
          onClose={() => setSelectedGame(null)}
          onNext={() => {
            const currentIndex = filteredGames.findIndex(
              (g) => g.id === selectedGame.id
            );
            const nextIndex = (currentIndex + 1) % filteredGames.length;
            setSelectedGame(filteredGames[nextIndex]);
          }}
          onPrev={() => {
            const currentIndex = filteredGames.findIndex(
              (g) => g.id === selectedGame.id
            );
            const prevIndex =
              (currentIndex - 1 + filteredGames.length) % filteredGames.length;
            setSelectedGame(filteredGames[prevIndex]);
          }}
        />
      )}
    </BoardgameAppContainer>
  );
};

export default BoardGameApp;
