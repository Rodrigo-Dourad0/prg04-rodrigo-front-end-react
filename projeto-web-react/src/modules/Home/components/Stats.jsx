import '../styles/stats.css';

function Stats() {
  return (
   
        <div className="stats-container">
            <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Destinos</div>
            </div>

            <div className="vr d-none d-md-block text-secondary opacity-25"></div>

            <div className="stat-item">
                <div className="stat-number">2k+</div>
                <div className="stat-label">Clientes</div>
            </div>

            <div className="vr d-none d-md-block text-secondary opacity-25"></div>

            <div className="stat-item">
                <div className="stat-number">40+</div>
                <div className="stat-label">Cidades</div>
            </div>
            
            <div className="vr d-none d-md-block text-secondary opacity-25"></div>

            <div className="stat-item">
                <div className="stat-number">4.9</div>
                <div className="stat-label">Avaliação</div>
            </div>
        </div>
    
  );
}

export default Stats;