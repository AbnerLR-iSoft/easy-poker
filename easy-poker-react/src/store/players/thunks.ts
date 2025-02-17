//* STORE
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { setPlayers, playersLoading, selectPlayers } from "./players.slice";
//* API
import api from "../../api";

export const UsePlayersStore = () => {
  const { players } = useAppSelector(selectPlayers);
  const dispatch = useAppDispatch();

  type PlayersProps = {
    userAuthId: number | undefined;
  };

  const receivedPlayers = async ({ userAuthId }: PlayersProps) => {
    try {
      const { data } = await api.get(`/players/${userAuthId}`);

      dispatch(setPlayers(data.players));
    } catch (error) {
      dispatch(playersLoading());
    }
  };

  return {
    receivedPlayers,
    players,
  };
};
