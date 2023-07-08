export default function getAsteroids(from, to) {
  const url = import.meta.env.VITE_SERVER_API_URL || '';

  fetch(`${url}/asteroids/${from}/${to}`,
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  .then(resp => resp.json())
  .catch(e => new Error(e))
}