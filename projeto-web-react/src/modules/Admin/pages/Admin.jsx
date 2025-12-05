import Navbar from '../../../shared/components/Navbar';
import '../styles/tela-adm.css';

function Admin() {
  return (
    <>
      <Navbar />
      <div className="container mt-5"> {/* Adicionei mt-5 para dar espaço do topo */}
        <h1>Administração de Usuários</h1>
        
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nome</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Status</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
            
                <tr>
                    <th scope="row">1</th>
                    <td>Mari Dourado</td>
                    <td>mari.d@ficticio.com</td>
                    <td>Ativo</td>
                    <td>
                         <button type="button" className="btn btn-outline-primary me-2">Editar</button>
                         <button type="button" className="btn btn-outline-danger m-1">Excluir</button> 
                    </td>
                </tr>

                <tr>
                    <th scope="row">2</th>
                    <td>Rodrigo Almeida</td>
                    <td>rodrigo.a@ficticio.com</td>
                    <td>Ativo</td>
                    <td>
                         <button type="button" className="btn btn-outline-primary me-2">Editar</button>
                         <button type="button" className="btn btn-outline-danger m-1">Excluir</button> 
                    </td>
                </tr>

                <tr>
                    <th scope="row">3</th>
                    <td>Jonatas Bastos</td>
                    <td>jonatas.b@ficticio.com</td>
                    <td>Ativo</td>
                    <td>
                         <button type="button" className="btn btn-outline-primary me-2">Editar</button>
                         <button type="button" className="btn btn-outline-danger m-1">Excluir</button> 
                    </td>
                </tr>

            </tbody>
        </table>
      </div>
    </>
  );
}

export default Admin;