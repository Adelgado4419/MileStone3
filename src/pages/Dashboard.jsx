// import TinderCard from "react-tinder-card"
import { useState, useEffect } from "react"
import ChatContainer from '../components/chatContainer'
import Settings from "../components/settings"
import fanterlogo from "../images/fanterlogo.png";

import '../css/settings.css'

const Dashboard = () =>{
  const [Users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4005/api')
      const data = await response.json()
      setUsers(data)
    }
    fetchData()
  }, [])

  return (
    <div className="dashboard">
      <div className="settingsBar"><Settings></Settings></div>
      <ChatContainer/>
      <div className="swipe-container">
        <div className="card-container">
           
      <div className="card-container">
      {Users.map((user,index) => {
           return (
              <div className='swipe'>
              <div className='card'>
              <div className="title"> 
                  <h3>{user.username}</h3>
                </div>
                <div className="imgBx"> 
                  <img src={fanterlogo}></img>
                </div>
                <div className="content"> 
                  <div className="details">
                  <h3>{user.email}</h3>
                  <h3>{user.dateOfBirth}</h3>
                  <h3>{user.first_name}</h3>
                  <h3>{user.last_name}</h3>
                  </div>
                </div>
              </div>
          </div>
          )
        }, 
          )
        } 
        </div>
      </div>
    </div>
  </div>
  )}
export default Dashboard