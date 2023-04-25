import Nav from "../components/nav"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <Nav/>
        <p>
          Fantasy Tinder
        </p>
      <Link to='/signup'>
      <button id='SignUpButton' type='button'>sign up </button>
      </Link>
    </div>
  );
}

export default Home;
