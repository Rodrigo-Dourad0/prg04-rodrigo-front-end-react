import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../shared/services/api';

export function useSejaParceiro() {
  const navigate = useNavigate();
  
  // FIXO PARA TESTE: Quando tiver login, pega o ID real do usuário logado
  const usuarioId = 7; 

  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  const [form, setForm] = useState({
    bio: '',
    chavePix: '',
    linkInstagram: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErro('');

    try {
     
      await api.post(`/usuarios/tornar-organizador/${usuarioId}`, form);
      
      alert("Sucesso! Agora você é um Organizador.");
      navigate('/'); 
    } catch (error) {
      console.error(error);
      const msg = error.response?.data?.message || "Erro ao processar solicitação.";
      setErro(msg);
    } finally {
      setLoading(false);
    }
  };

  return { form, handleChange, handleSubmit, loading, erro };
}