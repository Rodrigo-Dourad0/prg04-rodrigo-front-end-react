import { useState, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

export function useLogin(onClose) {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');
    setLoading(true);

    if (!email || !senha) {
        setErro("Preencha todos os campos.");
        setLoading(false);
        return;
    }

    // Chama a função login que retorna true/false
    const sucesso = await login(email, senha);

    setLoading(false);

    if (sucesso) {
  
      setEmail('');
      setSenha('');
      if (onClose) onClose(); 
      
    } else {
 
      setErro('E-mail ou senha inválidos!');
    }
  };

  return {
    email, 
    setEmail,
    senha, 
    setSenha,
    erro,
    loading,
    handleSubmit
  };
}