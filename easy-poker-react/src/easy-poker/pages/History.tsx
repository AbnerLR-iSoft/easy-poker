import { useEffect, useState } from "react";
//* Libraries
import { TableColumn } from "react-data-table-component";
import { useNavigate } from "react-router";
//* COMPONENTS
import { TheDataTable } from "../components";
//* API
import api from "../../api";
//* HELPERS
import { humanFriendlyData } from "../../helpers/date-format";

type DataRow = {
  id: number;
  player_name_1: string;
  player_one_hand: string;
  player_name_2: string;
  player_two_hand: string;
  player_name_3: string;
  player_three_hand: string;
  player_name_4: string;
  player_four_hand: string;
  winner_name: string;
  winner_hand: string;
  created_at: string;
};

export const History = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const columns: TableColumn<DataRow>[] = [
    { name: "Id", selector: (row) => row.id, sortable: true },
    { name: "P1", selector: (row) => row.player_name_1, sortable: true },
    { name: "Hand P1", selector: (row) => row.player_one_hand, sortable: true },
    { name: "P2", selector: (row) => row.player_name_2, sortable: true },
    { name: "Hand P2", selector: (row) => row.player_two_hand, sortable: true },
    { name: "P3", selector: (row) => row.player_name_3, sortable: true },
    {
      name: "Hand P3",
      selector: (row) => row.player_three_hand,
      sortable: true,
    },
    { name: "P4", selector: (row) => row.player_name_4, sortable: true },
    {
      name: "Hand P4",
      selector: (row) => row.player_four_hand,
      sortable: true,
    },
    { name: "Winner", selector: (row) => row.winner_name, sortable: true },
    { name: "Hand Winner", selector: (row) => row.winner_hand, sortable: true },
    {
      name: "Date",
      selector: (row) => humanFriendlyData(row.created_at),
      sortable: true,
    },
  ];

  const onReturnPage = () => {
    navigate("/");
  };

  useEffect(() => {
    api.get("/game").then((res) => {
      setData(res.data.history);
    });
  }, []);

  return (
    <div className="bg-gradient-2 h-screen overflow-hidden w-full flex justify-center items-center">
      <div className="border-2 border-black shadow-lg shadow-red-900/50 bg-gradient-5 h-[80%] w-[90%] p-2">
        <div className="flex flex-col items-center gap-10 w-full h-full">
          <h1 className="grenze-gotisch-600 text-white text-[3rem]">History</h1>
          {data.length === 0 ? (
            <h1 className="merienda-600 text-red-500 text-[2rem]">No Data</h1>
          ) : (
            <TheDataTable columns={columns} data={data} />
          )}
          <button
            type="button"
            onClick={onReturnPage}
            className="mb-10 border-2 shadow-md shadow-cyan-700/50 border-white bg-cyan-800 p-2 rounded-md min-w-[8rem] w-auto text-white merienda-800 hover:bg-cyan-600 hover:text-slate-900 cursor-pointer"
          >
            Return
          </button>
        </div>
      </div>
    </div>
  );
};
