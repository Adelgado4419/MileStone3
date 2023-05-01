import { Link } from 'react-router-dom'
import Nav from "../components/nav"
import backdropv5 from '../assets/backdropv5.png'

function Home() {

  return (
    <div>
      
        <Nav/>
        
        <img className="backdrop" src={backdropv5} alt="backdrop"/>

    </div>
  );
}

export default Home;