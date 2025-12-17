import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../shared/services/api';

export function useCadastro() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');


  const estadosBr = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 
    'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ]

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

  // --- LÓGICA DE VALIDAÇÃO E AVANÇO ---
  const nextStep = () => {
    if (step === 1) {
        if (!formData.email || !formData.senha) return setErro("Preencha email e senha.");
        if (formData.senha !== formData.confirmarSenha) return setErro("As senhas não coincidem.");
    }
    if (step === 2) {
        if (!formData.nome || !formData.cpf) return setErro("Preencha Nome e CPF.");
    }
    setErro('');
    setStep(prev => prev + 1);
  };

  const prevStep = () => setStep(prev => prev - 1);
  const toggleShowSenha = () => setShowSenha(!showSenha);

  // --- ENVIO FINAL PARA API ---
  const enviarDadosParaApi = async () => {
    setErro('');
    setLoading(true);

    try {
        const payload = {
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
              estado: formData.estado || 'BA'
            }
          }
        };
        
        await api.post('/usuarios/cadastrar', payload);
        alert('Cadastro realizado com sucesso!');
        navigate('/'); 

    } catch (error) {
        console.error("Erro:", error);
        const msg = error.response?.data?.message || "Erro ao conectar com o servidor.";
        setErro(msg);
    } finally {
        setLoading(false);
    }
  };

  
  
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (step < 3) {
        nextStep(); 
    } else {
        enviarDadosParaApi(); 
    }
  };

  return {
    step,
    formData,
    handleChange,
    handleFormSubmit, 
    prevStep, 
    estadosBr,
    showSenha,
    toggleShowSenha,
    erro,
    loading
  };
}