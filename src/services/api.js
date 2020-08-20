import axios from 'axios';

const api = axios.create({
    baseURL: 'https://aiko-estagio-proxy.azurewebsites.net/'
})

export default api;