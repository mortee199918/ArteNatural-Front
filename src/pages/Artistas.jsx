import { useState } from "react";
import { uploadImageToBack } from "../services/upload";
import { Conatiner, ElBoton, Titulo , Input } from "../Styled/ArtistasStyles";

const Artistas = () => {
    const [uploadImage,setUploadImage] = useState();

    return (
        <div>
            <Titulo>Artistas</Titulo>
            <Conatiner>
                <Input type="file" onChange={(e)=>setUploadImage(e.target.files[0])}/>

                <ElBoton onClick={()=>{
                    uploadImageToBack(uploadImage);
                }}>Subir Imagen </ElBoton>
            </Conatiner>

        </div>
    );
};

export default Artistas;