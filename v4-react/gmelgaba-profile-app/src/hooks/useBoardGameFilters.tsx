import { useCallback, useEffect, useState } from "react";

import { BggXmlGameDetails } from "../interfaces/ExtendedGameDetails";
import { Game } from "../interfaces/Game";

export function useBoardGameFilters({
  games,
  gameDetailsCache,
  sortOption,
  sortDirection,
  playerCount,
  durationFilter,
  gameCategory,
  ready,
}: {
  games: Game[];
  gameDetailsCache: React.MutableRefObject<Record<string, BggXmlGameDetails>>;
  sortOption: string;
  sortDirection: "asc" | "desc";
  playerCount: string;
  durationFilter: string;
  gameCategory: string;
  ready: boolean;
}) {
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [playerCountApplied, setPlayerCountApplied] = useState("");
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);

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

    // Player Count
    if (playerCount) {
      const count = parseInt(playerCount, 10);
      filtered = filtered.filter(
        (g) => count >= g.minPlayers && count <= g.maxPlayers
      );
    }

    // Duration
    if (durationFilter) {
      filtered = filtered.filter((game) => {
        const rawDuration =
          gameDetailsCache.current[game.id]?.playingtime?._text;
        const duration = rawDuration ? parseInt(rawDuration, 10) : NaN;

        if (isNaN(duration) || duration <= 0) return false;

        switch (durationFilter) {
          case "very-short":
            return duration <= 20;
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

    // Build dynamic category list from games AFTER duration/player filters
    const categoriesSet = new Set<string>();
    for (const game of filtered) {
      const categories = gameDetailsCache.current[game.id]?.boardgamecategory;
      const list = Array.isArray(categories)
        ? categories
        : categories
        ? [categories]
        : [];

      list.forEach((c) => {
        if (c._text) categoriesSet.add(c._text);
      });
    }

    setAvailableCategories(
      Array.from(categoriesSet).sort((a, b) => a.localeCompare(b))
    );

    // Category filter (applied after dynamic set)
    if (gameCategory) {
      filtered = filtered.filter((game) => {
        const categories = gameDetailsCache.current[game.id]?.boardgamecategory;

        const categoryNames = Array.isArray(categories)
          ? categories.map((c) => c._text?.toLowerCase())
          : categories?._text
          ? [categories._text.toLowerCase()]
          : [];

        return categoryNames.includes(gameCategory.toLowerCase());
      });
    }

    setFilteredGames(sortGames(filtered));
    setPlayerCountApplied(playerCount);
  }, [
    games,
    playerCount,
    durationFilter,
    gameCategory,
    sortOption,
    sortDirection,
    sortGames,
    ready,
    gameDetailsCache,
  ]);

  return {
    filteredGames,
    playerCountApplied,
    availableCategories,
  };
}
