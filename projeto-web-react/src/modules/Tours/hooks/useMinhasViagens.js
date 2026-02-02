import { useState, useEffect, useContext, useMemo } from 'react';
import { toast } from 'react-toastify';
import api from '../../../shared/services/api';
import { AuthContext } from '../../../context/AuthContext';

export const useMinhasViagens = () => {
    const [viagens, setViagens] = useState([]);
    const [loading, setLoading] = useState(true);
    const [busca, setBusca] = useState('');
    const [filtroStatus, setFiltroStatus] = useState('TODOS');
    const [selectedViagem, setSelectedViagem] = useState(null);
    const [reservas, setReservas] = useState([]);
    const [loadingReservas, setLoadingReservas] = useState(false);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            fetchViagens();
        }
    }, [user]);

    const fetchViagens = async () => {
        try {
            setLoading(true);
            const response = await api.get('/viagens');
            const listaTotal = response.data.content || response.data || [];
            const minhas = listaTotal.filter(v => {
                if (v.organizadorId && user.id) return v.organizadorId === user.id;
                return v.nomeOrganizador === user.nome || v.nomeOrganizador === user.nomeCompleto;
            });
            setViagens(minhas);
        } catch (error) {
            console.error("Erro ao buscar viagens:", error);
            toast.error("Erro ao carregar seus roteiros.");
        } finally {
            setLoading(false);
        }
    };

    const fetchReservas = async (viagemId) => {
        try {
            setLoadingReservas(true);
            const response = await api.get(`/reservas/viagem/${viagemId}`, {
                params: { organizadorId: user.id }
            });
            setReservas(response.data.content || response.data || []);
        } catch (error) {
            console.error("Erro ao buscar reservas:", error);
            toast.error("Erro ao carregar lista de passageiros.");
        } finally {
            setLoadingReservas(false);
        }
    };

    const handleOpenModal = (viagem) => {
        setSelectedViagem(viagem);
        fetchReservas(viagem.id);
    };

    const handleCloseModal = () => {
        setSelectedViagem(null);
        setReservas([]);
    };

    const handleConfirmarPagamento = async (reservaId) => {
        try {
            await api.put(`/reservas/${reservaId}/confirmar-pagamento`, null, {
                params: { organizadorId: user.id }
            });
            toast.success("Pagamento confirmado com sucesso!");
            if (selectedViagem) fetchReservas(selectedViagem.id);
        } catch (error) {
            const msg = error.response?.data?.message || "Erro ao confirmar pagamento.";
            toast.error(msg);
        }
    };

    const handleCancelarViagem = async (id) => {
        if (!window.confirm("Tem certeza que deseja cancelar esta viagem?")) return;
        try {
            await api.put(`/viagens/${id}/cancelar`, null, {
                params: { organizadorId: user.id }
            });
            toast.success("Viagem cancelada!");
            handleCloseModal();
            fetchViagens();
        } catch (error) {
            toast.error("Erro ao cancelar viagem.");
        }
    };

    const filteredViagens = useMemo(() => {
        return viagens.filter(viagem => {
            const termo = busca.toLowerCase();
            const matchTexto = viagem.titulo?.toLowerCase().includes(termo) || 
                               viagem.destino?.toLowerCase().includes(termo);
            if (!matchTexto) return false;
            if (filtroStatus === 'TODOS') return true;
            if (filtroStatus === 'CANCELADOS') return viagem.status === 'CANCELADA';
            if (filtroStatus === 'FINALIZADOS') return viagem.status === 'FINALIZADA';
            if (filtroStatus === 'ABERTOS') return viagem.status === 'ABERTA' || viagem.status === 'LOTADA';
            return true;
        });
    }, [viagens, busca, filtroStatus]);

    return {
        viagens: filteredViagens,
        loading,
        handleCancelarViagem,
        busca,
        setBusca,
        filtroStatus,
        setFiltroStatus,
        selectedViagem,
        handleOpenModal,
        handleCloseModal,
        reservas,
        loadingReservas,
        handleConfirmarPagamento
    };
};