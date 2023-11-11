//call loginservice and useQuery
import loginServiceApi from '../services/loginService';
import { useMutation } from "@tanstack/react-query";  
import { ILoginInfo } from '../Component/Login';

export const useLoginHooks = () =>{
   let errorMessage="";
     const {data:accessToken, data:refreshToken, mutate: getLoginInfo } =  
     useMutation({
      mutationFn: (info: ILoginInfo) => loginServiceApi(info),
      onError: (error) => {
         errorMessage= error.message;
      }
    });
    return { accessToken,refreshToken, getLoginInfo };

  }

