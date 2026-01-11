import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

function Perfil() {
  
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div className="container mt-5 text-center">Carregando...</div>;
  
  // Caso o usuário não esteja logado ou os dados ainda não tenham sido recuperados
  if (!user) return <div className="container mt-5 alert alert-warning text-center">Usuário não encontrado.</div>;

  return (
    <div className="container mt-5">
      <div className="card shadow border-0 mx-auto" style={{ maxWidth: '600px' }}>
        <div className="card-header bg-primary text-white p-4 text-center">
          <div className="bg-light text-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" 
               style={{ width: '80px', height: '80px', fontSize: '2rem', fontWeight: 'bold' }}>
            
            {user.nomeCompleto?.[0].toUpperCase() || 'U'}
          </div>
          <h3 className="mb-0">{user.nomeCompleto || 'Usuário'}</h3>
        </div>
        
        <div className="card-body p-4">
          <div className="mb-4">
            <label className="text-muted small fw-bold text-uppercase">E-mail</label>
            <p className="fs-5 mb-0">{user.email}</p>
          </div>

        
          <div className="mb-4">
            <label className="text-muted small fw-bold text-uppercase">Telefone</label>
            <p className="fs-5 mb-0">{user.telefone || 'Telefone não informado'}</p>
          </div>

          <div className="mb-4">
            <label className="text-muted small fw-bold text-uppercase">Endereço</label>
            <p className="fs-5 mb-0">{user.endereco || 'Endereço não cadastrado'}</p>
          </div>

          <div className="mt-4 pt-3 border-top d-flex justify-content-between">
            <span className="badge bg-success py-2 px-3">Conta Ativa</span>
            <button className="btn btn-outline-primary btn-sm">Editar Perfil</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;