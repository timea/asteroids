const express = require('express');
const cors = require('cors');
const path = require('path');
const _ = require('lodash')

/**
 * -------------- GENERAL SETUP ----------------
 */

// Create the Express application
var app = express();

// Gives us access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax
// require('dotenv').config();
const config = require('./config/config.json')
const defaultConfig = config.development

const environment = process.env.NODE_ENV || 'development'
const environmentConfig = config[environment]
const finalConfig = _.merge(defaultConfig, environmentConfig)

global.config = finalConfig

const db = require('./config/db.cjs');
db.connect();

// Instead of using body-parser middleware, use the new Express implementation of the same thing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Where Angular builds to - In the ./angular/angular.json file, you will find this configuration
// at the property: projects.angular.architect.build.options.outputPath
// When you run `ng build`, the output will go to the ./public directory
app.use(express.static(path.join(__dirname, 'public')));



/**
 * -------------- ROUTES ----------------
 */



app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './../../dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});


/**
 * -------------- SERVER ----------------
 */

// Server listens on http://localhost:8080
app.listen(global.config.SERVER_PORT || 8080, () => {
  console.log(`Listening on port ${global.config.SERVER_PORT || 8080}!`);
  app.emit('app_started');
});