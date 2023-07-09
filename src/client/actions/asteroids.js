export function getAsteroids(dispatch, from, to) {
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

export function setAsteroidFavorite(asteroid) {
  const url = import.meta.env.VITE_SERVER_API_URL || '';

  fetch(`${url}/asteroids/favorite`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(asteroid)
  })
  .catch((e) => {
    throw new Error(e);
  });
}

export function getFavoriteAsteroids(dispatch) {
  const url = import.meta.env.VITE_SERVER_API_URL || '';

  fetch(`${url}/asteroids/favorites`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    .then(resp => resp.json())
    .then((data) => {
        dispatch({ type: "GET_FAVORITES", payload: data });
    })
    .catch((e) => {
      throw new Error(e);
    });
}