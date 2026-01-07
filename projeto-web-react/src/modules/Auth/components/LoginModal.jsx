import { Link } from 'react-router-dom';
import '../styles/login-modal.css';
import { useLogin } from '../hooks/useLogin';

function LoginModal({ isOpen, onClose }) {
    
  const {
    email, setEmail,
    senha, setSenha,
    erro, loading,
    handleSubmit
  } = useLogin(onClose);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      
      <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
        
        <button className="btn-close-modal" onClick={onClose}>
            &times;
        </button>

        <div className="login-side-panel"></div>

        <div className="login-form-container">
            
            <h2 className="login-title">LOGIN</h2>

            {/* Exibição de Erros */}
            {erro && <div className="alert alert-danger p-2 text-center small">{erro}</div>}

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Seu e-mail</label>
                    <input 
                        type="email" 
                        className="form-control form-control-custom" 
                        id="emailInput" 
                        placeholder="exemplo@email.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="passInput" className="form-label">Senha</label>
                    <input 
                        type="password" 
                        className="form-control form-control-custom" 
                        id="passInput" 
                        placeholder="********" 
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>

                <button 
                    type="submit" 
                    className="btn btn-login-action w-100 text-decoration-none text-center d-block"
                    disabled={loading}
                >
                    {loading ? 'ENTRANDO...' : 'ENTRAR'}
                </button>
            </form>

            <div className="mt-4 text-center">
                <p className="small text-muted">
                    Ainda não tem conta? <br/>
                    <Link to="/cadastro" className="text-primary fw-bold text-decoration-none" onClick={onClose}>
                        Cadastre-se aqui
                    </Link>
                </p>
            </div>

        </div>
      </div>
    </div>
  );
}

export default LoginModal;