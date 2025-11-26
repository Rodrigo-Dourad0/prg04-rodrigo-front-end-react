import { Link } from 'react-router-dom';
import '../styles/components-styles/footer.css';

function Footer() {
  return (

    <footer>
  
        <div className="row">
          
          {/* Coluna 1: Marca e Slogan */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold fs-4 mb-3">Roteiro Livre</h5>
            <p className="small opacity-75">
              Conectando pessoas a experiências incríveis. 
            </p>
          </div>

          {/* Coluna 2: Roteiros */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Roteiros</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="small">Todos os Roteiros</Link>
              </li>
              <li className="mb-2">
                <a href="#" className="small">Roteiros Internacionais</a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Empresa */}          
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Empresa</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="small">Sobre nós</Link>
              </li>
              <li className="mb-2">
                <a href="#" className="small">Como Funciona</a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Contato</h6>
            <p className="small opacity-75 mb-1">suporte@roteirolivre.com.br</p>
            <p className="small opacity-75">Irecê, Bahia</p>
          </div>

        </div>

        {/* Linha Divisória */}
        <hr className="mb-4" />

        {/* Copyright */}
        <div className="row align-items-center">
          <div className="col-md-12 text-center small opacity-75">
            &copy; {new Date().getFullYear()} Roteiro Livre. Todos os direitos reservados.
          </div>
        </div>
    
    </footer>
  );
}

export default Footer;