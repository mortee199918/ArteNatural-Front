import api from "./api";

export const uploadImageToBack = async (file) => {
    console.log(typeof (file))
    const formData = new FormData();
    formData.append('file', file);
    const res = await api.post("/uploads/upload", formData, { headers: { 'Content-Type': 'multipart/form-data' } })
    alert('Imagen correctamente subida')
    return res.data
}

export const getUserImages = async () => {
    const res = await api.get("/uploads/list"); 
    return res.data;
};

export const getAllImages = async () => {
    const res = await api.get("/uploads/list/all");
    return res.data;
};

export const deleteImg = async (img)=>{
    const config ={
        data:img
    };
    
    const res = await api.delete("/uploads/delete", config);
    return res.data;
}