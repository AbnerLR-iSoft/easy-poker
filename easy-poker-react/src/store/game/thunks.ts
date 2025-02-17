//* STORE
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { start, resetGame, selectGame, Player, GameState } from "./game.slice";
//* API
import api from "../../api";

export const UseGameStore = () => {
  const { players, winner } = useAppSelector(selectGame);
  const dispatch = useAppDispatch();

  type StartGameProps = {
    userIds: [];
    userStartedGameId: number;
  };

  const startGame = async ({ userIds, userStartedGameId }: StartGameProps) => {
    try {
      const { data } = await api.post("/game", { userIds, userStartedGameId });

      const gamePlayers: Player[] = data.players;
      const winner: Player = data.winner;
      const newGameState: GameState = {
        players: gamePlayers,
        winner: winner,
      };

      dispatch(start(newGameState));
    } catch (error) {
      dispatch(resetGame());
    }
  };

  return {
    players,
    winner,
    startGame,
  };
};
