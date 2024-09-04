import React from 'react';
import productsData from './productsData.jsx';

// Función para mezclar el array (Fisher-Yates Shuffle)
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Componente combinado CardList
const Cards = () => {
  // Mezcla aleatoria de productos
  const shuffledProducts = shuffleArray([...productsData]);

  return (
    <div className="cards">
      <div className="cards-container">
        {shuffledProducts.map((card) => (
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
