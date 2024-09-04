
import React from 'react';
import '../Styles/App.css'; // Si tienes estilos específicos para este componente



const Reco = ({ text, subtext }) => {
  return (
    <div className="reco2">
        <div className="reco">
      <div className="dot"></div>
      <p>{text}</p>
    </div>
    <h3>{subtext}</h3>
    </div>
  );
};

export default Reco;
