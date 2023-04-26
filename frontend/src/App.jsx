import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import SignUpForm from './pages/signupForm'
import React from "react"


export default function App() {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route path= "/" element={<Home/>}/>
                <Route path= "/dashboard" element={<Dashboard/>}/>
                <Route path= "/signup" element={<SignUpForm/>}/>
            </Routes>
        </BrowserRouter>
    )
}



