export default function getAsteroids(dispatch, from, to) {
  const url = import.meta.env.VITE_SERVER_API_URL || '';
  const today = new Date().toISOString().split("T");

  // fetch(`${url}/asteroids/mama/NaN`,
  fetch(`${url}/asteroids/${from ? from : today[0]}/${to ? to : today[0]}`,
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  .then(resp => resp.json())
  .then((data) => {
    if (!!data.near_earth_objects) {
      dispatch({ type: "GET_ASTEROIDS_WITH_DATES", payload: data.near_earth_objects });    
    } else {
      return Promise.reject(data)
    }
  })
  .catch(e => {
    if (e.data) {
      dispatch({ type: "API_ERROR", payload: { asteroidsWithDates: e.data.near_earth_objects, errorMessage: e.message } })
    } else {
      dispatch({ type: "API_ERROR", payload: { asteroidsWithDates: {}, errorMessage: "something is wrong" } })
    }
  })
}