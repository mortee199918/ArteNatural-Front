import { useState, useRef, useEffect } from "react";
import { Title, Container, Texto, ElBoton, Input } from "../Styled/PerfilStyled";
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
                <Texto>Username:<Input type="text" /></Texto>
           
                <Texto>Password:<Input type="password" /></Texto>
                <Texto> Password Verification:<Input type="password " /></Texto>  
                <ElBoton> Editar </ElBoton>
            </Container>    
            
            {(role?.roleName === "ARTIST") && <Artistas/>}
            
        </>
    );
};

export default Perfil;
