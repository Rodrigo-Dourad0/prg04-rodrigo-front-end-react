import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthContext';
import api from '../../../shared/services/api';

export const useCreateTour = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const createTour = async (tourData) => {
        // Validação de segurança básica
        if (!user || !user.id) {
            toast.error("Sessão expirada. Faça login novamente.");
            return;
        }

        setLoading(true);

        try {
          
            const payload = {
                titulo: tourData.titulo,
                destino: tourData.destino,
                descricao: tourData.descricao,
                dataPartida: tourData.dataPartida,
                dataRetorno: tourData.dataRetorno,
                preco: tourData.preco,
                vagasTotais: tourData.vagasTotais,
                imagemUrl: tourData.imagemUrl,
                organizadorId: user.id 
            };

            await api.post('/viagens/criar', payload);

            toast.success("Viagem criada com sucesso!");
            navigate('/minhas-viagens'); 
        } catch (error) {
            toast.error("Erro ao criar viagem:", error);
            const msg = error.response?.data?.message || "Erro ao conectar com o servidor.";
            toast.error(msg);
        } finally {
            setLoading(false);
        }
    };

    return {
        createTour,
        loading
    };
};