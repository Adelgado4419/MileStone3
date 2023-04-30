import * as Ficons from'react-icons/fi'
import * as Aicons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { sidebarData } from './settings_data'
import { IconContext } from 'react-icons'

function Settings(){
 
    const [Sidebar, setSidebar] = useState(false)
    
    const showSidebar = () => setSidebar(!Sidebar)
    return(
        <div className="menu">
            <IconContext.Provider value={{color: '#fff'}}>
            <Link to='#' className='menu__bars'>
            <Ficons.FiSettings onClick={showSidebar}/>
            </Link>
     
        <div className={Sidebar ? 'setting-menu-active' : 'settings-menu'}>
            <ul className='settings-menu-items'>
                <li className='settings-bar-toggle'>
                    <Link to='#' className='menu-bars'>
                        <Aicons.AiOutlineCloseCircle onClick={showSidebar} />
                    </Link>
                </li>
                {sidebarData.map((item, index) => {
                    return(
                        <li key={index} className={item.CName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
        </IconContext.Provider>
        </div>
    )
}

export default Settings