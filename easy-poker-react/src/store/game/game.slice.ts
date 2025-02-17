import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type CardType = {
  suit: string;
  rank: string;
};

type HandImg = {
  src: string;
  alt: string;
};

type Player = {
  userId: number;
  username: string;
  hand: CardType[];
  handImgs: HandImg[];
};

type GameState = {
  players: Player[];
  winner: Player | null;
};

const initialState: GameState = {
  players: [],
  winner: null,
};

export const gameSlice = createSlice({
  name: "game",
  initialState: initialState,
  reducers: {
    resetGame: (state) => {
      state.players = [];
      state.winner = null;
    },
    start: (state, action: PayloadAction<GameState>) => {
      state.players = action.payload.players;
      state.winner = action.payload.winner;
    },
  },
});

export const { start, resetGame } = gameSlice.actions;

export { type Player, type GameState };

export const selectGame = (state: RootState) => state.game;

export default gameSlice.reducer;
