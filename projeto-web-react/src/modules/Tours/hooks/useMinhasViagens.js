import { useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import api from '../../../shared/services/api';
import { AuthContext } from '../../../context/AuthContext';

export const useMinhasViagens = () => {
    const [viagens, setViagens] = useState([]);
    const [loading, setLoading] = useState(true);
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
            
            // O backend retorna um Page (content) ou Lista direta? 
            // Pelo seu controller: return ResponseEntity.ok(response); onde response é Page<ViagemResponse>
            // Então os dados estão em response.data.content
            const listaTotal = response.data.content || response.data || [];

            // Filtragem no Front-end (Temporário até ter endpoint /viagens/meus-roteiros)
            // Filtramos pelo nome do organizador ou ID se disponível
            const minhas = listaTotal.filter(v => {
                // Tenta comparar ID se vier no DTO, senão compara nome
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
            // O endpoint de cancelar exige o ID do organizador via param
            await api.put(`/viagens/${id}/cancelar`, null, {
                params: { organizadorId: user.id }
            });
            
            toast.success("Viagem cancelada com sucesso!");
            fetchViagens(); // Recarrega a lista para atualizar o status
        } catch (error) {
            console.error("Erro ao cancelar:", error);
            const msg = error.response?.data?.message || "Erro ao cancelar viagem.";
            toast.error(msg);
        }
    };

    return {
        viagens,
        loading,
        handleCancelarViagem,
        user
    };
};