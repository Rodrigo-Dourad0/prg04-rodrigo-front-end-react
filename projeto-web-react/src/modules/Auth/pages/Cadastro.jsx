import Navbar from '../../../shared/components/Navbar';
import { useCadastro } from '../hooks/useCadastro';
import { Link } from 'react-router-dom';
import '../styles/cadastro.css';

function Cadastro() {
  const {
    senha,
    setSenha,
    confirmarSenha,
    setConfirmarSenha,
    showSenha,
    toggleShowSenha,
    showConfirmar,
    toggleShowConfirmar,
    erro,
    handleCadastro
  } = useCadastro();

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
                                placeholder="********"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                            <button 
                                type="button" 
                                className="btn-toggle-password" 
                                onClick={toggleShowSenha}
                                aria-label={showSenha ? "Ocultar senha" : "Mostrar senha"}
                            >
                                <i className={showSenha ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                            </button>
                        </div>
                    </div>

                    <div className="form-col">
                        <label className="form-label-cadastro">Confirmar Senha</label>
                        <div className="password-input-container">
                            <input 
                                type={showConfirmar ? "text" : "password"} 
                                className="form-control-cadastro" 
                                placeholder="********"
                                value={confirmarSenha}
                                onChange={(e) => setConfirmarSenha(e.target.value)}
                            />
                            <button 
                                type="button" 
                                className="btn-toggle-password" 
                                onClick={toggleShowConfirmar}
                                aria-label={showConfirmar ? "Ocultar senha" : "Mostrar senha"}
                            >
                                <i className={showConfirmar ? "bi bi-eye-slash" : "bi bi-eye"}></i>
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
                    
                    <Link to="/" className="btn-cancelar">
                        Cancelar
                    </Link>

                </div>

            </form>

        </div>
      </div>

    </>
  );
}

export default Cadastro;