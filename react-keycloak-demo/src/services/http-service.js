import axios from "axios";



const _axios = axios.create({ 
    baseURL: import.meta.env.API_URL,
});

