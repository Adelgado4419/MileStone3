import TinderCard from "react-tinder-card"
import { useState } from "react"
import ChatContainer from '../components/chatContainer'
import Settings from "../components/settings"

import '../css/settings.css'

const Dashboard = () =>{
  const characters = [
    {
    name: 'Bob',
    url:"https://images.unsplash.com/photo-1682616323196-8a4df1e30151?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      name: 'Bobbie',
      url:"https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: 'Bobby',
    url:"https://images.unsplash.com/photo-1467106015942-a0ea2960655a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"
    
    },
    {
      name: 'Bobb',
      url:"https://images.unsplash.com/photo-1608889345685-48bb8ef605e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
      },
      {
        name: 'Bobbiy',
        url:"https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      },
      {name: 'Bobbee',
      url:"https://images.unsplash.com/photo-1601255596523-1ded45951ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      },
      ]
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    
    <div className="dashboard">
    
      <div className="settingsBar">
                <Settings></Settings>
      </div>
      <ChatContainer/>
    
      <div className="swipe-container">
      <div className="card-container">
      

      {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        )}
        <div className="swipe-info">
          {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
          
        </div>
    


        </div>
      </div>
    </div>
  )
}

export default Dashboard
