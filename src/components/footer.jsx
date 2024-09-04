import logo1 from 'C:/Users/SUDA-Delfi/OneDrive/Escritorio/Pipis/pipisReact/src/assets/img/logo1.png';
import pipisLogo from 'C:/Users/SUDA-Delfi/OneDrive/Escritorio/Pipis/pipisReact/src/assets/img/pipis.png';
import panchi from 'C:/Users/SUDA-Delfi/OneDrive/Escritorio/Pipis/pipisReact/src/assets/img/panchi.png';
import yo from 'C:/Users/SUDA-Delfi/OneDrive/Escritorio/Pipis/pipisReact/src/assets/img/yo.png';
import Nav from './nav.jsx';


const footer = () => {
  return (
    <div className="footer">
     <div className="amarillo">
      <div>
      <img src={logo1} alt="pipi1" />
      <img src={pipisLogo} alt="pipi2" />
      <Nav/>
      </div>


      <div>
        <ul>
          <li>Terminos y condiciones</li>
          <li>Legal</li>
          <li>politica de privacidad</li>
          <li>accebility</li>
          <li>Preguntas y respuestas</li>
        </ul>

      </div>
     </div>
     <div className="mitad">
      <div className="azul">
        <img src={panchi} alt="panchi"/>
        <p>El es el inicio de Pipi’s 
        se llama panchito y es era un perrito callejero hasta que un dia decidio adoptarse solo y acompañarme a casa, y el resto es historia.</p>
      </div>
      
      <div className="abajo">
      <div className="blanco">
        <img src={yo} alt="" />
        <p> creado con amor por mi @duarte_ela</p>
      </div>
      <div className="negro">
      <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-figma"></i>
  </a>
  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-github"></i>
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="https://www.canva.com" target="_blank" rel="noopener noreferrer">
    <i className="fas fa-app"></i>
  </a>
      </div>
      </div>
     </div>
    </div>
  )
}

export default footer
