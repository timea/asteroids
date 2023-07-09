import { useContext } from "react";
import AsteroidList from "../components/AsteroidList";
import { Context } from "../store";


const Home = () => {
  const [state, dispatch] = useContext(Context);

  return (
    <div className="home pages">
      <AsteroidList />
    </div>
  )
}

export default Home;