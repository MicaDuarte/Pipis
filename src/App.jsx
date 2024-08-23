
import './assets/css/App.css';
import Navbar from './components/navbar.jsx';
import Busqueda from './components/Busqueda.jsx';
import Novedades from './components/novedades.jsx';
import Categorias from './components/categorias.jsx';
import Cards from './components/cards.jsx';
import Footer from './components/footer.jsx';

function App() {


  return (
    <>
    <div className='hero'>
      <Navbar/> 
      <Busqueda/>
    </div>
    <Novedades/>
    <Categorias/>
    <Cards/>
    <Footer/>

    </>
  )
}

export default App
