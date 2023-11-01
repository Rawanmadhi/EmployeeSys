// import file
import React, { useRef,useState  } from 'react'
import './StyleComp.css'
import {useloginHooks} from '../hooks/useLoginHooks';


//exported function 
const Login:React.FC = () => {

//decalre State
const [username,setUsername] = useState<string>('');
const [password,setPassword] = useState<string>(''); 


    // custom functions
const signInButton = (e:React.FormEvent)=>{
 //   const accessToken = useloginHooks(username,password);
    //console.log(accessToken)
}



    //decalre ref
    const userRef = useRef<HTMLInputElement>(null);
    const userPass=useRef<HTMLInputElement>(null);
    setUsername('');
    setPassword('');


    //Return 
  return (
    < div>
            <div>
            <span className='text'> Sign in Page</span>
            </div>
        <div>
            <form  className="login_form" onSubmit={(e)=>{
                e.preventDefault(); // to prevent refresh
                signInButton(e);
            }}>
                <input type="text" className="input" ref={userRef} placeholder='Enter username'/>
                <input type="password" className="input" ref={userPass} placeholder='Enter Password'/>
                <button className='signin' type='submit'> Sign In</button>
            </form>
        </div>
    </div>

  )
}
export default Login


