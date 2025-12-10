import { useState } from 'react';

export function useCadastro() {
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [showSenha, setShowSenha] = useState(false);
  const [showConfirmar, setShowConfirmar] = useState(false);
  const [erro, setErro] = useState('');

  const handleCadastro = (e) => {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem.');
      return false;
    } 
    setErro('');
    console.log('Cadastro validado');
    // No futuro chamar a api para cadastrar
    return true;
  };

  const toggleShowSenha = () => setShowSenha(!showSenha);
  const toggleShowConfirmar = () => setShowConfirmar(!showConfirmar);

  return {
    senha, setSenha,
    confirmarSenha, setConfirmarSenha,
    showSenha, toggleShowSenha,
    showConfirmar, toggleShowConfirmar,
    erro,
    handleCadastro
  };
}