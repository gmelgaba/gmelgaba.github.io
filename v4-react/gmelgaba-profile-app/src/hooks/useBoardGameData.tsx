import {
  BggXmlGameDetails,
  BggXmlGameResponse,
} from "../interfaces/ExtendedGameDetails";
import { useEffect, useRef, useState } from "react";

import { BggXmlCollection } from "../interfaces/BggGame";
import { Game } from "../interfaces/Game";
import axios from "axios";
import { xml2js } from "xml-js";

const GAME_DETAILS_URL = (id: string) =>
  `https://corsproxy.io/?https://boardgamegeek.com/xmlapi/boardgame/${id}`;

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000;

export function useBoardGameData(username?: string) {
  const [games, setGames] = useState<Game[]>([]);
  const [availableGameCategories, setAvailableGameCategories] = useState<
    string[]
  >([]);
  const [loadingGames, setLoadingGames] = useState(true);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [detailsReady, setDetailsReady] = useState(false);
  const gameDetailsCache = useRef<Record<string, BggXmlGameDetails>>({});

  const collectionUrl = `https://www.boardgamegeek.com/xmlapi/collection/${username}?own=1`;

  const fetchAllGameDetails = async (gamesToFetch: Game[]) => {
    await Promise.allSettled(
      gamesToFetch.map(async (game) => {
        const id = game.id;
        if (!gameDetailsCache.current[id]) {
          try {
            const response = await axios.get(GAME_DETAILS_URL(id));
            const json = xml2js(response.data, {
              compact: true,
            }) as BggXmlGameResponse;
            gameDetailsCache.current[id] = json.boardgames.boardgame;
          } catch (err) {
            console.error("Failed to prefetch:", err);
          }
        }
      })
    );
    setDetailsReady(true);
    setLoadingGames(false);

    const gameCategories = new Set<string>();

    Object.values(gameDetailsCache.current).forEach((details) => {
      const cat = details.boardgamecategory;

      if (Array.isArray(cat)) {
        cat.forEach((c) => {
          if (c._text) gameCategories.add(c._text);
        });
      } else if (cat?._text) {
        gameCategories.add(cat._text);
      }
    });

    setAvailableGameCategories(
      Array.from(gameCategories).sort((a, b) => a.localeCompare(b))
    );
  };

  const fetchCollection = async (retryAttempt = 0): Promise<void> => {
    try {
      const response = await axios.get(collectionUrl);
      const rawData = response.data;

      // Detect BGG "please try again" message
      if (typeof rawData === "string" && rawData.includes("<message>")) {
        if (retryAttempt < MAX_RETRIES) {
          console.warn(`BGG asked to retry, attempt ${retryAttempt + 1}`);
          setTimeout(() => fetchCollection(retryAttempt + 1), RETRY_DELAY_MS);
        } else {
          setError(
            "BoardGameGeek is taking too long to process the request. Try again later."
          );
          setLoadingGames(false);
        }
        return;
      }

      const json = xml2js(rawData, {
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
          minPlayers: parseInt(game.stats?._attributes?.minplayers ?? "1", 10),
          maxPlayers: parseInt(game.stats?._attributes?.maxplayers ?? "10", 10),
          rating:
            game.stats?.rating?.average?._attributes?.value !== undefined
              ? parseFloat(game.stats.rating.average._attributes.value).toFixed(
                  2
                )
              : "No rating",
        })
      );

      setGames(formattedGames);
      await fetchAllGameDetails(formattedGames);
    } catch (err) {
      console.error("Fetch error:", err);
      setLoadingGames(false);
      setError("Failed to fetch data. Make sure your username is correct.");
    }
  };

  useEffect(() => {
    if (!username) return;

    setGames([]);
    setError(null);
    setDetailsReady(false);
    setLoadingGames(true);

    fetchCollection();
  }, [collectionUrl, username]);

  return {
    games,
    error,
    loadingGames,
    loadingDetails,
    detailsReady,
    gameDetailsCache,
    availableGameCategories,
    setLoadingDetails,
  };
}
