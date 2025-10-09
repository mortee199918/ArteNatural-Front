import api from "./api";

export const uploadImageToBack = async (file) =>{
    console.log(typeof(file))
    const formData = new FormData();
    formData.append('file', file);
    const res =  await api.post("/uploads/upload", formData, {headers:{'Content-Type': 'multipart/form-data'}})
    alert('Imagen correctamente subida')
    return res.data 
}