import { useState, useEffect } from 'react';
import api from '../../../shared/services/api';

export const useTours = () => {
    const [viagens, setViagens] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchViagens();
    }, []);

    const fetchViagens = async () => {
        try {
            setLoading(true);
            const response = await api.get('/viagens');
            const lista = response.data.content || response.data || [];
            
            const viagensAbertas = lista.filter(v => v.status === 'ABERTA');
            
            setViagens(viagensAbertas);
        } catch (error) {
            console.error("Erro ao carregar vitrine:", error);
        } finally {
            setLoading(false);
        }
    };

    const formatData = (dataString) => {
        if (!dataString) return '';
        const date = new Date(dataString);
        return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
    };

    return {
        viagens,
        loading,
        formatData
    };
};