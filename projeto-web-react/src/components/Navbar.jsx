import { Link } from 'react-router-dom';

function Navbar() {
  const Blue = '#027BD1'; 

  return (
    // Usamos classes padrão do Bootstrap: navbar, container, collapse, etc.
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        
        {/* 1. Ícone Principal (Texto) */}
        <Link className="navbar-brand fw-bold fs-4 m-2" to="/" style={{ color: Blue }}>
          Roteiro Livre
        </Link>

        {/* Botão Hamburger para telemóveis (funciona com o script do Bootstrap no index.html) */}
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
            
            {/* 2. Botões do Meio (Cinza) */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
                <li className="nav-item">
                    <a className="nav-link fw-semibold text-secondary" href="#">
                        Roteiros
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link fw-semibold text-secondary" href="#">
                        Como Funciona
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link fw-semibold text-secondary" href="#">
                        Para Organizadores
                    </a>
                </li>
            </ul>
            
            {/* 3. Extrema Direita (Azul Escuro) */}
            <div className="d-flex align-items-center gap-3">
                {/* Link de Login */}
                <Link to="/login" className="text-decoration-none fw-bold m-2" style={{ color:Blue }}>
                    Login
                </Link>

                {/* Botão Cadastre-se */}
                <Link to="/cadastro" className="btn fw-bold rounded-pill px-4 text-white m-2" style={{ backgroundColor: Blue }}>
                    Cadastre-se
                </Link>
            </div>

        </div>
    </nav>
  );
}

export default Navbar;