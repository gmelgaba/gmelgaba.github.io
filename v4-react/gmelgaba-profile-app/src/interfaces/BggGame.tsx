export interface BggXmlGame {
  _attributes: {
    objectid: string;
  };
  name?: {
    _text: string;
  };
  image?: {
    _text: string;
  };
  stats?: {
    _attributes?: {
      minplayers?: string;
      maxplayers?: string;
    };
    rating?: {
      average?: {
        _attributes?: {
          value?: string;
        };
      };
    };
  };
}

export interface BggXmlCollection {
  items?: {
    item?: BggXmlGame[] | BggXmlGame;
  };
}
