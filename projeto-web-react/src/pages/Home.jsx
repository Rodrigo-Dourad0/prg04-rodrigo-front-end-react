import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Stats from '../components/Stats';

import '../styles/home-page.css'; 

function Home() {
  return (
    <>
      <Navbar />
      
    <Hero />

    <Stats />

      
      <Footer />
    </>
  );
}

export default Home;