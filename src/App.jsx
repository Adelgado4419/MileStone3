import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserContext } from './contexts/CurrentUser'
import { useState, useEffect} from 'react'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import SignUpForm from './pages/signupForm'
import LoginForm from './pages/loginForm'
import ProfileSettings from './pages/profile_settings'
import SecuritySettings from './pages/Security_settings'

const App = () => {
    const [currentUser, setCurrentUser] = useState(null)
    
    // useEffect(() => {
    //     const getLoggedInUser = async () => {
    //     const token = localStorage.getItem('token')
    //     if (token) {
    //         const response = await fetch('http://localhost:4005/auth/profile', {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         },
    //         })
    //         const user = await response.json()
    //         setCurrentUser(user)
    //     }
    //     }
    //     getLoggedInUser()
    //   }, [])

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <BrowserRouter>
            <Routes>
                <Route path= "/" element={<Home/>}/>
                <Route path= "/dashboard/:username/" element={<Dashboard/>}/>
                <Route path= "/signup" element={<SignUpForm/>}/>
                <Route path= "/Login" element={<LoginForm/>}/>
                <Route path= "/Edit/:id" element={<ProfileSettings/>}/>
                <Route path= "/Edit/Security/:id" element={<SecuritySettings/>}/>
            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App;