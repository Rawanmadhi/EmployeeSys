import React from 'react';

export interface Employee{
    fullName:string,
    mail:string,
    occupation:string,
    department_id:number,
    username:string,
    roles:string[],
    phone:number,
    id:number,
}

interface DataTableProps {
  data: Employee[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  // Implement your DataTable logic using react-table or any other library
  return (
    <div>
      <h2>Data Table</h2>
      {/* Display data in a table */}
    </div>
  );
};

export default DataTable;