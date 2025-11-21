import Navbar from '../components/Navbar';
import '../styles/home-page.css'; 

function Home() {
  return (
    <>
      <Navbar />
      <main>
         {/* Imagens na pasta public acessamos com barra / */}
         <img src="/images/imagem-menu.png" className="img-fluid" alt="Menu" />
         <p>O projeto consiste na criação de uma Plataforma Web para Reserva de Excursões, com foco em destinos que envolvem natureza, praia e experiências inesquecíveis.</p>
      </main>
      <footer>&copy; Roteiro Livre</footer>
    </>
  );
}

export default Home;