import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import SignUpForm from './pages/signupForm'
import LoginForm from './pages/loginForm'
import CurrentUserProvider from './contexts/CurrentUser'

const App = () => {
    return (
        <CurrentUserProvider>
        <BrowserRouter>
            <Routes>
                <Route path= "/" element={<Home/>}/>
                <Route path= "/dashboard/:username" element={<Dashboard/>}/>
                <Route path= "/signup" element={<SignUpForm/>}/>
                <Route path= "/Login" element={<LoginForm/>}/>
            </Routes>
        </BrowserRouter>
        </CurrentUserProvider>
    )
}

export default App;