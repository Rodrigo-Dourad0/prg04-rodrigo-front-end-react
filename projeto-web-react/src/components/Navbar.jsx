import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components-styles/navbar.css';
import LoginModal from './LoginModal';

function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleOpenLogin = () => setShowLoginModal(true);
  const handleCloseLogin = () => setShowLoginModal(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
        <Link className="navbar-brand fw-bold fs-4 brand-logo" to="/">
          Roteiro Livre
        </Link>
        
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
              <a className="nav-link fw-semibold nav-link-custom" href="#">
                Roteiros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold nav-link-custom" href="#">
                Como Funciona
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold nav-link-custom" href="#">
                Para Organizadores
              </a>
            </li>
          </ul>
          
          <div className="d-flex align-items-center gap-2">
            <button 
                onClick={handleOpenLogin} 
                className="btn text-decoration-none fw-bold login-link bg-transparent border-0"
            >
                Login
            </button>

            <Link 
                to="/cadastro" className="btn fw-bold rounded-pill px-4 btn-signup"onClick={handleCloseLogin}>
                   Cadastre-se
            </Link>

          </div>
        </div>
      </nav>

      <LoginModal isOpen={showLoginModal} onClose={handleCloseLogin} />
    </>
  );
}

export default Navbar;