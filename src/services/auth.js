import api from './api.js';
import { retrieveToken, removeToken } from '../providers/TokenManager.js';



export const login = async (username, password) => {
    console.log(username, password)
    const token = btoa(username + ":" + password);
    const response = await api.post("/auth/login",{},
    {
        headers: {
            "Content-Type": "application/json",
            Authorization: "basic " + token,
        },
    });
    console.log(response);
    
    if(response.status === 200){
       return response.data;
    
    }else{
       return Promise.reject("invalid auth");
    }
};


export const setAuth = () => {  
    api.defaults.headers.common.Authorization = `Bearer ${retrieveToken()}`;
};


export const test = () => {
	api.get("/Artistas");
}

export const register = async (username,password, role) =>{
 const  response = await api.post("/auth/register",{username,password,role})
   if (response.status === 200) {
    alert("Registro completo")
   }
}
export const unsetToken = () => {
    api.defaults.headers.common.Authorization = null;
};
export const validateToken = async () => {

   
    const res = await api.get("/auth/validate");
    
    return res.status === 200;
};
