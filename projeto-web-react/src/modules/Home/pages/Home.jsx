import Hero from '../components/Hero';
import Stats from '../components/Stats';
import HowItWorks from '../components/HowItWorks';
import Tours from '../components/Tours';
import Footer from '../../../shared/components/Footer';
import { useTours } from '../hooks/useTours';
import { useBusca } from '../hooks/useBusca';
import '../styles/home-page.css';

const Home = () => {
    const { viagens, loading, error } = useTours();
    const { busca, setBusca, toursFiltrados } = useBusca(viagens);

    if (loading) return <div className="text-center mt-5">Carregando roteiros...</div>;
    if (error) return <div className="text-center mt-5 text-danger">Erro ao carregar roteiros.</div>;

    return (
        <div className="home-page">
            <Hero busca={busca} setBusca={setBusca} />
            
            <Stats />
            <HowItWorks />
            
            <div id="tours-section">
                <Tours viagens={toursFiltrados} />
            </div>

            <Footer />
        </div>
    );
};

export default Home;