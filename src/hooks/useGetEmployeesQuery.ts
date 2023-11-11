import React from 'react'
import { useQuery } from '@tanstack/react-query';
import getEmployees from '../services/employeeService'

    export const useGetEmployeesQuery = () => {
        return useQuery({
            queryKey:['Employee_ID'],
            queryFn: getEmployees});
      };
  
export default useGetEmployeesQuery
