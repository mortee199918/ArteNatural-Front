import { useState } from "react";
import "../Styled/Login.css"
import { Navigate, useNavigate } from "react-router-dom";


const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    return (
       <>
         <h1>Login</h1>
         <div className="container"><br/>
            <p> Nombre de Usuario: <input type="text" className='input' placeholder="username" onChange={(e)=>setUsername(e.target.value)}/></p>
            <p> Contraseña: <input type="password" className='input' placeholder="password" onChange={(e)=>setPassword(e.target.value)}/></p>
            <button onClick={()=>Login(username,password)}>Login</button>
            <button onClick={()=>{
                  navigate("/Register");
            }}>Register</button>
         </div>
         
       </>
       
        
    );
};

export  default Login;