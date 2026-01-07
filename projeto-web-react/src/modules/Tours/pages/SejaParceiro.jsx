import Navbar from '../../../shared/components/Navbar';
import { useSejaParceiro } from '../hooks/useSejaParceiro';
import '../styles/seja-parceiro.css';

function SejaParceiro() {
  const { form, handleChange, handleSubmit, loading, erro } = useSejaParceiro();

  return (
    <>
      
      
      <div className="parceiro-wrapper">
        <div className="parceiro-card">
            
            <h2 className="parceiro-title">Torne-se um Parceiro</h2>
            <p className="parceiro-subtitle">
                Cadastre seus dados profissionais para começar a organizar e vender excursões na plataforma.
            </p>
            
            {erro && <div className="alert-erro">{erro}</div>}

            <form onSubmit={handleSubmit}>
                
                <div className="form-group">
                    <label>Biografia da Agência / Organizador</label>
                    <textarea 
                        name="bio" 
                        className="form-control-parceiro"
                        placeholder="Conte sua experiência com viagens..."
                        value={form.bio} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label>Chave PIX (Para receber pagamentos)</label>
                    <input 
                        type="text" 
                        name="chavePix" 
                        className="form-control-parceiro"
                        placeholder="CPF, Email ou Aleatória"
                        value={form.chavePix} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label>Instagram (Divulgação)</label>
                    <input 
                        type="text" 
                        name="linkInstagram" 
                        className="form-control-parceiro"
                        placeholder="@seu_perfil"
                        value={form.linkInstagram} 
                        onChange={handleChange} 
                    />
                </div>

                <button type="submit" className="btn-confirmar" disabled={loading}>
                    {loading ? 'Processando...' : 'Confirmar Parceria'}
                </button>
            </form>

        </div>
      </div>
    </>
  );
}

export default SejaParceiro;