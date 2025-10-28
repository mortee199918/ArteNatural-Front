import axios from "axios";
export const apiurl = 'https://artenaturalback-production.up.railway.app'
//export const apiurl = 'localhost:8082'
const api = axios.create({ baseURL: apiurl });


export default api