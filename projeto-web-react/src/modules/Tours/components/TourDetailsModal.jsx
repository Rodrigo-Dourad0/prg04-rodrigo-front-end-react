import React from 'react';
import '../styles/tour-details-modal.css';

const TourDetailsModal = ({ viagem, onClose, onCancel, onEdit }) => {
    if (!viagem) return null;

    const formatDateTime = (dateStr) => {
       
        if (!dateStr || dateStr === "") return '--';
        
        
        const date = new Date(dateStr);

     
        if (isNaN(date.getTime())) {
            console.warn("Data inválida recebida:", dateStr); 
            return '--';
        }

        return date.toLocaleString('pt-BR', {
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
                    <button 
                        onClick={onClose}
                        className="btn-close shadow-none" 
                        aria-label="Close"
                    ></button>
                </div>

                <div className="p-4 custom-modal-body">
                    
                    <div className="d-flex align-items-center gap-3 mb-4">
                        <span className={`badge rounded-pill px-3 py-2 ${
                            viagem.status === 'ABERTA' ? 'bg-success' : 
                            viagem.status === 'CANCELADA' ? 'bg-danger' : 
                            viagem.status === 'FINALIZADA' ? 'bg-secondary' : 'bg-warning text-dark'
                        }`}>
                            {viagem.status}
                        </span>
                        <span className="text-secondary fw-semibold d-flex align-items-center">
                            <i className="bi bi-geo-alt-fill me-1 text-danger"></i>
                            {viagem.destino}
                        </span>
                    </div>

                    <div className="row g-3 mb-4">
                        <div className="col-md-6">
                            <div className="info-card">
                                <span className="label-small">Partida</span>
                                <div className="value-large d-flex align-items-center gap-2">
                                    <i className="bi bi-calendar-check text-primary"></i>
                                    {formatDateTime(viagem.dataPartida)}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="info-card">
                                <span className="label-small">Retorno</span>
                                <div className="value-large d-flex align-items-center gap-2">
                                    <i className="bi bi-calendar-x text-primary"></i>
                                    {formatDateTime(viagem.dataRetorno)}
                                </div>
                            </div>
                        </div>

                        <div className="col-6 col-md-4">
                            <div className="info-card text-center">
                                <i className="bi bi-cash-coin fs-4 text-success mb-1 d-block"></i>
                                <span className="label-small">Preço</span>
                                <span className="value-large">R$ {viagem.preco?.toFixed(2)}</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-4">
                            <div className="info-card text-center">
                                <i className="bi bi-people-fill fs-4 text-info mb-1 d-block"></i>
                                <span className="label-small">Vagas</span>
                                <span className="value-large">{viagem.vagasTotais}</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="info-card text-center" style={{backgroundColor: '#fff3cd', borderColor: '#ffecb5'}}>
                                <i className="bi bi-ticket-perforated-fill fs-4 text-warning mb-1 d-block"></i>
                                <span className="label-small text-warning-emphasis">Vendidas</span>
                                <span className="value-large text-warning-emphasis">0</span>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4 bg-light p-3 rounded-3">
                        <h6 className="fw-bold text-dark mb-2">Sobre o Roteiro</h6>
                        <p className="text-muted m-0" style={{whiteSpace: 'pre-line', lineHeight: '1.6'}}>
                            {viagem.descricao || "Nenhuma descrição detalhada disponível."}
                        </p>
                    </div>

                    <button className="btn btn-outline-secondary w-100 py-2 border-dashed" disabled>
                        <i className="bi bi-people me-2"></i>Ver Lista de Passageiros (Em Breve)
                    </button>
                </div>

                <div className="p-4 border-top bg-light mt-auto">
                    <div className="d-flex gap-3">
                         <button 
                            className="btn btn-primary flex-grow-1 rounded-pill fw-bold py-2 shadow-sm" 
                            onClick={() => onEdit(viagem)}
                         >
                            <i className="bi bi-pencil-square me-2"></i>Editar Viagem
                        </button>
                        
                        {viagem.status !== 'CANCELADA' && (
                            <button 
                                className="btn btn-outline-danger rounded-pill px-4 fw-bold" 
                                onClick={() => onCancel(viagem.id)}
                            >
                                <i className="bi bi-trash3 me-2"></i>Cancelar
                            </button>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TourDetailsModal;