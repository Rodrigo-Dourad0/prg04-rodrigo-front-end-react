import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMinhasReservas } from '../hooks/useMinhasReservas';
import '../styles/minhas-reservas.css';

const MinhasReservas = () => {
    const navigate = useNavigate();
    const { reservas, loading, handleCancelarReserva } = useMinhasReservas();

    if (loading) {
        return <div className="container mt-5 text-center">Carregando suas viagens...</div>;
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="fw-bold text-dark mb-1">Minhas Viagens</h2>
                    <p className="text-muted mb-0">Histórico de roteiros que você participou ou vai participar</p>
                </div>
                <button className="btn btn-outline-secondary btn-sm" onClick={() => navigate('/perfil')}>
                    <i className="bi bi-arrow-left me-2"></i>Voltar ao Perfil
                </button>
            </div>

            {reservas.length === 0 ? (
                <div className="text-center py-5 bg-light rounded-4 border border-dashed">
                    <i className="bi bi-suitcase-lg display-1 text-muted opacity-25"></i>
                    <h4 className="mt-3 text-secondary">Nenhuma viagem encontrada</h4>
                    <p className="text-muted">Você ainda não fez nenhuma reserva.</p>
                    <button className="btn btn-primary mt-2" onClick={() => navigate('/')}>
                        Explorar Roteiros
                    </button>
                </div>
            ) : (
                <div className="row g-4">
                    {reservas.map((reserva) => (
                        <div key={reserva.id} className="col-lg-6">
                            <div className="card shadow-sm border-0 rounded-4 h-100 card-reserva">
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div>
                                            <span className={`badge rounded-pill mb-2 ${reserva.statusPagamento === 'APROVADO' ? 'bg-success' : 'bg-warning text-dark'}`}>
                                                {reserva.statusPagamento || 'PENDENTE'}
                                            </span>
                                            <h5 className="fw-bold text-primary mb-1">{reserva.tituloViagem}</h5>
                                            <small className="text-muted">Reserva #{reserva.id}</small>
                                        </div>
                                        <div className="text-end">
                                            {/* Data da Reserva */}
                                            <p className="mb-0 fw-bold">{new Date(reserva.dataReserva).toLocaleDateString()}</p>
                                        </div>
                                    </div>

                                    <div className="d-flex gap-3 text-secondary small mb-4">
                                        <div className="d-flex align-items-center bg-light px-3 py-2 rounded-3">
                                            <i className="bi bi-people-fill me-2 text-primary"></i>
                                            <strong>{reserva.quantidadeLugares}</strong>&nbsp;Lugares
                                        </div>
                                        <div className="d-flex align-items-center bg-light px-3 py-2 rounded-3">
                                            <i className="bi bi-cash-stack me-2 text-success"></i>
                                            R$ {reserva.valorTotal ? reserva.valorTotal.toFixed(2) : '0,00'}
                                        </div>
                                    </div>

                                    <div className="d-grid gap-2">
                                        <button 
                                            className="btn btn-outline-danger btn-sm rounded-pill"
                                            onClick={() => handleCancelarReserva(reserva.id)}
                                        >
                                            Cancelar Reserva
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MinhasReservas;