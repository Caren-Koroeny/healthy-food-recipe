import { FaArrowAltCircleLeft, FaMicrophone } from 'react-icons/fa';
import { SlSettings } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import MealList from '../containers/MealList';
import '../styles/NavBar.css';
import '../styles/MealList.css';

const NavBar = () => (
  <nav data-testid="nav" className="nav">
  <Link className="back" to="/"> <FaArrowAltCircleLeft className="icons" /> </Link>
    <div className="home-kitchen">
    <Link className="heading" to="/" onClick={() => MealList()}>
        <h2>Home</h2>
      </Link>
      <Link className="heading" to="/" onClick={() => MealList()}>
        <h2>Food</h2>
      </Link>
    </div>
    <div>
    <Link className="icons1" to="/">
    <FaMicrophone className="icons1" />
    <SlSettings className="icons1" />
    </Link>
  </div>
  </nav>
);

export default NavBar;

