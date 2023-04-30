import * as Ficons from'react-icons/fi'
import * as Aicons from 'react-icons/ai'

export const sidebarData = [
    {
        title: 'Profile settings',
        path: '/Edit',
        icon: <Aicons.AiOutlineEdit />,
        CName: 'settings-text'
    },
    {
        title: 'Security settings',
        path: '/Edit/Security',
        icon: <Aicons.AiOutlineSecurityScan />,
        CName: 'settings-text'
    },
    {
        title: 'Logout',
        path: '/',
        icon: <Aicons.AiOutlineHome />,
        CName: 'settings-text'
    },
]