import { Game } from "../interfaces/Game";
import { useEffect } from "react";

export function useKeyboardNavigation(
  selectedGame: Game | null,
  setSelectedGame: (g: Game) => void,
  games: Game[]
) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedGame || games.length === 0) return;

      const currentIndex = games.findIndex((g) => g.id === selectedGame.id);
      if (currentIndex === -1) return;

      const direction =
        e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (!direction) return;

      const newIndex = (currentIndex + direction + games.length) % games.length;
      setSelectedGame(games[newIndex]);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedGame, setSelectedGame, games]);
}
