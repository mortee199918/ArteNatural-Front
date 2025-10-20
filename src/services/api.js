import axios from "axios";
  export const apiurl = 'https://artenaturalback-production.up.railway.app'

 const api = axios.create({ baseURL: apiurl });
  

 export default api