//axios call
import axios from '../../src/API/axios';

//create the rest of the URL
const LOGIN_URL='/api/v1/auth/login'

// async method
const loginServiceApi = async(username:string , password:string)=>{
   
        if (username && password){
            const response = await axios.post(
                LOGIN_URL,
                JSON.stringify({login:username,password:password}),
                {headers :{'Content-Type':'application/json'}}
            )

          return response.data
        }   
}

export default loginServiceApi
