import { useNavigate } from 'react-router-dom';
import { useMinhasViagens } from '../hooks/useMinhasViagens';
import '../styles/minhas-viagens.css';

const MinhasViagens = () => {
    const navigate = useNavigate();
    const { viagens, loading, handleCancelarViagem } = useMinhasViagens();

    if (loading) {
        return (
            <div className="container mt-5 text-center p-5">
                <div className="spinner-border text-primary" role="status"></div>
                <p className="mt-3 text-muted">Carregando seus roteiros...</p>
            </div>
        );
    }

    return (
        <div className="container mt-5 mb-5">
            {/* Cabeçalho da Página */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="fw-bold text-dark mb-1">Meus Roteiros</h2>
                    <p className="text-muted mb-0">Gerencie suas excursões ativas e passadas</p>
                </div>
                <button 
                    className="btn btn-primary rounded-pill px-4 shadow-sm" 
                    onClick={() => navigate('/CreateTours')}
                >
                    <i className="bi bi-plus-lg me-2"></i>Nova Viagem
                </button>
            </div>

            {/* Estado Vazio (Sem viagens) */}
            {viagens.length === 0 ? (
                <div className="text-center py-5 bg-light rounded-4 border border-dashed mt-4">
                    <i className="bi bi-map display-1 text-muted opacity-25"></i>
                    <h4 className="mt-3 text-secondary">Nenhuma viagem encontrada</h4>
                    <p className="text-muted">Você ainda não cadastrou nenhuma excursão.</p>
                    <button className="btn btn-outline-primary mt-2" onClick={() => navigate('/CreateTours')}>
                        Criar meu primeiro roteiro
                    </button>
                </div>
            ) : (
                /* Lista de Viagens */
                <div className="d-flex flex-column gap-3">
                    {viagens.map((viagem) => (
                        <div key={viagem.id} className="card shadow-sm border-0 rounded-4 overflow-hidden card-viagem-row">
                            <div className="row g-0 align-items-stretch">
                                
                                {/* 1. Data (Esquerda) */}
                                <div className="col-md-2 date-column d-flex flex-column justify-content-center align-items-center py-3 text-center">
                                    <span className="display-date">
                                        {new Date(viagem.dataPartida).getDate()}
                                    </span>
                                    <span className="month-label">
                                        {new Date(viagem.dataPartida).toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '')}
                                    </span>
                                    <small className="text-muted mt-1">
                                        {new Date(viagem.dataPartida).getFullYear()}
                                    </small>
                                </div>

                                {/* 2. Conteúdo Principal */}
                                <div className="col-md-7 p-4 d-flex flex-column justify-content-center">
                                    <div className="d-flex align-items-center gap-2 mb-2">
                                        <span className={`badge rounded-pill badge-status-${viagem.status}`}>
                                            {viagem.status}
                                        </span>
                                        <span className="text-muted small">
                                            <i className="bi bi-geo-alt-fill me-1 text-danger"></i>
                                            {viagem.destino}
                                        </span>
                                    </div>
                                    
                                    <h5 className="fw-bold mb-1 text-dark">{viagem.titulo}</h5>
                                    <p className="text-muted small mb-0 text-truncate" style={{maxWidth: '90%'}}>
                                        {viagem.descricao || "Sem descrição disponível."}
                                    </p>

                                    <div className="d-flex gap-4 mt-3 small text-secondary">
                                        <span>
                                            <i className="bi bi-people-fill me-1"></i>
                                            {viagem.vagasTotais} Vagas
                                        </span>
                                        <span className="fw-bold text-dark">
                                            R$ {viagem.preco?.toFixed(2).replace('.', ',')}
                                        </span>
                                    </div>
                                </div>

                                {/* 3. Ações (Direita) */}
                                <div className="col-md-3 bg-light p-3 d-flex flex-column justify-content-center gap-2 border-start">
                                    <button className="btn btn-sm btn-outline-primary w-100 bg-white">
                                        <i className="bi bi-pencil-square me-2"></i>Editar
                                    </button>
                                    
                                    {viagem.status !== 'CANCELADA' && (
                                        <button 
                                            className="btn btn-sm btn-outline-danger w-100 bg-white"
                                            onClick={() => handleCancelarViagem(viagem.id)}
                                        >
                                            <i className="bi bi-x-circle me-2"></i>Cancelar
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MinhasViagens;