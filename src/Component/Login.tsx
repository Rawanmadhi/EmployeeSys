// import file
import React, { useRef,useState ,useEffect } from 'react'
import './StyleComp.css'
import {useLoginHooks} from '../hooks/useLoginHooks';
import { useNavigate } from "react-router-dom"
import Home from './Home';
import axios from '../API/axios';

export interface ILoginInfo {
    username: string;
    password: string;
}

const initLogin: ILoginInfo = {
    username: '',
    password:''
}


//exported function 
const Login:React.FC = () => {
const navigate =useNavigate();
//decalre State
const [loginInfo, setLoginInfo] = useState<ILoginInfo>(initLogin);
const {getLoginInfo} = useLoginHooks();

    // custom functions
   const signInButton = (e:React.FormEvent)=>{
    
    getLoginInfo(loginInfo, 
        {
            onSuccess(data) {
             //   console.log("Bearer "+data['accessToken']);
                axios.defaults.headers.common['Authorization']= "Bearer "+data['accessToken']; // each request will have this in the header 
                setLoginInfo({username:"",password:""})
                navigate('/Home');
            },
        })
      
}




    //Return 
  return (
    < div>

        <section className='login__box'>
            <form  className="login__form" onSubmit={(e)=>{
                e.preventDefault(); // to prevent refresh
                signInButton(e);
            }}>
                <div>
                <span className='text'> Sign in Page</span>
                </div>
                <label htmlFor='username'>Username: </label>
                <input type="text"
                  id='username'
                   className="login__inputs"
                //    ref={userRef}
                     placeholder='Enter username'
                      value={loginInfo.username}
                       required
                        onChange={(e)=>setLoginInfo({...loginInfo,username:e.target.value})}/>

               <label htmlFor='password'>password: </label>

                <input type="password"
                 className="login__inputs"
                 id="password"
                //ref={userPass}
                   placeholder='Enter Password'
                    onChange={(e)=>setLoginInfo({...loginInfo,password:e.target.value})}
                    required
                    autoComplete='off'
                    value={loginInfo.password}/>


                <button className='login__button' type='submit'> Sign In</button>
            </form>
        </section>
    </div>

  )
}
export default Login


