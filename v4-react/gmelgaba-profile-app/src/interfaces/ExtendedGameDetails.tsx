export interface ExtendedGameDetails {
  description?: string;
  playingTime?: string;
  age?: string;
  languageDependence?: string;
  suggestedPlayers?: string;
  images?: string[];
}

export interface BggXmlGameResponse {
  boardgames: {
    boardgame: BggXmlGameDetails;
  };
}

export interface BggXmlGameDetails {
  name: { _attributes?: { primary?: string }; _text: string }[];
  description?: { _text: string };
  age?: { _text: string };
  playingtime?: { _text: string };

  "poll-summary"?: {
    _attributes?: { name?: string; title?: string };
    result?: BggXmlGameDetailsPollResult[];
  };

  boardgamesubdomain?: {
    _attributes?: { objectid?: string };
    _text?: string;
  };

  boardgamecategory?:
    | { _attributes?: { objectid?: string }; _text?: string }
    | { _attributes?: { objectid?: string }; _text?: string }[]; // for array case

  boardgameexpansion?: {
    _attributes?: { objectid?: string };
    _text?: string;
  }[];
}

export interface BggXmlGameDetailsPollResult {
  _attributes?: { name?: string; value?: string };
}
