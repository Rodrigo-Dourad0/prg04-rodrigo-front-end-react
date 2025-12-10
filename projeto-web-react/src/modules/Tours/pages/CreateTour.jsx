import Navbar from '../../../shared/components/Navbar';
import TourForm from '../components/TourForm';

function CreateTour() {
  
  const handleCreateTour = (tourData) => {
    // Conexão com o backend no futuro
    console.log("Dados prontos para envio:", tourData);
    alert("Teste: Viagem pronta para ser enviada! (Verifique o console F12)");
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            
            <h2 className="text-center mb-4 fw-bold" style={{ color: '#2c3e50' }}>
              Cadastrar Nova Viagem
            </h2>
            
            <div className="card shadow-sm border-0 rounded-3">
              <div className="card-body p-4 p-md-5">
                <TourForm onSubmit={handleCreateTour} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default CreateTour;