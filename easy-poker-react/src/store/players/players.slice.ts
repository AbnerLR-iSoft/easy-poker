import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type Player = {
  id: number;
  username: string;
};

type Players = {
  players: Player[];
};

const initialState: Players = {
  players: [],
};

export const playersSlice = createSlice({
  name: "players",
  initialState: initialState,
  reducers: {
    playersLoading: (state) => {
      state.players = [];
    },
    setPlayers: (state, action: PayloadAction<Player[]>) => {
      state.players = action.payload;
    },
  },
});

export const { playersLoading, setPlayers } = playersSlice.actions;

export { type Player, type Players };

export const selectPlayers = (state: RootState) => state.players;

export default playersSlice.reducer;
