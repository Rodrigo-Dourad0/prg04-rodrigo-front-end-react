import { useState, useEffect, useContext, useCallback } from 'react';
import { toast } from 'react-toastify';
import api from '../../../shared/services/api';
import { AuthContext } from '../../../context/AuthContext';

export function useMinhasReservas() {
    const { user } = useContext(AuthContext);
    const [reservas, setReservas] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchReservas = useCallback(async () => {
        if (!user?.id) return;

        try {
            setLoading(true);
            
            const response = await api.get(`/reservas/usuario/${user.id}`);
            
            
            setReservas(response.data.content || []);
        } catch (error) {
            console.error("Erro ao buscar reservas", error);
            toast.error('Não foi possível carregar suas viagens.');
        } finally {
            setLoading(false);
        }
    }, [user]);

    useEffect(() => {
        fetchReservas();
    }, [fetchReservas]);

    const handleCancelarReserva = async (id) => {
        if (!window.confirm("Tem certeza que deseja cancelar esta reserva?")) return;

        try {
            await api.delete(`/reservas/${id}`);
            toast.success("Reserva cancelada com sucesso!");
            fetchReservas(); 
        } catch (error) {
            toast.error("Erro ao cancelar reserva.");
        }
    };

    return {
        reservas,
        loading,
        handleCancelarReserva
    };
}