import { useState , useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../shared/services/api';
import { AuthContext } from '../../../context/AuthContext';
import { toast } from 'react-toastify';

export function useSejaParceiro() {

  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);  

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
       
        const token = sessionStorage.getItem('token');


        await api.post('/usuarios/tornar-organizador', form, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        toast.success("Cadastro de parceiro realizado! Faça login novamente para acessar o painel.");
        logout();
        
       
        
      navigate('/', { state: { openLogin: true } });
        
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