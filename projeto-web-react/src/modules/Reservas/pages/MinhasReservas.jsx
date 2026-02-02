import React from 'react';
import { useMinhasReservas } from '../hooks/useMinhasReservas';
import '../styles/minhas-reservas.css';

const MinhasReservas = () => {
    const { reservas, loading, fetchMinhasReservas, handleCancelarReserva } = useMinhasReservas();

    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <div className="spinner-border text-primary" role="status"></div>
                <p className="mt-2">Carregando suas viagens...</p>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold">Minhas Reservas</h2>
                <button className="btn btn-outline-primary btn-sm" onClick={fetchMinhasReservas}>
                    <i className="bi bi-arrow-clockwise me-1"></i> Atualizar
                </button>
            </div>

            {reservas.length === 0 ? (
                <div className="alert alert-info text-center">
                    Você ainda não possui reservas.
                </div>
            ) : (
                <div className="row g-4">
                    {reservas.map((reserva) => (
                        <div key={reserva.id} className="col-md-6 col-lg-4">
                            <div className="card h-100 shadow-sm border-0 rounded-4">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <h5 className="card-title fw-bold mb-0">{reserva.tituloViagem}</h5>
                                        <span className={`badge ${reserva.status === 'PAGO' ? 'bg-success' : 'bg-warning text-dark'}`}>
                                            {reserva.status}
                                        </span>
                                    </div>
                                    <p className="text-muted small mb-3">
                                        <i className="bi bi-person me-1"></i> Passageiro: {reserva.nomeUsuario}
                                    </p>
                                    <div className="bg-light p-2 rounded-3 mb-3">
                                        <div className="d-flex justify-content-between small">
                                            <span>Vagas:</span>
                                            <span className="fw-bold">{reserva.quantidadeLugares}</span>
                                        </div>
                                        <div className="d-flex justify-content-between small">
                                            <span>Total:</span>
                                            <span className="fw-bold text-success">
                                                R$ {reserva.valorTotal?.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                    {reserva.status === 'PENDENTE' && (
                                        <button 
                                            className="btn btn-outline-danger btn-sm w-100 rounded-pill"
                                            onClick={() => handleCancelarReserva(reserva.id)}
                                        >
                                            Cancelar Reserva
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

export default MinhasReservas;