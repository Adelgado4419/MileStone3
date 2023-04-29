import * as Ficons from'react-icons/fi'
import * as Aicons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const sidebarData = [
    
]

function Settings(){
    const [Sidebar, setSidebar] = useState(false)
    
    const showSidebar = () => setSidebar(!Sidebar)
    return(
        <div>
            <Link to='#' className='menu-bars'>
            <Ficons.FiSettings onClick={showSidebar}/>
            </Link>
     
        <nav className={sidebar ? 'setting-menu active' : 'settings-menu'}>
            <ul className='settings-menu-items'>
                <li className='settings-bar-toggle'>
                    <Link to='#' className='menu-bars'>
                        <Aicons.AiOutlineCloseCircle />
                    </Link>
                </li>
            </ul>
        </nav>
        </div>
    )
}

export default Settings