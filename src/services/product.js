import api from "./api";

export const uploadProduct = async (product) => {
    const res = await api.post('/products', product)
    return res.data
}

export const getAllPublicProducts = async () => {
    const res = await api.get("/products/public"); // nueva ruta pública
    return res.data; // [{ id: 1, title: "...", image: "/Images/...", price: 100, ... }]
};

export const getProductById = async (id) => {
    const res = await api.get(`/products/${id}`);
    return res.data;
};