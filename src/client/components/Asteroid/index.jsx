import { useContext, useState } from 'react';
import './style.scss';
import { Context } from '../../store';

const Asteroid = ({ id, name, absolute_magnitude_h, nasa_jpl_url }) => {
  const [state, dispatch] = useContext(Context);
  const [showDetails, setShowDetails] = useState(false);

  return <div className="card-asteroid">
    {showDetails && <div onClick={() => setShowDetails(false)}>
      <h2>Asteroid {name}</h2>
      <div>Absolute magnitude: {absolute_magnitude_h}</div>
      <div><a href={nasa_jpl_url} target='blank' rel="noopener noreferrer">See in orbit</a></div>
      <div></div>
    </div>}
    {!showDetails && <div onClick={() => setShowDetails(true)}>
      <img src="./meteorite.png" className="logo" />
      <h2>Asteroid {name}</h2>
    </div>}
  </div>
}

export default Asteroid;