exports.getFavoriteAsteroids = () => {
  const promise = new Promise((resolve, reject) => {

    const query = 'SELECT * FROM favorites WHERE deleted_at IS NULL;';

    global.pool.query(query, [], (err, result) => {
      if (err) {
        return reject(new Error(`exports error ${err}`));
      }
      return resolve(result);
    });
  });

  return promise;
};

exports.saveFavoriteAsteroid =  (req) => {
  const { name, absolute_magnitude_h, nasa_jpl_url, } = req.body;
  const promise = new Promise((resolve, reject) => {

    const query = 'INSERT INTO favorites (name, absolute_magnitude_h, nasa_jpl_url, created_at) VALUES(?, ?, ?, NOW())';

    global.pool.query(query, [name, absolute_magnitude_h, nasa_jpl_url], (err, result) => {
      if (err) {
        return reject(new Error(`exports error ${err}`));
      }
      return resolve(result);
    });
  });

  return promise;
};