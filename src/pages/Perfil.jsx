import { useState, useRef, useEffect } from "react";
import { Title, Container, Texto, ElBoton, Input } from "../Styled/PerfilStyled";
import Artistas from "./Artistas";
import { getUserFromToken, updatePerfil } from "../services/user";



const Perfil = () => {
    const [user, setUser] = useState()
    const [password, setPassword] = useState()
    const [verifiedPassword, setVerifiedPassword] = useState();
    useEffect(()=>{
      getUserFromToken().then(setUser)
    },[]);

    return (
        <>
                <Title>Perfil</Title>
                   
            <Container>
                <Texto><label>Username:</label><Input type="text" defaultValue={user?.username} onChange={(e)=>setUser({...user, username: e.target.value})}/></Texto>
           
                <Texto> <label>Password:</label><Input type="password" onChange={(e)=>setPassword(e.target.value)}/></Texto>
                <Texto><label> Password Verification:</label><Input type="password" onChange={(e)=>setVerifiedPassword(e.target.value)} /></Texto>
                <Texto> <label>Fecha de Nacimento: </label> <Input type="date" defaultValue={user?.birthdate.slice(0, 10)} onChange={(e)=>setUser({...user, birthdate: e.target.value})}/></Texto>
                <Texto> <label> Email: </label> <Input type="email" defaultValue={user?.mail} onChange={(e)=>setUser({...user, mail:e.target.value})}/></Texto>  
                <ElBoton onClick={()=>{
                    if (password === verifiedPassword && password != null) {
                        let uploadUser = {...user, password: password};
                       updatePerfil(uploadUser); 
                       alert("Usuario Actualizado")
                    }
                }}> Editar </ElBoton>
            </Container>    
            
            {(user?.roles[0].roleName === "ARTIST") && <Artistas user={user}/>}
            
        </>
    );
};

export default Perfil;
