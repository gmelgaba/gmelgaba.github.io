import { fadeIn, fadeSlideIn } from "../../styles/global";
import { useEffect, useState } from "react";

import { AppliedFilters } from "./AppliedFilters";
import { FaFilter } from "react-icons/fa";
import { FilterSidebar } from "./FilterSidebar";
import { Game } from "../../interfaces/Game";
import { GameCard } from "./GameCard";
import { GameModal } from "./GameModal";
import ShareButton from "./ShareButton";
import { SortDropdown } from "./SortDropdown";
import Spinner from "../Spinner";
import { UserInfo } from "./UserInfo";
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
  background-image: ${({ theme }) => theme.gradient};
  margin-bottom: 8px;
  margin-top: 10px;
  ${resolutions.mobile} {
    margin-top: 0;
  }
`;

const Results = styled.p`
  margin-top: 10px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 32px;
  color: ${({ theme }) => theme.primaryColor};
  ${resolutions.mobile} {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const Subtitle = styled.p`
  font-size: 16.5px;
  max-width: 600px;
  margin: 0 auto;
  color: ${({ theme }) => theme.textGray};
`;

const Typography = styled.p<{ color?: string }>`
  color: ${(props) => props.color ?? props.theme.text};

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

const Layout = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;

  ${resolutions.mobile} {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.div`
  background-color: ${({ theme }) => theme.sectionEven};
  padding: 20px;
  border-radius: 12px;

  ${resolutions.mobile} {
    display: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TopBar = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  ${resolutions.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const AnimatedGridWrapper = styled.div`
  animation: ${fadeIn} 0.8s ease;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: fixed;
  top: 3dvh;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.sectionOdd};
  border-radius: 20px;
  padding: 24px;
  z-index: 2001;
  max-height: 85dvh;
  overflow-y: auto;
  width: 80%;
  margin: 0 auto;
  animation: ${fadeSlideIn} 0.3s ease;
`;

const FiltersButton = styled.button`
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.textLight};
  padding: 10px 16px;
  border-radius: 999px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  svg {
    margin-left: 8px;
  }
`;

const MobileTopActions = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  ${resolutions.mobile} {
    display: flex;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 22px;
  color: #888;
  cursor: pointer;
  z-index: 2002;
  transition: color 0.2s ease;

  &:hover {
    color: #000;
  }
`;

const BoardGameApp: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const isMobile = window.innerWidth <= 768;

  const [username, setUsername] = useState<string | null>(null);
  const [playerCount, setPlayerCount] = useState("");
  const [durationFilter, setDurationFilter] = useState("");
  const [gameCategory, setGameCategory] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    const usernameParam = searchParams.get("username");
    const players = searchParams.get("players");
    const duration = searchParams.get("duration");
    const sorting = searchParams.get("sorting");
    const categoryParam = searchParams.get("gameCategory");

    if (usernameParam) {
      setUsername(usernameParam);
    } else {
      setUsername("gmelgaba");
    }

    if (usernameParam) setUsername(usernameParam);
    if (players) setPlayerCount(players);
    if (duration) setDurationFilter(duration);
    if (categoryParam) {
      setGameCategory(categoryParam.split(","));
    }

    if (sorting) {
      const regex = /(name|minPlayers|maxPlayers|rating)(asc|desc)/i;
      const match = regex.exec(sorting);
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

  const { filteredGames, availableCategories } = useBoardGameFilters({
    games,
    gameDetailsCache,
    sortOption,
    sortDirection,
    playerCount,
    durationFilter,
    gameCategory,
    ready: detailsReady,
  });

  useKeyboardNavigation(selectedGame, setSelectedGame, filteredGames);

  return (
    <BoardgameAppContainer>
      <HeaderSection>
        <UserInfo username={username ?? ""} />
        <Title className="section-title">🎲 Fit2Play</Title>
        <Subtitle>
          Find the perfect board game for your group size, fast and easy.
        </Subtitle>
      </HeaderSection>

      <Layout>
        <Sidebar>
          <Results>
            {filteredGames.length} result{filteredGames.length !== 1 ? "s" : ""}
          </Results>
          <ShareButton
            username={username ?? ""}
            playerCount={playerCount}
            durationFilter={durationFilter}
            gameCategoryFilter={gameCategory}
            sortOption={sortOption}
            sortDirection={sortDirection}
          />
          <FilterSidebar
            playerCount={playerCount}
            onPlayerCountChange={setPlayerCount}
            durationFilter={durationFilter}
            onDurationFilterChange={setDurationFilter}
            gameCategory={gameCategory}
            onGameCategoryChange={setGameCategory}
            availableGameCategories={availableCategories}
          />
        </Sidebar>

        <Content>
          {isMobile ? (
            <>
              <MobileTopActions>
                <FiltersButton onClick={() => setMobileFiltersOpen(true)}>
                  Filters <FaFilter />
                </FiltersButton>
                <SortDropdown
                  sortOption={sortOption}
                  sortDirection={sortDirection}
                  onSortChange={setSortOption}
                  onSortDirectionChange={setSortDirection}
                />
              </MobileTopActions>
              <AppliedFilters
                playerCount={playerCount}
                durationFilter={durationFilter}
                gameCategory={gameCategory}
                onClearFilter={(type, value) => {
                  if (type === "players") setPlayerCount("");
                  else if (type === "duration") setDurationFilter("");
                  else if (type === "category") {
                    setGameCategory((prev) => prev.filter((c) => c !== value));
                  } else if (type === "all") {
                    setPlayerCount("");
                    setDurationFilter("");
                    setGameCategory([]);
                  }
                }}
              />
              <Results>
                {filteredGames.length} result
                {filteredGames.length !== 1 ? "s" : ""}
              </Results>
              <ShareButton
                username={username ?? ""}
                playerCount={playerCount}
                durationFilter={durationFilter}
                gameCategoryFilter={gameCategory}
                sortOption={sortOption}
                sortDirection={sortDirection}
              />
            </>
          ) : (
            <TopBar>
              <AppliedFilters
                playerCount={playerCount}
                durationFilter={durationFilter}
                gameCategory={gameCategory}
                onClearFilter={(type, value) => {
                  if (type === "players") setPlayerCount("");
                  else if (type === "duration") setDurationFilter("");
                  else if (type === "category") {
                    setGameCategory((prev) => prev.filter((c) => c !== value));
                  } else if (type === "all") {
                    setPlayerCount("");
                    setDurationFilter("");
                    setGameCategory([]);
                  }
                }}
              />
              <SortDropdown
                sortOption={sortOption}
                sortDirection={sortDirection}
                onSortChange={setSortOption}
                onSortDirectionChange={setSortDirection}
              />
            </TopBar>
          )}

          {loadingGames ? (
            <Spinner />
          ) : filteredGames.length === 0 || error ? (
            <Typography className="not-found">No games found.</Typography>
          ) : (
            <AnimatedGridWrapper
              key={`${playerCount}-${durationFilter}-${sortOption}-${sortDirection}-${gameCategory.join(
                ","
              )}`}
            >
              <Grid>
                {filteredGames.map((game) => (
                  <GameCard
                    key={game.id}
                    game={game}
                    onClick={() => setSelectedGame(game)}
                  />
                ))}
              </Grid>
            </AnimatedGridWrapper>
          )}
        </Content>
      </Layout>

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
      {isMobile && mobileFiltersOpen && (
        <>
          <ModalOverlay onClick={() => setMobileFiltersOpen(false)} />
          <ModalContent>
            <CloseButton
              onClick={() => setMobileFiltersOpen(false)}
              aria-label="Close modal"
            >
              ×
            </CloseButton>
            <FilterSidebar
              playerCount={playerCount}
              onPlayerCountChange={setPlayerCount}
              durationFilter={durationFilter}
              onDurationFilterChange={setDurationFilter}
              gameCategory={gameCategory}
              onGameCategoryChange={setGameCategory}
              availableGameCategories={availableCategories}
            />
            <div style={{ marginTop: "16px", textAlign: "center" }}>
              <FiltersButton onClick={() => setMobileFiltersOpen(false)}>
                Close
              </FiltersButton>
            </div>
          </ModalContent>
        </>
      )}
    </BoardgameAppContainer>
  );
};

export default BoardGameApp;
