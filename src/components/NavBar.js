import { FaArrowAltCircleLeft, FaMicrophone } from 'react-icons/fa';
import { SlSettings } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import MealList from '../containers/MealList';
import '../styles/NavBar.css';
import '../styles/MealList.css';

const NavBar = () => (
  <nav data-testid="nav" className="nav">
    <div>
    <Link className="back" to="/"> <FaArrowAltCircleLeft className="icons" /> </Link>
      <Link className="heading" to="/" onClick={() => MealList()}>
        <h1>Home</h1>
      </Link>
    </div>
    <header>
      <Link className="heading" to="/" onClick={() => MealList()}>
        <h1>Yummy Kitchen</h1>
      </Link>
    </header>
    <div>
      <Link className="icons1" to="/">
      <FaMicrophone className="icons1" />
      <SlSettings className="icons1" />
      </Link>
    </div>
  </nav>
);

export default NavBar;

