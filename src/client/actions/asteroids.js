export default function getAsteroids(dispatch, from, to) {
  const url = import.meta.env.VITE_SERVER_API_URL || '';
  const today = new Date().toISOString().split("T");

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
      dispatch({ type: "GET_ASTEROIDS_WITH_DATES", payload: data.near_earth_objects });    
  })
  .catch(e => new Error(e))
}