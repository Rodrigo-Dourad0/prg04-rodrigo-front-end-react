import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../shared/components/Navbar';
import '../styles/dashboard.css';

function Admin() {
  const [atividadesOpen, setAtividadesOpen] = useState(false);

  return (
    <>
      <Navbar />
      
      <div className="container dashboard-container text-center">
        
        <h1 className="dashboard-title">Painel Administrativo</h1>
        
        <div className="d-grid gap-3 col-md-10 mx-auto">
            
            <Link to="/admin/usuarios" className="btn p-3 dashboard-card card-users text-decoration-none">
                <i className="bi bi-people-fill dashboard-icon"></i>
                <span>Administração de Usuários</span>
            </Link>

            <button 
                onClick={() => setAtividadesOpen(!atividadesOpen)} 
                className="btn p-3 dashboard-card card-activities w-100 text-start"
                style={{ justifyContent: 'space-between' }} 
            >
                <div className="d-flex align-items-center gap-3">
                    <i className="bi bi-journal-text dashboard-icon"></i>
                    <span>Atividades</span>
                </div>
                
                <i className={`bi ${atividadesOpen ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
            </button>

            {atividadesOpen && (
                <div className="submenu-container">
                    
                    <Link to="/atividade-3" className="submenu-item">
                        <i className="bi bi-caret-right-fill me-2"></i>
                        Atividade 3
                    </Link>

                    <Link to="/atividade-4" className="submenu-item">
                        <i className="bi bi-caret-right-fill me-2"></i>
                        Atividade 4
                    </Link>

                </div>
            )}

        </div>
      </div>
    </>
  );
}

export default Admin;