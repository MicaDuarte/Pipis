
import pipisLogo from 'C:/Users/SUDA-Delfi/OneDrive/Escritorio/Pipis/pipisReact/src/assets/img/pipis1.png';

 const Busqueda = () => {
    return <div className='heroCentro'>
        <img src={pipisLogo} className="logoPrincipal" alt="Pipi's Logo" />
        <form action="" className="serchBarPr">
        <button type="submit" >
        <span className="material-icons">search</span>
        </button>
        <input type="text" />
        
      </form> 
      
    </div>
}

export default Busqueda;