import '../styles/components-styles/searchbar.css';

function SearchBar() {
  return (
    
    <div className="search-bar-container d-flex align-items-center justify-content-between">
      
      {/* 1. Campo: Destino */}
      <div className="input-group-custom">
       
        <i className="bi bi-geo-alt input-icon"></i>
        <input 
            type="text" 
            placeholder="Para onde você quer ir?" 
            className="form-control-custom"
        />
      </div>

      <div className="divider d-none d-md-block"></div>

      {/* 2. Campo: Data */}
      <div className="input-group-custom">
        
        <i className="bi bi-calendar-event input-icon"></i>
        <input 
            type="date" 
            className="form-control-custom text-secondary"
           
        />
      </div>

      {/* 3. Botão Buscar */}
      <button className="btn-search-hero">
        Buscar Roteiro
      </button>

    </div>
  );
}

export default SearchBar;