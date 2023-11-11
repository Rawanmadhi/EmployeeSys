// employeeService.ts
import { useQuery } from 'react-query';
import axios from 'axios';


const URL='Employee'

const getEmployees = async () => {
    const response = await axios.get(URL)
    return response?.data  

};

export default getEmployees;
