import axios from 'axios';

const api = axios.create({
 
    baseURL: 'https://prg04-rodrigo-back-end.onrender.com', 
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;