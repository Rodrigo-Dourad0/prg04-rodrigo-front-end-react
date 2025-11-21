import { Link } from 'react-router-dom';
import '../styles/login.css';

function Login() {
  return (
    <div className="login-body-wrapper"> {/* Wrapper para simular o body do login */}
      <div className="login-container">
        
        <Link to="/" className="seta-voltar" aria-label="Voltar">
             &larr; 
        </Link>

        <div className="side-panel"></div>

        <form className="login-form">
            <h2>LOGIN</h2>
            
            <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">Seu e-mail</label>
                <input type="email" className="form-control" id="emailInput" />
            </div>

            <div className="mb-3">
                <label htmlFor="passInput" className="form-label">Senha</label>
                <input type="password" className="form-control" id="passInput" />
            </div>

            <Link to="/admin" className="btn btn-primary btn-lg">LOGIN</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;