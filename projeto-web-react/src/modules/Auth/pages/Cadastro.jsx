import { Link } from 'react-router-dom';
import Footer from '../../../shared/components/Footer';
import Navbar from '../../../shared/components/Navbar';

import '../styles/cadastro.css'; 

function Cadastro() {
  return (
    <>
      <Navbar />

        

      <div className="cadastro-wrapper">
        <div className="cadastro-box">
            

            <h1 className="cadastro-title">Cadastre-se</h1>
            
            <p className="cadastro-subtitle">
                JÁ POSSUI UMA CONTA? <Link to="/">FAZER LOGIN</Link>
            </p>

            <form>
                {/* Nome Completo */}
                <div className="mb-3">
                    <label className="form-label-cadastro">Nome completo</label>
                    <input type="text" className="form-control-cadastro" />
                </div>

                {/* E-mail */}
                <div className="mb-3">
                    <label className="form-label-cadastro">E-mail</label>
                    <input type="email" className="form-control-cadastro" />
                </div>

                {/* Senha */}
                <div className="mb-3">
                    <label className="form-label-cadastro">Senha</label>
                    <input type="password" className="form-control-cadastro" />
                </div>

                {/* Repetir Senha */}
                <div className="mb-3">
                    <label className="form-label-cadastro">Repetir Senha</label>
                    <input type="password" className="form-control-cadastro" />
                </div>

                {/* Botão Registrar */}
                <button type="submit" className="btn-registrar">
                    Registrar
                </button>
            </form>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Cadastro;