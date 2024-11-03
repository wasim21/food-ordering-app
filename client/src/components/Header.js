import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaUtensils, FaShoppingCart, FaUser } from 'react-icons/fa'; // Import icons
import { GiFoodTruck } from 'react-icons/gi'; 
import LoginSignupModal from './LoginSignup';
import './Header.css'; // Import CSS file for styling
import React, { useState } from 'react';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="header-navbar">
        <Navbar.Brand as={Link} to="/" className="app-name">
          <GiFoodTruck style={{ marginRight: '8px' }} /> {/* Icon next to the app name */}
          SnapEats
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-links">
            <Nav.Link as={Link} to="/">
              <FaHome style={{ marginRight: '5px' }} /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/menu">
              <FaUtensils style={{ marginRight: '5px' }} /> Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <FaShoppingCart style={{ marginRight: '5px' }} /> Cart
            </Nav.Link>
            {/* Add the Login/Signup button */}
            <Button variant="outline-light" onClick={handleShow} style={{ marginLeft: '10px' }}>
              <FaUser style={{ marginRight: '5px' }} /> Login/Signup
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* Login/Signup modal */}
      <LoginSignupModal show={showModal} handleClose={handleClose} />
    </>
  );
};

export default Header;
