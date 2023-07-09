const data = require('./asteroidCache.cjs');
const asteroidsDAO = require('./asteroidsDAO.cjs');


exports.getAsteroids = async (req, res) => {
  const { from, to } = req.params;
  if ((new Date(to) - new Date(from)) / (1000 * 3600 * 24) > 7) {
    res.status(500).send({ message: "Maximum range is 7 days, we are sending you some sample data", data: data.asteroids });
  } else {
    fetch(`${global.config.NASA_API}?start_date=${from}&end_date=${to}&api_key=${global.config.NASA_KEY}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json'
      }
    })
      .then(resp => resp.json())
      .then((data) => {
        if (data.near_earth_objects) {
          res.send(data).status(200);
        } else {
          return Promise.reject(data.error);
        }
      })
      .catch(e => res.status(500).send({ message: `${e ? e.message : 'Something is wrong so'} we are sending you some sample data`, data: data.asteroids }));
  }
}
exports.getFavoriteAsteroids = async (req, res) => {
  asteroidsDAO.getFavoriteAsteroids()
    .then(result => res.status(200).send(result))
    .catch((err) => {
      res.status(500).send(`getFavoriteAsteroids error ${err}`);
    });
}

exports.saveFavoriteAsteroid = async (req, res) => {
  asteroidsDAO.saveFavoriteAsteroid(req)
    .then(result => res.status(200).send(result))
    .catch((err) => {
      res.status(500).send(`saveFavoriteAsteroid error ${err}`);
    });
}