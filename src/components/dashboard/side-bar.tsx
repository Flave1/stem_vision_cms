
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Accordion } from 'react-bootstrap'
import { dashboard_routes } from '../../router/fws-path-locations'
import { useDispatch } from 'react-redux'
import { app_routes } from '../../router/routes'
import { logOut } from '../../store/actions/auth-actions'
import Logo from '../../utils/logo'
import { useOutletContext } from "react-router-dom";


const Sidebar = (props: any) => {
    //location
    let dispatch = useDispatch();
    let location = useLocation();
    const navigate = useNavigate();
    return (
        <>

            <h3 className='m-3 '><Logo color={"blue"} /> FWS</h3>

            <Accordion as="ul" className="navbar-nav iq-main-menu mt-4">

                <li className="nav-item">
                    <Link className={`${location.pathname === dashboard_routes.dashboard ? 'active' : ''} nav-link px-4`} aria-current="page" to={dashboard_routes.dashboard} onClick={() => { }}>
                        <i className="icon">
                            <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M16.0756 2H19.4616C20.8639 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8639 10.5345 19.4616 10.5345H16.0756C14.6734 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6734 2 16.0756 2Z" fill="currentColor"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z" fill="currentColor"></path>
                            </svg>
                        </i>
                        <span className="item-name px-2">Dashboard</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className={`${location.pathname === dashboard_routes.productsLocations.userList ? 'active' : ''} nav-link px-4`} aria-current="page" to={`${dashboard_routes.productsLocations.userList}`} onClick={() => { }} >
                        <i className="icon">
                            <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M10.0833 15.958H3.50777C2.67555 15.958 2 16.6217 2 17.4393C2 18.2559 2.67555 18.9207 3.50777 18.9207H10.0833C10.9155 18.9207 11.5911 18.2559 11.5911 17.4393C11.5911 16.6217 10.9155 15.958 10.0833 15.958Z" fill="currentColor"></path>
                                <path opacity="0.4" d="M22.0001 6.37867C22.0001 5.56214 21.3246 4.89844 20.4934 4.89844H13.9179C13.0857 4.89844 12.4102 5.56214 12.4102 6.37867C12.4102 7.1963 13.0857 7.86 13.9179 7.86H20.4934C21.3246 7.86 22.0001 7.1963 22.0001 6.37867Z" fill="currentColor"></path>
                                <path d="M8.87774 6.37856C8.87774 8.24523 7.33886 9.75821 5.43887 9.75821C3.53999 9.75821 2 8.24523 2 6.37856C2 4.51298 3.53999 3 5.43887 3C7.33886 3 8.87774 4.51298 8.87774 6.37856Z" fill="currentColor"></path>
                                <path d="M21.9998 17.3992C21.9998 19.2648 20.4609 20.7777 18.5609 20.7777C16.6621 20.7777 15.1221 19.2648 15.1221 17.3992C15.1221 15.5325 16.6621 14.0195 18.5609 14.0195C20.4609 14.0195 21.9998 15.5325 21.9998 17.3992Z" fill="currentColor"></path>
                            </svg>
                        </i>
                        <span className="item-name px-2">Products</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className={`${location.pathname === dashboard_routes.documentation.documentationProducts ? 'active' : ''} nav-link px-4`} aria-current="page" to={`${dashboard_routes.documentation.documentationProducts}`} onClick={() => { }} >
                        <i className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20"  viewBox="0 0 24 24">
                                <path d="M7 22v-16h14v7.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-5.362zm16-7.614v-10.386h-18v20h8.189c3.163 0 9.811-7.223 9.811-9.614zm-10 1.614h-4v-1h4v1zm6-4h-10v1h10v-1zm0-3h-10v1h10v-1zm1-7h-17v19h-2v-21h19v2z" />
                                </svg>
                        </i>
                        <span className="item-name px-2">Documentation</span>
                    </Link>
                </li>
                <Accordion.Item as="li" eventKey="horizontal-menu" bsPrefix="nav-item" >
                          
                        <i className="icon">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8.53162 2.93677C10.7165 1.66727 13.402 1.68946 15.5664 2.99489C17.7095 4.32691 19.012 6.70418 18.9998 9.26144C18.95 11.8019 17.5533 14.19 15.8075 16.0361C14.7998 17.1064 13.6726 18.0528 12.4488 18.856C12.3228 18.9289 12.1848 18.9777 12.0415 19C11.9036 18.9941 11.7693 18.9534 11.6508 18.8814C9.78243 17.6746 8.14334 16.134 6.81233 14.334C5.69859 12.8314 5.06584 11.016 5 9.13442C4.99856 6.57225 6.34677 4.20627 8.53162 2.93677ZM9.79416 10.1948C10.1617 11.1008 11.0292 11.6918 11.9916 11.6918C12.6221 11.6964 13.2282 11.4438 13.6748 10.9905C14.1214 10.5371 14.3715 9.92064 14.3692 9.27838C14.3726 8.29804 13.7955 7.41231 12.9073 7.03477C12.0191 6.65723 10.995 6.86235 10.3133 7.55435C9.63159 8.24635 9.42664 9.28872 9.79416 10.1948Z" fill="currentColor"></path><ellipse opacity="0.4" cx="12" cy="21" rx="5" ry="1" fill="currentColor"></ellipse></svg>
                        </i>
                        <span className="item-name">Locations</span>
                        <i className="right-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </i>
               
                    <Accordion.Collapse eventKey="sidebar-user">
                        <ul className="sub-nav">
                            <li className="nav-item">
                            <Link className={`${location.pathname === dashboard_routes.locationLocations.country ? 'active' : ''} nav-link `} aria-current="page" to={dashboard_routes.locationLocations.country} onClick={() => {}}>
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <i className="sidenav-mini-icon"> C </i>
                                    <span className="item-name">Country</span>
                                </Link>
                            </li>

                        </ul>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="sidebar-user">
                        <ul className="sub-nav">
                            <li className="nav-item">
                            <Link className={`${location.pathname === dashboard_routes.locationLocations.state ? 'active' : ''} nav-link `} aria-current="page" to={dashboard_routes.locationLocations.state} onClick={() => {}}>
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <i className="sidenav-mini-icon"> S </i>
                                    <span className="item-name">State</span>
                                </Link>
                            </li>

                        </ul>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="sidebar-user">
                        <ul className="sub-nav">
                            <li className="nav-item">
                            <Link className={`${location.pathname === dashboard_routes.locationLocations.city ? 'active' : ''} nav-link `} aria-current="page" to={dashboard_routes.locationLocations.city} onClick={() => {}}>
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <i className="sidenav-mini-icon"> C </i>
                                    <span className="item-name">City</span>
                                </Link>
                            </li>

                        </ul>
                    </Accordion.Collapse>
                </Accordion.Item>

                <li className="nav-item">
                    <a className={`${location.pathname === app_routes.index ? 'active' : ''} nav-link px-4`} aria-current="page"
                        onClick={() => {
                            dispatch(logOut());
                            window.location.href = "/sign-in"
                        }} >
                        <i className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24"><path d="M16 10v-5l8 7-8 7v-5h-8v-4h8zm-16-8v20h14v-2h-12v-16h12v-2h-14z" /></svg>
                        </i>
                        <span className="item-name px-2">Logout</span>
                    </a>
                </li>

            </Accordion>

        </>

    )
}
export default Sidebar