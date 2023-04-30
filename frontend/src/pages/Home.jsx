import { Link } from 'react-router-dom'
import Nav from "../components/nav"
import backdropv5 from '../assets/backdropv5.png'

function Home() {

  return (
    <div>
      
        <Nav/>
        <h1>
          "Fantasy Tinder"
        </h1>
        
        <img className="backdrop" src={backdropv5} alt="backdrop"/>

    </div>
  );
}

export default Home;

