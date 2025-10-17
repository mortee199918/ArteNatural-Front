import axios from "axios";

 const api = axios.create({ baseURL: 'https://artenaturalback-production.up.railway.app' });

 export default api