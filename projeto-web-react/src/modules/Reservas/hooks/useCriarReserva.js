import { toast } from 'react-toastify';
import api from '../../../shared/services/api';

export const useCriarReserva = () => {
    const realizarReserva = async (viagemId, usuarioId) => {
        try {
            
            const payload = {
                usuarioId: usuarioId,
                viagemId: viagemId,
                quantidadeLugares: 1 
            };

            const response = await api.post('/reservas/nova', payload); //
            toast.success('Reserva confirmada com sucesso!');
            return response.data;
        } catch (error) {
            toast.error("Erro ao processar reserva:", error);
            const mensagem = error.response?.data?.message || 'Erro ao realizar reserva.';
            alert(mensagem);
            throw error;
        }
    };

    return { realizarReserva };
};