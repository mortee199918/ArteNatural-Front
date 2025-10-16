import api from "./api";

export const uploadProduct = async(product) =>{
    const res = await api.post('/products',product)
    return res.data
}