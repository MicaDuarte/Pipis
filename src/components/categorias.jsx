import React, { useState } from 'react';

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
                <div className="reco2">
                    <div className="reco">
                        <div className="dot"></div>
                        <p>Recomendaciones</p>
                    </div>

                    <h3>Busca por categorías</h3>
                </div>
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
