import { useState, useRef } from "react";
import { Title, Container, Texto, ElBoton } from "../Styled/PerfilStyled";



const Perfil = () => {
    const [profilePhoto,setProfilePhoto] = useState('defaut-photo');
      const fileInputRef = useRef(null);

  const manejarCambioFoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePhoto(e.target.result); // Actualiza la previsualización
      };
      reader.readAsDataURL(file);
    }
  };

  const activarInputArchivo = () => {
    fileInputRef.current.click(); // Simula clic en el input oculto
  };
    return (
        <>
                <Title>Perfil</Title>
                    <div className="foto-perfil" onClick={activarInputArchivo}>
                        <img src={profilePhoto} alt="Foto de perfil" />
                        <div className="cambiar-foto-overlay">Cambiar foto</div>
                    </div>

                    {/* Input de archivo oculto */}
                    <input
                        type="file"
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={manejarCambioFoto}
                        style={{ display: 'none' }}
                    />
            <Container>
                <Texto>Username:<input type="text" /></Texto>
           
                <Texto>Password:<input type="password" /></Texto>
                <Texto> Password Verification:<input type="password " /></Texto>  
                <ElBoton> Editar </ElBoton>
            </Container>    
            
            
            
        </>
    );
};

export default Perfil;