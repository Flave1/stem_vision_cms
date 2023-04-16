

import { useState } from 'react'
import Sidebar from './side-bar'
import "./dashboard.scss"
import Home from '../Landing-Page/home'
import Dashboard from './dashboard'
import Products from '../fws-admin/fws-product-list'
import { Outlet, useLocation } from 'react-router-dom'
import { dashboard_routes } from '../../router/fws-path-locations'

 const Index= () => {
    const [toggle, setToggle] = useState(true);
    const [activeMenu, setActiveMenu] = useState(false)
    const Toggle = () => { setToggle(!toggle) }
    let location = useLocation();
    
    return (
        <div className='container-fluid bg-dashboard min-vh-100 '>
            <div className='row '>
                {toggle && 
                <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
                    <Sidebar />
                </div>
                }
                {toggle && <div className='col-4 col-md-2'></div>}
                <div className='col'>
               {location.pathname === dashboard_routes.dashboard  ?
                    <Dashboard />
                    :
                   <Outlet />
                } 
                
                </div>
            </div>
          
        </div>
        )
}
export default Index