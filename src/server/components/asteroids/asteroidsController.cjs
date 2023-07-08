const data = require('./asteroidCache.cjs');

exports.getAsteroids = async (req, res) => {
  // call the API
  // if down, return the a preset example json
  res.send(data.asteroids).status(200);
}