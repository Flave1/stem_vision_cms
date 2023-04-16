

import { useState } from 'react'
import Sidebar from './side-bar'
import "./dashboard.scss"
import Home from '../Landing-Page/home'
import Dashboard from './dashboard'
import Products from '../fws-admin/fws-product-list'
import AdminRouter from '../../router/administrator-router'

 const Index= () => {
    const [toggle, setToggle] = useState(true);
    const [activeMenu, setActiveMenu] = useState("")
    const Toggle = () => { setToggle(!toggle) }
    return (
        <div className='container-fluid bg-dashboard min-vh-100 '>
            <div className='row '>
                {toggle && 
                <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
                    <Sidebar setActiveMenu={setActiveMenu}/>
                </div>
                }
                {toggle && <div className='col-4 col-md-2'></div>}
                <div className='col'>
                {activeMenu  === ""  ?
                    <Dashboard  />
                    :
                    activeMenu  === "products" &&
                    <Products />
                }
                </div>
            </div>
            <AdminRouter />
        </div>
        )
}
export default Index