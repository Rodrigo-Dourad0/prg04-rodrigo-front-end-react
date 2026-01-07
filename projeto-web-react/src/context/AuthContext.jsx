import { createContext, useState, useEffect } from 'react';
import api from '../shared/services/api'; //

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

   
    useEffect(() => {
        const recoverUser = () => {
            const storedToken = localStorage.getItem('token');
            const storedUser = localStorage.getItem('user');

            if (storedToken && storedUser) {
                setUser(JSON.parse(storedUser));

            }
            setLoading(false);
        };

        recoverUser();
    }, []);

    // Função de Login 
    const login = async (email, senha) => {
        try {
    
            const response = await api.post('/login', { email, senha });

            const data = response.data; 

            const loggedUser = {
                token: data.token,
                email: email,
            };

            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(loggedUser));

            setUser(loggedUser);
            return true; // Login com sucesso

        } catch (error) {
            console.error("Erro ao logar:", error);
            return false; // Falha no login
        }
    };

    // Função de Logout
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};