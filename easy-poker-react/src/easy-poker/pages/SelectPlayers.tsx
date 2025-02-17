import { useEffect } from "react";
//* LIBRARIES
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
//* ASSETS
import personSVG from "../../assets/person.svg";
//* STORE
import { UsePlayersStore } from "../../store/players";
import { UseAuthStore } from "../../store/auth";

export const SelectPlayers = () => {
  const { register, handleSubmit, watch, reset } = useForm();
  const { receivedPlayers, players } = UsePlayersStore();
  const { auth } = UseAuthStore();
  const navigate = useNavigate();

  const formValues = watch();

  useEffect(() => {
    receivedPlayers({ userAuthId: auth?.user?.userId });
  }, []);

  const disabledStartGame = () => {
    return formValues.userId && formValues.userId.length > 3;
  };

  const onSubmit = async (data: any) => {
    if (
      !disabledStartGame() &&
      formValues.userId &&
      formValues.userId.length === 3
    ) {
      navigate("/poker-game", {
        state: { playersIds: data.userId, player1Id: auth?.user?.userId },
      });
      reset();
    }
  };

  const onPaginateHistory = () => {
    navigate("/history");
    reset();
  };

  return (
    <div className="bg-gradient-2 h-screen overflow-hidden w-full flex justify-center items-center">
      <div className="border-4 shadow-2xl shadow-red-600/50 bg-red-700 w-[75%] h-[90%] p-12">
        <form
          method="post"
          onSubmit={handleSubmit(onSubmit)}
          className="border bg-purple-950 w-full h-full flex flex-col items-center"
        >
          <h1 className="my-4 grenze-gotisch-700 text-[2rem] text-white select-none">
            Invite up to 3 Friends
          </h1>
          <div className="flex flex-col p-1 items-center w-full h-screen overflow-auto">
            <ul className="bg-rectangle-1 border-2 shadow-xl shadow-red-700/50 border-slate-900 w-full h-auto flex flex-col gap-2 p-4">
              {players.map((p) => (
                <li
                  key={p.id}
                  className="bg-gradient-3 w-full  overflow-y-hidden border-2 border-red-900 rounded p-2 flex items-center justify-around gap-4"
                >
                  <img
                    src={personSVG}
                    alt="Person"
                    className="p-2 rounded-full border-2 bg-orange-400"
                  />
                  <h2 className="mr-[30rem] merienda-800 font-bold text-[1.2rem] text-white select-none">
                    {p.username}
                  </h2>
                  <input
                    id={`${p.id}`}
                    type="checkbox"
                    value={p.id}
                    {...register("userId")}
                    className="rounded-full cursor-pointer"
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-8">
            <button
              type="submit"
              className="mb-10 border-2 shadow-md shadow-cyan-700/50 border-white bg-red-500 p-2 rounded-md min-w-[8rem] w-auto text-white merienda-800 hover:bg-red-400 hover:text-slate-900 cursor-pointer"
            >
              {disabledStartGame() ? "Select Only Three players" : "Start Game"}
            </button>
            <button
              type="button"
              onClick={onPaginateHistory}
              className="mb-10 border-2 shadow-md shadow-cyan-700/50 border-white bg-cyan-800 p-2 rounded-md min-w-[8rem] w-auto text-white merienda-800 hover:bg-cyan-600 hover:text-slate-900 cursor-pointer"
            >
              History
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
