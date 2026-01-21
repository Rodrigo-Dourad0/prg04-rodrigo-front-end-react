import { useNavigate } from 'react-router-dom';
import '../styles/gerir-roteiros.css';

const GerirRoteiros = () => {
    const navigate = useNavigate();

    return (
        <div className="container mt-5">
            <div className="text-center mb-5">
                <h2 className="fw-bold text-dark">Painel do Organizador</h2>
                <p className="text-muted">Gerencie suas excursões e crie novas aventuras</p>
            </div>

            <div className="row justify-content-center gap-4">
                {/* Botão: Minhas Viagens */}
                <div className="col-md-5 col-lg-4">
                    <button 
                        className="btn btn-outline-primary w-100 p-5 shadow-sm rounded-4 d-flex flex-column align-items-center gap-3 card-action-btn"
                        onClick={() => navigate('/minhas-viagens')} // Rota futura
                    >
                        <i className="bi bi-card-list display-1"></i>
                        <span className="fs-4 fw-bold">Minhas Viagens</span>
                        <small className="text-muted">Visualize e edite seus roteiros ativos</small>
                    </button>
                </div>

                {/* Botão: Criar Viagem */}
                <div className="col-md-5 col-lg-4">
                     <button 
                        className="btn btn-primary w-100 p-5 shadow-sm rounded-4 d-flex flex-column align-items-center gap-3 card-action-btn text-white"
                        onClick={() => navigate('/CreateTours')} // Rota já existente
                    >
                        <i className="bi bi-plus-circle-dotted display-1"></i>
                        <span className="fs-4 fw-bold">Criar Nova Viagem</span>
                        <small className="text-white-50">Cadastre um novo destino agora</small>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GerirRoteiros;