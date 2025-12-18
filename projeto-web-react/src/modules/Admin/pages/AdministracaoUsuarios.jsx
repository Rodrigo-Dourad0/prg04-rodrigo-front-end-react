import Navbar from '../../../shared/components/Navbar';
import { useAdministracaoUsuarios } from '../hooks/useAdministracaoUsuarios'; // Ajusta o caminho conforme onde criares o hook
import '../styles/adm-usuario.css';

function AdministracaoUsuarios() {
  // Extraímos tudo do nosso hook
  const {
    usuarios,
    loading,
    editingId,
    editNome,
    setEditNome,
    excluirUsuario,
    iniciarEdicao,
    cancelarEdicao,
    salvarEdicao
  } = useAdministracaoUsuarios();

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className="mb-4">Administração de Usuários</h1>
        
        {loading ? (
            <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                    
                </div>
            </div>
        ) : (
            <div className="table-responsive">
                <table className="table table-striped table-hover align-middle">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Organizador</th>
                            <th scope="col" style={{ minWidth: '180px' }}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.length > 0 ? (
                            usuarios.map((user) => (
                                <tr key={user.id}>
                                    <th scope="row">{user.id}</th>
                                    
                                    {/* Célula de Nome (Texto ou Input) */}
                                    <td>
                                        {editingId === user.id ? (
                                            <input 
                                                type="text" 
                                                className="form-control form-control-sm"
                                                value={editNome}
                                                onChange={(e) => setEditNome(e.target.value)}
                                            />
                                        ) : (
                                            user.nome
                                        )}
                                    </td>

                                    <td>{user.email}</td>
                                    
                                    {/* Badge de Organizador */}
                                    <td>
                                        {user.isOrganizador ? (
                                            <span className="badge bg-success">Sim</span>
                                        ) : (
                                            <span className="badge bg-secondary">Não</span>
                                        )}
                                    </td>

                                    {/* Botões de Ação */}
                                    <td>
                                        {editingId === user.id ? (
                                            <>
                                                <button 
                                                    type="button" 
                                                    className="btn btn-sm btn-success me-2"
                                                    onClick={() => salvarEdicao(user.id)}
                                                >
                                                    Salvar
                                                </button>
                                                <button 
                                                    type="button" 
                                                    className="btn btn-sm btn-secondary"
                                                    onClick={cancelarEdicao}
                                                >
                                                    Cancelar
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button 
                                                    type="button" 
                                                    className="btn btn-sm btn-outline-primary me-2"
                                                    onClick={() => iniciarEdicao(user)}
                                                >
                                                    Editar
                                                </button>
                                                <button 
                                                    type="button" 
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() => excluirUsuario(user.id)}
                                                >
                                                    Excluir
                                                </button> 
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center">Nenhum usuário encontrado.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )}
      </div>
    </>
  );
}

export default AdministracaoUsuarios;