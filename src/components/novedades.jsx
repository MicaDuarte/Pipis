import React, { useEffect } from 'react';
import productsData from './productsData.jsx';
import Reco from './Reco.jsx';

const Novedades = () => {
  const productosNovedad = productsData.filter(producto => producto.novedad === "si");

  useEffect(() => {
    const scrollLeftButton = document.getElementById('scroll-left');
    const scrollRightButton = document.getElementById('scroll-right');
    const container = document.querySelector('.cards-container2');

    scrollLeftButton.onclick = () => {
      container.scrollBy({
        left: -800, 
        behavior: 'smooth' 
      });
    };

    scrollRightButton.onclick = () => {
      container.scrollBy({
        left: 800,
        behavior: 'smooth' 
      });
    };
  }, []);

  return (
    <div className='cate'>
       <div className="cate2">
        <Reco text="Novedades" subtext="Chusmea los nuevos ingresos"/>
       </div>
        <div className="cards">
            <div className="cards-container2">
                {productosNovedad.map(producto => (
                    <div key={producto.id} className="card2">
                        <div className='imgNovedades' >
                        <img src={producto.imagen} alt={producto.nombre} />
                        </div>
                        
                        <div className='textNovedades'>
                        <h2>{producto.nombre}</h2>
                        <p className='descNov'>{producto.descripcion}</p>
                        <span className="rating-score">{producto.puntuacion} ★</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="scroll-buttons">
            <button id="scroll-left">&lt;</button>
            <button id="scroll-right">&gt;</button>
        </div>
    </div>
  );
};

export default Novedades;
