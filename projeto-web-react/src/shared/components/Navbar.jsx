import { useState, useContext , useEffect} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';
import LoginModal from '../../modules/Auth/components/LoginModal';
import { AuthContext } from '../../context/AuthContext';

function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { authenticated, logout } = useContext(AuthContext);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.openLogin) {
      setShowLoginModal(true);
   
      window.history.replaceState({}, document.title);
     
      setTimeout(() => {
      alert("Cadastro de parceiro realizado! Faça login novamente para acessar o painel.");
    }, 150);

    }
  }, [location]);


  const handleOpenLogin = () => setShowLoginModal(true);
  const handleCloseLogin = () => setShowLoginModal(false);

  const showBackButton = location.pathname !== '/';

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
        <div className="container-fluid">
            
            <div className="d-flex align-items-center">
                {showBackButton && (
                    <button 
                        onClick={() => navigate(-1)} 
                        className="btn-back-nav me-2"
                        title="Voltar"
                    >
                        <i className="bi bi-arrow-left"></i>
                    </button>
                )}

                <Link className="navbar-brand fw-bold fs-4 brand-logo" to="/">
                Roteiro Livre
                </Link>
            </div>
            
            <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#menuPrincipal" 
            aria-controls="menuPrincipal" 
            aria-expanded="false" 
            aria-label="Alternar navegação"
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="menuPrincipal">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
                <li className="nav-item">
                <a className="nav-link fw-semibold nav-link-custom" href="#Tours">
                    Roteiros
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link fw-semibold nav-link-custom" href="#Como-Funciona">
                    Como Funciona
                </a>
                </li>
                <li className="navbar-item">
                    <Link to="/seja-parceiro" className="nav-link fw-semibold nav-link-custom">
                    Seja Parceiro
                    </Link>
                 </li>
            </ul>
            
            <div className="d-flex align-items-center gap-2">
                {!authenticated ? (
                    <>
                        <button 
                            onClick={handleOpenLogin} 
                            className="btn text-decoration-none fw-bold login-link bg-transparent border-0"
                        >
                            Login
                        </button>

                        <Link 
                            to="/Cadastro" 
                            className="btn fw-bold rounded-pill px-4 btn-signup" 
                            onClick={handleCloseLogin}
                        >
                            Cadastre-se
                        </Link>
                    </>
                ) : (
                    <div className="dropdown">
                        <button 
                            className="btn border-0 bg-transparent p-0" 
                            type="button" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false"
                        >
                            <i className="bi bi-person-circle fs-2 text-dark"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end shadow border-0">
                            <li>
                                <Link className="dropdown-item fw-semibold" to="/perfil">
                                    Meu Perfil
                                </Link>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                                <button className="dropdown-item text-danger fw-bold" onClick={logout}>
                                    Sair
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            </div>
        </div>
      </nav>

      <LoginModal isOpen={showLoginModal} onClose={handleCloseLogin} />
    </>
  );
}

export default Navbar;