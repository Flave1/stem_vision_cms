import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { app_routes } from '../../router/routes';

const HomeHeader = () => {
    const location = useLocation();

    
  return (
    <>
    <header id="header" className="d-flex align-items-center fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
  
        <h1 className="logo"><a href="index.html">Flaveconsole<span>..</span></a></h1>
       
  
      
       <Navbar  expand="lg">
        <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav justify-content-between me-0">
          <Nav as="ul" className="nav-bar me-auto mb-2 mb-lg-0">
            <Nav.Link href="/"className={` scrollto ${location.hash ==''&& location.pathname == '/' && 'active'}`}>Home</Nav.Link>
            <Nav.Link href="#about"className={`scrollto ${location.hash =='#about'&& 'active'}`}>About</Nav.Link>
            <Nav.Link href="#services" className={` scrollto ${location.hash =='#services'&& 'active'}`} >Services</Nav.Link>
            <Nav.Link href="http://cbt.flavetechs.com/"className={`scrollto ${location.hash =='#cbt'&& 'active'}`} target={'_blank'}>CBT</Nav.Link>
            <Nav.Link href="#contact" className={`scrollto ${location.hash =='#contact'&& 'active'}`} >Contact</Nav.Link>
            <Nav.Link href={app_routes.authentication.sign_in} className={` scrollto ${location.pathname == app_routes.authentication.sign_in && 'active'}`} >Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  
      </div>
    </header>
    </>
  )
}

export default HomeHeader