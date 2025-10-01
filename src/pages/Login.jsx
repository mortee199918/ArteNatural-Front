import { useState } from "react";
import "../Styled/Login.css"
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth";
import useToken from "../hooks/useToken"


const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const {addToken} = useToken();
    const navigate = useNavigate();
    return (
       <>
         <h1>Login</h1>
         <div className="container"><br/>
            <p> Nombre de Usuario: <input type="text" value={username} className='input' placeholder="username" onChange={(e)=>setUsername(e.target.value)}/></p>
            <p> Contraseña: <input type="password" value={password} className='input' placeholder="password" onChange={(e)=>setPassword(e.target.value)}/></p>
            <button onClick={()=>{
               console.log(username,password);
               
               login(username, password)
               .then(addToken)
               .then(()=>navigate("/Artistas"));

               }}>Login</button>
            <button onClick={()=>{
                  navigate("/Register");
            }}>Register</button>
         </div>
         
       </>
       
        
    );
};

export  default Login;