

import { useState } from 'react'
import Sidebar from './side-bar'
import "./dashboard.scss"
import { useLocation } from 'react-router-dom'
import AdminRouter from '../../router/administrator-router'

const AdministrationIndex = () => {
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
                    <AdminRouter />

                </div>
            </div>

        </div>
    )
}
export default AdministrationIndex