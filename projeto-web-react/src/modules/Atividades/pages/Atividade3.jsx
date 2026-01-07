import Footer from '../../../shared/components/Footer';
import Navbar from '../../../shared/components/Navbar';
import '../styles/atividade3.css';

function Atividade3() {
  return (
    <>
    
      <main>
        <article>
            <h2>Página SandBox</h2>
            <h2>Lista de lugares</h2>
            <ul>
                <li>Salvador</li>
                <li>São Paulo</li>
                <li>Aracaju</li>
            </ul>

            <h2>Imagem responsiva</h2>
            <picture>
                <img src="/images/foto.png" alt="Imagem Dinâmica" />
            </picture>

            <h2>Áudio aleatório</h2>
            <audio preload="metadata" controls>
                <source src="/audio/audio-sandbox.mp3" type="audio/mpeg" />
            </audio>

            <h2>Jesus enfrentando o diabo no GTA San Andreas</h2>
            <div className="video">
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/wxTBtAE96LI?si=gG-9bCKAKm9artHm"
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                ></iframe>
            </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default Atividade3;