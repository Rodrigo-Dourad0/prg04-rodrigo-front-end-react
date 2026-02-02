import { useState, useEffect, useContext, useCallback } from 'react';
import api from '../../../shared/services/api';
import { AuthContext } from '../../../context/AuthContext';
import { toast } from 'react-toastify';

export const useMinhasReservas = () => {
    const [reservas, setReservas] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);

    const fetchMinhasReservas = useCallback(async () => {
        if (!user?.id) return;
        
        try {
            setLoading(true);
            const response = await api.get(`/reservas/usuario/${user.id}`);
            setReservas(response.data.content || response.data || []);
        } catch (error) {
            console.error("Erro ao buscar reservas:", error);
            toast.error("Erro ao carregar suas reservas.");
        } finally {
            setLoading(false);
        }
    }, [user?.id]);

    useEffect(() => {
        fetchMinhasReservas();
    }, [fetchMinhasReservas]);

    const handleCancelarReserva = async (reservaId) => {
        if (!window.confirm("Deseja realmente cancelar esta reserva?")) return;

        try {
            await api.delete(`/reservas/${reservaId}`);
            toast.success("Reserva cancelada com sucesso!");
            fetchMinhasReservas();
        } catch (error) {
            toast.error("Erro ao cancelar reserva.");
        }
    };

    return {
        reservas,
        loading,
        fetchMinhasReservas,
        handleCancelarReserva
    };
};