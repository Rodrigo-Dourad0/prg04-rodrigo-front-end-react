import { useState, useEffect } from 'react';
import api from '../../../shared/services/api';
import { toast } from 'react-toastify';

export const useAdministracaoUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  // Estados para controle da edição inline
  const [editingId, setEditingId] = useState(null);
  const [editNome, setEditNome] = useState('');

  useEffect(() => {
    carregarUsuarios();
  }, []);

  const carregarUsuarios = async () => {
    setLoading(true);
    try {
      const response = await api.get('/usuarios');
      // Ajuste conforme o retorno da tua API (paginada ou lista direta)
      setUsuarios(response.data.content || response.data);
    } catch (error) {
      console.error("Erro ao carregar usuários:", error);
      toast.error("Erro ao buscar lista de usuários.");
    } finally {
      setLoading(false);
    }
  };

  const excluirUsuario = async (id) => {
    const confirmacao = window.confirm(`Tem certeza que deseja excluir o usuário ID ${id}?`);
    if (confirmacao) {
      try {
        await api.delete(`/usuarios/${id}`);
        setUsuarios((prev) => prev.filter((user) => user.id !== id));
        toast.success("Usuário excluído com sucesso!");
      } catch (error) {
        console.error("Erro ao excluir:", error);
        toast.error("Erro ao excluir usuário.");
      }
    }
  };

  const iniciarEdicao = (usuario) => {
    setEditingId(usuario.id);
    setEditNome(usuario.nome);
  };

  const cancelarEdicao = () => {
    setEditingId(null);
    setEditNome('');
  };

  const salvarEdicao = async (id) => {
    try {
      // Envia apenas o nome, conforme permitido pelo DTO UsuarioUpdateRequest
      await api.put(`/usuarios/${id}`, {
        nome: editNome
      });

      // Atualiza o estado localmente para refletir a mudança sem nova chamada à API
      setUsuarios((prev) =>
        prev.map((user) =>
          user.id === id ? { ...user, nome: editNome } : user
        )
      );

      setEditingId(null);
      toast.success("Usuário atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar:", error);
      toast.error("Erro ao atualizar usuário.");
    }
  };

  return {
    usuarios,
    loading,
    editingId,
    editNome,
    setEditNome, // Necessário exportar para o input controlar o valor
    excluirUsuario,
    iniciarEdicao,
    cancelarEdicao,
    salvarEdicao,
  };
};