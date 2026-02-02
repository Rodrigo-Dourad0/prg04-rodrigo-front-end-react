import axios from 'axios';

const api = axios.create({
 
    baseURL: 'https://prg04-rodrigo-back-end.onrender.com', 
   
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(async (config) => {
    const token = sessionStorage.getItem('token') || localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;