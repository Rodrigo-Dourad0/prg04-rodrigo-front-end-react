import SearchBar from './SearchBar';
import '../styles/hero.css';

function Hero({ busca, setBusca }) {
  return (
    <section className="hero-section">
        <h1 className="hero-title">
          Descubra Roteiros Incríveis
        </h1>
        
        <p className="hero-subtitle">
          Conecte-se com organizadores de excursões e viva experiências inesquecíveis.
        </p>

        <div className="w-100 d-flex justify-content-center mt-4">
            <SearchBar busca={busca} setBusca={setBusca} />
        </div>
    </section>
  );
}

export default Hero;