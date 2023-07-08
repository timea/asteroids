const express = require('express');
const asteroids = require('./asteroidsController.cjs');

const router = express.Router();

router.get('/api/asteroids/:from/:to', asteroids.getAsteroids);

module.exports = router;