import './style.scss';

const Asteroid = ({id, name}) => {
  return <div className="card-asteroid">
    <img src="./meteorite.png" className="logo" />
    <h2>Asteroid {name}</h2>

  </div>
}

export default Asteroid;