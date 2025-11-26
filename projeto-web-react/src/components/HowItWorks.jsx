import '../styles/components-styles/how-it-works.css';

function HowItWorks() {
  return (
    <div className="how-it-works-container">
        
    
        <h2 className="how-it-works-title">Como funciona</h2>

        {/* Linha com os passos */}
        <div className="steps-row">
            
            {/* Item 1 */}
            <div className="how-it-works-item">
                <i className="bi bi-geo-alt-fill step-icon-large"></i>
                <div className="step-title">Escolha o roteiro</div>
                <div className="step-description">
                    Navegue e encontre a aventura ideal para você.
                </div>
            </div>

            <div className="vr-custom d-none d-md-block"></div>

            {/* Item 2 */}
            <div className="how-it-works-item">
                <i className="bi bi-calendar-check-fill step-icon-large"></i>
                <div className="step-title">Faça sua reserva</div>
                <div className="step-description">
                    Selecione a data e garanta sua vaga com segurança.
                </div>
            </div>

            <div className="vr-custom d-none d-md-block"></div>

            {/* Item 3 */}
            <div className="how-it-works-item">
                <i className="bi bi-backpack-fill step-icon-large"></i>
                <div className="step-title">Aproveite o passeio</div>
                <div className="step-description">
                    Compareça ao embarque e curta sem preocupações.
                </div>
            </div>

        </div>
    </div>
  );
}

export default HowItWorks;