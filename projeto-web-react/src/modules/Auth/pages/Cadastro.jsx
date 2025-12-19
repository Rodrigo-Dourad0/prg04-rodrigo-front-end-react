import Navbar from '../../../shared/components/Navbar';
import { useCadastro } from '../hooks/useCadastro';
import { Link } from 'react-router-dom';
import '../styles/cadastro.css';

function Cadastro() {
  const {
    step,
    formData,
    estadosBr, 
    handleChange,
    handleFormSubmit, // Função que controla se avança ou envia
    prevStep,
    showSenha,
    toggleShowSenha,
    erro,
    loading
  } = useCadastro();

  return (
    <>
      <Navbar />

      <div className="cadastro-wrapper">
        <div className="cadastro-box">
            
            <h1 className="cadastro-title">Criar Conta</h1>

            {/* --- BARRA DE PROGRESSO (WIZARD) --- */}
            <div className="steps-indicator">
                <div className={`step-item ${step >= 1 ? 'active' : ''}`}>
                    <div className="step-circle">1</div>
                    <span className="step-label">Acesso</span>
                </div>
                <div className="step-line"></div>
                <div className={`step-item ${step >= 2 ? 'active' : ''}`}>
                    <div className="step-circle">2</div>
                    <span className="step-label">Pessoal</span>
                </div>
                <div className="step-line"></div>
                <div className={`step-item ${step >= 3 ? 'active' : ''}`}>
                    <div className="step-circle">3</div>
                    <span className="step-label">Endereço</span>
                </div>
            </div>
            
            {/* O form chama a função inteligente do hook que decide o fluxo */}
            <form onSubmit={handleFormSubmit}>

                {/* --- ETAPA 1: DADOS DE ACESSO --- */}
                {step === 1 && (
                    <div className="step-content fade-in">
                        <div className="form-row">
                            <div className="form-col">
                                <label className="form-label-cadastro">Email</label>
                                <input 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange}
                                    type="email" 
                                    className="form-control-cadastro" 
                                    placeholder="exemplo@email.com" 
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-col">
                                <label className="form-label-cadastro">Senha</label>
                                <div className="password-input-container">
                                    <input 
                                        name="senha" 
                                        value={formData.senha} 
                                        onChange={handleChange}
                                        type={showSenha ? "text" : "password"} 
                                        className="form-control-cadastro" 
                                        placeholder="Mínimo 6 caracteres" 
                                        required
                                    />
                                    <button type="button" className="btn-toggle-password" onClick={toggleShowSenha}>
                                        <i className={showSenha ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                                    </button>
                                </div>
                            </div>
                            <div className="form-col">
                                <label className="form-label-cadastro">Confirmar</label>
                                <div className="password-input-container">
                                    <input 
                                        name="confirmarSenha" 
                                        value={formData.confirmarSenha} 
                                        onChange={handleChange}
                                        type={showSenha ? "text" : "password"} 
                                        className="form-control-cadastro" 
                                        placeholder="Repita a senha"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- ETAPA 2: DADOS PESSOAIS --- */}
                {step === 2 && (
                    <div className="step-content fade-in">
                        <div className="form-row">
                            <div className="form-col">
                                <label className="form-label-cadastro">Nome Completo</label>
                                <input 
                                    name="nome" 
                                    value={formData.nome} 
                                    onChange={handleChange}
                                    type="text" 
                                    className="form-control-cadastro" 
                                    placeholder="Ex: João Silva" 
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-col">
                                <label className="form-label-cadastro">CPF</label>
                                <input 
                                    name="cpf" 
                                    value={formData.cpf} 
                                    onChange={handleChange}
                                    type="text" 
                                    className="form-control-cadastro" 
                                    placeholder="000.000.000-00" 
                                    required
                                    maxLength={14}
                                />
                            </div>
                            <div className="form-col">
                                <label className="form-label-cadastro">Telefone</label>
                                <input 
                                    name="telefone" 
                                    value={formData.telefone} 
                                    onChange={handleChange}
                                    type="text" 
                                    className="form-control-cadastro" 
                                    placeholder="(00) 00000-0000" 
                                    maxLength={16}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* --- ETAPA 3: ENDEREÇO --- */}
                {step === 3 && (
                    <div className="step-content fade-in">
                        <div className="form-row">
                            {/* CEP */}
                            <div className="form-col col-small">
                                <label className="form-label-cadastro">CEP</label>
                                <input 
                                    name="cep" 
                                    value={formData.cep} 
                                    onChange={handleChange}
                                    type="text" 
                                    className="form-control-cadastro" 
                                    placeholder="00000-000" 
                                    maxLength={9}
                                />
                            </div>

                            {/* ESTADO (UF)*/}
                            <div className="form-col col-small">
                                <label className="form-label-cadastro">UF</label>
                                <select 
                                    name="estado" 
                                    value={formData.estado} 
                                    onChange={handleChange}
                                    className="form-control-cadastro"
                                    required
                                >
                                    <option value="">--</option>
                                    {estadosBr.map((uf) => (
                                        <option key={uf} value={uf}>{uf}</option>
                                    ))}
                                </select>
                            </div>

                            {/* CIDADE */}
                            <div className="form-col col-medium">
                                <label className="form-label-cadastro">Cidade</label>
                                <input 
                                    name="cidade" 
                                    value={formData.cidade} 
                                    onChange={handleChange}
                                    type="text" 
                                    className="form-control-cadastro" 
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-col col-large">
                                <label className="form-label-cadastro">Rua</label>
                                <input 
                                    name="rua" 
                                    value={formData.rua} 
                                    onChange={handleChange}
                                    type="text" 
                                    className="form-control-cadastro" 
                                />
                            </div>
                            <div className="form-col col-small">
                                <label className="form-label-cadastro">Número</label>
                                <input 
                                    name="numero" 
                                    value={formData.numero} 
                                    onChange={handleChange}
                                    type="text" 
                                    className="form-control-cadastro" 
                                />
                            </div>
                        </div>

                         <div className="form-row">
                             <div className="form-col">
                                <label className="form-label-cadastro">Bairro</label>
                                <input 
                                    name="bairro" 
                                    value={formData.bairro} 
                                    onChange={handleChange}
                                    type="text" 
                                    className="form-control-cadastro" 
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Exibição de Erros */}
                {erro && <div className="error-message">{erro}</div>}
                
                {/* BOTÕES DE AÇÃO */}
                <div className="button-group">
                    {step > 1 && (
                        <button type="button" onClick={prevStep} className="btn-voltar">
                            Voltar
                        </button>
                    )}

                    {step === 1 && (
                        <Link to="/" className="btn-cancelar">
                            Cancelar
                        </Link>
                    )}

                    {/* Botão único que muda de função dependendo da etapa */}
                    <button type="submit" className="btn-registrar" disabled={loading}>
                        {step < 3 ? 'Próximo' : (loading ? 'Cadastrando...' : 'Finalizar Cadastro')}
                    </button>
                </div>

            </form>
        </div>
      </div>
    </>
  );
}

export default Cadastro;