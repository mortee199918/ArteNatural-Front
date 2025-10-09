import { useState } from "react";
import { uploadImageToBack } from "../services/upload";

const Artistas = () => {
    const [uploadImage,setUploadImage] = useState();

    return (
        <div>
            <h1>Artistas</h1>
            <div>
                <input type="file" onChange={(e)=>setUploadImage(e.target.files[0])}/>
                <button onClick={()=>{
                    uploadImageToBack(uploadImage);
                }}>Subir Imagen </button>
            </div>

        </div>
    );
};

export default Artistas;