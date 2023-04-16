import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { app_routes } from '../../router/routes';
import "./landing.css"
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';

const HomeHeader = () => {
  const location = useLocation();


  return (
    <>

    {/* up bar */}
    {/* <section id="topbar" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:flaveconosole@gmail.com">flaveconosole@gmail.com</a></i>
            <i className="bi bi-phone d-flex align-items-center ms-4"><span>+234 7067650531</span></i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <a href=""><AiOutlineTwitter size={20} color='white' /></a>
            <a href=""><BsFacebook size={20} color='white' /></a>
            <a href=""><BsInstagram size={20} color='white' /></a>
            <a href=""><BsLinkedin size={20} color='white' /></a>
          </div>
        </div>
      </section> */}
    {/* up bar */}

     {/* fixed-top */}
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">

          <h1 className="logo"><a href="index.html">Flaveconsole<span>..</span></a></h1>
          <Navbar expand="lg">
            <Container fluid>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav justify-content-between me-0">
                <Nav as="ul" className="nav-bar me-auto mb-2 mb-lg-0">
                  <Nav.Link href="/" className={` scrollto ${location.hash == '' && location.pathname == '/' && 'active'}`}>Home</Nav.Link>
                  <Nav.Link href={app_routes.about_us} className={`scrollto ${location.hash == app_routes.about_us && 'active'}`}>About</Nav.Link>
                  <Nav.Link href="#featured-services" className={` scrollto ${location.hash == '#services' && 'active'}`} >Services</Nav.Link>
                  <Nav.Link href={app_routes.contact_us} className={`scrollto ${location.hash == app_routes.contact_us && 'active'}`} >Contact</Nav.Link>
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