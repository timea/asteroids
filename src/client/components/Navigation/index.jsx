import { Link } from 'react-router-dom';
import './style.scss';
import { useState, useContext } from 'react';
import { Context } from '../../store';

const Navigation = () => {
  const [state, dispatch] = useContext(Context);

  return (
    <nav className="nav">
      <div className="nav-items">
        <Link to={`/`}>
          <div className="home-meteorites">
            <img src="./meteorite.png" />
            Home
          </div>
        </Link>
        <Link to={`/favorites`}>
          <div className="home-meteorites">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 mr-4 icon-heart"><circle cx="12" cy="12" r="10" class="primary"></circle><path class="secondary" d="M12.88 8.88a3 3 0 1 1 4.24 4.24l-4.41 4.42a1 1 0 0 1-1.42 0l-4.41-4.42a3 3 0 1 1 4.24-4.24l.88.88.88-.88z"></path></svg>
            </span>
            Favorites
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navigation;