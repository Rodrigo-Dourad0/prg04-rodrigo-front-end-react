import { createContext, useState, useEffect } from 'react';
import api from '../shared/services/api'; 

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoverUser = () => {
            const storedToken = sessionStorage.getItem('token');
            const storedUser = sessionStorage.getItem('user');

            if (storedToken && storedUser) {
                setUser(JSON.parse(storedUser));
            }
            setLoading(false);
        };

        recoverUser();
    }, []);

    
    const login = async (email, senha) => {
        try {
            const response = await api.post('/login', { email, senha });
            const data = response.data; 

            
            const loggedUser = {
                token: data.token,
                email: data.email,
                nomeCompleto: data.nome, 
                telefone: data.telefone,
                endereco: data.endereco
            };

            
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('user', JSON.stringify(loggedUser));

            setUser(loggedUser);
            return true; 

        } catch (error) {
            console.error("Erro ao logar:", error);
            return false; 
        }
    };

    const logout = () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};