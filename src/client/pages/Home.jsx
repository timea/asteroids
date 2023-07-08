import getAsteroids from "../actions/asteroids";


const Home = () => {
  return (
    <div className="home">
      <div>This is Home</div>
      <button onClick={() => getAsteroids()}>Call the Asteroid DB</button>
    </div>
  )
}

export default Home;