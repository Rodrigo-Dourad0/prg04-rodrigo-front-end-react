import { Link } from 'react-router-dom';
import '../styles/login-modal.css';

function LoginModal({ isOpen, onClose }) {
  // Se não estiver aberto, não renderiza nada (null)
  if (!isOpen) return null;

  return (
    // Ao clicar no fundo escuro, fecha o modal
    <div className="modal-overlay" onClick={onClose}>
      
      {/* stopPropagation impede que o clique DENTRO da caixa feche o modal */}
      <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
        
        {/* Botão de Fechar (X) no topo direito */}
        <button className="btn-close-modal" onClick={onClose}>
            &times;
        </button>

        {/* Lado Esquerdo: Imagem */}
        <div className="login-side-panel"></div>

        {/* Lado Direito: Formulário */}
        <div className="login-form-container">
            
            <h2 className="login-title">LOGIN</h2>

            <form>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Seu e-mail</label>
                    <input type="email" className="form-control form-control-custom" id="emailInput" placeholder="exemplo@email.com" />
                </div>

                <div className="mb-3">
                    <label htmlFor="passInput" className="form-label">Senha</label>
                    <input type="password" className="form-control form-control-custom" id="passInput" placeholder="********" />
                </div>

                {/* Botão de Ação */}
                <Link to="/admin" className="btn btn-login-action w-100 text-decoration-none text-center d-block">
                    ENTRAR
                </Link>
            </form>

            <div className="mt-4 text-center">
                <p className="small text-muted">
                    Ainda não tem conta? <br/>
                    {/* Note que ao clicar em cadastrar, devemos fechar o modal de login */}
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