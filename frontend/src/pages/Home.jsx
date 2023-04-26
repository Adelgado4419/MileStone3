import { Link } from 'react-router-dom'
import Nav from "../components/nav"
import React, {useState} from "react"
import LoginForm from "./loginForm"
import "../index.css"

export default function Home() {

  const [isShowLogin, setIsShowLogin] = useState(false)

  const handleLoginClick = () => {
      setIsShowLogin((isShowLogin) => !isShowLogin)
  }
  return (
    <div className='App'>
        <Nav handleLoginClick={handleLoginClick}/>
        <LoginForm isShowLogin={isShowLogin} />
        <p>
          Fantasy Tinder
        </p>
      <Link to='/signup'>
      <button id='SignUpButton' type='button'>sign up </button>
      </Link>
    </div>
  );
}

