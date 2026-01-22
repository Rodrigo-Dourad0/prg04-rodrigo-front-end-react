import { useState, useEffect, useContext, useMemo } from 'react';
import { toast } from 'react-toastify';
import api from '../../../shared/services/api';
import { AuthContext } from '../../../context/AuthContext';

export const useMinhasViagens = () => {
    const [viagens, setViagens] = useState([]);
    const [loading, setLoading] = useState(true);
    const [busca, setBusca] = useState('');
    const [filtroStatus, setFiltroStatus] = useState('TODOS');
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

    const handleCancelarViagem = async (id) => {
        if (!window.confirm("Tem certeza que deseja cancelar esta viagem?")) return;

        try {
            await api.put(`/viagens/${id}/cancelar`, null, {
                params: { organizadorId: user.id }
            });

            toast.success("Viagem cancelada com sucesso!");
            fetchViagens();
        } catch (error) {
            console.error("Erro ao cancelar:", error);
            const msg = error.response?.data?.message || "Erro ao cancelar viagem.";
            toast.error(msg);
        }
    };

    const filteredViagens = useMemo(() => {
        return viagens.filter(viagem => {
            const termo = busca.toLowerCase();
            const matchTexto =
                viagem.titulo?.toLowerCase().includes(termo) ||
                viagem.destino?.toLowerCase().includes(termo);

            if (!matchTexto) return false;

            if (filtroStatus === 'TODOS') return true;
            if (filtroStatus === 'CANCELADOS') return viagem.status === 'CANCELADA';
            if (filtroStatus === 'FINALIZADOS') return viagem.status === 'FINALIZADA';

            if (filtroStatus === 'ABERTOS') {
                return viagem.status === 'ABERTA' || viagem.status === 'LOTADA';
            }

            return true;
        });
    }, [viagens, busca, filtroStatus]);

    return {
        viagens: filteredViagens,
        loading,
        handleCancelarViagem,
        user,
        busca,
        setBusca,
        filtroStatus,
        setFiltroStatus
    };
};