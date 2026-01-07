import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

function Perfil() {
  const { user, logout } = useContext(AuthContext);

  if (!user) return <p>Carregando...</p>;

  return (
    <div className="perfil-container">
      <h2>Meu Perfil</h2>
      <div className="info-group">
        <p><strong>Nome:</strong> {user.nomeCompleto || 'Não informado'}</p>
        <p><strong>E-mail:</strong> {user.email}</p>
        <p><strong>Endereço:</strong> {user.endereco || 'Não informado'}</p>
      </div>
      <button onClick={logout} className="btn btn-danger">Sair da Conta</button>
    </div>
  );
}
export default Perfil;