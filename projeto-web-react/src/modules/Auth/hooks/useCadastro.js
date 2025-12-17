import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../shared/services/api'; 

export function useCadastro() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  // Estado único para todos os campos
  const [formData, setFormData] = useState({
    email: '', senha: '', confirmarSenha: '',
    nome: '', cpf: '', telefone: '',
    cep: '', rua: '', numero: '', bairro: '', cidade: '', estado: ''
  });

  const [showSenha, setShowSenha] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Transforma os dados soltos no JSON aninhado que o Java quer
  const montarPayload = () => {
    return {
      email: formData.email,
      senha: formData.senha,
      pessoa: {
        nome: formData.nome,
        cpf: formData.cpf,
        telefone: formData.telefone,
        endereco: {
          rua: formData.rua,
          numero: formData.numero,
          bairro: formData.bairro,
          cidade: formData.cidade,
          cep: formData.cep,
          estado: formData.estado || 'BA' // Valor padrão se não tiver campo
        }
      }
    };
  };

  const handleCadastro = async (e) => {
    e.preventDefault();
    setErro('');
    setLoading(true);

    try {
        const payload = montarPayload();
        // Envia para o Back-end
        await api.post('/usuarios/cadastrar', payload);
        
        alert('Cadastro realizado com sucesso!');
        navigate('/'); // Volta para Home/Login
    } catch (error) {
        console.error("Erro:", error);
        const msg = error.response?.data?.message || "Erro ao conectar com o servidor.";
        setErro(msg);
    } finally {
        setLoading(false);
    }
  };

  // Controle das etapas 
  const nextStep = () => {
    if (step === 1) {
        if (!formData.email || !formData.senha) return setErro("Preencha email e senha.");
        if (formData.senha !== formData.confirmarSenha) return setErro("As senhas não coincidem.");
    }
    setErro('');
    setStep(prev => prev + 1);
  };

  const prevStep = () => setStep(prev => prev - 1);
  const toggleShowSenha = () => setShowSenha(!showSenha);

  return {
    step, formData, handleChange, nextStep, prevStep,
    showSenha, toggleShowSenha, erro, loading, handleCadastro
  };
}