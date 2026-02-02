import React from 'react';
import { useCriarReserva } from '../hooks/useCriarReserva';
import '../../Tours/styles/tour-details-modal.css'; // Reaproveitando o CSS de modal
import { toast } from 'react-toastify';

const ReservaModal = ({ viagem, onClose }) => {
    const { realizarReserva } = useCriarReserva();

    if (!viagem) return null;

    const handleConfirmarReserva = async () => {
        
        const user = JSON.parse(localStorage.getItem('user') || sessionStorage.getItem('user'));
        
        if (!user?.id) {
            toast.error("Você precisa estar logado para reservar uma viagem.");
            return;
        }

        try {
            await realizarReserva(viagem.id, user.id);
            onClose();
        } catch (error) { /* Erro tratado no hook */ }
    };

    return (
        <div className="custom-modal-overlay" onClick={onClose}>
            <div className="custom-modal-content" onClick={e => e.stopPropagation()}>
                <div className="p-4 border-bottom d-flex justify-content-between">
                    <h4 className="m-0">{viagem.titulo}</h4>
                    <button className="btn-close" onClick={onClose}></button>
                </div>
                
                <div className="p-4">
                    <img 
                        src={viagem.imagemUrl || 'https://placehold.co/800x400'} 
                        className="img-fluid rounded mb-3" 
                        alt={viagem.titulo} 
                    />
                    <p><strong>Destino:</strong> {viagem.destino}</p>
                    <p className="text-muted">{viagem.descricao}</p>
                    <h3 className="text-primary">R$ {viagem.preco?.toFixed(2)}</h3>
                </div>

                <div className="p-4 border-top">
                    <button 
                        className="btn btn-success w-100 py-3 fw-bold rounded-pill"
                        onClick={handleConfirmarReserva}
                    >
                        Confirmar Reserva Agora
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReservaModal;