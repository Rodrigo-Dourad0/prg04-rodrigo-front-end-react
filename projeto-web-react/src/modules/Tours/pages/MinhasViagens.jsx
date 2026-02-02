import { useNavigate } from 'react-router-dom';
import { useMinhasViagens } from '../hooks/useMinhasViagens';
import TourDetailsModal from '../components/TourDetailsModal';
import '../styles/minhas-viagens.css';

const MinhasViagens = () => {
    const navigate = useNavigate();

    const {
        viagens,
        loading,
        handleCancelarViagem,
        busca,
        setBusca,
        filtroStatus,
        setFiltroStatus,
        selectedViagem,
        handleOpenModal,
        handleCloseModal,
        reservas,
        loadingReservas,
        handleConfirmarPagamento
    } = useMinhasViagens();

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
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-3">
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

            <div className="card border-0 shadow-sm p-3 mb-4 rounded-4 bg-white">
                <div className="row g-3">
                    <div className="col-md-8">
                        <div className="input-group">
                            <span className="input-group-text bg-light border-0">
                                <i className="bi bi-search text-muted"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control border-0 bg-light"
                                placeholder="Pesquisar por título ou destino..."
                                value={busca}
                                onChange={(e) => setBusca(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <select
                            className="form-select border-0 bg-light fw-semibold text-secondary"
                            value={filtroStatus}
                            onChange={(e) => setFiltroStatus(e.target.value)}
                        >
                            <option value="TODOS">Todos os Roteiros</option>
                            <option value="ABERTOS">Roteiros Abertos (Ativos)</option>
                            <option value="FINALIZADOS">Roteiros Finalizados</option>
                            <option value="CANCELADOS">Roteiros Cancelados</option>
                        </select>
                    </div>
                </div>
            </div>

            {viagens.length === 0 ? (
                <div className="text-center py-5 bg-light rounded-4 border border-dashed mt-4">
                    <i className="bi bi-filter-circle display-1 text-muted opacity-25"></i>
                    <h4 className="mt-3 text-secondary">Nenhum roteiro encontrado</h4>
                    <p className="text-muted">Tente mudar os filtros ou crie uma nova viagem.</p>
                </div>
            ) : (
                <div className="d-flex flex-column gap-3">
                    {viagens.map((viagem) => (
                        <div 
                            key={viagem.id} 
                            className="card shadow-sm border-0 rounded-4 overflow-hidden card-viagem-row"
                            style={{cursor: 'pointer'}}
                            onClick={() => handleOpenModal(viagem)}
                        >
                            <div className="row g-0 align-items-stretch">
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

                                <div className="col-md-8 p-4 d-flex flex-column justify-content-center">
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

                                <div className="col-md-2 bg-light p-3 d-flex flex-column justify-content-center border-start">
                                    <button 
                                        className="btn btn-outline-primary w-100 rounded-pill"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleOpenModal(viagem);
                                        }}
                                    >
                                        <i className="bi bi-sliders me-1"></i> Gerenciar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <TourDetailsModal 
                viagem={selectedViagem}
                onClose={handleCloseModal}
                onCancel={handleCancelarViagem}
                reservas={reservas}
                loadingReservas={loadingReservas}
                onConfirmarPagamento={handleConfirmarPagamento}
            />
        </div>
    );
};

export default MinhasViagens;