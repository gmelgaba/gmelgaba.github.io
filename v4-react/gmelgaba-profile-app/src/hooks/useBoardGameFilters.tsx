import { useCallback, useEffect, useState } from "react";

import { BggXmlGameDetails } from "../interfaces/ExtendedGameDetails";
import { Game } from "../interfaces/Game";

export function useBoardGameFilters(
  games: Game[],
  gameDetailsCache: React.MutableRefObject<Record<string, BggXmlGameDetails>>,
  sortOption: string,
  sortDirection: "asc" | "desc",
  playerCount: string,
  durationFilter: string,
  ready: boolean
) {
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [playerCountApplied, setPlayerCountApplied] = useState("");

  const sortGames = useCallback(
    (toSort: Game[]) => {
      return [...toSort].sort((a, b) => {
        let compareValue = 0;
        if (sortOption === "name") compareValue = a.name.localeCompare(b.name);
        if (sortOption === "minPlayers")
          compareValue = a.minPlayers - b.minPlayers;
        if (sortOption === "maxPlayers")
          compareValue = a.maxPlayers - b.maxPlayers;
        if (sortOption === "rating") {
          const aRating = parseFloat(a.rating) || 0;
          const bRating = parseFloat(b.rating) || 0;
          compareValue = bRating - aRating;
        }
        return sortDirection === "asc" ? compareValue : -compareValue;
      });
    },
    [sortOption, sortDirection]
  );

  useEffect(() => {
    if (!ready) return;

    let filtered = [...games];

    if (playerCount) {
      const count = parseInt(playerCount, 10);
      filtered = filtered.filter(
        (g) => count >= g.minPlayers && count <= g.maxPlayers
      );
    }

    if (durationFilter) {
      filtered = filtered.filter((game) => {
        const rawDuration =
          gameDetailsCache.current[game.id]?.playingtime?._text;
        const duration = rawDuration ? parseInt(rawDuration, 10) : NaN;

        if (isNaN(duration) || duration <= 0) return false;

        switch (durationFilter) {
          case "very-short":
            return duration > 0 && duration <= 20;
          case "short":
            return duration > 20 && duration <= 30;
          case "medium":
            return duration > 30 && duration <= 45;
          case "long":
            return duration > 45 && duration <= 60;
          case "very-long":
            return duration > 60;
          default:
            return true;
        }
      });
    }

    setFilteredGames(sortGames(filtered));
    setPlayerCountApplied(playerCount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    games,
    playerCount,
    durationFilter,
    sortOption,
    sortDirection,
    sortGames,
    ready,
  ]);

  return {
    filteredGames,
    playerCountApplied,
  };
}
