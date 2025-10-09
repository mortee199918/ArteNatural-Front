import { useState, useRef, useEffect } from "react";
import { Title, Container, Texto, ElBoton } from "../Styled/PerfilStyled";
import Artistas from "./Artistas";
import { getUserFromToken } from "../services/user";



const Perfil = () => {
    const [role,setRole] = useState();
    useEffect(()=>{
      getUserFromToken().then((user)=>setRole(user.roles[0]))
    },[]);

    return (
        <>
                <Title>Perfil</Title>
                   
            <Container>
                <Texto>Username:<input type="text" /></Texto>
           
                <Texto>Password:<input type="password" /></Texto>
                <Texto> Password Verification:<input type="password " /></Texto>  
                <ElBoton> Editar </ElBoton>
            </Container>    
            
            {(role?.roleName === "ARTIST") && <Artistas/>}
            
        </>
    );
};

export default Perfil;
