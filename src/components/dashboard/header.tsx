import React, { useEffect } from 'react'
import { Navbar, Container, Nav, Dropdown, Card } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { logOut } from '../../store/actions/auth-actions'
import { dashboard_routes } from '../../router/fws-path-locations'



const Header = (props: any) => {
    const dispatch = useDispatch();
     const location = useLocation();
    let userDetails: any = sessionStorage.getItem('user') || "";
    let user: any = JSON.parse(userDetails)|| ""

    return (
        <>
            <div className='header-styling'>
                <Navbar expand="lg" variant="light" className="nav iq-navbar">
                    <Container fluid className="navbar-inner">
                        <Link to="/dashboard" className="navbar-brand">

                            <h4 className="logo-title">{''}</h4>
                        </Link>

                        <Navbar
                            bg="light"
                            expand="lg"
                            variant="light"
                            className="fixed-top d-md-none d-block "
                            aria-label="Main navigation"
                        >
                            <Container fluid>
                                <Navbar.Brand>                   
                                     <h6 className="mb-0 caption-title fw-bold">{user?.userName}</h6>
                                        <p className="mb-0 caption-sub-title text-start">{user?.userType == 0 ? "Admin" : "Client"}</p>
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav justify-content-between me-0">
                                    <Nav as="ul" className=" me-auto mb-2 mb-lg-0">
                                        <Nav.Item as="li">
                                            <Nav.Link
                                                className={`${location.pathname === dashboard_routes.dashboard ? 'active' : ''}`}
                                                href={dashboard_routes.dashboard}
                                            >
                                                <div className='px-3'> Dashboard</div>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Nav.Link className={`${location.pathname === dashboard_routes.productsLocations.userList? 'active' : ''}`}
                                             href={dashboard_routes.productsLocations.userList}> <div className='px-3'> Products</div>
                                             </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Nav.Link className={`${location.pathname === dashboard_routes.documentation.documentationProducts? 'active' : ''}`}
                                             href={dashboard_routes.documentation.documentationProducts}> <div className='px-3'>Documentation</div>
                                             </Nav.Link>
                                        </Nav.Item>
                                        
                                        <Nav.Item as="li">
                                            <Nav.Link onClick={() => { dispatch(logOut()); window.location.href = "/sign-in" }}> <div className='px-3'> Log Out</div></Nav.Link>
                                        </Nav.Item>
                                    </Nav>

                                </Navbar.Collapse>
                            </Container>
                        </Navbar>


                        <Nav as="ul" className="mb-2 ms-auto navbar-list mb-lg-0">
                            <Dropdown as="li" className="nav-item">
                                <Dropdown.Toggle variant=" nav-link py-0 d-flex align-items-center" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="http://fwsapi.flaveconsole.com/ApplicationFiles/3361a39c-7f7f-433e-b82b-e0ba77e7b90c.png" alt="User-Profile" className="theme-color-default-img img-fluid avatar avatar-50 header-image" width="50px" height="50px" />

                                    <div className="caption ms-3 d-none d-md-block ">
                                        <h6 className="mb-0 caption-title fw-bold">{user?.userName}</h6>
                                        <p className="mb-0 caption-sub-title text-start">{user?.userType == 0 ? "Admin" : "Client"}</p>
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-end px-2" aria-labelledby="navbarDropdown">

                                    <Dropdown.Item onClick={() => {
                                        dispatch(logOut());
                                        window.location.href = "/fws-sign-in"
                                    }}> Logout </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>

                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default Header
