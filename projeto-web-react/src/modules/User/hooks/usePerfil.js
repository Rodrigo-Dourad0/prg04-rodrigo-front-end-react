import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthContext';
import api from '../../../shared/services/api';

export function usePerfil() {
    const { user, logout, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);

    // Lista de Estados para o Select
    const estadosBr = [
        'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 
        'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
    ];
    
    const [formData, setFormData] = useState({
        email: '',
        telefone: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        cep: ''
    });

    useEffect(() => {
        if (user) {
            setFormData({
                email: user.email || '',
                telefone: user.telefone || '',
                rua: user.rua || '',
                numero: user.numero || '',
                bairro: user.bairro || '',
                cidade: user.cidade || '',
                estado: user.estado || '',
                cep: user.cep || ''
            });
        }
    }, [user]);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const handleNavigateToPartner = () => {
        navigate('/seja-parceiro');
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        let valorFormatado = value;

        // Máscara de CEP (XXXXX-XXX)
        if (name === 'cep') {
            valorFormatado = value
                .replace(/\D/g, "")                 // Remove tudo que não é dígito
                .replace(/^(\d{5})(\d)/, "$1-$2")   // Coloca o hífen
                .slice(0, 9);                       // Limita o tamanho
        }
        
  
        if (name === 'telefone') {
             valorFormatado = value
              .replace(/\D/g, "")
              .replace(/^(\d{2})(\d)/g, "($1) $2")
              .replace(/(\d)(\d{4})$/, "$1-$2")
              .slice(0, 16);
        }

        setFormData(prev => ({ ...prev, [name]: valorFormatado }));
    };

    const handleSave = async () => {
        setLoading(true);
        try {
            const response = await api.put('/usuarios', formData);
            
            updateUser(response.data);
            
            setIsEditing(false);
            toast.success('Perfil atualizado com sucesso!');
        } catch (error) {
            if (error.response && error.response.status === 403) {
                toast.error('Sessão expirada. Faça login novamente.');
            } else {
                toast.error('Erro ao atualizar perfil.');
            }
        } finally {
            setLoading(false);
        }
    };

    return {
        user,
        handleLogout,
        handleNavigateToPartner,
        isEditing,
        toggleEdit,
        formData,
        handleChange,
        handleSave,
        loading,
        estadosBr 
    };
}