import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../img/logo/logo-4.png'
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="navbar-bg" variant="dark" sticky="top">
  <Container>
  <Navbar.Brand as={NavLink} to="/home"><img src={logo} width='125px' alt="" /></Navbar.Brand>
  <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse  id="responsive-navbar-nav">
    <Nav className="me-auto ">
      <Nav.Link as={Link} to="/home" className="text-dark">Home</Nav.Link>
      <Nav.Link as={HashLink}  to="/home#services" className="text-dark">Services</Nav.Link>
      <Nav.Link as={Link} to="/contact" className="text-dark">Contact</Nav.Link>
    </Nav>
    <Navbar/>
    <Navbar.Collapse className="justify-content-end">
    { user?.email?<>
        <Nav.Link as={Link} to="/myorders" className="text-dark">My Orders</Nav.Link>
        <Nav.Link as={Link} to="/manageorders" className="text-dark">Manage All Orders</Nav.Link>
        <Nav.Link as={Link} to="/addnewservice" className="text-dark">Add New Service</Nav.Link>
        <Navbar.Text className="text-dark">
            <a className="text-dark" href="#login">{user?.displayName}</a>
         </Navbar.Text>
        <Navbar.Text className="text-dark">
            <img src={user?.photoURL} alt="" className="rounded-circle img-size2" />
         </Navbar.Text>
         <Button onClick={logOut} variant="dark" className="ms-1">LogOut</Button></>:
       <Nav.Link as={Link} to="/login" className="nav-style me-2 fs-5 fw-bold">Login</Nav.Link> }   
    </Navbar.Collapse>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;