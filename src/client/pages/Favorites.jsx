import { useContext, useEffect } from "react";
import { Context } from "../store";
import { getFavoriteAsteroids } from "../actions/asteroids";
import Asteroid from "../components/Asteroid";

const Favorites = () => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    getFavoriteAsteroids(dispatch);
  }, [])
  return (
    <div>
      <div className="list-asteroids">
        {state.favorites.map((ast) => <Asteroid {...ast} key={ast.id} />)}
      </div>
    </div>
  );
}

export default Favorites;