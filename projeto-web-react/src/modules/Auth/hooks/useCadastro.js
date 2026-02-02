import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../shared/services/api';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthContext';

export function useCadastro() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  const estadosBr = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 
    'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ];

  const [formData, setFormData] = useState({
    email: '', senha: '', confirmarSenha: '',
    nome: '', cpf: '', telefone: '',
    cep: '', rua: '', numero: '', bairro: '', cidade: '', estado: ''
  });

  const [showSenha, setShowSenha] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let valorFormatado = value;

    if (name === 'cpf') {
      valorFormatado = mCPF(value);
    } 
    
    if (name === 'telefone') {
      valorFormatado = mTel(value);
    }

    if (name === 'cep') {
      valorFormatado = value.replace(/\D/g, "").replace(/^(\d{5})(\d)/, "$1-$2").slice(0, 9);
    }

    setFormData(prev => ({ ...prev, [name]: valorFormatado }));
  };
  
  const mCPF = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
      .slice(0, 14);
  };

  const mTel = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d)(\d{4})$/, "$1-$2")
      .slice(0, 16);
  };

  const nextStep = () => {
    if (step === 1) {
        if (!formData.email || !formData.senha) return setErro("Preencha email e senha.");
        if (formData.senha !== formData.confirmarSenha) return setErro("As senhas não coincidem.");
        if (formData.senha.length < 6)  return setErro("A senha deve ter pelo menos 6 caracteres.");
    }
    if (step === 2) {
        if (!formData.nome || !formData.cpf || !formData.telefone) return setErro("Nome, CPF e Telefone são obrigatórios.");
        if(formData.cpf.length < 14) return setErro("Digite um CPF válido.")
        if(formData.telefone.length < 14) return setErro("Digite um número de telefone válido.")
    }
    setErro('');
    setStep(prev => prev + 1);
  };

  const prevStep = () => setStep(prev => prev - 1);
  const toggleShowSenha = () => setShowSenha(!showSenha);

  const enviarDadosParaApi = async () => {
    if (!formData.cep || !formData.rua || !formData.numero || !formData.bairro || !formData.cidade || !formData.estado) {
       return setErro("Por favor, preencha todos os campos do endereço.");
    } 

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
              estado: formData.estado
            }
          }
        };
        
        await api.post('/usuarios', payload);
        
        const logado = await login(formData.email, formData.senha);

        if (logado) {
            toast.success("Cadastro realizado com sucesso!");
            navigate('/'); 
        } else {
            navigate('/');
        }

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