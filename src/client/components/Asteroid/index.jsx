import { useContext, useState } from 'react';
import './style.scss';
import { Context } from '../../store';
import { setAsteroidFavorite } from '../../actions/asteroids';

const Asteroid = ({ id, name, absolute_magnitude_h, nasa_jpl_url }) => {
  const [state, dispatch] = useContext(Context);
  const [showDetails, setShowDetails] = useState(false);

  return <div className="card-asteroid">
    {showDetails && <div onClick={() => setShowDetails(false)}>
      <h2>Asteroid {name}</h2>
      <div>Absolute magnitude: {absolute_magnitude_h}</div>
      <div><a href={nasa_jpl_url} target='blank' rel="noopener noreferrer">See in orbit</a></div>
      <div className="margin-vertical" onClick={() => setAsteroidFavorite({ id, name, absolute_magnitude_h, nasa_jpl_url })}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 mr-4 icon-heart"><circle cx="12" cy="12" r="10" class="primary"></circle><path class="secondary" d="M12.88 8.88a3 3 0 1 1 4.24 4.24l-4.41 4.42a1 1 0 0 1-1.42 0l-4.41-4.42a3 3 0 1 1 4.24-4.24l.88.88.88-.88z"></path></svg></div>
    </div>}
    {!showDetails && <div onClick={() => setShowDetails(true)}>
      <img src="./meteorite.png" className="logo" />
      <h2>Asteroid {name}</h2>
      <div className="margin-vertical" onClick={() => setAsteroidFavorite({ id, name, absolute_magnitude_h, nasa_jpl_url })}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 mr-4 icon-heart"><circle cx="12" cy="12" r="10" class="primary"></circle><path class="secondary" d="M12.88 8.88a3 3 0 1 1 4.24 4.24l-4.41 4.42a1 1 0 0 1-1.42 0l-4.41-4.42a3 3 0 1 1 4.24-4.24l.88.88.88-.88z"></path></svg></div>
    </div>}
  </div>
}

export default Asteroid;