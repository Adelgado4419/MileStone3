import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import SignUpForm from './pages/signupForm'
import LoginForm from './pages/loginForm'
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path= "/" element={<Home/>}/>
                <Route path= "/dashboard" element={<Dashboard/>}/>
                <Route path= "/signup" element={<SignUpForm/>}/>
                <Route path= "/Login" element={<LoginForm/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;