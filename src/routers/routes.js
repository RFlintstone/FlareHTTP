require('dotenv').config();                                         // Config
const express = require('express');
const router = express.Router();
const API_PATH = '/api/v1'

// Router Settings
viewEnabled = (process.env.VIEW_ENABLED === 'true') || false
apiEnabled = (process.env.API_ENABLED === 'true') || false

// Get Controllers so we can call them using a router
const HOME_VIEW_CONTROLLER = require('../controllers/views/homeController');
const VIEW_NOT_FOUND_CONTROLLER = require('../controllers/view404Controller');

const PING_API_CONTROLLER = require('../controllers/api/pingController');
const FETCH_API_CONTROLLER = require('../controllers/api/fetchController');
const INSERT_API_CONTROLLER = require('../controllers/api/insertController');
const API_NOT_FOUND_CONTROLLER = require('../controllers/api404Controller');
const NOT_ENABLED_CONTROLLER = require('../controllers/notEnabledController');

// Set new router with custom route and controller
// Router documentation: https://expressjs.com/en/guide/routing.html
// **Views**
if (viewEnabled) {
    router.get('/', HOME_VIEW_CONTROLLER);
}
// **API**
if (apiEnabled) {
    router.get(API_PATH + '/ping', PING_API_CONTROLLER)
    router.get(API_PATH + '/fetch/:id?/:fone?/:ftwo?', FETCH_API_CONTROLLER)
    router.post(API_PATH + '/insert', INSERT_API_CONTROLLER)
}
// **Error**

if (apiEnabled) router.get(API_PATH + '/*', API_NOT_FOUND_CONTROLLER);
if (viewEnabled) router.get('*', VIEW_NOT_FOUND_CONTROLLER);
router.get('*', NOT_ENABLED_CONTROLLER);

module.exports = router;