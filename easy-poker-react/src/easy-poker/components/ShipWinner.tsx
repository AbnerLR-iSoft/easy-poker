import celebration from "../../assets/celebration.svg";

type ShipProps = {
  winner: string | undefined;
};

export const ShipWinner = ({ winner }: ShipProps) => {
  return (
    <div className="flex items-center gap-2 bg-gradient-1 border-2 border-black rounded-full p-2">
      <h1 className="text-white merienda-800">{winner}</h1>
      <img src={celebration} alt="Celebration Icon" className="h-[35px]" />
    </div>
  );
};
