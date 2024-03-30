// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from '../../../public/logo-studyshop.jpg'
// import './Navegar.css'
// import { Link } from 'react-router-dom';
// import { Button, Col, Form, Row } from 'react-bootstrap';

// function Navegar() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary navbar-general">
//       <Nav.Link href="#home">
//         <div>
//           <img src={logo} className='logoHeader'></img>
//         </div>
//       </Nav.Link>
//       <Container className='contenedor-navbar'>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto items-navbar">
//             <Nav.Link href="#home" className='menu'>Inicio</Nav.Link>
//             <NavDropdown title="Productos" id="basic-nav-dropdown" className='menu'>
//               <NavDropdown.Item href="#" className='menu-dropdown'>Prod 1</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#" className='menu-dropdown'>Prod 2</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#" className='menu-dropdown'>Prod 3</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#" className='menu-dropdown'>Prod4</NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#link" className='menu'>Información</Nav.Link>
//             <Nav.Link href="#link" className='menu'>Contacto</Nav.Link>
//           </Nav>  
//             <Form inline>
//               <Row>
//                 <Col xs="auto">
//                   <Form.Control
//                     type="text"
//                     placeholder="Search"
//                     className=" mr-sm-2"
//                   />
//                 </Col>
//                 <Col xs="auto">
//                   <div className='icono-buscar'>
//                     <Link className='icono-buscar-link'>
//                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-5 h-5">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
//                       </svg>
//                       Buscar
//                     </Link>
//                   </div>
//                 </Col>
//               </Row>
//             </Form>
//             <div className='icono-header'>
//               <Link>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//                 </svg>
//               </Link>
//             </div>
//             <div className='icono-header'>
//               <Link>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
//                 </svg>
//               </Link>
//             </div>
          
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Navegar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../public/logo-studyshop.jpg'; // Importa tu logo aquí
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navegar.css'
import 'bootstrap/dist/css/bootstrap.min.css';  

const NavigationBar = () => {
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
            <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown" className='menu'>
              <NavDropdown.Item href="#" className='menu-dropdown'>Prod 1</NavDropdown.Item>
              <NavDropdown.Item href="#" className='menu-dropdown'>Prod 2</NavDropdown.Item>
              <NavDropdown.Item href="#" className='menu-dropdown'>Prod 3</NavDropdown.Item>
              <NavDropdown.Item href="#" className='menu-dropdown'>Prod4</NavDropdown.Item>              
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

export default NavigationBar;