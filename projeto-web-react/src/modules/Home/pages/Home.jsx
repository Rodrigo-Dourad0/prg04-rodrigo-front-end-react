import Footer from '../../../shared/components/Footer';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Navbar from '../../../shared/components/Navbar';
import Stats from '../components/Stats';
import Tours from '../components/Tours';

import '../styles/home-page.css'; 

function Home() {
  return (
    <>
    <Navbar />
      
    <Hero />

    <Stats />

    <Tours />

    <HowItWorks />

      
    <Footer />
    </>
  );
}

export default Home;