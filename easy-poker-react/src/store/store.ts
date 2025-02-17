import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { authSlice } from "./auth";
import { playersSlice } from "./players";
import { gameSlice } from "./game";
import { useDispatch } from "react-redux";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  auth: authSlice.reducer,
  players: playersSlice.reducer,
  game: gameSlice.reducer,
});
type RootReducer = ReturnType<typeof reducer>;

const persistReducers = persistReducer<RootReducer>(persistConfig, reducer);

const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
