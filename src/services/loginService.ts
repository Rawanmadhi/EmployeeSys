//axios call
import axios from '../../src/API/axios';
import { ILoginInfo } from '../Component/Login';

//create the rest of the URL
const LOGIN_URL='/api/v1/auth/login'

// async method
const loginServiceApi = async(info: ILoginInfo)=>{
   
        if (info){
            const response = await axios.post(
                LOGIN_URL,
                JSON.stringify({login:info.username,password:info.password}),
                {headers :{'Content-Type':'application/json'}}
            )

          return response?.data 
        }   
}

export default loginServiceApi
