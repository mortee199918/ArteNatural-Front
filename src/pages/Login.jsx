import { useEffect, useState } from "react";
import { Title, Container, Texto, Boton, Input } from "../Styled/LoginStyled";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth";
import useToken from "../hooks/useToken"


const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const {addToken,token} = useToken();
    const navigate = useNavigate();
    useEffect(()=>{
      if(token)
         navigate("/")
    },[token]);
    return (
       <>
         <Title>Login</Title>
         <Container>
            <Texto> Nombre de Usuario: <br/><Input type="text" value={username} className='ConatinerInput' placeholder="username" onChange={(e) => setUsername(e.target.value)} /></Texto>
            <Texto> Contraseña: <br/> <Input type="password" value={password} className='ContainerInput' placeholder="password" onChange={(e) => setPassword(e.target.value)} /></Texto>
            <Boton onClick={() => {
               console.log(username, password);

               login(username, password)
               .then(addToken)
            

            }}>Login</Boton>
            <Boton onClick={() => {
               navigate("/Register");
            }}>Register</Boton>
         </Container>

      </>


   );
};

export default Login;