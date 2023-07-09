import { useContext, useEffect } from "react";
import { Context } from '../../store/index';
import getAsteroids from "../../actions/asteroids";
import Asteroid from "../Asteroid";

import './style.scss';


const AsteroidList = () => {
  const [state, dispatch] = useContext(Context);

  const dates = Object.keys(state.asteroidsWithDates);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  console.log('dates', dates);
  useEffect(() => {
    getAsteroids(dispatch);
  }, [])
  useEffect(() => {}, [state.asteroidsWithDates]) 

  return (
    <div>
      {state.asteroidsWithDates && <div>
        {dates.map((date) => {
          return (
            <div key={date}>
              <h1 className="date">{new Date(date).toLocaleDateString(undefined, options)}</h1>
              <div className="list-asteroids">
                {state.asteroidsWithDates[date].map((ast) => <Asteroid {...ast} key={ast.id} />)}
              </div>
            </div>
          ) 
        })}
      </div>}
  </div>
  )
}

export default AsteroidList;