import React, { useState } from 'react';
import Reco from './Reco.jsx';

const categoriasData = [
    "Todos",
    "Ofertas", 
    "Novedades", 
    "Perros", 
    "Gatos", 
    "Peces",
    "Aves",
    "Reptiles",
    "Juguetes",
    "Alimento",
    "Accesorios",
    "Higiene y cuidado",
    "...",
    "...",
    "..."
];

const Categorias = () => {
    // Estado para la categoría seleccionada
    const [selectedCategory, setSelectedCategory] = useState("Todos");

    return (
        <div className='cate'>
            <div className="cate2">
                
                <Reco text="Recomendaciones" subtext="Busca por categorías"/>
                    
              
                <ul>
                    {categoriasData.map((categoria, index) => (
                        <li key={index} className="categoria-item">
                            <button
                                onClick={() => setSelectedCategory(categoria)}
                                className={selectedCategory === categoria ? 'active' : ''}
                            >
                                {categoria}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Categorias;
