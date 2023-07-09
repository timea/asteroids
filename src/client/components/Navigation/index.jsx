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