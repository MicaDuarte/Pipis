import { Route, Routes } from "react-router-dom";
import "./Styles/App.css";
import Navbar from './Components/Navbar.jsx';
import Busqueda from './Components/Busqueda.jsx';
import Novedades from './Components/novedades.jsx';
import Categorias from './Components/categorias.jsx';
import Cards from './Components/Card.jsx';
import Footer from './Components/Footer.jsx';

import Cart from "./Pages/Cart.jsx";
import Login from "./Pages/Login.jsx";
import Detail from "./Pages/Detail.jsx";

function App() {


  return (
    <>
    <div className='hero'>
      <Navbar/> 
      <Busqueda/>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
    <Novedades/>
    <Categorias/>
    <Cards/>
    <Footer/>

    </>
  )
}

export default App
