import { useState, useMemo } from 'react';

export function useBusca(tours) {
    const [busca, setBusca] = useState('');

    const toursFiltrados = useMemo(() => {
        if (!tours) return [];

        const termo = busca.toLowerCase();

        return tours.filter((tour) => {
            const dataFormatada = new Date(tour.dataPartida).toLocaleDateString('pt-BR');

            return (
                tour.titulo.toLowerCase().includes(termo) ||
                tour.destino.toLowerCase().includes(termo) ||
                dataFormatada.includes(termo)
            );
        });
    }, [tours, busca]);

    return {
        busca,
        setBusca,
        toursFiltrados
    };
}