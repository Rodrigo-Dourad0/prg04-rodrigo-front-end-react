import { usePerfil } from '../hooks/usePerfil';
import '../styles/perfil.css';

function Perfil() {
    const { user, handleLogout, handleNavigateToPartner } = usePerfil();

    if (!user) return <div className="container mt-5 text-center">Carregando dados do perfil...</div>;

    return (
        <div className="perfil-page-container">
            {/* Cabeçalho com Banner */}
            <div className="perfil-header-banner"></div>

            <div className="container perfil-content">
                <div className="row justify-content-center">
                    
                    {/* Coluna da Esquerda: Card Principal */}
                    <div className="col-lg-4 text-center">
                        <div className="card shadow border-0 card-perfil-main p-4">
                            <div className="avatar-wrapper mx-auto shadow">
                                <i className="bi bi-person-circle display-1 text-secondary"></i>
                            </div>
                            
                            <h3 className="fw-bold mt-3 mb-1">{user.nomeCompleto}</h3>
                            <p className="text-muted medium mb-3">{user.email}</p>
                          
                            <span className={`badge rounded-pill px-3 py-2 mb-4 ${user.organizadorAtivo ? 'bg-primary' : 'bg-secondary'}`}>
                                {user.organizadorAtivo ? 'Organizador de Viagens' : 'Viajante'}
                            </span>

                            
                            <div className="d-flex flex-column gap-2">
                                <button className="btn btn-outline-primary btn-sm rounded-pill w-100 mt-1">
                                    <i className="bi bi-pencil-square me-2 "></i> Editar Perfil
                                </button>
                                
                              
                                <button onClick={handleLogout} className="btn btn-outline-danger btn-sm rounded-pill w-100 mt-1">
                                    <i className="bi bi-box-arrow-right me-2"></i> Sair da Conta
                                </button>
                            </div>

                            {/* Botão Seja Parceiro: Visível apenas para quem não é organizador */}
                            {!user.organizadorAtivo && (
                                <div className="mt-4 pt-3 border-top">
                                    <p className="small text-muted mb-2">Gostaria de criar roteiros?</p>
                                    <button 
                                        onClick={handleNavigateToPartner} 
                                        className="btn btn-success btn-sm rounded-pill w-100 fw-bold"
                                    >
                                        <i className="bi bi-star-fill me-2"></i> Seja Parceiro
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Coluna da Direita: Detalhes e Info */}
                    <div className="col-lg-7">
                        <div className="card shadow border-0 card-perfil-details p-4 h-100">
                            <h5 className="fw-bold border-bottom pb-2 mb-4">Informações de Contato</h5>
                            
                            <div className="row gy-4">
                                <div className="col-md-6 d-flex align-items-center gap-3">
                                    <div className="icon-box bg-light text-primary">
                                        <i className="bi bi-telephone"></i>
                                    </div>
                                    <div>
                                        <p className="small text-muted mb-0">Telefone</p>
                                        <p className="fw-semibold mb-0">{user.telefone || 'Não informado'}</p>
                                    </div>
                                </div>

                                <div className="col-md-6 d-flex align-items-center gap-3">
                                    <div className="icon-box bg-light text-primary">
                                        <i className="bi bi-geo-alt"></i>
                                    </div>
                                    <div>
                                        <p className="small text-muted mb-0">Endereço</p>
                                        <p className="fw-semibold mb-0">{user.endereco || 'Não informado'}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Secção exclusiva para quem já é Organizador */}
                            {user.organizadorAtivo && (
                                <div className="mt-5 pt-4 border-top">
                                    <h5 className="fw-bold mb-3">Painel do Organizador</h5>
                                    <div className="bg-light p-3 rounded-4">
                                        <p className="small mb-3">
                                            <i className="bi bi-patch-check-fill text-primary me-2"></i> 
                                            O seu perfil de parceiro está ativo e pronto para criar novas excursões.
                                        </p>
                                        <button className="btn btn-primary btn-sm rounded-pill px-4">
                                            Gerir Meus Roteiros
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Perfil;