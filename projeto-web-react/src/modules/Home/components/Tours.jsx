import { useTours } from '../hooks/useTours';
import '../styles/tours.css';

function Tours() {
  const { viagens, loading, formatData } = useTours();

  if (loading) {
    return (
      <section className="tours-section text-center">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-2 text-muted">Carregando roteiros...</p>
      </section>
    );
  }

  return (
    <section className="tours-section">
      <div className="container">
        
        <div className="tours-header">
            <h2 className="tours-title">Roteiros em Destaque</h2>
            <p className="tours-subtitle">
                Explore os destinos mais procurados e viva momentos inesquecíveis.
            </p>
        </div>

        {viagens.length === 0 ? (
           <div className="text-center py-5">
             <i className="bi bi-airplane display-1 text-muted opacity-25"></i>
             <p className="mt-3 text-muted">Nenhuma viagem disponível no momento.</p>
           </div>
        ) : (
          <div className="cards-grid-container">
              {viagens.map((viagem) => (
                <div key={viagem.id} className="tour-card">
                    <div className="tour-card-img-wrapper">
                        
                        <img 
                          src={viagem.imagemUrl || 'https://placehold.co/800x600?text=Sem+Foto'} 
                          alt={viagem.titulo} 
                          className="tour-card-img"
                          onError={(e) => {
                            e.target.onerror = null; 
                            // Caso o link do supabase quebre ou deixe de existir, mostra isso:
                            e.target.src = 'https://placehold.co/800x600?text=Imagem+Indisponivel';
                          }}
                        />
                        <span className="tour-price-badge">
                           R$ {viagem.preco?.toFixed(2).replace('.', ',')}
                        </span>
                    </div>

                    <div className="tour-card-body">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                           <span className="tour-location">
                             <i className="bi bi-geo-alt-fill me-1"></i>{viagem.destino}
                           </span>
                           <span className="tour-date">
                             <i className="bi bi-calendar-event me-1"></i>{formatData(viagem.dataPartida)}
                           </span>
                        </div>

                        <h3 className="tour-card-title" title={viagem.titulo}>
                          {viagem.titulo}
                        </h3>
                        
                        <p className="tour-card-desc">
                          {viagem.descricao || 'Sem descrição detalhada.'}
                        </p>

                        <div className="tour-card-footer">
                            <div className="organizer-info">
                                <small className="text-muted">
                                    <i className="bi bi-person-circle me-1"></i>
                                    {viagem.nomeOrganizador || 'Organizador'}
                                </small>
                            </div>
                            <button className="btn btn-outline-primary btn-sm rounded-pill px-4">
                                Ver Detalhes
                            </button>
                        </div>
                    </div>
                </div>
              ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default Tours;