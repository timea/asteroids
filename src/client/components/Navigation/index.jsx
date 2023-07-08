import { Link } from 'react-router-dom';
import './style.scss';

const Navigation = () => {

  return (
    <nav className="nav">
      <div className="nav-items">
        <Link to={`/`}>
          Home
        </Link>
        <Link to={`/favorites`}>
          Favorites
        </Link>
      </div>
    </nav>
  )
}

export default Navigation;