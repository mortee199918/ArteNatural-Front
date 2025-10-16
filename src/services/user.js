import api from "./api";

export const getUserFromToken =async()=>{
    const res = await api.get("/users/me")
    return res.data;
    
}
export const updatePerfil =  async(user) =>{
    const res =  await api.put('/users', user)
    return res.data

}