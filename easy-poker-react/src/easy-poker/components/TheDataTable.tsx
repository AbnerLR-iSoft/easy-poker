import DataTable, { TableColumn } from "react-data-table-component";

type DataTableProps = {
  columns: TableColumn<any>[];
  data: any[];
};

export const TheDataTable = ({ columns, data }: DataTableProps) => {
  return (
    <div
      className={`w-full overflow-auto border-2 border-black/50 rounded-xl shadow-lg shadow-cyan-900/50`}
    >
      <DataTable
        pagination
        columns={columns}
        data={data}
        highlightOnHover
        striped
        pointerOnHover
      />
    </div>
  );
};
