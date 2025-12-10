import Navbar from '../../../shared/components/Navbar';
import '../styles/cadastro.css'; 

function Cadastro() {
  return (
    <>
      <Navbar />

      <div className="cadastro-wrapper">
        <div className="cadastro-box">
            
            <h1 className="cadastro-title">Cadastro de Usuário</h1>
            
            <form>
                {/* Linha 1: Nome e CPF */}
                <div className="form-row">
                    <div className="form-col">
                        <label className="form-label-cadastro">Nome</label>
                        <input type="text" className="form-control-cadastro" placeholder="Ex: João Silva" />
                    </div>
                    <div className="form-col">
                        <label className="form-label-cadastro">CPF</label>
                        <input type="text" className="form-control-cadastro" placeholder="000.000.000-00" />
                    </div>
                </div>

                {/* Linha 2: Telefone e Email */}
                <div className="form-row">
                    <div className="form-col">
                        <label className="form-label-cadastro">Telefone</label>
                        <input type="text" className="form-control-cadastro" placeholder="(00) 00000-0000" />
                    </div>
                    <div className="form-col">
                        <label className="form-label-cadastro">Email</label>
                        <input type="email" className="form-control-cadastro" placeholder="exemplo@email.com" />
                    </div>
                </div>

                {/* Seção Endereço */}
                <h3 className="section-title">Endereço</h3>

                {/* Linha 3: CEP, Cidade, Bairro */}
                <div className="form-row">
                    <div className="form-col col-small">
                        <label className="form-label-cadastro">CEP</label>
                        <input type="text" className="form-control-cadastro" placeholder="00000-000" />
                    </div>
                    <div className="form-col col-medium">
                        <label className="form-label-cadastro">Cidade</label>
                        <input type="text" className="form-control-cadastro" />
                    </div>
                    <div className="form-col col-medium">
                        <label className="form-label-cadastro">Bairro</label>
                        <input type="text" className="form-control-cadastro" />
                    </div>
                </div>

                {/* Linha 4: Rua e Número */}
                <div className="form-row">
                    <div className="form-col col-large">
                        <label className="form-label-cadastro">Rua</label>
                        <input type="text" className="form-control-cadastro" />
                    </div>
                    <div className="form-col col-small">
                        <label className="form-label-cadastro">Número</label>
                        <input type="text" className="form-control-cadastro" />
                    </div>
                </div>

                
                <div className="button-group">
                    <button type="submit" className="btn-registrar">
                        Cadastrar
                    </button>
                    <button type="button" className="btn-cancelar">
                        Cancelar
                    </button>
                </div>

            </form>

        </div>
      </div>

    </>
  );
}

export default Cadastro;