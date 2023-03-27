import { FaArrowAltCircleLeft, FaMicrophone } from 'react-icons/fa';
import { SlSettings } from 'react-icons/sl';
import { Link, useNavigate } from 'react-router-dom';
// import MealList from '../containers/MealList';
import '../styles/NavBar.css';
import '../styles/MealList.css';

const NavBar = () => {
  const history = useNavigate();
  const handleBackClick = () => {
    history(-1);
  };

  return (
    <nav data-testid="nav" className="nav">
      <Link className="back" to="/" onClick={handleBackClick}>
        {' '}
        <FaArrowAltCircleLeft className="icons" />
        {' '}
      </Link>
      <div className="home-kitchen">
        <Link className="heading" to="/">
          <h2>Home</h2>
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
};

export default NavBar;
