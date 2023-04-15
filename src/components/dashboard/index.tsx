

import { useState } from 'react'
import Sidebar from './side-bar'
import Home from './home'

 const Index= () => {
    const [toggle, setToggle] = useState(true)
    const Toggle = () => { setToggle(!toggle) }
    return (
        <div className='container-fluid bg-secondary min-vh-100 '>
            <div className='row '>
                {toggle && 
                <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
                    <Sidebar />
                </div>
                }
                {toggle && <div className='col-4 col-md-2'></div>}
                <div className='col'>
                    <Home Toggle={Toggle} />
                </div>
            </div>
        </div>
        )
}
export default Index