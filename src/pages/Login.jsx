import { useState } from "react";
import "../Styled/Login.css"


const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    return (
       <>
         <h1>Login</h1>
         <div className="container"><br/>
            <p><input type="text" placeholder="username" onChange={(e)=>setUsername(e.target.value)}/></p>
            <p><input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/></p>
            <button>Login</button>
            <button>Register</button>
         </div>
         
       </>
       
        
    );
};

export  default Login;