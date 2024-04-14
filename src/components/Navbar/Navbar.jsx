import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../public/logo-studyshop.jpg'; // Importa tu logo aquí
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';  

const Navbar = () => {
  // const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // const toggleSearch = () => setSearchOpen(!searchOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
    <div className="container mt-1">
        <p className="text-center m-0">Abonando mediante transferencia bancaria, tenes un 10% OFF.</p>
    </div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="STUDYSHOP" style={{ maxWidth: '200px' }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu">
            <li className="nav-item">
              <Link className="nav-link menu" to="/" onClick={toggleMenu}>INICIO</Link>
            </li>
            <NavDropdown to="" title="PRODUCTOS" id="basic-nav-dropdown" className='menu'>
              <NavDropdown.Item href="/categoria/producto1" className='menu-dropdown'>Prod 1</NavDropdown.Item>
              <NavDropdown.Item href="/categoria/producto2" className='menu-dropdown'>Prod 2</NavDropdown.Item>
              <NavDropdown.Item href="/categoria/producto3" className='menu-dropdown'>Prod 3</NavDropdown.Item>
              <NavDropdown.Item href="/categoria/producto4" className='menu-dropdown'>Prod 4</NavDropdown.Item>              
            </NavDropdown>
            <li className="nav-item">
              <Link className="nav-link menu" to="/informacion" onClick={toggleMenu}>INFORMACIÓN</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link menu" to="/contacto" onClick={toggleMenu}>CONTACTO</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <div className="me-3">
              <div className="position-relative">
                <FontAwesomeIcon icon={faSearch} style={{ cursor: 'pointer' }} />
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="me-3">
                <FontAwesomeIcon icon={faUser} style={{ cursor: 'pointer' }} />
              </div>
              <div>
                <FontAwesomeIcon icon={faShoppingCart} style={{ cursor: 'pointer' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;