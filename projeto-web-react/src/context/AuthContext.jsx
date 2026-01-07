import { createContext, useState, useEffect } from 'react';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //  Ao carregar a página, verifica se já tem token salvo
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
            
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, senha }),
            });

            if (!response.ok) {
                throw new Error('Erro na autenticação');
            }

            const data = await response.json();

            
            // Se o token vier solto ou em outro formato, ajusta
            const loggedUser = {
                token: data.token,
                email: email,
            };

            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(loggedUser));

            setUser(loggedUser);
            return true; // Login sucesso

        } catch (error) {
            console.error("Erro ao logar:", error);
            return false; // Login falhou
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