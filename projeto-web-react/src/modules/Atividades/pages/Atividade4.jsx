import Footer from '../../../shared/components/Footer';
import Navbar from '../../../shared/components/Navbar';
import '../styles/atividade4.css';

function Atividade4() {
  return (
    <>
      
      
      <main>
        <h1>Plataforma Web para Reserva de Excursões: Roteiro Livre</h1>

        <article>
            <p>
              O projeto consiste na criação de uma Plataforma Web para Reserva de Excursões, com foco em destinos que envolvem natureza, praia e experiências inesquecíveis.
              O objetivo principal é oferecer aos usuários um serviço de agendamento online que combine a empolgação da aventura (representada pelos vibrantes tons de azul) com a segurança e a credibilidade necessárias para a compra de pacotes (transmitidas pelos tons neutros e escuros).
            </p>
            <p>
              A paleta de cores, centrada no Azul Ciano (Turquesa) e no Azul Marinho, busca evocar imediatamente a sensação de estar em águas cristalinas e sob o céu aberto, construindo uma marca que é, ao mesmo tempo, inspiradora e confiável.
            </p>
            
            <h2>Justificativa da Paleta de Cores</h2>

            <h3>Cor Principal: Azul Ciano (#2790B0)</h3>
            <p>A cor principal representa o mar claro, águas cristalinas de praias e céus abertos. Psicologicamente, transmite tranquilidade, inspiração e confiança, essenciais para um site de viagens.</p>

            <h3>Tipo de Paleta: Análoga e Neutra</h3>
            <p>O Azul Escuro (#2B4E72) é a cor análoga que complementa o ciano, simbolizando segurança e profissionalismo. Os tons de Cinza Escuro fornecem um contraste moderno para o texto, enquanto o Cinza Claro (#D6D7D0) serve como fundo claro e acessível.</p>

            <h2>Paleta de Cores Adotada</h2>
            
            <div className="paleta-cores">    
                
                {/* Cor 1 */}
                <div className="cartao-cor" id="cor1">
                    <div className="info-cor">
                        <div className="hex-code">#2790B0</div>
                        <div>RGB 78 77 74</div>
                    </div>
                </div>

                {/* Cor 2 */}
                <div className="cartao-cor" id="cor2">
                    <div className="info-cor">
                        <div className="hex-code">#2B4E72</div>
                        <div>RGB 53 52 50</div>
                    </div>
                </div>

                {/* Cor 3 */}
                <div className="cartao-cor" id="cor3">
                    <div className="info-cor">
                        <div className="hex-code">#D6D7D0</div>
                        <div>RGB 214 215 208</div>
                    </div>
                </div>

                {/* Cor 4 */}
                <div className="cartao-cor" id="cor4">
                    <div className="info-cor">
                        <div className="hex-code">#4E4D4A</div>
                        <div>RGB 39 144 176</div>
                    </div>
                </div>

                {/* Cor 5 */}
                <div className="cartao-cor" id="cor5">
                    <div className="info-cor">
                        <div className="hex-code">#353432</div>
                        <div>RGB 43 78 114</div>
                    </div>
                </div>

            </div>    
        </article>
      </main>

      <Footer />
    </>
  );
}

export default Atividade4;