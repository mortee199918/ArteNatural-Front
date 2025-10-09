import api from "./api";

export const getUserFromToken =async()=>{
    const res = await api.get("/users/me")
    console.log(res.data);
    return res.data;
    
}
