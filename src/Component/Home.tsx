import React from 'react';
import { useGetEmployeesQuery } from '../hooks/useGetEmployeesQuery';
import DataTable from '../Data Table/DataTable';

const HomePage: React.FC = () => {
  const { data: employees } = useGetEmployeesQuery();

  return (
    <div>
      <h1>Employee list</h1>
      <DataTable data={employees} />
    </div>
  );
};

export default HomePage;