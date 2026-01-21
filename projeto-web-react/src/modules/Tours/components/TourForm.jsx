import '../styles/tour-form.css';
import { useTourForm } from '../hooks/useTourForm';

function TourForm({ onSubmit, isLoading }) {
 
  const { 
      formData, 
      preview, 
      handleChange, 
      handleRemoveImage, 
      handleSubmit,
      navigate 
  } = useTourForm(onSubmit);

  return (
    <form className="tour-form" onSubmit={handleSubmit}>
      
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="titulo" className="form-label">Título da Viagem</label>
          <input 
            type="text" 
            className="form-control" 
            id="titulo" 
            name="titulo" 
            placeholder="Ex: Excursão Chapada" 
            value={formData.titulo} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="destino" className="form-label">Destino</label>
          <input 
            type="text" 
            className="form-control" 
            id="destino" 
            name="destino" 
            placeholder="Ex: Lençóis - BA" 
            value={formData.destino} 
            onChange={handleChange} 
            required 
          />
        </div>
      </div>

     <div className="mb-4">
        <label className="form-label">Foto de Capa</label>
        <div className="image-upload-container">
            <input 
                type="file" 
                id="imagem-upload" 
                name="imagem"
                accept="image/*"
                onChange={handleChange}
                className="hidden-input"
            />
            
            <label htmlFor="imagem-upload" className="upload-box-label">
                {preview ? (
                    <div className="preview-container">
                        <img src={preview} alt="Pré-visualização" className="preview-image" />
                        <button 
                            type="button" 
                            className="btn-remove-image" 
                            onClick={handleRemoveImage}
                            title="Remover imagem"
                        >
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </div>
                ) : (
                    <div className="placeholder-content">
                        <i className="bi bi-cloud-arrow-up-fill placeholder-icon"></i>
                        <p className="mb-0 fw-bold">Clique para enviar a imagem</p>
                        <small className="text-muted">JPG, PNG ou WEBP</small>
                    </div>
                )}
            </label>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="descricao" className="form-label">Descrição do Roteiro</label>
        <textarea 
            className="form-control" 
            id="descricao" 
            name="descricao" 
            rows="4" 
            value={formData.descricao} 
            onChange={handleChange} 
            required
        ></textarea>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="dataPartida" className="form-label">Data de Partida</label>
          <input 
            type="datetime-local" 
            className="form-control" 
            id="dataPartida" 
            name="dataPartida" 
            value={formData.dataPartida} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="dataRetorno" className="form-label">Data de Retorno</label>
          <input 
            type="datetime-local" 
            className="form-control" 
            id="dataRetorno" 
            name="dataRetorno" 
            value={formData.dataRetorno} 
            onChange={handleChange} 
            required 
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-4">
          <label htmlFor="preco" className="form-label">Preço (R$)</label>
          <input 
            type="number" 
            step="0.01" 
            min="0" 
            className="form-control" 
            id="preco" 
            name="preco" 
            placeholder="0.00" 
            value={formData.preco} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="vagasTotais" className="form-label">Vagas Totais</label>
          <input 
            type="number" 
            min="0" 
            className="form-control" 
            id="vagasTotais" 
            name="vagasTotais" 
            placeholder="40" 
            value={formData.vagasTotais} 
            onChange={handleChange} 
            required 
          />
        </div>
      </div>

      <div className="text-end mt-4">
        <button 
            type="button" 
            className="btn btn-outline-secondary btn-lg px-4 me-3 m-2" 
            onClick={() => navigate('/gerir-roteiros')} 
            disabled={isLoading}
        >
          Cancelar
        </button>
        <button 
            type="submit" 
            className="btn btn-primary btn-lg px-5 m-2"
            disabled={isLoading}
        >
            {isLoading ? (
                <>
                   <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                   Salvando...
                </>
            ) : (
                <>
                   <i className="bi bi-save me-2"></i> Salvar Viagem
                </>
            )}
        </button>
      </div>

    </form>
  );
}

export default TourForm;