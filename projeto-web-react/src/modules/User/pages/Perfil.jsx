import { usePerfil } from '../hooks/usePerfil';
import '../styles/perfil.css';

function Perfil() {
    const { 
        user, 
        handleLogout, 
        handleNavigateToPartner,
        isEditing,
        toggleEdit,
        formData,
        handleChange,
        handleSave,
        loading
    } = usePerfil();

    if (!user) return <div className="container mt-5 text-center">Carregando dados do perfil...</div>;

    const renderEndereco = () => {
        if (user.enderecoCompleto) return user.enderecoCompleto;
        
        const partes = [
            user.rua,
            user.numero ? `nº ${user.numero}` : null,
            user.bairro,
            user.cidade,
            user.estado,
            user.cep ? `CEP: ${user.cep}` : null
        ].filter(Boolean);

        return partes.length > 0 ? partes.join(', ') : 'Endereço não cadastrado';
    };

    return (
        <div className="perfil-page-container">
            <div className="perfil-header-banner"></div>

            <div className="container perfil-content">
                <div className="row justify-content-center">
                    
                    <div className="col-lg-4 text-center">
                        <div className="card shadow border-0 card-perfil-main p-4">
                            <div className="avatar-wrapper mx-auto shadow">
                                <i className="bi bi-person-circle display-1 text-secondary"></i>
                            </div>
                            
                            <h3 className="fw-bold mt-3 mb-1">{user.nomeCompleto || user.nome}</h3>
                            
                            {isEditing ? (
                                <div className="mt-2 text-start">
                                    <label className="form-label small text-muted ms-1">Email</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        className="form-control form-control-sm"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            ) : (
                                <p className="text-muted medium mb-3">{user.email}</p>
                            )}
                          
                            <span className={`badge rounded-pill px-3 py-2 mb-4 ${user.organizadorAtivo ? 'bg-primary' : 'bg-secondary'}`}>
                                {user.organizadorAtivo ? 'Organizador de Viagens' : 'Viajante'}
                            </span>

                            <div className="d-flex flex-column gap-2">
                                {isEditing ? (
                                    <>
                                        <button 
                                            onClick={handleSave} 
                                            disabled={loading}
                                            className="btn btn-primary btn-sm rounded-pill w-100 mt-1"
                                        >
                                            {loading ? (
                                                <><span className="spinner-border spinner-border-sm me-2"></span>Salvando...</>
                                            ) : (
                                                <><i className="bi bi-check-lg me-2"></i>Salvar Alterações</>
                                            )}
                                        </button>
                                        <button 
                                            onClick={toggleEdit} 
                                            disabled={loading}
                                            className="btn btn-outline-secondary btn-sm rounded-pill w-100 mt-1"
                                        >
                                            Cancelar
                                        </button>
                                    </>
                                ) : (
                                    <button onClick={toggleEdit} className="btn btn-outline-primary btn-sm rounded-pill w-100 mt-1">
                                        <i className="bi bi-pencil-square me-2"></i> Editar Perfil
                                    </button>
                                )}
                                
                                {!isEditing && (
                                    <button onClick={handleLogout} className="btn btn-outline-danger btn-sm rounded-pill w-100 mt-1">
                                        <i className="bi bi-box-arrow-right me-2"></i> Sair da Conta
                                    </button>
                                )}
                            </div>

                            {!user.organizadorAtivo && !isEditing && (
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

                    <div className="col-lg-7">
                        <div className="card shadow border-0 card-perfil-details p-4 h-100">
                            <h5 className="fw-bold border-bottom pb-2 mb-4">
                                {isEditing ? 'Editando Informações' : 'Informações de Contato'}
                            </h5>
                            
                            <div className="row gy-4">
                                <div className="col-md-12">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="w-100">
                                            {isEditing ? (
                                                <>
                                                    <label className="text-primary mb-1">Telefone</label>
                                                    <input 
                                                        type="text" 
                                                        name="telefone"
                                                        className="form-control"
                                                        value={formData.telefone}
                                                        onChange={handleChange}
                                                    />
                                                </>
                                            ) : (
                                                <>
                                                    <p className="small text-primary mb-1">Telefone</p>
                                                    <p className="fw-semibold mb-0">{user.telefone || 'Não informado'}</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 mt-4">
                                    <div className="d-flex align-items-start gap-3">
                                    
                                        <div className="w-100">
                                            {isEditing ? (
                                                <>
                                                    <h6 className="text-primary mb-3">Endereço</h6>
                                                    <div className="row g-3">
                                                        <div className="col-md-3">
                                                            <label className="form-label small text-muted">CEP</label>
                                                            <input type="text" name="cep" className="form-control" value={formData.cep} onChange={handleChange} />
                                                        </div>
                                                        <div className="col-md-7">
                                                            <label className="form-label small text-muted">Rua</label>
                                                            <input type="text" name="rua" className="form-control" value={formData.rua} onChange={handleChange} />
                                                        </div>
                                                        <div className="col-md-2">
                                                            <label className="form-label small text-muted">Número</label>
                                                            <input type="text" name="numero" className="form-control" value={formData.numero} onChange={handleChange} />
                                                        </div>
                                                        <div className="col-md-5">
                                                            <label className="form-label small text-muted">Bairro</label>
                                                            <input type="text" name="bairro" className="form-control" value={formData.bairro} onChange={handleChange} />
                                                        </div>
                                                        <div className="col-md-5">
                                                            <label className="form-label small text-muted">Cidade</label>
                                                            <input type="text" name="cidade" className="form-control" value={formData.cidade} onChange={handleChange} />
                                                        </div>
                                                        <div className="col-md-2">
                                                            <label className="form-label small text-muted">UF</label>
                                                            <input type="text" name="estado" className="form-control" value={formData.estado} onChange={handleChange} />
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <p className="small text-primary mb-2">Endereço</p>
                                                    <p className="fw-semibold mb-0">{renderEndereco()}</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {user.organizadorAtivo && !isEditing && (
                                <div className="mt-5 pt-4 border-top">
                                    <h5 className="fw-bold mb-3">Painel do Organizador</h5>
                                    <div className="bg-light p-3 rounded-4">
                                        <p className="small mb-3">
                                            <i className="bi bi-patch-check-fill text-primary me-2 p-2"></i> 
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