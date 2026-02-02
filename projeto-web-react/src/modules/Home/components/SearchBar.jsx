import React from 'react';
import '../styles/searchbar.css';

const SearchBar = ({ busca, setBusca }) => {
    
    const handleSearch = () => {
        const section = document.getElementById('tours-section');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="search-bar-wrapper">
            <div className="search-bar-container shadow-lg">
                <form 
                    className="d-flex align-items-center w-100" 
                    onSubmit={(e) => {
                        e.preventDefault(); 
                        handleSearch();
                    }}
                >
                    
                    <span className="ps-4 pe-2 text-primary">
                        <i className="bi bi-search fs-5 p-2"></i>
                    </span>

                    <input 
                        type="text" 
                        className="form-control border-0 py-3 shadow-none custom-input" 
                        placeholder="Para onde vamos?"
                        value={busca} 
                        onChange={(e) => setBusca(e.target.value)} 
                    />

                    <button 
                        type="button" 
                        onClick={handleSearch}
                        className="btn btn-primary rounded-pill px-4 py-2 me-2 fw-bold"
                    >
                        Buscar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;