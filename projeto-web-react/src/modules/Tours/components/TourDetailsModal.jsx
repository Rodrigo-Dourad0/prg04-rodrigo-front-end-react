import React from 'react';
import '../styles/tour-details-modal.css';

const TourDetailsModal = ({ viagem, onClose, onCancel, reservas, loadingReservas, onConfirmarPagamento }) => {
    if (!viagem) return null;

    const formatDateTime = (dateStr) => {
        if (!dateStr) return '--';
        const date = new Date(dateStr);
        return isNaN(date.getTime()) ? '--' : date.toLocaleString('pt-BR', {
            day: '2-digit', month: '2-digit', year: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
    };

    return (
        <div className="custom-modal-overlay" onClick={onClose}>
            <div className="custom-modal-content" onClick={e => e.stopPropagation()}>
                <div className="d-flex justify-content-between align-items-center p-4 border-bottom">
                    <h5 className="m-0 fw-bold text-dark fs-4 d-flex align-items-center gap-2">
                        <i className="bi bi-airplane-engines-fill text-primary"></i>
                        {viagem.titulo}
                    </h5>
                    <button onClick={onClose} className="btn-close shadow-none"></button>
                </div>

                <div className="p-4 custom-modal-body">
                    <div className="d-flex align-items-center gap-3 mb-4">
                        <span className={`badge rounded-pill px-3 py-2 ${
                            viagem.status === 'ABERTA' ? 'bg-success' : 
                            viagem.status === 'CANCELADA' ? 'bg-danger' : 'bg-secondary'
                        }`}>
                            {viagem.status}
                        </span>
                        <span className="text-secondary fw-semibold">
                            <i className="bi bi-geo-alt-fill me-1 text-danger"></i>
                            {viagem.destino}
                        </span>
                    </div>

                    <div className="row g-3 mb-4">
                        <div className="col-md-6">
                            <div className="info-card">
                                <span className="label-small">Partida</span>
                                <div className="value-large">{formatDateTime(viagem.dataPartida)}</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="info-card">
                                <span className="label-small">Retorno</span>
                                <div className="value-large">{formatDateTime(viagem.dataRetorno)}</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <h6 className="fw-bold text-dark mb-3">Passageiros e Reservas</h6>
                        {loadingReservas ? (
                            <div className="text-center p-3">
                                <div className="spinner-border spinner-border-sm text-primary"></div>
                            </div>
                        ) : reservas.length === 0 ? (
                            <p className="text-muted small">Nenhuma reserva encontrada.</p>
                        ) : (
                            <div className="table-responsive bg-white rounded-3 border">
                                <table className="table table-hover align-middle mb-0">
                                    <thead className="bg-light">
                                        <tr className="small text-muted">
                                            <th>Nome</th>
                                            <th className="text-center">Vagas</th>
                                            <th>Status</th>
                                            <th className="text-end">Ação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {reservas.map(res => (
                                            <tr key={res.id}>
                                                <td className="small fw-bold">{res.nomeUsuario}</td>
                                                <td className="text-center small">{res.quantidadeLugares}</td>
                                                <td>
                                                    <span className={`badge ${res.status === 'PAGO' ? 'bg-success' : 'bg-warning text-dark'}`} style={{fontSize: '0.7rem'}}>
                                                        {res.status}
                                                    </span>
                                                </td>
                                                <td className="text-end">
                                                    {res.status === 'PENDENTE' && (
                                                        <button 
                                                            className="btn btn-sm btn-success rounded-pill px-2 py-0"
                                                            onClick={() => onConfirmarPagamento(res.id)}
                                                        >
                                                            Validar
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>

                <div className="p-4 border-top bg-light mt-auto">
                    <div className="d-flex gap-3 justify-content-end">
                        {viagem.status !== 'CANCELADA' && (
                            <button className="btn btn-outline-danger rounded-pill px-4 fw-bold w-100" onClick={() => onCancel(viagem.id)}>
                                <i className="bi bi-trash3 me-2"></i>Cancelar Viagem
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourDetailsModal;