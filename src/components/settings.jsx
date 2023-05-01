import * as Ficons from'react-icons/fi'
import * as Aicons from 'react-icons/ai'
import { useNavigate, Link, useParams} from 'react-router-dom'
import { useState, useContext} from 'react'
import '../css/settings.css'
import { IconContext } from 'react-icons'
import { UserContext } from '../contexts/CurrentUser'
import fanterlogo from "../images/fanterlogo.png";


function Settings(){
    const {currentUser, setCurrentUser} = useContext(UserContext)
    const [Sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!Sidebar)
    return(
        <div>
            <img className="fanterlogo" src={fanterlogo} alt="top-left-icon"/>
            <IconContext.Provider value={{color: '#fff'}}>
            <Link to='#' className='menu-bars'>
            <Ficons.FiSettings onClick={showSidebar}/>
            </Link>
     
        <div className={Sidebar ? 'setting-menu-active' : 'settings-menu'}>
            <ul className='settings-menu-items'>
                        <li className='settings-bar-toggle'>
                            <Link to='#' className='menu-bars'>
                            <Aicons.AiOutlineCloseCircle onClick={showSidebar} />
                            </Link>
                        </li>
                        <li key={1} className={'settings-text'}>
                            <Link to={`/Edit/${currentUser.id}`}>
                            <Aicons.AiOutlineEdit />
                            <span>Profile settings</span>
                            </Link>
                        </li>
                        <li key={2} className={'settings-text'}>
                            <Link to={'/Fake'}>
                            <Aicons.AiOutlineSecurityScan />
                            <span>Fake Work</span>
                            </Link>
                        </li>
                        <li key={3} className={'settings-text'}>
                            <Link to={`/`}>
                            <Aicons.AiOutlineHome />
                            <span>Logout</span>
                            </Link>
                        </li>
            </ul>
        </div>
        </IconContext.Provider>
        </div>
    )
}

export default Settings