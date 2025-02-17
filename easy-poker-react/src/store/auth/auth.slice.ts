import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type User = {
  userId: number;
  username: string;
  email: string;
};

type Auth = {
  user: User | null;
  token: string;
  status: boolean;
};

type AuthState = {
  auth: Auth | null;
};

const initialState: AuthState = {
  auth: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    onLogin: (state, action: PayloadAction<Auth>) => {
      state.auth = action.payload;
    },
    onLogout: (state) => {
      state.auth = null;
    },
  },
});

export const { onLogin, onLogout } = authSlice.actions;

export { type User, type Auth };

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
