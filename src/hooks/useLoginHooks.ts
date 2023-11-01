//call loginservice and useQuery
import loginServiceApi from '../services/loginService';
import { useQuery } from '@tanstack/react-query';


export const useloginHooks = (username:string ,password: string ) =>{
     const {data:accessToken, data:refreshToken , error } = useQuery({
        queryKey:["accessToken"],
        queryFn:()=> loginServiceApi(username,password)
     });

     if (error)
     {
        return error
     }
     else 
     return({accessToken , refreshToken  });

  }

