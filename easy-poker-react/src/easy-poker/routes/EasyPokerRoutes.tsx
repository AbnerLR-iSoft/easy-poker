//* LIBRARIES
import { Routes, Route } from "react-router";
//* PAGES
import { SelectPlayers, TableGame, History } from "../pages";

export const EasyPokerRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SelectPlayers />} />
        <Route path="/poker-game" element={<TableGame />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
};
