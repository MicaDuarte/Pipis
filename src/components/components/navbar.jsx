import { useState } from 'react';
import BusquedaNavbar from './BusquedaNavbar';
import MeGustas from './MeGustas';
import Carrito from './Carrito';
import Nav from './nav';
import logo1 from 'C:/Users/SUDA-Delfi/OneDrive/Escritorio/Pipis/pipis/src/assets/img/logo1.png';
import pipisLogo from 'C:/Users/SUDA-Delfi/OneDrive/Escritorio/Pipis/pipis/src/assets/img/pipis.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='navbar'>
            <div className="logos">
                <img src={logo1} alt="Logo 1" className="logo"/>
                <img src={pipisLogo} className="logo2" alt="Pipi's Logo" />
            </div>

            <Nav/>

            <div className='derecha'>
                <BusquedaNavbar />
                
                <MeGustas />
                <Carrito />
            </div>

            {}
            <button className="menu-btn" onClick={toggleMenu}>
                ☰ {}
            </button>

            {}
            {menuOpen && (
                <div className="dropdown-menu">
                    <BusquedaNavbar />
                    <MeGustas />
                    <Carrito />
                </div>
            )}
        </div>
    );
}

export default Navbar;
