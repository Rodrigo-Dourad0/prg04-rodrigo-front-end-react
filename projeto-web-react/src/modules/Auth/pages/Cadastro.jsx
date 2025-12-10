import React, { useState } from 'react';
import Navbar from '../../../shared/components/Navbar';
import '../styles/cadastro.css'; 

function Cadastro() {
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [showSenha, setShowSenha] = useState(false);
  const [showConfirmar, setShowConfirmar] = useState(false);
  const [erro, setErro] = useState('');

  const handleCadastro = (e) => {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem.');
    } else {
      setErro('');
      console.log('Cadastro validado');
    }
  };

  return (
    <>
      <Navbar />

      <div className="cadastro-wrapper">
        <div className="cadastro-box">
            
            <h1 className="cadastro-title">Cadastro de Usuário</h1>
            
            <form onSubmit={handleCadastro}>
                <div className="form-row">
                    <div className="form-col">
                        <label className="form-label-cadastro">Nome</label>
                        <input type="text" className="form-control-cadastro" placeholder="Ex: João Silva" />
                    </div>
                    <div className="form-col">
                        <label className="form-label-cadastro">CPF</label>
                        <input type="text" className="form-control-cadastro" placeholder="000.000.000-00" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-col">
                        <label className="form-label-cadastro">Telefone</label>
                        <input type="text" className="form-control-cadastro" placeholder="(00) 00000-0000" />
                    </div>
                    <div className="form-col">
                        <label className="form-label-cadastro">Email</label>
                        <input type="email" className="form-control-cadastro" placeholder="exemplo@email.com" />
                    </div>
                </div>

               <div className="form-row">
                    <div className="form-col">
                        <label className="form-label-cadastro">Senha</label>
                        <div className="password-input-container">
                            <input 
                                type={showSenha ? "text" : "password"} 
                                className="form-control-cadastro" 
                                placeholder="Digite sua senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                            <button 
                                type="button" 
                                className="btn-toggle-password"
                                onClick={() => setShowSenha(!showSenha)}
                            >
                                
                                <i className={showSenha ? "bi bi-eye" : "bi bi-eye-slash"}></i>
                            </button>
                        </div>
                    </div>
                    <div className="form-col">
                        <label className="form-label-cadastro">Confirmar Senha</label>
                        <div className="password-input-container">
                            <input 
                                type={showConfirmar ? "text" : "password"} 
                                className="form-control-cadastro" 
                                placeholder="Confirme a senha"
                                value={confirmarSenha}
                                onChange={(e) => setConfirmarSenha(e.target.value)}
                            />
                            <button 
                                type="button" 
                                className="btn-toggle-password"
                                onClick={() => setShowConfirmar(!showConfirmar)}
                            >
                               
                                <i className={showConfirmar ? "bi bi-eye" : "bi bi-eye-slash"}></i>
                            </button>
                        </div>
                    </div>
                </div>

                {erro && <div className="error-message">{erro}</div>}

                <h3 className="section-title">Endereço</h3>

                <div className="form-row">
                    <div className="form-col col-small">
                        <label className="form-label-cadastro">CEP</label>
                        <input type="text" className="form-control-cadastro" placeholder="00000-000" />
                    </div>
                    <div className="form-col col-medium">
                        <label className="form-label-cadastro">Cidade</label>
                        <input type="text" className="form-control-cadastro" />
                    </div>
                    <div className="form-col col-medium">
                        <label className="form-label-cadastro">Bairro</label>
                        <input type="text" className="form-control-cadastro" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-col col-large">
                        <label className="form-label-cadastro">Rua</label>
                        <input type="text" className="form-control-cadastro" />
                    </div>
                    <div className="form-col col-small">
                        <label className="form-label-cadastro">Número</label>
                        <input type="text" className="form-control-cadastro" />
                    </div>
                </div>
                
                <div className="button-group">
                    <button type="submit" className="btn-registrar">
                        Cadastrar
                    </button>
                    <button type="button" className="btn-cancelar">
                        Cancelar
                    </button>
                </div>

            </form>

        </div>
      </div>

    </>
  );
}

export default Cadastro;