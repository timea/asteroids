const express = require('express');
const asteroids = require('./asteroidsController.cjs');

const router = express.Router();

router.post('/api/asteroids/favorite', asteroids.saveFavoriteAsteroid);
router.get('/api/asteroids/favorites', asteroids.getFavoriteAsteroids);
router.get('/api/asteroids/:from/:to', asteroids.getAsteroids);


module.exports = router;