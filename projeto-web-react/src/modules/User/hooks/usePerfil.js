import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';

export function usePerfil() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    
    const handleLogout = () => {
        logout();
        navigate('/');
    };

    
    const handleNavigateToPartner = () => {
        navigate('/seja-parceiro');
    };

    return {
        user,
        handleLogout,
        handleNavigateToPartner
    };
}