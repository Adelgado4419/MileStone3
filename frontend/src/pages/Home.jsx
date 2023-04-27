
import Nav from "../components/nav"
import backdropv4 from '../images/canvaPhotos/backdropv4.png'

function Home() {

  return (
    <div>
        <Nav/>
        <h1>
          "Fantasy Tinder"
        </h1>

        <img className="backdrop" src={backdropv4} alt="backdrop"/>

    </div>
  );
}

export default Home;
