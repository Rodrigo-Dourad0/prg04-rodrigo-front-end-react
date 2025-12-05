import SearchBar from './SearchBar';
import '../styles/hero.css';

function Hero() {
  return (
    <section className="hero-section">
     
        <h1 className="hero-title">
          Descubra Roteiros Incríveis
        </h1>
        
        <p className="hero-subtitle">
          Conecte-se com organizadores de excursões e viva experiências inesquecíveis.
        </p>

        <div className="d-flex justify-content-center">
            <SearchBar />
        </div>
    
    </section>
  );
}

export default Hero;