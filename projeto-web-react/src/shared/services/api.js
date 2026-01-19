import axios from 'axios';

const api = axios.create({
 
    //baseURL: 'https://prg04-rodrigo-back-end.onrender.com', 
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;