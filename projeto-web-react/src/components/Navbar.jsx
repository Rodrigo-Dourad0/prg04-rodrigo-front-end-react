import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#2B4E72' }}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">Roteiro Livre</Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse w-100" id="navbarNav">
            
            <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/atividade-3">Atividade 3</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/atividade-4">Atividade 4</Link>
                </li>
            </ul>
            
        
            <Link to="/login" className="btn btn-outline-light btn-sm ms-auto">LOGIN</Link>
            
        </div>
      </div>
    </nav>
  );
}

export default Navbar;