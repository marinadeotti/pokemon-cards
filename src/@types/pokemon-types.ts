export interface Attack {
  name: string;
  cost: string[];
  damage: string;
  text: string;
}

export interface PokemonCard {
  id: string;
  name: string;
  images: {
    small: string;
    large: string;
  };
  types?: string[];
  abilities?: {
    name: string;
    type: string;
    text: string;
  }[];
  weaknesses?: {
    type: string;
    value: string;
  }[];
  attacks?: Attack[];
}

export interface CardListProps {
  cards: PokemonCard[];
  goToNextPage: () => void;
}