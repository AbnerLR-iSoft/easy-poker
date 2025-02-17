import { SUITS, RANKS } from "../constants";

type CardType = {
  suit: string;
  rank: string;
};

type handImg = {
  src: string;
  alt: string;
};

type Player = {
  number: number;
  name: string;
  hand: CardType[];
  handImg: handImg[];
};

const generateDeck = (): CardType[] => {
  let deck: CardType[] = [];
  for (let suit of SUITS) {
    for (let rank of RANKS) {
      deck.push({ suit, rank });
    }
  }
  return deck;
};

const shuffleDeck = (deck: CardType[]): CardType[] => {
  for (let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * deck.length);
    let tmp = deck[i];
    deck[i] = deck[j];
    deck[j] = tmp;
  }
  return deck;
};

export { type CardType, type Player, generateDeck, shuffleDeck };
