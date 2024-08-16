import React from 'react';
import productsData from './productsData.jsx';


// Componente combinado CardList
const Cards = () => {
    return (
   <div className="cards">
         <div className="cards-container">
            {productsData.map((card) => (
                <div className="card" key={card.id}>
                    <img src={card.imagen} alt={card.nombre} className="card-img" />
                    <div className="card-content">
                        <h3 className="card-title">{card.nombre}</h3>
                        <p className="card-category">{card.categoria}</p>
                        <div className="card-rating">
                            <span className="rating-score">{card.puntuacion} ★</span>
                            <span className="reviews">({card.reviews} reviews)</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
   </div>
    );
};

export default Cards;
