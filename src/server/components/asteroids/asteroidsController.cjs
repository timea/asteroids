const data = require('./asteroidCache.cjs');

exports.getAsteroids = async (req, res) => {
  // call the API
  // if down, return the a preset example json
  const { from, to } = req.params;
  res.send(data.asteroids).status(200);
}