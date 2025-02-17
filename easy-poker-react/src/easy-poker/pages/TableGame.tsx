import { useState, useEffect } from "react";
//* LIBRARIES
import { useLocation } from "react-router";
//* ASSETS
import reverse from "../../assets/reverse.png";
import person from "../../assets/person.svg";
//* COMPONENTS
import { ShipWinner } from "../components";
//* STORE
import { UseGameStore } from "../../store/game";

export const TableGame = () => {
  const location = useLocation();
  const { playersIds, player1Id } = location.state;
  const { startGame, players, winner } = UseGameStore();
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    startGame({ userIds: playersIds, userStartedGameId: player1Id });
  }, []);

  useEffect(() => {
    if (winner && players.length > 0) {
      setTimeout(() => {
        setShowCards(true);
      }, 2000);
    }
  });

  const onNewWame = () => {
    window.location.reload();
  };

  return (
    <div className="bg-black h-screen w-full p-2 overflow-hidden">
      {winner === null && players.length === 0 ? (
        <div className="bg-gradient-6 border-2 border-orange-900 h-full w-full flex justify-center items-center">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="bg-gradient-6 border-2 border-orange-900 h-full w-full grid grid-cols-12 grid-rows-12 gap-2">
          <div
            id="player 2"
            className="bg-gradient-4 border rounded-full p-2 col-span-2 row-span-10 col-start-1 row-start-2"
          >
            <ul className="flex flex-col justify-center items-center h-[85%] w-full">
              {showCards ? (
                <>
                  {players[1].handImgs.map((h) => (
                    <li key={h.alt} className="h-auto w-[30%] rotate-90">
                      <img
                        src={`/${h.src}`}
                        alt={h.alt}
                        className="w-full h-full object-cover"
                      />
                    </li>
                  ))}
                </>
              ) : (
                <>
                  {players[1].handImgs.map((h) => (
                    <li key={h.alt} className="h-auto w-[30%] rotate-90">
                      <img
                        src={reverse}
                        alt="Reverse Card"
                        className="w-full h-full object-cover"
                      />
                    </li>
                  ))}
                </>
              )}
            </ul>
            <div className="flex flex-col items-center justify-center">
              <img
                src={person}
                alt="Player 2"
                className="border rounded-full bg-blue-700 p-2"
              />
              <p className="text-white merienda-500">{players[1].username}</p>
            </div>
          </div>
          <div
            id="player 4"
            className="bg-gradient-4 border rounded-full p-2.5 col-span-2 row-span-10 col-start-11 row-start-2"
          >
            <ul className="flex flex-col justify-center items-center gap-2 h-[85%] w-full">
              {showCards ? (
                <>
                  {players[3].handImgs.map((h) => (
                    <li key={h.alt} className="h-auto w-[30%] rotate-90">
                      <img
                        src={`/${h.src}`}
                        alt={h.alt}
                        className="w-full h-full object-cover"
                      />
                    </li>
                  ))}
                </>
              ) : (
                <>
                  {players[3].handImgs.map((h) => (
                    <li key={h.alt} className="h-auto w-[30%] rotate-90">
                      <img
                        src={reverse}
                        alt="Reverse Card"
                        className="w-full h-full object-cover"
                      />
                    </li>
                  ))}
                </>
              )}
            </ul>
            <div className="flex flex-col items-center justify-center">
              <img
                src={person}
                alt="Player 4"
                className="border rounded-full bg-pink-700 p-2"
              />
              <p className="text-white merienda-500">{players[3].username}</p>
            </div>
          </div>
          <div
            id="table"
            className="bg-gradient-5 border border-white rounded-full col-span-4 row-span-3 col-start-5 row-start-5"
          >
            <div className="flex flex-col gap-8 justify-center items-center w-full h-full">
              <ShipWinner winner={winner?.username} />
              <button
                type="button"
                onClick={onNewWame}
                className="bg-purple-200 rounded-md p-2 text-slate-800 border-2 border-black shadow-md shadow-purple-900/50 hover:bg-purple-600 hover:text-white hover:inset-shadow-sm cursor-pointer grenze-gotisch-700"
              >
                Start New Wame
              </button>
            </div>
          </div>
          <div
            id="player 3"
            className="bg-gradient-4 border rounded-full p-2 flex justify-center gap-4 col-span-6 row-span-3 col-start-4 row-start-1"
          >
            <ul className="flex items-center gap-2 h-full w-[65%] p-4">
              {showCards ? (
                <>
                  {players[2].handImgs.map((h) => (
                    <li key={h.alt} className="h-auto w-full">
                      <img
                        src={`/${h.src}`}
                        alt={h.alt}
                        className="w-full h-full object-cover"
                      />
                    </li>
                  ))}
                </>
              ) : (
                <>
                  {players[2].handImgs.map((h) => (
                    <li key={h.alt} className="h-full w-full">
                      <img
                        src={reverse}
                        alt="Reverse Card"
                        className="w-full h-full object-cover"
                      />
                    </li>
                  ))}
                </>
              )}
            </ul>
            <div className="flex flex-col items-center justify-center">
              <img
                src={person}
                alt="Player 3"
                className="border rounded-full bg-cyan-700 p-2"
              />
              <p className="text-white merienda-500">{players[2].username}</p>
            </div>
          </div>
          <div
            id="player 1"
            className="bg-gradient-4 flex items-center justify-center gap-4 border rounded-full p-10 col-span-6 row-span-4 col-start-4 row-start-9"
          >
            <ul className="flex gap-2 h-[85%] w-[80%]">
              {showCards ? (
                <>
                  {players[0].handImgs.map((h) => (
                    <li key={h.alt} className="h-auto w-full">
                      <img
                        src={`/${h.src}`}
                        alt={h.alt}
                        className="w-full h-full object-cover"
                      />
                    </li>
                  ))}
                </>
              ) : (
                <>
                  {players[0].handImgs.map((h) => (
                    <li key={h.alt} className="h-full w-full">
                      <img
                        src={reverse}
                        alt="Reverse Card"
                        className="w-full h-full object-cover"
                      />
                    </li>
                  ))}
                </>
              )}
            </ul>
            <div className="flex flex-col items-center justify-center">
              <img
                src={person}
                alt="Player 1"
                className="border rounded-full bg-teal-700 p-2"
              />
              <p className="text-white merienda-500">{players[0].username}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
