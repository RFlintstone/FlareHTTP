require('dotenv').config();                                         // Config
const express = require('express');                                 // Our HTTP(s) service
const nunjucks = require('express-nunjucks');                       // Connect express and nunjucks to each other
const routes = require('./src/routers/routes');                     // Our route file
const {Glob} = require("glob");                                     // Dynamically register routes
const path = require("path");                                       // Get the path of our root folder

// Set boot mode
const IS_DEV = process.env.NODE_ENV === 'development';
console.log('Development mode?:', IS_DEV);
console.log("Starting in " + process.env.NODE_ENV + " mode...")

// Initialize express
const APP = express();
const IP = process.env.EXPRESS_IP;
const PORT = process.env.EXPRESS_PORT || 8080;

// Configure express
APP.set('views', __dirname + '/src/views');                         // Set views folder to 'views' so we can load our webpages
APP.set('view engine', 'njk');                                      // Set view engine (e.g. 'nunjucks')
APP.use(express.static(path.join(__dirname + '/src/public')));     // Set the folder to wherever we will store our static content

// Configure nunjucks
nunjucks(APP, {
  watch: IS_DEV,                                                    // If true, the system will automatically update templates when they are changed on the filesystem.
  noCache: IS_DEV,                                                  // if true, the system will avoid using a cache and templates will be recompiled every single time.
  globals: {                                                        // Define global variables, so you can use them in your views
  }
});

// Turn on caching
const setCache = function (req, res, next) {
  const period = 60*5 // Cache life is 5 minutes
  if (req.method == 'GET') res.set('Cache-control', `public, max-age=${period}`);
  else res.set('Cache-control', `no-store`);
  next();
}
APP.use(setCache);

// Register all controllers dynamically
const CONTROLLERS = new Glob('**/controllers/**/**.js', { withFileTypes: true })
CONTROLLERS.stream().on('data', path => {
  let CONTROLLER = require(path.fullpath());
  APP.use('/', CONTROLLER);
  console.log('Using', CONTROLLER);
})

// Handle page requests
APP.use('/', routes);

// Start server
APP.listen(PORT, () => console.log(`Server listening on http://${IP}:${PORT}!`));