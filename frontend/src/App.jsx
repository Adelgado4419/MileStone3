import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreateAccount from './pages/CreateAccount'
import Dashboard from './pages/Dashboard'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path= "/" element={<Home/>}/>
                <Route path= "/dashboard" element={<Dashboard/>}/>
                <Route path= "/signup" element={<CreateAccount/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;